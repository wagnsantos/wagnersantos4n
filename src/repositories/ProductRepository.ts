import pool from "../config/db";
import { Product } from "../models/Product"; // Verifique se o nome do arquivo e o caminho estão corretos

export class ProductRepository {
  // Função para criar um novo produto
  async createProduct(product: Product): Promise<Product> {
    const client = await pool.connect();
    try {
      const result = await client.query(
        `INSERT INTO products (name, price) 
         VALUES ($1, $2) RETURNING *`,
        [product.name, product.price],
      );
      return result.rows[0];
    } finally {
      client.release();
    }
  }

  // Função para buscar todos os produtos
  async getAllProducts(): Promise<Product[]> {
    const client = await pool.connect();
    try {
      const result = await client.query(`SELECT * FROM products`);
      return result.rows;
    } finally {
      client.release();
    }
  }

  // Função para buscar um produto pelo ID
  async getProductById(id: number): Promise<Product | null> {
    const client = await pool.connect();
    try {
      const result = await client.query(
        `SELECT * FROM products WHERE id = $1`,
        [id],
      );
      return result.rows[0] || null;
    } finally {
      client.release();
    }
  }
}
