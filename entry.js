document.write("It works.");

jsPDF = require('jspdf-yworks');
svg2pdf = require('svg2pdf.js');

const pdf = new jsPDF('p', 'pt', [795, 924]);
const svg = require('!raw!./file.svg');
const div = document.createElement('div');
div.innerHTML = svg;
const svgElemnt = div.firstChild;
// render the svg element
svg2pdf(svgElemnt, pdf, {
  xOffset: 0,
  yOffset: 0,
  scale: 1,
});
pdf.save('ok.pdf');
