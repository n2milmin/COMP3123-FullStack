async function sayHello() {
    console.log("Hello world - START")
    let c = await makePromiseCall(100)
    console.log(c)

    try{
        c = await makePromiseCall(1)
        console.log(c)
    }catch(e){
        console.log(e)
    }

    //Also possible
    c= await makePromiseCall(1).then(s => {
        console.log("---" + s.msg)
        return s.msg
    }, (e) => {
        console.log("----" + e)
        return e
    })

    console.log("***" + c)
        


    console.log("Hello world - END")
}

async function makePromiseCall(x) {
    let p1 = new Promise((resolve, reject) => {
        //Make API call here 
        if(x > 2){
            resolve({msg:"Promise GOT Success"})
        }else{
            reject("Promise failed")
        }
    })
    return p1
}

sayHello().then( () => {
    console.log("sayHello")
})