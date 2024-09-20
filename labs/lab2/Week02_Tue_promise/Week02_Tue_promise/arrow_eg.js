function sayHello(name) {
    return `Hello, ${name}`
}

sayHello = (name) => {
    return `Hello, ${name}`
}

sayHello = (name) => `Hello, ${name}`
sayHello = name => `Hello, ${name}`
sayHello = () => "Hello, Pritesh"

sayHello = (name) => {
    this.name = "Pritesh Patel"
    console.log(`This : ${JSON.stringify(this)}`)
    return `Hello, ${name}`
}

let c = sayHello("Pritesh")
console.log(c)

console.log(typeof sayHello)