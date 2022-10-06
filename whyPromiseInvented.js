
//1.buy acar ,2. plan a trip:

function buyACar(callback){
    setTimeout(()=>{
        console.log("buy a car");
        callback();

    },3000)
}

function planAtrip(cb){
    setTimeout(()=>{
        console.log("plan atrip to manali");
        cb()
        

    },2000)
}
function reachManali(){
    setTimeout(()=>{
        console.log("reached manali");

    },1000)
}
buyACar(planAtrip,reachManali);// hectic to work .......