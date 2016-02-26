PR.registerLangHandler(
    PR.createSimpleLexer(
        [ 
          // Whitespace
          [PR.PR_PLAIN,         /^\s+/, null, ' \r\n\t\xA0']
        ],
        [ // fallthroughStylePatterns
		  [PR.PR_TYPE,         /^[\|\└\-]*/i, null],
		  [PR.PR_LITERAL,       /^[a-z0-9]*\.[a-z0-9]*/i, null],
          [PR.PR_KEYWORD,         /^[a-z][a-z0-9]*/i, null]
		  
        ]),
    ['arbo']);