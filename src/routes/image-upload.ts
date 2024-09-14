import { FastifyInstance } from "fastify";
import {Schema, z} from "zod"
import { ZodTypeProvider } from "fastify-type-provider-zod";

export async function imageUpload(app:FastifyInstance) {
    app
        .withTypeProvider<ZodTypeProvider>()
        .post("/upload",
            {schema:{
                body: z.object({
                    image: z.string()
                })
            }}
            ,(req,res)=>{
                return "ola"
        })
}