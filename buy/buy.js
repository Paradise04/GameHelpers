

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr)}

function makeSpans (selector) {
  var _document$querySelect = document.querySelectorAll(selector)
  var _document$querySelect2 = _toArray(_document$querySelect)
  var elements = _document$querySelect2.slice(0)
  
  return elements.map(function (element) {
    var text = element.innerText.split('')
    var spans = text.map(function (letter){
      return '<span>' + letter + '</span>'
    }).join('')
    return element.innerHTML = spans
  })
}

makeSpans('h1')
