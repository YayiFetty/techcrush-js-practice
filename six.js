// Create an object called myProfile with at least 4 properties: name, age, country, and hobby. Then write a function
// displayProfile(person) that logs a sentence describing the person using their properties.
// Write your solution in your .js file

const myProfile = {
  name: "Yayi",
  age: 30,
  country: "Nigeria",
  hobby: "playing Game",
};

const displayProfile = (person) => {
  return `My name is ${person.name}.\n 
  I am ${person.age} years of age. \n  
  my home country is ${person.country}.\n 
  my  hobby is ${person.hobby} especially adventurees game like Uncharted`;
};
console.log(displayProfile(myProfile));
