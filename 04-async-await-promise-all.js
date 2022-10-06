
console.log("person1:shows ticket");
console.log("person2:shows ticket");

const preMovie=async()=>{

    const promiseFrindBringingTicket=new Promise((resolve,reject)=>{
        setTimeout(()=>{
        resolve("ticket");
        },3000)
    })

    
    const getPopcorn=new Promise((resolve,reject)=>{
        resolve("popcorn")
    })

    const getButter=new Promise((resolve,reject)=>{
        resolve("butter")
    })

    const  getColdDrinks= new Promise((resolve,reject)=>{
        resolve("cold-drinks")
    })


    let ticket=await promiseFrindBringingTicket;
    
    let [popcorn,butter,coldDrinks]=await Promise.all([getPopcorn,getButter,getColdDrinks]);
    console.log(`${popcorn} with ${butter} with ${coldDrinks}`)

    return ticket;
}

preMovie().then((m)=>{console.log(`person3:shows ${m}`)});


console.log("person4:shows ticket");
console.log("person5:shows ticket");
