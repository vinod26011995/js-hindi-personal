//object litrals
const myObject={
    name:"sonu",
    age:22,
    location:"bhopal",
    email:"sonu@gmail.com"
}
//access karne ka 2usra tarika  single double quats use karke bracket lgakr
console.log(myObject.email);
console.log(myObject["name"]);
 myObject.email="hello@google.com"//email ki ya kisi ki bhi value change krne k liye 
console.log(myObject.email);
console.log(myObject);

myObject.greet= function(){
console.log(`helo user ${this.name}`);
}
console.log(myObject.greet());