/*
    Type of operator
*/
var value = 1.5;
var array = [10,15,19];
var character = 'a';
var json = {
    "glossary": {
        "title": "example glossary",
		"GlossDiv": {
            "title": "S",
			"GlossList": {
                "GlossEntry": {
                    "ID": "SGML",
					"SortAs": "SGML",
					"GlossTerm": "Standard Generalized Markup Language",
					"Acronym": "SGML",
					"Abbrev": "ISO 8879:1986",
					"GlossDef": {
                        "para": "A meta-markup language, used to create markup languages such as DocBook.",
						"GlossSeeAlso": ["GML", "XML"]
                    },
					"GlossSee": "markup"
                }
            }
        }
    }
};
console.log(typeof "x");
console.log(typeof 1.5);
console.log(typeof [10,100]); // object
console.log(typeof value);
console.log(typeof json); // object
console.log(typeof array); // object
console.log(typeof character); // string
