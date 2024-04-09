import { User } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { CreateUserDTO } from "../../dtos/CreateUsersDTO";

export class CreateUserUseCase {
    async execute({name, email}:CreateUserDTO): Promise<User>{
        //Verificar se o usuário já existe
        const userAlredyExists = await prisma.user.findUnique({
            where: {
                email
            }
        })

        if(userAlredyExists){
            //erro
        }
        //Criar o usuário
        const user = await prisma.user.create({
            data:{
                name,
                email
            }
        })
        return user
    }
}