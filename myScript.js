function gridMaker(size){
    const rowDiv = document.createElement('div');
    const colDiv = document.createElement('div');
    for(let i=0;i<size;i++){
        rowDiv.setAttribute('id',`row${i}`);
        rowDivCurr=document.querySelector(`row${i}`);
        console.log(rowDivCurr);
        gridElement.appendChild(rowDivCurr);
        for(let j=0;j<size;i++){
            colDiv.setAttribute('id',`col${j}`);
            colDivCurr=document.querySelector(`col${j}`);
            console.log(colDivCurr);
            rowDivCurr.appendChild(colDivCurr);
        }
    }

}
gridElement=document.querySelector("#gridContainer");
console.log(gridElement);
gridMaker(4);
