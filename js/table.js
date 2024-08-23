/* //my tools

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

// fin des méthodes personnelles
*/
import * as tool from "./tools.js"

const htmlTop = () => {
  let str = `                               
            <tr class="w3-pale-blue">                
                <th>id</th>             
                <th>Date</th>   
                <th>Somme</th> 
                <th>Secteur</th> 
                <th>Mvt</th> 
                <th>Coche</th>  
                <th>Remarques</th>          
            </tr>`;
  return str;
};

const fetch_tab = (url, selector, var1, var2 = "No usefull.") => {
  const frm = new FormData();
  frm.append("x", var1);
  frm.append("y", var2);

  fetch(url, {
    method: "POST",
    body: frm,
  })
    .then((resp) => resp.json())
    .then((arr) => {
      for (let el in arr) {
        tool.dom_child(selector, "tr");
        for (let el2 in arr[el]) {
          tool.dom_child(selector, "td", arr[el][el2]);
        }
      }
    })
    .then(() => {
      // center the doms 'td'
      let doms = document.querySelectorAll("td");
      doms.forEach((d) => {
        d.style.textAlign = "center";
      });
    });
};

const tableau = (url, selector, var1) => {
  tool.set_dom(selector, htmlTop());
  // lancement initial des requetes sqlite3
  fetch_tab(url, selector, var1);
};
tableau("./php/table.php", "#table", "table");
