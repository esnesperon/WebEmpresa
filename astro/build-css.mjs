import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import postcss from 'postcss';
import tailwindcss from '@tailwindcss/postcss';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const inputPath = path.join(__dirname, './src/styles/global.css');
const outputDir = path.join(__dirname, './public');
const outputPath = path.join(__dirname, './public/styles.css');

const input = fs.readFileSync(inputPath, 'utf8');
const result = await postcss([tailwindcss()]).process(input, { from: inputPath });

fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(outputPath, result.css);
console.log('CSS built successfully: ' + outputPath);
