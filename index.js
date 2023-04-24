// Code your solution here

const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];

function findMatching(arr, query) {
 return arr.filter((el) => el.toLowerCase().includes(query.toLowerCase()));
}

function fuzzyMatch(arr, query) {
 return arr.filter((driver) => driver.toLowerCase().startsWith(query.toLowerCase()));
}

function matchName(drivers, name) {
 return drivers.filter(driver => driver.name === name);
}

const driversForMatch = [
 {
  name: 'Bobby',
  hometown: 'Pittsburgh'
 },
 {
  name: 'Sammy',
  hometown: 'New York'
 },
 {
  name: 'Sally',
  hometown: 'Cleveland'
 },
 {
  name: 'Annette',
  hometown: 'Los Angeles'
 },
 {
  name: 'Bobby',
  hometown: 'Tampa Bay'
 }
];

console.log(matchName(driversForMatch, "Sammy"));