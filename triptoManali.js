
//buy a car then plan a trip:

//1st async
async function Tour() {
    try {
        await new Promise((resolve, reject) => {
            function buyACar() {
                setTimeout(() => {

                    let error =false;
                    if (!error) {
                        console.log("buy a car ");
                        resolve();
                        //2nd async
                        async function func() {
                            try {

                                await new Promise((resolve, reject) => {
                                    function planAtrip() {
                                        setTimeout(() => {

                                            let error = false;
                                            if (!error) {
                                                console.log("planning successful");
                                                resolve();
                                                //3rd-async
                                                async function func2() {
                                                    try {
                        
                                                        await new Promise((resolve, reject) => {
                                                            function reachedToManali() {
                                                                setTimeout(() => {
                        
                                                                    let error = false;
                                                                    if (!error) {
                                                                        console.log("at last we are in manali");
                                                                        resolve();
                        
                                                                    }
                                                                    else {
                                                                        console.log("we back from the mid way,due to heavy rain fall ")
                                                                        reject()
                                                                    }
                        
                        
                                                                }, 4000)
                                                            }
                                                            reachedToManali()
                        
                        
                                                        })
                        
                                                    }
                                                    catch {
                                                        
                                                    }
                        
                                                } func2()

                                            }
                                            else {
                                                console.log("the tour is cancelled due to poor planning!")
                                                reject()
                                            }


                                        }, 4000)
                                    }
                                    planAtrip()


                                })

                            }
                            catch {
                                
                            }

                        } func()


                    }
                    else {
                        console.log("the tour is cancelled due to car damage!")
                        reject()
                    }


                }, 4000)

            }
            buyACar()


        })

    }
    catch {

    }




}

Tour()

