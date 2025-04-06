
//const tinderuser = new Object()

const tinderuser = {}

tinderuser.Id = "kbckbc"
tinderuser.name = "ksauksau"
tinderuserisLoggedIn = false

//console.log(tinderuser)


const student = {
        roll : 9263,
        fullname :{
            username:{
                firsname : 'K',
                lastname: "saurav"
            }

        }

}

// console.log(student.roll,student.fullname.username.lastname)

const obj1 = {2:"k",3:"s" }
const obj2 = {4:"a" , 5:"v"}

const obj3 = { ...obj1 , ...obj2}

// console.log(obj3[4])



const users = [
    {
        id: 1,
        email: "1h@gmail.com"
    },
    {
        id: 1,
        email: "2h@gmail.com"
    },
     

{
        id: 1,
        email: "3h@gmail.com"
    }
]



 const tinder = users[0].email
// console.log(tinder);


//console.log(Object.keys(tinderuser)); //print all keys
// console.log(Object.values(tinderuser));  // print all values
// console.log(Object.entries(tinderuser)); // print all keys and value



// co
console.log(tinderuser.hasOwnProperty('isLoggedIn'));


// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]