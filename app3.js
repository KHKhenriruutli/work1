const form = document.querySelector("form");
const titleinput = document.querySelector("#entertitle");
const authorinput = document.querySelector("#enterauthor");
const isbninput = document.querySelector("enterisbn");
const mycollection = document.querySelector(".mycollection");
const mytable = document.querySelector("table");


form.addEventListener("submit", addthings);

function addthings(e) {
    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const td3 = document.createElement("td");
    const li1 = document.createElement("li");
    const li2 = document.createElement("li");
    const li3 = document.createElement("li");
    const title = titleinput.value;
    const author = authorinput.value;
    const isbn = isbninput.value;
    li1.appendChild(document.createTextNode(title));
    li2.appendChild(document.createTextNode(author));
    li3.appendChild(document.createTextNode(isbn));
    td1.appendChild(li1);
    td2.appendChild(li2);
    td3.appendChild(li3);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    mytable.append(tr);



}