import esbuild from 'esbuild'

// esbuild
//   .build({
//     entryPoints: ['src/components/index.jsx'],
//     outdir: 'build',
//     bundle: true,
//     format: 'esm', // Para usar import/export en Node.js
//     platform: 'node',
//     sourcemap: true,
//     loader: { '.js': 'jsx' }, // Transpila JSX
//     logLevel: 'info',
//   })
//   .catch(() => process.exit(1))

esbuild
  .build({
    entryPoints: ['src/index.ts', 'src/components/index.tsx'],
    bundle: true,
    // outfile: 'build/index.js',
    outdir: 'build',
    platform: 'node',
    target: 'node20',
    format: 'cjs',
    jsx: 'automatic',
    sourcemap: true,
    logLevel: 'info',
    allowOverwrite: true,
    // external: ["node:path", "node:fs", "node:os"],
    // external: ['path', 'fs', 'os'],
  })
  .catch(() => process.exit(1))
