import { Router } from "express"
import { jogadorIndex, jogadorCreate, jogadorUpdate, jogadorDestroy, jogadorNome, jogadorIdade, jogadorSalarioDesc, jogadorSalarioSum, jogadorPesq } from "./controllers/jogadorController.js"

const router = Router()

router.get('/jogadores', jogadorIndex)
      .post('/jogadores', jogadorCreate)
      .put('/jogadores/:id', jogadorUpdate)
      .delete('/jogadores/:id', jogadorDestroy)
      .get('/jogadores/:nome', jogadorNome)
      .get('/jogadores/idade/:idade1/:idade2',jogadorIdade)
      .get('/jogadores/salario',jogadorSalarioDesc)
      .get('/jogadores/salarioSum',jogadorSalarioSum)
      .get('/jogadores/pesq/:pesq',jogadorPesq)

export default router