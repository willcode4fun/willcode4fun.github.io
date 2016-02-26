PR.registerLangHandler(
    PR.createSimpleLexer(
        [ 
          // Whitespace
          [PR.PR_PLAIN,         /^\s+/, null, ' \r\n\t\xA0']
        ],
        [ // fallthroughStylePatterns
		  [PR.PR_KEYWORD,       /^(?:npm|webpack)\b/i, null],
		  [PR.PR_STRING,       /^(?:install)\b/i, null],
		  [PR.PR_LITERAL,       /^\-\-[a-z0-9\-]*\b/i, null],
		  [PR.PR_LITERAL,       /^\-[a-z0-9\-]\b/i, null]
          
        ]),
    ['cmd']);