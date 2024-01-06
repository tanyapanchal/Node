//CommonJS, every file is a module (by default)
//Modules- Encapsulated code(only share minimum)



const { personOne, personTwo } = require("./04-names")

require("./04-names")

const greetings = require("./05-utils")
greetings(personOne)
greetings(personTwo)