import { Router } from "express"
import { jogadorIndex, jogadorCreate, jogadorUpdate, jogadorDestroy, jogadorNome, jogadorIdade, jogadorSalarioDesc, jogadorSalarioSum } from "./controllers/jogadorController.js"

const router = Router()

router.get('/jogadores', jogadorIndex)
      .post('/jogadores', jogadorCreate)
      .put('/jogadores/:id', jogadorUpdate)
      .delete('/jogadores/:id', jogadorDestroy)
      .get('/jogadores/:nome', jogadorNome)
      .get('/jogadores/idade/:idade',jogadorIdade)
      .get('/jogadores/salario',jogadorSalarioDesc)
      .get('/jogadores/salarioSum',jogadorSalarioSum)

export default router