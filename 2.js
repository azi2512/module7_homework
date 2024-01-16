function funk(str, obj) {
    if (obj[str]) return true;
    return false;
}

const person = {
    name: 'Ivan',
    surname: 'Petrov',
    age: 20,
}

console.log(funk('age', person))