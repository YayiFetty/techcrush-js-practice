// Write a function formatName(firstName, lastName) that trims extra spaces from both inputs and returns the full
// name in this exact format: 'LASTNAME, Firstname'.
// Test: formatName(' esther ', ' ogbu ') should return 'OGBU, Esther'

const formatName = (firstName, lastName) => {
  let first = firstName
    .trim()
    .toLowerCase()
    .replace(/\b\w/g, (c) => c.toUpperCase());
  let last = lastName.trim().toUpperCase();
  return ` ${last}, ${first}`;
};
console.log(formatName(" esther ", " ogbu "));
