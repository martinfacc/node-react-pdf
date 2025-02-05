import esbuild from 'esbuild'

esbuild
  .build({
    entryPoints: ['src/components/index.jsx'],
    outdir: 'build',
    bundle: true,
    format: 'esm', // Para usar import/export en Node.js
    platform: 'node',
    sourcemap: true,
    loader: { '.js': 'jsx' }, // Transpila JSX
    logLevel: 'info',
  })
  .catch(() => process.exit(1))
