import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// WICHTIG: 'REPO-NAME' unten durch den exakten Namen deines GitHub-Repositories ersetzen,
// z.B. wenn dein Repo "botc-companion" heisst, dann '/botc-companion/'.
// Ohne diese Zeile findet die Seite ihre eigenen Dateien auf GitHub Pages nicht.
export default defineConfig({
  plugins: [react()],
  base: '/BOTC/',
});
