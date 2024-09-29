import { FastifyInstance } from "fastify";
import {Schema, z} from "zod"
import { ZodTypeProvider } from "fastify-type-provider-zod";
import { prisma } from "../lib/prisma"

export async function imageUpload(app:FastifyInstance) {
    app
        .withTypeProvider<ZodTypeProvider>()
        .post("/upload",
            {schema:{
                body: z.object({
                    image: z.string().refine((data) => {
                        const base64Regex = /^(?:[A-Z0-9+\/]{4})*(?:[A-Z0-9+\/]{2}==|[A-Z0-9+\/]{3}=)?$/i;
                        return base64Regex.test(data);
                    }, {
                        message: "String base64 inválida",
                    }),
                    id: z.string()
                }),
                response: {
                    200: z.object({
                        // image: z.object({
                        //     Url: z.string(),
                        //     measureValue: z.number(),
                        //     id: z.string().uuid()

                        // })
                        
                    })
                }
            }}
            ,async (req,res)=>{
                

                const {image, id} = req.body

                const buffer = Buffer.from(image, "base64")

                const oneMonthAgo = new Date();
                oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);

                //fazer a validaçao se há uma imagem feita no periodo de 1 mes
                const sameImage = await prisma.image.findMany({
                    where: 
                })

                const saveImage = await prisma.image.create({
                    data: {
                        customerCode: id,
                        image: buffer,
                    }
                })

                
        })
}

