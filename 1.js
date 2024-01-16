function arrKey(arr) {
    for (key in arr) {
        if (arr.hasOwnProperty(key)) {
            console.log(key)
        }
    }
}

const person = {
    name: 'Ivan',
    surname: 'Petrov',
    age: 20,
}

arrKey(person)