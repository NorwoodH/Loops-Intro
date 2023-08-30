
/*
var cohortOneStudents = ["Sable", "David", "Joey", "Nick", "Tommy", "Connor", "Charles", "Russ", "Bobby", "Josh", "Nikki", "Matt", "Dale", "Sydney"]
for(var i = 0; i < cohortOneStudents.length; i++) {
    console.log(cohortOneStudents[i])
}
*/

const myInterests = ["coding", "computers", "dogs", "hiking", "outdoors"];
let favInterest = "coding";

for (let i = 0; i < myInterests.length; i++) {
  if (myInterests[i] === favInterest) {
    console.log(`My absolute favorite interest is: ${favInterest}`);
  } else {
    console.log(`One of my interests is ${myInterests[i]}`);
  }
}