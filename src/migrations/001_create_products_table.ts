import pool from "../config/db";

const createProductsTable = async () => {
  const client = await pool.connect();
  try {
    const queryText = `
      CREATE TABLE IF NOT EXISTS products (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        price NUMERIC(10, 2) NOT NULL
      );
    `;
    await client.query(queryText);
    console.log('Tabela "products" criada com sucesso!');
  } catch (err) {
    console.error("Erro ao criar tabela:", err);
  } finally {
    client.release();
  }
};

createProductsTable().catch((err) => {
  console.error("Erro ao executar a migração:", err);
  process.exit(1);
});
