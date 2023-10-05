let lang1 = 'es'
let lang2 = 'de'
let lang3 = 'en'
let lang4 = 'fr'

let selectedLangCode = prompt('Please Enter the language code ("es", "de", "en", and "fr")')

if(selectedLangCode === 'es'){
console.log(`Hello World translated in ${selectedLangCode} is: Hola Mundo`)
}
else if(selectedLangCode ==='de'){
console.log(`Hello World translated in ${selectedLangCode} is: Hallo Welt`)
}
else if(selectedLangCode ==='en'){
    console.log(`Hello World translated in ${selectedLangCode} is: Hello World`)
}
else if(selectedLangCode ==='fr'){
    console.log(`Hello World translated in ${selectedLangCode} is: Bonjour le monde`)
}
else{
console.log('Hello World')
}

