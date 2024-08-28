//my tools

const set_dom = (id = "#div", html = "") =>
    (document.querySelector(id).innerHTML = html);
  
const sets_dom = (id = "#div", html = "") =>
    (document.querySelector(id).innerHTML += html);
  
// Get dom id inner html value
const get_dom = (id = "#div") => document.querySelector(id).innerHTML;
  
// create a new child dom
const dom_child = (id = "#u1", typ = "li", txt = "") => {
    const nod = document.createElement(typ);
    const txt_nod = document.createTextNode(txt);
    nod.appendChild(txt_nod);
    document.querySelector(id).appendChild(nod);
};
  
// set the dom css and center it
const dom_center = (id) => {
    let txts = document.querySelectorAll(id);
    txts.forEach((txt) => {
      txt.style.textAlign = "center";
    });
};

// tostr return the date whith "yyyy-mm-dd" format
// d must be a date
// the first is the procedural mode : tostr(date)
// the second is the object mode :d.toStr()
const toStr = (d) => d.toISOString().substring(0, 10);
Date.prototype.toStr = function () {
  return this.toISOString().substring(0, 10);
};

// This method returns a date with  an interval of dj days with
//  the initial day :d1"
// The millisecondes of the date is modified with  number dj date : dj(+, -)
// 86.400.000 is the secondes in a day
// The first is the procedural mode : tostr(date)
// The second is the object mode :d.toStr()
const toInterval = (d1, dj) => new Date(d1.getTime() + 86400000 * dj);
Date.prototype.toInterval = function (dj) {
  return new Date(this.getTime() + 86400000 * dj);
};
  
export {set_dom, sets_dom, get_dom, dom_child, dom_center, toStr , toInterval}
