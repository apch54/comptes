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
  
export {set_dom, sets_dom, get_dom, dom_child, dom_center}