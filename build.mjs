import { cp, mkdir, rm } from 'node:fs/promises';
import { access } from 'node:fs/promises';

await rm('dist', { recursive: true, force: true });
await mkdir('dist', { recursive: true });
await access('index.html');
await cp('index.html', 'dist/index.html');

console.log('Built dist/index.html');
