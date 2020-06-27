'use strict'




function DomElement(selector, height, width, bg, fontSize) {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;
};

DomElement.prototype.createDiv = function () {
  let div = document.createElement(this.selector);
  div.className = "alert";
  div.style.cssText = "height: " + this.height + "; background-color: " + this.bg + "; width: " + this.width + "; font-size: " + this.fontSize;
  div.innerHTML = "Всем привет! Вы прочитали важное сообщение.";
  document.body.append(div);
};

let style = new DomElement(
  'div',
  '100px',
  '100px',
  'red',
  '14px'
);

console.log(style);



style.createDiv();