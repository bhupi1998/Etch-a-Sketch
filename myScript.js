let idIndex=0;
let size=prompt("Enter size of grid");
function rowMaker(size){
    for(let i=0;i<size;i++){
        gridElement.innerHTML+=`<div id='row${i}' class='row'></div>`;
        colMaker(size,i);
    }

}
function colMaker(size,rowIndex){
    const rowElement=document.querySelector(`#row${rowIndex}`);
    for(let j=0;j<size;j++){
        rowElement.innerHTML+=`<div id='idIndex${idIndex}' class="column"></div>`;
        idIndex++;
    }
}
function gridMaker(size){
    rowMaker(size);
}

const gridElement=document.querySelector("#gridContainer");
gridElement.addEventListener("mouseover", function(e){
    e.target.style.background="blue";
})

const clearBtn=document.querySelector('#clearBtn');
clearBtn.addEventListener("click", function(e){
    gridElement.innerHTML=""; //clears contents of the gridElement Div
    size=prompt("Enter size of grid");
    gridMaker(size);
})

gridMaker(size);