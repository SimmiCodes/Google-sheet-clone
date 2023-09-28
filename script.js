const header = document.getElementById("header");
const body = document.getElementById("body");


for (let i = 65; i <= 90; i++) {
    let char = String.fromCharCode(i);

    const bold = document.createElement("b");
    bold.innerText = char;
    header.appendChild(bold);
}

function createAndAppendRow(rowNumber) {
    const row = document.createElement("div");
    row.className = "row";

    //inside each roe we have to create 27 cell  
    for (let i = 64; i <= 90; i++) {
        if (i === 64) {

            const b = document.createElement("b");
            b.innerText = rowNumber;
            row.appendChild(b);

        }else {
            const cell = document.createElement("div");
            cell.id=`${String.fromCharCode(i)}${rowNumber}`;
            cell.addEventListener("focus",onCellFocus);
            cell.contentEditable="true";
            row.appendChild(cell);

        }

    }

    body.appendChild(row);
}

for(let i=1;i<=100;i++){
    createAndAppendRow(i);
}



