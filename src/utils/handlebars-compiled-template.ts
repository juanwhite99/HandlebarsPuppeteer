import { data } from '../data/data';
import handlebars from 'handlebars';
import * as fs from 'fs';
import * as path from 'path';

const templateHtml = fs.readFileSync(path.join(process.cwd(), './src/templates/template.hbs'), 'utf8');
const template = handlebars.compile(templateHtml);
export const handlebarsCompiledTemplate = async () => template({data});
