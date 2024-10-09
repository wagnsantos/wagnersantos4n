import express from "express";
import userRoutes from "./routes/userRoutes";
import productRoutes from "./routes/productRoutes";
import userProductRoutes from "./routes/userProductRoutes";

const app = express();
app.use(express.json());

app.use("/users", userRoutes);
app.use("/products", productRoutes);
app.use("/user-products", userProductRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
