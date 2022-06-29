import puppeteer, { PDFOptions } from 'puppeteer';
import { handlebarsCompiledTemplate } from './handlebars-compiled-template';
import { deletePreviousFiles } from './delete-previous-files';
import * as path from 'path';

export async function createPDF() {
	const html = await handlebarsCompiledTemplate();
	var pdfPath = path.join('pdf', `Report.pdf`);

	await deletePreviousFiles();

	var options: PDFOptions = {
		format: 'a4',
		displayHeaderFooter: false,
		printBackground: true,
		omitBackground: true,
		landscape: false,
		path: pdfPath,
		margin: { top: 0, bottom: 0, left: 0, right: 0 }
	}

	const browser = await puppeteer.launch({
		args: ['--no-sandbox'],
		headless: true
	});

	var page = await browser.newPage();

	await page.goto(`data:text/html;charset=UTF-8,${html}`, {
		waitUntil: 'networkidle0'
	});

	await page.pdf(options);
	await browser.close();
}
