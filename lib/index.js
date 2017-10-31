var Selector = function(str) {
  var elements = [];
  elements = document.querySelectorAll(str);
  return elements;
}
