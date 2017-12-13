var marked = require('./custom-marked');
var fs = require('fs');
var renderer = new marked.Renderer();

var markdownContent = fs.readFileSync('./markdown.md', 'utf8');

renderer.paragraph = function(text, rdfaTokens) {
  let rdfaTags = "";
  rdfaTokens.forEach(token => {
    rdfaTags = rdfaTags.concat(`${token.key}="${token.value}" `)
  });
  return `<p${rdfaTags}>${text}</p>\n`;
}

console.log(marked(markdownContent, { renderer: renderer }));