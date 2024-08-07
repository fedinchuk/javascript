const personOne = {
  name: 'Vasyl',
  age: 21
}

function increasePersonAge(person) {
  person.age += 1
  return person
}

increasePersonAge(personOne)
console.log(personOne.age)