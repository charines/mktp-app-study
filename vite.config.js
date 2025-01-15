import { defineConfig, loadEnv } from 'vite';
import { config } from "dotenv"
import react from '@vitejs/plugin-react';

config();

export default defineConfig(({ mode }) => {
  // Carrega as variáveis de ambiente
  const env = loadEnv(mode, process.cwd());

  return {
    define: {
      'process.env': process.env
    },
    plugins: [react()],
    base: env.VITE_BASE_PATH || '/',
  };
});
