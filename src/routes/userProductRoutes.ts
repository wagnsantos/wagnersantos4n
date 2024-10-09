import express from 'express';
import { addUserProduct } from '../repositories/userProductRepository';

const router = express.Router();

router.post('/user-products', async (req, res) => {
  const { userId, productId } = req.body;
  try {
    await addUserProduct({ userId, productId });
    res.status(201).send('Relação usuário-produto criada com sucesso!');
  } catch (err) {
    res.status(500).send('Erro ao criar relação usuário-produto');
  }
});

// Adicione mais rotas conforme necessário

export default router;
