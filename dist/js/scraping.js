const puppeteer = require('puppeteer');
const fs = require('fs');

dataObject = {};

(async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.tracing.start({
    path: 'trace.json',
    categories: ['devtools.timeline']
  })
  await page.goto('http://robertshogan.com/')

// execute standard javascript in the context of the page.
const h1Count = await page.$$eval('h1', h1s => h1s.length);
const h2Count = await page.$$eval('h2', h2s => h2s.length);
const h3Count = await page.$$eval('h3', h3s => h3s.length);
const h4Count = await page.$$eval('h4', h4s => h4s.length);
const h5Count = await page.$$eval('h5', h5s => h5s.length);
const h6Count = await page.$$eval('h6', h6s => h6s.length);

let metaDescription = await page.$eval("head > meta[name='description']", element => element.content);
let h1 = await page.evaluate(el => el.innerHTML, await page.$('h1'));
console.log(h1)

let cleanedMetaDescription = metaDescription.replace(/[\W_]+/g," ")
let keywords = cleanedMetaDescription.split(' ');

// keywords.forEach(element => {
//     console.log(element)
// });

const pageContent = await page.$eval('body, footer', el => el.textContent);
const result = pageContent.split(/\s+/).filter(text => keywords.includes(text.toLowerCase()));

var counts = {};
result.forEach(function(x) { counts[x] = (counts[x] || 0)+1; });

let dataObject = { 'metaDescription': metaDescription, 'keywordCount': counts, keywords, 'headingCount': {h1Count, h2Count, h3Count, h4Count, h5Count, h6Count }};
dataObject = JSON.stringify(dataObject);

// console.log(dataObject)

// for(let i = 0; i < dataObject.length; i++) {
//     dataObject = JSON.stringify( data = { 'uniqueID': i, 'imageURL': imgs[i], 'name': title[i] });
//     console.log(dataObject)
// }
  
  fs.writeFile('data/seo.json', dataObject, (err) => {
    if (err) {
        throw err;
    }
        console.log("JSON data is saved.");
    });
  
  await page.tracing.stop()
  await browser.close()
})()