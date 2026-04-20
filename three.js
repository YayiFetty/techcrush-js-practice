// Q3:Write a function called greetUser that takes a name parameter and returns the string: 'Welcome to TechCrush,
// [name]!'. Test it with your own name.

const greetUser = (name) => {
  let formatName = name.toLowerCase().replace(/\b\w/g, (c) => c.toUpperCase());
  return `Welcome to TechCrush ${formatName}!`;
};
console.log(greetUser("yayi"));
