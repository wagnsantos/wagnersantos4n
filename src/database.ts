import { Pool } from 'pg';

// Substitua pela sua string de conexão do Render.com
const connectionString = 'postgresql://wagner4na_user:00XbPgzfNaAhfiIGnwRJRmsl7UalkXU1@dpg-cr7qs33tq21c73aio9qg-a.oregon-postgres.render.com/wagner4na';

const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false, // Permite conexões SSL não autorizadas
  }
});

export default pool;