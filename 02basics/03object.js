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
//  console.log(typeof JsUser[mySym])
//  console.log( JsUser)


JsUser.email = "hitesh@chatgpt.com"
//Object.freeze(JsUser)
//JsUser.email = "hitesh@microsoft.com"
//  console.log(JsUser);