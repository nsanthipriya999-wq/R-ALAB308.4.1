let csv = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
let csvArray2 = [];
let data = csv.split("\n");
for (const row of data) {
    let split = row.split(",")
    csvArray2.push(split)
}
console.log(csvArray2)

let keys = ["ID", "Name", "Occupation", "Age"];

csvArray2 = [
    ['42', 'Bruce', 'Knight', '41'],
    ['57', 'Bob', 'Fry Cook', '19'],
    ['63', 'Blaine', 'Quiz Master', '58'],
    ['98', 'Bill', 'Doctor’s Assistant', '26']
];

for (let i = 0; i < keys.length; i++) {
    keys[i] = keys[i].toLowerCase();
}

let result = [];
for (let i = 0; i < csvArray2.length; i++) {
    let obj = {};

    let values = csvArray2[i];


    for (let j = 0; j < keys.length; j++) {
        obj[keys[j]] = values[j];
    }

    result.push(obj);
}

console.log(result);

//removing the last element 

result.pop();
console.log(result);

//Inserting another set of data at Index 1
result.splice(1, 0,
    { id: "48", name: "Barry", occupation: "Runner", age: "25" })
console.log(result);

//Inserting set of data at last index
result.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" })
console.log(result);
//Group's age calculation
;
let ageTotal = 0;
for (let i = 0; i < result.length; i++) {


    ageTotal += Number(result[i].age);
}
let avg = ageTotal / result.length;
console.log(ageTotal);
console.log("The average age of the group is: " + avg + "years");

//convert data back to csv

let csvBack = "";


let header = Object.keys(result[0]);

for (let i = 0; i < header.length; i++) {
    if (header[i] === "id") {
        header[i] = "ID";
    } else {
        header[i] = header[i][0].toUpperCase() + header[i].slice(1);
    }
}

csvBack += header.join(",") + "\n";


for (let i = 0; i < result.length; i++) {
    let row = result[i];
    let values = [];

    for (let key in row) {
        values.push(row[key]);
    }

    csvBack += values.join(",");

    if (i < result.length - 1) 
    {
        csvBack += "\n";
    }
}

console.log(csvBack);

/*<------------------------------------------Output-------------------------------------------------->
[
  [ 'ID', 'Name', 'Occupation', 'Age' ],
  [ '42', 'Bruce', 'Knight', '41' ],
  [ '57', 'Bob', 'Fry Cook', '19' ],
  [ '63', 'Blaine', 'Quiz Master', '58' ],
  [ '98', 'Bill', 'Doctor’s Assistant', '26' ]
]
[
  { id: '42', name: 'Bruce', occupation: 'Knight', age: '41' },
  { id: '57', name: 'Bob', occupation: 'Fry Cook', age: '19' },
  { id: '63', name: 'Blaine', occupation: 'Quiz Master', age: '58' },
  {
    id: '98',
    name: 'Bill',
    occupation: 'Doctor’s Assistant',
    age: '26'
  }
]
[
  { id: '42', name: 'Bruce', occupation: 'Knight', age: '41' },
  { id: '57', name: 'Bob', occupation: 'Fry Cook', age: '19' },
  { id: '63', name: 'Blaine', occupation: 'Quiz Master', age: '58' }
]
[
  { id: '42', name: 'Bruce', occupation: 'Knight', age: '41' },
  { id: '48', name: 'Barry', occupation: 'Runner', age: '25' },
  { id: '57', name: 'Bob', occupation: 'Fry Cook', age: '19' },
  { id: '63', name: 'Blaine', occupation: 'Quiz Master', age: '58' }
]
[
  { id: '42', name: 'Bruce', occupation: 'Knight', age: '41' },
  { id: '48', name: 'Barry', occupation: 'Runner', age: '25' },
  { id: '57', name: 'Bob', occupation: 'Fry Cook', age: '19' },
  { id: '63', name: 'Blaine', occupation: 'Quiz Master', age: '58' },
  { id: '7', name: 'Bilbo', occupation: 'None', age: '111' }
]
254
The average age of the group is: 50.8years
ID,Name,Occupation,Age
42,Bruce,Knight,41
48,Barry,Runner,25
57,Bob,Fry Cook,19
63,Blaine,Quiz Master,58
7,Bilbo,None,111
*/