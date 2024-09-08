import fastify from 'fastify'

const app = fastify()


app.get("/", (req,res) =>{
    return "hello word"
})

app.listen({port:3333}, () =>{

    console.log("server entrou")
})

