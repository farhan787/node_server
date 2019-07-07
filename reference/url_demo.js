// Note --> URL.searchParams is an object having forEach as a key

const url = require('url');
const myUrl = new URL('https://websiteName.com:3030/4/settings.html?id=100&status=active');

// Serialized url
console.log(myUrl)
console.log(myUrl.search)
console.log(myUrl.searchParams)
console.log(myUrl.searchParams.append('newParam', '123'))       // returns undefined
console.log(myUrl.searchParams)

// Loop through params
myUrl.searchParams.forEach((name, value) => {       // are searchParams a list ????
    console.log(`Name: ${name}, Value: ${value}`)
})

console.log(myUrl.searchParams.get('status'))

console.log(myUrl.searchParams instanceof Object)
console.log(Array.isArray(myUrl.searchParams))
for (let key in myUrl.searchParams)
    console.log(key)
