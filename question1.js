//For the given JSON iterate over all for loops (for, for in, for of, forEach)
function task1(){
var obj=[
    {   person:"name",
           age:2,
        company:"guvi"
    },
    {
        person:"name",
           age:3,
        company:"guvi geek"

    },
    {
        person:"name",
           age:4,
        company:"guvi geek network"
    },
];
//Normal FOr loop

 for(var i=0;i<obj.length;i++){
   console.log(obj[i]); 
 }
 /*RESULTS
 FOR LOOP
{person: 'name', age: 2, company: 'guvi'}
{person: 'name', age: 3, company: 'guvi geek'}
{person: 'name', age: 4, company: 'guvi geek network'}*/


//FOrEach Loop
 obj.forEach(((sample)=>{
    console.log(sample.age);
  }))
  /*RESULTS
     2
     3
     4    */

//for in loop
// Its enumeration based loop that iterate over the index
for(var index in obj){
   console.log(obj[index].company);
}
/* RESULTS
guvi
guvi geek
guvi geek network */

// for of loop=>ES-6
// It is iterate over the value
for(var value of obj){
  console.log(obj);
}
/*(3) [{…}, {…}, {…}]0: {person: 'name', age: 2, company: 'guvi'}1: {person: 'name', age: 3, company: 'guvi geek'}2: {person: 'name', age: 4, company: 'guvi geek network'}length: 3[[Prototype]]: Array(0)
 [{…}, {…}, {…}]0: {person: 'name', age: 2, company: 'guvi'}1: {person: 'name', age: 3, company: 'guvi geek'}2: {person: 'name', age: 4, company: 'guvi geek network'}length: 3[[Prototype]]: Array(0)
script.js:52 
*/
}
