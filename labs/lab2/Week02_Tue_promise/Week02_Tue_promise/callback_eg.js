function sum(a, b){
    console.log(a+b)
}

function makeCallback(x, y, fn) {
    if(x >= y){
        fn(x, y)
    }else{
        console.log('x must be greater then y')
    }
}

makeCallback(10, 2)
makeCallback(10, 2, sum)

makeCallback(10, 5, function (x, y) {
    console.log(x-y)
})

makeCallback(10, 5, (x, y) => {
    console.log(x * y)
})