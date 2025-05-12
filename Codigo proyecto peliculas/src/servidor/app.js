import express, {json} from 'express'
import { router } from './rutas.js'
import cors from 'cors'

const app = express()

app.use(json())
app.use(cors())

app.use('/',router)

app.listen(4000, ()=>{
console.log('Escuchando en el puerto 4000')
})