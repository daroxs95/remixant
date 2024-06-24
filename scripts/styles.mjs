import fs from 'fs';
import { extractStyle } from '@ant-design/static-style-extract';

const outputPath = './app/antd.css';

const css = extractStyle();

fs.writeFileSync(outputPath, css);