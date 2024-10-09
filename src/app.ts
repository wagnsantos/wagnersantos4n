import express from 'express';
import productRouter from './routes/productRoutes';

const app = express();
app.use(express.json());

// Usando o router de produtos
app.use('/api', productRouter);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
