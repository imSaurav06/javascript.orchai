// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
 //console.log(JsUser["full name"])
 //console.log(typeof JsUser[mySym])  //string
 //console.log( typeof JsUser)  // object


// JsUser.email = "hitesh@chatgpt.com"
// // Object.freeze(JsUser)   ///frezzeze the pre modifies
// JsUser.email = "hitesh@microsoft.com"
//  console.log(JsUser)

 JsUser.greeting = function (){
    console.log(`hello world`)
 }

 JsUser .greeting()


 JsUser.greetingTwo = function(){
    console.log(`hello world ${this. name}`)
 }

 JsUser.greetingTwo()