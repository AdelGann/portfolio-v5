import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import { amazingRouterPlugin } from '@amazing-router/core'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    amazingRouterPlugin(),
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],
})
