var mathSymbols = require('katex/src/symbols').math;
var metadata = require('json!latex-metadata');

// Render the logo
var element = document.getElementsByClassName('logo')[0];
katex.render(element.textContent, element);

// These are the groups that we, well, don't render
var dontRender = ['spacing', 'op', 'accent'];

// Keep track of undocumented things
var undocumented = [];

function renderGroup(className, group) {
  var renderList = [];

  for (var prop in mathSymbols) {
    if(!mathSymbols.hasOwnProperty(prop)) { continue; }

    var val = mathSymbols[prop];
    if (dontRender.indexOf(val.group) !== -1) { continue; }

    if(!metadata[prop]) {
      undocumented.push(prop);
      continue;
    }

    if (metadata[prop].category !== group) { continue; }

    renderList.push(prop);
  }

  var element = document.getElementsByClassName(className)[0];
  element.textContent = renderList.join(' ');
  katex.render(element.textContent, element);
}

renderGroup('relation-symbols', 'relation symbols');
renderGroup('binary-operators', 'binary operators');
renderGroup('set-logic-notation', 'set or logic notation');
renderGroup('greek-letters', 'greek letters');
renderGroup('delimiters', 'delimiters');
renderGroup('other', 'other');
renderGroup('trig', 'trigonometric functions');
