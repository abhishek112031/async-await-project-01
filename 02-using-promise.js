
console.log("person1:shows ticket");
console.log("person2:shows ticket");

const promiseFrindBringingTicket=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("ticket")
    },3000)
})


const getPopcorn=promiseFrindBringingTicket.then((t)=>{
    console.log(`friend:I have the ${t}`)
    console.log("person3:we should go in");
    console.log("friend:no i am hungry");
       return new Promise((resolve,reject)=>{
        resolve(` ${t} with popcorn`);
       })
});

const getButter=getPopcorn.then((t)=>{
    console.log(`person3:I got some popcorn `)
    console.log("person3:we should go in");
    console.log("friend:no i need butter on my popcorn");
    return new Promise((resolve,reject)=>{
     resolve(` ${t} with butter`);
    })
});

const getColdDrinks=getButter.then((t)=>{
    console.log(`person3: i got some butter on popcorn ,anything else bro? `);
    console.log("friend:i need colddrinks");
    console.log("person3:ok bro, 😊")
    return new Promise((resolve,reject)=>{
        resolve(` ${t} with coldDrinks`);
       })

})

getColdDrinks.then((t)=>{
    console.log(`person3:bro take coldDrinks`)
    console.log("person3:now we really need to go we are getting late")
    console.log("friend:lets go go!")
    console.log(t)});





console.log("person4:shows ticket");
console.log("person5:shows ticket");
