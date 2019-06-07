let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };
/*
function sumSalaries(obj) {
    let sum = Object.values(obj)
    sum = sum.reduce((sum, current) => sum + current)
    return sum
}
*/

salaries

let sumSalaries = (obj) => Object.values(obj).reduce((a, b) => a + b)
console.log(sumSalaries(salaries))

let count = (obj) => Object.keys(obj).length
console.log(count(salaries))


let user = {
    name: "John",
    years: 30
  };
let {name, years: age, isAdmin = false} = user
name
age
isAdmin

/*We have an object:

let user = {
  name: "John",
  years: 30
};
Write the destructuring assignment that reads:

name property into the variable name.
years property into the variable age.
isAdmin property into the variable isAdmin (false if absent)
The values after the assignment should be:

let user = { name: "John", years: 30 };

// your code to the left side:
// ... = user

alert( name ); // John
alert( age ); // 30
alert( isAdmin ); // false
*/

/*There is a salaries object:

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};
Create the function topSalary(salaries) that returns the name of the top-paid person.

If salaries is empty, it should return null.
If there are multiple top-paid persons, return any of them.
P.S. Use Object.entries and destructuring to iterate over key/value pairs.

*/

let salaries2 = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };
function topSalary(obj) {
  let maxSalary = null
  let maxName = null
  for (const [salary] of Object.entries(obj)) {
    salary
    if (maxSalary < salary) {
      maxSalary = salary
      maxName = name
    }
  }
  maxSalary
  return maxName
}

console.log(topSalary(salaries2))

let d = new Date();
d
d.setHours(d.getHours()+1)
d

let date = new Date(2012, 1, 20, 3, 12)
date


function getWeekDay(dateObj) {
  let weekDay = dateObj.getDay()
  weekDay
  switch (weekDay) {
    case 0: return 'SU'
    case 1: return 'MO'
    case 2: return 'TU'
    case 3: return 'WE'
    case 4: return 'TH'
    case 5: return 'FR'
    case 6: return 'SA'
  }
}

console.log(getWeekDay(new Date(2012, 0, 3)))

let localdate = new Date(2012, 0, 3)
function getLocalDay(day) {
  let weekDay = day.getDay()
  if (weekDay == 0) {
    weekDay = 7
  }
  return weekDay
}
console.log(getLocalDay(localdate))

date = new Date(2015, 0, 2)
date
function getDateAgo(date, days) {
  let newDay = new Date(date)
  newDay.setDate(date.getDate() - days)
  return newDay.getDate()
}

console.log(getDateAgo(date, 32))

function getLastDayOfMonth(year, month) {
  let lastDate = new Date(year, month)
  lastDate.setMonth(lastDate.getMonth()+1)
  lastDate.setDate(lastDate.getDate() - 1)
  return lastDate.getDate()
}

console.log(getLastDayOfMonth(2012, 11))