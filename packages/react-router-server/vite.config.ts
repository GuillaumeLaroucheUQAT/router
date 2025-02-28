import { defineConfig, mergeConfig } from 'vitest/config'
import { tanstackBuildConfig } from '@tanstack/config/build'
import react from '@vitejs/plugin-react'

const config = defineConfig({
  plugins: [react()],
})

export default mergeConfig(
  config,
  tanstackBuildConfig({
    entry: [
      './src/client.tsx',
      './src/server.tsx',
      './src/client-runtime.tsx',
      './src/server-runtime.tsx',
      './src/server-handler.tsx',
    ],
    srcDir: './src',
  }),
)
