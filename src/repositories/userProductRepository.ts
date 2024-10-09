import pool from '../config/db';
import { UserProduct } from '../models/userProduct';

export const addUserProduct = async (userProduct: UserProduct) => {
  const client = await pool.connect();
  try {
    const queryText = `
      INSERT INTO user_products (user_id, product_id)
      VALUES ($1, $2)
      ON CONFLICT (user_id, product_id) DO NOTHING;
    `;
    await client.query(queryText, [userProduct.userId, userProduct.productId]);
  } catch (err) {
    console.error('Erro ao adicionar relação usuário-produto:', err);
    throw err;
  } finally {
    client.release();
  }
};

// Adicione mais funções conforme necessário
