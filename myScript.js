function rowMaker(size){
    for(let i=0;i<size;i++){
        gridElement.innerHTML+=`<div id='row${i}' class='row'>HEllo</div>`;
        colMaker(size,i);
    }

}
function colMaker(size,rowIndex){
    const rowElement=document.querySelector(`#row${rowIndex}`);
    for(let j=0;j<size;j++){
        rowElement.innerHTML+=`<div id='col${j}'>HEllo</div>`;
    }
}
function gridMaker(size){
    rowMaker(size);
}

const gridElement=document.querySelector("#gridContainer");
console.log(gridElement);
gridMaker(9);

