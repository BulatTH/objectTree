function createTree(container, data) {
    let tmp = data,
        ul = document.createElement("ul");

    

    for (let val in tmp) {
       let li = document.createElement("li"), 
           text = (Object.keys(tmp[val]).length != 0) ? val + ` [${Object.keys(tmp[val]).length}]` : val;

       li.textContent = text;
       ul.appendChild(li);

       createTree(ul, tmp[val]);
    }

    if (Object.keys(tmp).length == 0) return;
    container.appendChild(ul);
}
