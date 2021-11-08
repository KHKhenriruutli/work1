const form = document.querySelector("form");
const titleinput = document.querySelector("#entertitle");
const authorinput = document.querySelector("#enterauthor");
const isbninput = document.querySelector("#enterisbn");
const mycollection = document.querySelector(".mycollection");
const mytable = document.querySelector("table");


form.addEventListener("submit", addBook);
mytable.addEventListener("click", deleteBook);


function deleteBook(e) {
    if(e.target.textContent == "X") {
        if(confirm("delete this?")) {
            e.target.parentElement.remove();
        }
    }
}



function addBook(e) {
    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const td3 = document.createElement("td");
    const title = titleinput.value;
    const author = authorinput.value;
    const isbn = isbninput.value;
    const link = document.createElement("a");
    link.setAttribute("href", "#");
    link.className = "secondary-content";
    link.appendChild(document.createTextNode("X"));

    td1.appendChild(document.createTextNode(title));
    td2.appendChild(document.createTextNode(author));
    td3.appendChild(document.createTextNode(isbn));
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(link);
    mytable.append(tr);
    e.preventDefault();


}