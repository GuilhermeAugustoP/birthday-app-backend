const app = {
    get: () => "get",
    put: () => "put",
    any: () => "any",
}

const request = { verb: "any" }

console.log(app.get(), app.put(), app.any())
console.log(app[request.verb]())