import express from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const app = express()
app.use(express.json())


app.get('/usuarios', async (req, res) => {

    let users = []

    if (req.query) {
        users = await prisma.user.findMany({
            where: {
                email: req.query.email,
                name: req.query.name,
                age: req.query.age,

            }
        })
    } else {
        const users = await prisma.user.findMany()
    }


    res.status(200).json(users)
})

app.post('/usuarios', async (req, res) => {

    await prisma.user.create({
        data: {
            email: req.body.email,
            name: req.body.name,
            age: req.body.age
        }
    })

    res.status(201).json(req.body)
    // res.send('OK, aqui deu certo')
})

app.put('/usuarios/:id', async (req, res) => {

    await prisma.user.update({

        where: {
            id: req.params.id
        },
        data: {
            email: req.body.email,
            name: req.body.name,
            age: req.body.age
        }
    })

    res.status(201).json(req.body)
})

app.delete('/usuarios/:id', async (req, res) => {
    await prisma.user.delete({
        where: {
            id: req.params.id
        }
    })

    res.status(200).json({ message: ' Usuário deletado com Sucesso' })
})

app.listen(3000)

/*

    Criar uma API de Usuários
        CRUD (Create, Read, Update and Delete)

    - Listar todos os usuários
    - Criar um usuário
    - Editar um usuário
    - Deletar um usuário
*/