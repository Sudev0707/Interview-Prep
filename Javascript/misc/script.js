
// const obj = {
//     name: "sudev",
//     getName: function () {
//         console.log(this.name)
//     }
// }
// obj.getName();

// var obj2 = {
//     name: "dev",
//     getname: function () {
//         console.log(this.name);

//     }
// }
// var getname = obj2.getname;

// var exm = {name: "majhi", getname};
// exm.getname();
var obj = { 
name:  "vivek", 
getName: function(){ 
console.log(this.name); 
} 
} 
var getName = obj.getName; 
var obj2 = {name:"akshay", getName }; 
obj2.getName();


// ----------------------------------------------
// var example
var name = "Alice";
var name = "Bob"; // re-declaration allowed
console.log(name); // Bob
// let example
let age = 25;
age = 26; // reassignment allowed
// let age = 30; // Error: already declared in this scope
// const example
const country = "USA";
// country = "Canada"; // Error: cannot reassign


// const with objects
const person = { name: "John" };
person.name = "Jane"; // allowed (mutating object property)
console.log(person); // { name: "Jane" }
