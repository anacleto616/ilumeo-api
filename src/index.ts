import { app } from './server';

const PORT = process.env.API_PORT || 3333;

app.listen(PORT, () => {
  console.log('🚀️ Server is running!');
});


