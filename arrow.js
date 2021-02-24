// ES6 fat arrow function 

// function number (a, b){
//     return (a+b);
// }

let number = (a, b) =>  {
    //other stuffs
   return a+b;
};

console.log(number(10, 20));



// object

const javaScript ={
    name:"javaScripts",
    libraries:['React','Angular','Vue'],
    printLibraries: function () {
         this.libraries.forEach((n) =>  console.log(`${this.name} loves ${n}`));
         
    }
}

 javaScript.printLibraries()