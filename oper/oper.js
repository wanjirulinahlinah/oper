//Extract the last four charaters from the string
//"extravaganza
var y="extravaganza"
console.log(y[8]);
console.log(y[9]);
console.log(y[10]);
console.log(y[11]);


//Insert the folowing string at the fourth index of the below variable:
//"eat"
//const food= "The quik fox jumped over the lazy dog "

const g ="eat"
const food = "The quik fox $[t} over the lazy dog"
console.log(food)

//count how many times the following string appears in the string variable;
//1."the"
//2."Brown"
const story="The quik brown fox jumps over the lazy dog"
let count=(story.match(/the/g)||[]).length
console.log(count)
let count2=(story.match(/Brown/g||[])).length
console.log(count2)


//using Javascript,find the following words from the following strings:
//1."are"
//2."Sitting"
const string1 = "The people are reading in the library"
let positions=(string1.search("are"));
console.log(position)
//2."sitting"
const string2 = "The child was sitting on the table before it fell";
let position=(string2.search("sitting"))
console.log(positions)








//convert the following strings into the specified formart;
//1.Uppercase:"Wonderful"
//2.Lowercase:"amazing","undERneath"
//3.Title case"A wonderful world"
const d = "wonderful"
const f=d.toUpperCase()
console.log(f);
const j= "Amazing"
const i=g.toLowerCase()
console.log(j);
const c="Undernerth"
const e=c.toLowerCase()
console.log(e);
const w="a wonderful world"
const v=w.toLocaleUpperCase()
console.log(v);
