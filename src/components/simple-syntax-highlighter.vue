<template>
  <div
    class="ssh-pre"
    :class="{ 'ssh-pre--dark': dark }"
    :data-type="language"
    :data-label="label || null">
    <button v-if="copyButton" class="ssh-pre__copy" @click="copyCode">
      <slot name="copy-button">Copy</slot>
    </button>
    <pre ref="code" class="ssh-pre__content" v-html="content"></pre>
  </div>
</template>

<script>
/**
 * /!\ WARNINGS
 * ____________
 *
 * #1. JAVASCRIPT DOES NOT SUPPORT LOOKBEHIND.
 *
 * #2. DOTALL FLAG NOT SUPPORTED ON IE:
 *     Works on Edge, so removing workaround. For reference the workaround was: `[\s\s]` instead of `.`
 *
 * #3. BACKREFERENCES:
 *     since all the regexes are aggregated in 1 big regex, backreferences numbers should be increased by
 *     the number of capturing groups of the prior regexes of the same language. (e.g. \4 instead of \1)
 */

const regexBasics = {
  quote: /("(?:\\"|[^"])*")|('(?:\\'|[^'])*')/, // Match simple and double quotes by pair.
  comment: /(\/\/.*?(?:\n|$)|\/\*.*?\*\/)/, // Comments blocks (/* ... */) or trailing comments (// ...).
  htmlTag: /(<([^>])*>)/,
  htmlentity: /(&amp;[a-zA-Z0-9#]+;)/,
  punctuation: /(!==?|(?:[[\](){}.:;,+\-?=!]|&lt;|&gt;)+|&&|\|\|)/, // Punctuation not in html tag.
  number: /(-?(?:\.\d+|\d+(?:\.\d+)?))/,
  boolean: /\b(true|false)\b/
}

// The html tags names, attribute and inner special chars are treated inside the
// htmlTag regex above because javascript does not support lookbehind.
// In this dictionary the order of regexs is important as it is all concatenated later in the process.
const dictionary = {
  shell: {
    quote: regexBasics.quote,
    comment: /(#.*?)(?:\n|$)/,
    keyword: /(?:^|\b)(npm|yarn|install|run)(?:\b|$)/,
    param: /( --(?:save|save-dev))(?:\s|$)/
  },
  xml: {
    doctype: /(&lt;\!DOCTYPE.*?&gt;)/,
    quote: regexBasics.quote,
    comment: /(&lt;!--.*?--&gt;)/,
    htmlentity: regexBasics.htmlentity,
    // A tag captures everything between < and > including the chevrons.
    tag: /(&lt;\/?)([a-zA-Z\-:]+)(.*?)(\/?&gt;)/
  },
  html: {
    doctype: /(DOCTYPE)/,
    quote: regexBasics.quote,
    comment: /(&lt;!--.*?--&gt;)/,
    htmlentity: regexBasics.htmlentity,
    // A tag captures everything between < and > including the chevrons.
    tag: /(&lt;\/?)([a-z]\w*)(.*?)(\/?&gt;)/
  },
  'html-vue': {
    doctype: /(DOCTYPE)/,
    quote: regexBasics.quote,
    comment: /(&lt;!--.*?--&gt;)/,
    htmlentity: regexBasics.htmlentity,
    // A tag captures everything between < and > including the chevrons.
    tag: /(&lt;\/?)([a-zA-Z][\w\d-]*)((?:.|\s)*?)(\/?&gt;)/
  },
  // @todo: support Pug inline tags like `#[em italic]`.
  pug: {
    // Text match for this syntax:
    // tag
    //   | text
    text: /((?:^|\n)[ \t]*|^)\|([ \t]*)([^\n]+(?=\s*(?:\n|$)))/,
    // Text match for this syntax:
    // tag.
    //   text
    // Ses warning #3 (backreferences).
    text2: /([ \t]*)([.#\-\w\d]+(?:\([^)]*\))*)\.\n((?:\n+(?=\4[ \t]+)|(?=\4[ \t]+).+?(?:\n|$)*?)*)(?=\s*(?:\n|$))/,
    // text2: /^([ \t]*)([.#\-\w\d]+(?:\([^)]*\))*)\.\n((?:(?:^\4[ \t]+)(?:[^\n]*)\n)*)/,
    quote: regexBasics.quote,
    // Ses warning #3 (backreferences).
    comment: /(^|\n)([ \t]*|^)(\/\/-[ \t]*(?:[^\n]*?(?:\n\10[ \t]+[^\n]*)+|[^\n]+(?=\n|$)))/,
    // A tag captures everything like `tag`, `.tag(attrs)`, `#tag(attrs)`, `div.tag(attrs)`.
    // 4 groups: 1. tag, 2. classes and id, 3. attributes, 4. inner html
    // tag: /(?:^|\n)([ \t]+|^)([a-zA-Z][\w\d-]*|)([.#][a-zA-Z][-.\w\d]*|)\b(?:\((.*?)\))?(\.?)([ \t]*)([^\n]+)?(?=\n|$)/,
    tag: /([a-zA-Z][\w\d-]*|)([.#][a-zA-Z][-.\w\d]*|)\b(?:\((.*?)\))?(\.?)([ \t]*)([^\n]+)?(?=\n|$)/,
    punctuation: /(!==?|(?:[#[\]().,+\-?=!|]|&lt;|&gt;)+)/
  },
  css: {
    quote: regexBasics.quote,
    comment: /(\/\*.*?\*\/)/,
    pseudo: /(:(?:hover|active|focus|visited|not|before|after|(?:first|last|nth)-child))/,
    'selector keyword vendor': /(@-(?:moz|o|webkit|ms)-(?=keyframes\s))/,
    'selector keyword': /((?:@(?:import|media|font-face|keyframes)|screen|print|and)(?=[\s({])|keyframes|\s(?:ul|ol|li|table|div|pre|p|a|img|br|hr|h[1-6]|em|strong|span|html|body|iframe|video|audio|input|button|form|label|fieldset|small|abbr|i|dd|dt)\b)/,
    variable: /(--[a-zA-Z0-9\-]+)/, // Any part before '{'.
    selector: /((?:[.#-\w*+ >:,[\]="~\n]|&gt;)+)(?=\s*\{)/, // Any part before '{'.
    'attribute keyword vendor': /(-(?:moz|o|webkit|ms)-(?=transform|transition|user-select|tap-highlight-color|animation|background-size|box-shadow))/,
    'attribute keyword': /\b(content|float|display|position|top|left|right|bottom|(?:(?:max|min)-)?width|(?:(?:max|min|line)-)?height|font(?:-(?:family|style|size|weight|variant|stretch))?|vertical-align|color|opacity|visibility|z-index|pointer-events|user-select|transform(?:-(?:origin|style|delay|duration|property|timing-function))?|transition(?:-(?:delay|duration))?|animation(?:-(?:name|delay|duration|direction|fill-mode))?|backface-visibility|backdrop-filter|background(?:-(?:color|position|image|repeat|size|attachment|origin|clip|blend-mode))?|(?:padding|margin|border)(?:-(?:top|left|right|bottom))?|border(?:-(?:radius|color|width|style|spacing))|white-space|text-(?:align|transform|decoration|shadow|indent)|overflow(?:-(?:x|y))?|(?:letter|word)-spacing|word-break|box-(?:sizing|shadow)|stroke(?:-(?:width|opacity|dasharray|dashoffset|linecap|linejoin))?|fill|speak|outline|user-select|cursor|flex(?:-(?:direction|flow|grow|shrink|basis|wrap))?|(?:justify|align)-(?:content|self|items))(?=\s*:)/,
    'value keyword vendor': /(-(?:moz|o|webkit|ms)-(?=linear-gradient))/,
    'value keyword': /\b(inherit|initial|normal|none|unset|auto|inline(?:-(?:block|flex))?|block|flex|absolute|relative|static|fixed|sticky|hidden|visible|top|left|right|bottom|center|middle|baseline|solid|dotted|dashed|line-through|(?:over|under)line|wavy|double|(?:pre-|no)?wrap|pre|break-word|(?:upper|lower)case|capitalize|italic|bold|attr\(.*?\)|linear|ease(?:-in)?(?:-out)?|all|infinite|cubic-bezier|(?:translate|rotate)(?:[X-Z]|3d)?|skew[XY]?|scale|(?:no-)?repeat|repeat(?:-x|-y)|contain|cover|url|(?:repeating-)?(?:linear|radial)-gradient|inset|pointer|(?:flex-)?(?:start|end)|space-(?:between|evenly|around)|stretch|revert|row(?:-reverse)?|column(?:-reverse)?)(?=\s*[,;}(]|\s+[\da-z!])/,
    'value keyword important': /( ?!important)/,
    number: regexBasics.number,
    color: /(transparent|#(?:[\da-fA-F]{6}|[\da-fA-F]{3})|rgba?\([\d., ]*\))/,
    // punctuation: /([:,;{}@#()]+)/,// @todo Why can't use this one if text contains '<' or '>' ??
    htmlentity: /(&.*?;)/,
    punctuation: /([:,;{}@#()!]+|&lt;|&gt;)/,
    attribute: /([a-zA-Z-]+)(?=\s*:)/,
    unit: /(px|pt|cm|%|r?em|m?s|deg|vh|vw|vmin|vmax)(?=(?:\s*[;,{}})]|\s+[-\da-z#]))/
  },
  json: {
    quote: regexBasics.quote,
    comment: regexBasics.comment,
    number: regexBasics.number,
    boolean: regexBasics.boolean,
    punctuation: /([[\](){}:;,-]+)/ // Override default to simplify.
  },
  js: {
    quote: regexBasics.quote,
    comment: regexBasics.comment,
    number: /\b(\d+(?:\.\d+)?|null)\b/,
    boolean: regexBasics.boolean,
    this: /\b(this)(?=\W)/,
    keyword: /\b(new|getElementsBy(?:Tag|Class|)Name|getElementById|querySelector|querySelectorAll|arguments|if|else|do|return|case|default|(?:f|F)unction|typeof|instanceof|undefined|document|window|while|for|forEach|switch|in|break|continue|delete|length|var|let|const|export|import|as|require|from|Class|constructor|Number|Boolean|String|Array|Object|RegExp|Integer|Date|Promise|async|await|(?:clear|set)(?:Timeout|Interval)|parse(?:Int|Float)|Math(?=\.)|isNaN)(?=\W)/,
    punctuation: /(!==?|(?:[[\]!(){}:;,+\-%*/?=]|&lt;|&gt;)+|\.+(?![a-zA-Z])|&amp;&amp;|\|\|)/, // Override default since '.' can be part of js variable.
    variable: /(\.?[a-zA-Z_][\w\d]*)/,
    htmlentity: /(&.*?;)/,
    'external-var': /(\$|jQuery|JSON)(?=\W|$)/ // jQuery or $ or JSON.
  },
  php: {
    quote: regexBasics.quote,
    comment: regexBasics.comment,
    special: /(&lt;\?php|\?&gt;|__(?:DIR|FILE|LINE)__)/,
    punctuation: regexBasics.punctuation,
    number: regexBasics.number,
    boolean: regexBasics.boolean,
    variable: /(\$[\w\d_]+)/,
    keyword: /\b(define|echo|die|exit|print_r|var_dump|if|else|elseif|do|return|case|default|function|\$this|while|foreach|for|switch|in|break|continue|empty|isset|unset|parse_ini_file|session_(?:start|destroy|id)|header|json_(?:encode|decode)|error_log|(require|include)(:?_once)?|try|throw|new|Exception|catch|finally|preg_(?:match|replace)|list|strlen|substr|str_replace|array_(?:keys|values))(?=\W|$)/
  },
  sql: {
    quote: regexBasics.quote,
    comment: /((?:\-\-|#)\s.*?(?:\n|$)|\/\*.*?\*\/)/,
    punctuation: regexBasics.punctuation,
    number: /\b(\d+(?:\.\d+)?|null)\b/,
    boolean: regexBasics.boolean,
    keyword: /\b(\*|CREATE|DATABASE|TABLE|GRANT|ALL|PRIVILEGES|IDENTIFIED|FLUSH|ALTER|MODIFY|DROP|TRUNCATE|CONSTRAINT|ADD|(?:(?:PRIMARY|FOREIGN|UNIQUE) )?KEY|REFERENCES|AUTO_INCREMENT|COMMENT|DEFAULT|UNSIGNED|CHARSET|COLLATE|CHARACTER|ENGINE|SQL_MODE|USE|IF|NOT|NULL|EXISTS|SELECT|UPDATE|DELETE|INSERT(?: INTO)?|VALUES|SET|FROM|WHERE|(?:ORDER|GROUP) BY|LIMIT|(?:(?:LEFT|RIGHT|INNER|OUTER) |)JOIN|AS|ON|COUNT|CASE|TO|WHEN|BETWEEN|AND|OR|IN|LIKE|CONCAT|CURRENT_TIMESTAMP)(?=\W|$)/,
    'var-type': /\b((?:var)?char|(?:tiny|small|medium|big)?int|decimal|float|double|real|bit|boolean|date(?:time)?|time(?:stamp)?|year|(?:tiny|medium|long)?(?:text|blob)|enum)\b/
  }
}

// Once the tag is matched in above rules, split the tag into pieces and isolate attributes.
const attributesRegex = {
  xml: /(\s*)([a-zA-Z\d\-:]+)=("|')(.*?)\3/g,
  html: /(\s*)([a-zA-Z-]+)=("|')(.*?)\3/g,
  'html-vue': /(\s*)([@:#]?[a-zA-Z\d-]+)(?:(?:=("|')(.*?)\3)|)/g,
  pug: /(\s*|,)([@:#]?[a-zA-Z\d-]+)(?:(?:=("|')(.*?)\3)|)/g
}

// Only list the classes that need multiple captures.
// The numbers are defining the number of regex groups that are related to this match class,
// then splitted and replaced in the syntaxHighlightContent function.
const multiCapturesMapping = {
  shell: { quote: 2 },
  xml: { quote: 2, tag: 4 },
  html: { quote: 2, tag: 4 },
  'html-vue': { quote: 2, tag: 4 },
  pug: { text: 3, text2: 3, quote: 2, comment: 3, tag: 6 },
  json: { quote: 2 },
  php: { quote: 2 },
  sql: { quote: 2 },
  css: { quote: 2 },
  js: { quote: 2 }
}

export default {
  name: 'sshpre',
  props: {
    language: { type: String, default: '' },
    label: { type: [String, Boolean], default: false },
    reactive: { type: Boolean, default: false },
    dark: { type: Boolean, default: false },
    copyButton: { type: Boolean, default: false }
  },

  data: () => ({
    knownLanguages: Object.keys(dictionary),
    content: '',
    slotTexts: ''
  }),

  methods: {
    htmlize (string) {
      return string.replace(/&(lt|gt|amp);/g, (m0, m1) => ({ lt: '<', gt: '>', amp: '&' }[m1]))
    },

    unhtmlize (string) {
      return string.replace(/[<>]/g, m => ({ '<': '&lt;', '>': '&gt;' }[m]))
    },

    isColorDark (colorString) {
      let rgbColor, hexColor, rDark, gDark, bDark, alphaLow

      if ((rgbColor = colorString.match(/rgba?\((.*),\s*(.*),\s*(.*?)(?:,\s*([^)]*))\)/))) {
        rDark = parseInt(rgbColor[1]) <= 100
        gDark = parseInt(rgbColor[2]) <= 100
        bDark = parseInt(rgbColor[3]) <= 100
        alphaLow = parseFloat(rgbColor[4]) < 0.3
      } else if ((hexColor = colorString.match(/#([\da-f]{3}(?:[\da-f]{3})?)/))) {
        const has3chars = hexColor[1].length === 3
        rDark = parseInt(hexColor[1][0]) <= 9
        gDark = parseInt(hexColor[1][has3chars ? 1 : 2]) <= 9
        bDark = parseInt(hexColor[1][has3chars ? 2 : 4]) <= 9
      }

      // #00f blue is also a dark color...
      return ((rDark && gDark && bDark) || (rDark && gDark && !bDark) || (!rDark && gDark && bDark)) && !alphaLow
    },

    // Create a single regex pattern from concatenating the regex pieces of the selected language.
    // This regex pattern will be used all at once for the string replacement.
    createRegexPattern () {
      let pattern = ''
      const classMap = [] // Regex captures mapping for the current dictionary language.

      for (const Class in dictionary[this.language]) {
        const capturesCount = multiCapturesMapping[this.language][Class] || 1
        for (let i = 0; i < capturesCount; i++) classMap.push(Class)

        pattern += (pattern ? '|' : '') + dictionary[this.language][Class].source
      }

      return [pattern, classMap]
    },

    syntaxHighlightHtmlTag (matches) {
      // Converts every html attribute with syntax highlighting, e.g:
      // ` class="my-class"` => ` <span class="attribute">class</span><span class="punctuation">=</span><span class="quote">"my-class"</span>`,
      // ` checked` => ` <span class="attribute">checked</span><span class="punctuation">=</span><span class="quote">"my-class"</span>`.
      const renderAttributesList = (_, a, b, c, d) => (
        // `attribute-name`
        `${a}<span class="attribute">${b}</span>` +
        // `=`
        (d ? '<span class="punctuation">=</span>' : '') +
        // `"attribute value"`
        (d ? `<span class="quote">${c || ''}${d || ''}${c || ''}</span>` : '')
      )

      let attributesList = (matches[2] || '').replace(attributesRegex[this.language], renderAttributesList)

      if (this.language === 'pug') {
        const idAndClasses = (matches[1] || '')
          .replace(/#[a-z\d-]+/g, m => `<span class="id">${m}</span>`)
          .replace(/\.[a-z\d-]+/g, m => `<span class="class">${m}</span>`)
        if (attributesList) {
          attributesList = `<span class="punctuation">(</span>` +
                           attributesList +
                           `<span class="punctuation">)</span>`
        }

        return (
          // The tag-name + attributes list if any.
          `<span class="tag-name">${matches[0] || ''}</span>` +
          `${idAndClasses}${attributesList}` +
          (matches[3] ? '<span class="punctuation">.</span>' : '') +
          (matches[4] || '') +
          (matches[5] ? `<span class="text">${matches[5]}</span>` : '')
        )
      }

      // Considering these 3 possible captures of html tags:
      // `<tag-name attrs>` or `<tag-name attrs />` or `</tag-name>`.
      return (
        // The tag opening: `</` or `<`.
        `<span class="punctuation">${matches[0]}</span>` +
        // The tag-name + attributes list if any.
        `<span class="tag-name">${matches[1]}</span>` + attributesList +
        // The tag end `>` or `/>`.
        `<span class="punctuation">${matches[3]}</span>`
      )
    },

    syntaxHighlightContent (string) {
      // Only process the string if the language is supported.
      if (!this.knownLanguages.includes(this.language)) return string

      const [regexPattern, classMap] = this.createRegexPattern()

      return this.unhtmlize(string).replace(new RegExp(regexPattern, 'gs'), (m, ...matches) => {
        matches = matches.slice(0, matches.length - 2) // Remove 2 last args (offset & string source).
        let Class
        const isPug = this.language === 'pug'

        // Get the first not undefined match from the array of matches and associate with the correct
        // capture class to perform a specific action if there is.
        let match = matches.find((m, i) => m && (Class = classMap[i]) && m)

        if (Class === 'quote') match = this.unhtmlize(match)
        else if (Class === 'comment') {
          if (isPug) {
            const [carretReturn, whitespaces, comment] = matches.slice(classMap.indexOf('comment'))
            match = `${carretReturn}${whitespaces}${this.unhtmlize(comment)}`
          }
          else match = this.unhtmlize(match)
        }
        else if (Class === 'text' && isPug) {
          return `${matches[0]}<span class="punctuation">|</span>${matches[1]}<span class="text">${matches[2]}</span>`
        }
        else if (Class === 'text2' && isPug) {
          const [, , , tabs, tagString, text] = matches
          const tag = this.syntaxHighlightContent(tagString)
          return `${tabs}${tag}<span class="punctuation">.</span>\n<span class="text">${text}</span>`
        }
        else if (Class === 'tag' && ['xml', 'html', 'html-vue', 'pug'].includes(this.language)) {
          // Pass the matches param from the first tag capture (remove quotes, comments, etc).
          return this.syntaxHighlightHtmlTag(matches.slice(classMap.indexOf('tag')))
        }

        else if (Class === 'variable' && match[0] === '.' && this.language === 'js') {
          /**
           * @todo don't apply variable color if char before '.' is not '\w'.
           */
          return `<span class="punctuation">.</span><span class="obj-attr">${match.substr(1)}</span>`
        }

        let styles = ''
        if (Class === 'color' && this.language === 'css') {
          styles = ` style="background-color: ${match};color: #${this.isColorDark(match) ? 'fff' : '000'}"`
        }
        return (Class && `<span class="${Class}"${styles}>${match}</span>`) || ''
      })
    },

    // Keep watching the slot text content.
    checkSlots () {
      const slotTexts = (this.$slots.default || []).map(slot => slot.text || '').join('')
      if (this.slotTexts !== slotTexts) {
        this.slotTexts = slotTexts
        this.content = this.syntaxHighlightContent(this.slotTexts)
      }
    },

    copyCode (e) {
      e.target.insertAdjacentHTML(
        'afterend',
        `<textarea id="clipboard-textarea">${this.$refs.code.innerText}</textarea>`
      )
      const textarea = document.getElementById('clipboard-textarea')

      textarea.select()
      textarea.setSelectionRange(0, 99999) // For mobile devices.
      document.execCommand('copy')
      textarea.remove()

      this.$emit('copied', this.$refs.code.innerText)
    }
  },

  mounted () {
    this.checkSlots()
  },

  beforeUpdate () {
    if (this.reactive) this.checkSlots()
  }
}
</script>

<style lang="scss">
.ssh-pre {
  position: relative;
  margin-top: 1em;
  padding: 0.5em;
  border: 1px solid rgba(0, 0, 0, 0.06);
  background-color: rgba(0, 0, 0, 0.025);
  border-radius: 4px;
  display: block;

  &--dark {
    background-color: #262626;
    color: rgba(255, 255, 255, 0.85);
  }

  &__content {
    white-space: pre-wrap;
    word-break: break-word;
  }

  &__copy {
    position: absolute;
    top: 3px;
    right: 3px;
    border: none;
    background: none;
  }

  #clipboard-textarea {
    position: absolute;
    z-index: -100;
    opacity: 0;
  }

  &[data-label] {margin-top: 2.5em;}
  &[data-label]:before {
    content: attr(data-label);
    position: absolute;
    bottom: 100%;
    right: 1em;
    padding: 0.1em 0.7em 0;
    background-color: inherit;
    border: 1px solid rgba(0, 0, 0, 0.06);
    border-bottom: 1px solid #f9f9f9;
    border-radius: 3px 3px 0 0;
    font-size: 11px;
  }
  &--dark[data-label]:before {border-bottom-color: #262626;}
}

// Syntax highlighting.
.ssh-pre {
  .txt {color: #333;}
  .comment {font-style: italic;color: #999;}
  .comment * {color: inherit !important;}
  .quote {color: #c11;}
  .quote * {color: inherit !important;}
  .htmlentity {color: #3a76ad;font-weight: bold;}
  .number {color: #c11;}
  .boolean {color: #c11;}
  .keyword {color: #33c;font-weight: bold;}
  .this {color: #c6d;font-weight: bold;}
  .punctuation {color: #99f;}
  .external-var, .special {color: #f63;}
  .variable {color: #29e;}
  .obj-attr {color: #0bc;}

  &[data-type=shell] .keyword {color: #ff5252;}
  &[data-type=shell] .param {color: #f63;}

  &[data-type=html] .doctype {color: #02027e;}
  &[data-type=html] .tag-name {color: #11c;}
  &[data-type=html] .attribute {color: #f63;}

  &[data-type=html-vue] .doctype {color: #02027e;}
  &[data-type=html-vue] .tag-name {color: #42b983;}
  &[data-type=html-vue] .punctuation {color: #128953;}
  &[data-type=html-vue] .attribute {color: #ff5252;}

  &[data-type=pug] .tag-name {color: #11c;font-weight: bold;}
  &[data-type=pug] .punctuation {color: #999;}
  &[data-type=pug] .id {color: #e3f;}
  &[data-type=pug] .class {color: #09e;}
  &[data-type=pug] .attribute {color: #f63;}
  &[data-type=pug] .text {color: #495a70;}

  &[data-type=xml] .doctype {color: #02027e;}
  &[data-type=xml] .tag-name {color: #11c;}
  &[data-type=xml] .attribute {color: #f93;}

  &[data-type=css] .variable {color: #29e;font-weight: bold;}
  &[data-type=css] .selector {color: #f0d;}
  &[data-type=css] .selector.class-id {color: #f0d;}
  &[data-type=css] .pseudo {color: #f35;}
  &[data-type=css] .selector.keyword {color: #f5f;}
  &[data-type=css] .selector.keyword.vendor {color: #0c8;}
  &[data-type=css] .keyword {color: #c06;}
  &[data-type=css] .attribute {color: #70d;}
  &[data-type=css] .keyword {color: #e28;}
  &[data-type=css] .vendor {color: #0c8;}
  &[data-type=css] .value {color: #c11;}
  &[data-type=css] .vendor {color: #0c8;}
  &[data-type=css] .color {background: #eee;padding: 0px 3px;border: 1px solid rgba(0, 0, 0, 0.1);border-radius: 3px;}
  &[data-type=css] .unit {color: #0bc;}
  &[data-type=css] .important {color: #f00;font-weight: bold;}

  &[data-type=sql] .var-type {color: #f63;font-weight: bold;}
}

.ssh-pre--dark {
  .txt {color: #ccc;}
  .comment {font-style: italic;color: #7c6;}
  .quote {color: #da8e72;}
  .htmlentity {color: #7ba3c9;font-weight: bold;}
  .boolean, .number {color: #adcfa4;}
  .keyword {color: #e67ad2;}
  .this {color: #329ddb;}
  .punctuation {color: #aac;}
  .external-var, .special {color: #7bcced;}
  .variable {color: #84deff;}
  .obj-attr {color: #0dc;}

  &[data-type=shell] .keyword {color: #ff5252;}
  &[data-type=shell] .param {color: #7bcced;}

  &[data-type=html] .tag-name {color: #339cda;}
  &[data-type=html] .attribute {color: #7bcced;}
  &[data-type=html-vue] .tag-name {color: #339cda;}
  &[data-type=html-vue] .punctuation {color: #99c;}
  &[data-type=html-vue] .attribute {color: #7bcced;}

  &[data-type=pug] .tag-name {color: #339cda;font-weight: bold;}
  &[data-type=pug] .punctuation {color: #999;}
  &[data-type=pug] .id {color: #ed9bfd;}
  &[data-type=pug] .class {color: #0ba7b3;}
  &[data-type=pug] .attribute {color: #8adeff;}
  &[data-type=pug] .text {color: #c4d8f3;}

  &[data-type=xml] .tag-name {color: #339cda;}
  &[data-type=xml] .attribute {color: #f93;}

  &[data-type=css] .selector,
  &[data-type=css] .class-id {color: #ff9a57;}
  &[data-type=css] .pseudo {color: #ff516e;}
  &[data-type=css] .keyword {color: #ff73ff;}
  &[data-type=css] .vendor {color: #0c8;}
  &[data-type=css] .keyword {color: #c06;}
  &[data-type=css] .attribute {color: #70d;}
  &[data-type=css] .keyword {color: #ee499b;}
  &[data-type=css] .vendor {color: #0c8;}
  &[data-type=css] .value {color: #cf3838;}
  &[data-type=css] .vendor {color: #0c8;}
  &[data-type=css] .color {background: #111;border-color: rgba(255, 255, 255, 0.25);}
  &[data-type=css] .unit {color: #0bc;}
  &[data-type=css] .important {color: #fe4848;}

  &[data-type=sql] .var-type {color: #7bcced;font-weight: bold;}
}
</style>
