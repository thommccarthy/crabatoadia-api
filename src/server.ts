import express from 'express';
import artistRoutes from './routes/artists';

const app = express();
const port = 3000;

app.use(express.json());
app.use('/artists', artistRoutes);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
