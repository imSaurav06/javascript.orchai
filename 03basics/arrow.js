const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        // console.log(`${this.username} , welcome to website`);  // tish ->>> current context

        // console.log(this);  //print all the content in scope including function 
    }

}


user.welcomeMessage()  //output ->>>> "hitesh", welcome to website
user.username = "sam"
user.welcomeMessage()   //output ->>>> output ->>>> "hitesh", welcome to website


console.log(this)  //-------> empty object{}

//#Windows  is globel object in  Browser  (interview)


function chai(){
        let username = "hitesh"
         console.log(this.username); // undefined
     }
     chai()

//.........................................................................

     const chai =  () => {
        let username = "hitesh"
        console.log(this);  // undefined //{}
    }

    //user = () =>{

    // chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()