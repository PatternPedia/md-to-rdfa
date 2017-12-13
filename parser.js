var marked = require('./custom-marked');
var fs = require('fs');
var renderer = new marked.Renderer();

var markdownContent = fs.readFileSync('./markdown.md', 'utf8');

renderer.paragraph = function(text, rdfaTokens) {
  let paragraphBegining = '<p '
  rdfaTokens.forEach(token => {
    paragraphBegining = paragraphBegining.concat(token.key + '="' + token.value + '" ')
  });
  paragraphBegining = paragraphBegining.concat('>')
  console.log(paragraphBegining);
  return paragraphBegining + text + '</p>\n';
}

marked(markdownContent, { renderer: renderer });