import { Router } from 'express';
import { ProductRepository } from '../repositories/ProductRepository';  // Verifique se o nome do arquivo e o caminho estão corretos

const router = Router();
const productRepository = new ProductRepository();

// Rota para criar um novo produto
router.post('/products', async (req, res) => {
  const { name, price } = req.body;
  try {
    const newProduct = await productRepository.createProduct({ name, price });
    return res.status(201).json(newProduct);
  } catch (error) {
    return res.status(500).json({ error: 'Erro ao criar produto' });
  }
});

// Rota para buscar todos os produtos
router.get('/products', async (req, res) => {
  try {
    const products = await productRepository.getAllProducts();
    return res.status(200).json(products);
  } catch (error) {
    return res.status(500).json({ error: 'Erro ao buscar produtos' });
  }
});

// Rota para buscar um produto pelo ID
router.get('/products/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const product = await productRepository.getProductById(parseInt(id, 10));
    if (!product) {
      return res.status(404).json({ error: 'Produto não encontrado' });
    }
    return res.status(200).json(product);
  } catch (error) {
    return res.status(500).json({ error: 'Erro ao buscar produto' });
  }
});

export default router;
