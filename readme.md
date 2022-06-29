# HandlebarsPuppeteer

**Watch out with special characters**
Handlebars have known issues rendering special characters
* https://handlebarsjs.com/guide/expressions.html#literal-segments
* https://handlebarsjs.com/examples/html-escaping.html

**Installing the dependencies**
```
npm install
```

**Running the program**
```
npm run start
```

```mermaid
sequenceDiagram
main.ts ->> create-pdf.ts: createPDF()
create-pdf.ts ->> handlebars-compiled-template.ts: handlebarsCompiledTemplate()
handlebars-compiled-template.ts -->> create-pdf.ts: {compiled template}
create-pdf.ts ->> delete-previous-files.ts: await deletePreviousFiles()
create-pdf.ts ->> browser-instance: await puppeteer.launch()
browser-instance ->> page-instance: await browser.newPage();
page-instance ->> page-instance: await page.goto({compiledHtmlText})
page-instance ->> page-instance: await page.pdf(options)
Note right of page-instance: Creates the pdf file with <br/> the given options
browser-instance ->> browser-instance: await browser.close();
```

**Output Example**

<object data="https://github.com/juanwhite99/HandlebarsPuppeteer/blob/main/pdf/Report.pdf" type="application/pdf" width="700px" height="700px">
    <embed src="https://github.com/juanwhite99/HandlebarsPuppeteer/blob/main/pdf/Report.pdf">
        <p>This browser does not support PDFs. Please download the PDF to view it: <a href="https://github.com/juanwhite99/HandlebarsPuppeteer/blob/main/pdf/Report.pdf">Download PDF</a>.</p>
    </embed>
</object>
