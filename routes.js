import { Router } from "express"
import { jogadorIndex, jogadorCreate, jogadorUpdate, jogadorDestroy, jogadorNome, jogadorIdade } from "./controllers/jogadorController.js"

const router = Router()

router.get('/jogadores', jogadorIndex)
      .post('/jogadores', jogadorCreate)
      .put('/jogadores/:id', jogadorUpdate)
      .delete('/jogadores/:id', jogadorDestroy)
      .get('/jogadores/:nome', jogadorNome)
      .get('/jogadores/idade/:idade',jogadorIdade)

export default router