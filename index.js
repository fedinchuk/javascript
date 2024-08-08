const personOne = {
  name: 'Vasyl',
  age: 21
}

function increasePersonAge(person) {
  const updatedPerson = Object.assign({}, person)
  updatedPerson.age += 1
  return updatedPerson
}

const updatedPersonOne = increasePersonAge(personOne)
console.log(personOne.age)
console.log(updatedPersonOne.age)