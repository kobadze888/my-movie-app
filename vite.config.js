import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  // --- ЭТО ИСПРАВЛЕНИЕ ---
  // Мы явно отключаем "CSS Modules", которые коверкают имена
  // классов (добавляя префиксы типа `_grid` или хэши).
  css: {
    modules: {
      // Говорим Vite, что все CSS-файлы по умолчанию - глобальные,
      // а не "модули".
      scopeBehaviour: 'global',
      // Говорим не изменять имена классов, а использовать их "как есть"
      generateScopedName: '[local]',
    }
  }
})
