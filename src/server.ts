import fastify from 'fastify'

const app = fastify()


app.get("/", (req,res) =>{
    return "hello word"
})

app.post("/upload", (req,res) =>{
    
})

app.listen({port:3333}, () =>{

    console.log("server entrou")
})

