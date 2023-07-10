const esbuild = require('esbuild');
const res = esbuild.buildSync({
  entryPoints: ['./src/'],
  bundle: true,
  minify: false,
  sourcemap: false,
  format: 'cjs',
  outfile: './dist/discord-selfbot-v13.js',
  platform: 'node',
  external: ['node'],
  banner: {},
});
