let person = {
  name: "Kartik",
  age: 22,
  country: "India",
};

function logData() {
  return (
    person.name +
    " is" +
    " " +
    person.age +
    " " +
    "years old and lives in " +
    person.country +
    "."
  );
}
console.log(logData());
