 //Synchronous javascript kya hai ?
//syncrhronous js me statements ka execution normally sequence me hota hai 
//ek line ka execution complete hoga tabhi dusri line ka execution start hoga 

// console.log("First")
// console.log("Second")
// console.log("Third")

//synchronous code blocking ka code

// console.log("Start")

// for(let i=0 ; i<1000000000 ; i++){
//     console.log("Heavy computation")
// }

// console.log("End")

//Asynchronous Programming ya aync js

// //Definition : Asynchronous programming , aise operations ko handle krti h, jinke execution me complete hone me jada time lg skta hai

// console.log("Start")

// setTimeout(() => {
//     console.log("Timer Completed") 
//     for(let i=0 ; i<1000000000 ; i++){
//     console.log("Heavy computation")
// }
// }, 2000)

// console.log("End")



//callback hell
//jab bhut sare ,callbacks nested(one inside another) ho jate h,
// code difficult ho read lkrne me use callback hell kaha jata hai

// getUser(function (user){
//     getOrders(user.id , function(orders){
//        getPayment(orders[0].id , function(payment){

//        })
//     })
// })



// Fetch()

//HTTP request bhejta hai , aur promises ko return krta hai

// example - http://jsonplaceholder.typicode.com/users

async function getUsers(){

    try{
        const response = await fetch(
            "http://jsonplaceholder.typicode.com/users"
        )
        if(!response.ok){
            throw new Error(`HTTP ${(response.status)}`)
        }

        const users = await response.json()
        console.log(users)
    } catch (error){
        console.log("Failed",error.message)
    }
    
}
getUsers()