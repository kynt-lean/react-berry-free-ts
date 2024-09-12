import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import viteTsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [react(), viteTsconfigPaths()],
  optimizeDeps: {
    include: ['@mui/material/Tooltip', '@emotion/styled']
  }
});
