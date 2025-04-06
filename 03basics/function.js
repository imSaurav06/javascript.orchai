function firstfunction(){
    
        // console.log("H");
        // console.log("I");
        // console.log("T");
        // console.log("E");
        // console.log("S");
        // console.log("H");
    }
    
    firstfunction()


    function addTwoNumbers(number1, number2){

        // let result = number1 + number2
        var result = number1 + number2
        return result
        //return number1 + number2
    }

    // console.log(addTwoNumbers(4,5))

    // console.log("Result:", result);



    function loginUserMessage(username = "sam"){
        if(!username){
            // console.log("PLease enter a username");
            return
        }
        return `${username} just logged in`
    }
    
    // console.log(loginUserMessage("hitesh"))
    // console.log(loginUserMessage())


    // function calculateCartPrice( val1, val2,...num1){
    //     return num1
    // }
    function calculateCartPrice( val1, val2,...num1){
        return num1
        return val1
    }
    
    // console.log(calculateCartPrice(200, 400, 500, 2000))



    const user = {
        username: "hitesh",
        prices: 199
    }
    
    function handleObject(anyobject){
        console.log(`Username is ${this.username} and price is ${anyobject.prices}`);
    }

    handleObject(user)