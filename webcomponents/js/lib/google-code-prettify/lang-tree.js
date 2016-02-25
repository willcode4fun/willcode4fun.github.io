PR['registerLangHandler'](
    PR['createSimpleLexer'](
        [
         // Whitespace
         [PR['PR_PLAIN'],       /^[\t\n\r \xA0]+/, null, '\t\n\r \xA0']
        ],
        [
         
         [PR['PR_COMMENT'],     /^\/(?:\/.*|\*(?:\/|\**[^*/])*(?:\*+\/?)?)/],
		 [PR['PR_STRING'], /^\w+\.\w+(\.\w+)?/],
		 [PR['PR_KEYWORD'], /^[-\w]+/],
		 [PR['PR_TYPE'],        /^[│─\|└]/],
         [PR['PR_TYPE'],        /^\.\.\./]
        ]),
    ['tree']);