import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  splitting: false,
  platform: 'node',
  format: ['esm'],
  target: 'node16',
  sourcemap: true,
  dts: true,
  clean: true,
})
