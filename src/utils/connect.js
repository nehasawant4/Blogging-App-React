import { PrismaClient} from "@prisma/client";
import {global} from "styled-jsx/css";
let prisma
if(process.env.NODE_ENV === 'production'){
    prisma = new PrismaCLient()
} else{
    if(!global.prisma){
        global.prisma = new PrismaClient()
    }
    prisma=global.prisma
}

export default prisma