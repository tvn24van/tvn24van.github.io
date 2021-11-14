/**
 * Tworzenie tabelki na szachy
 */
document.addEventListener("DOMContentLoaded", function(event) {
    const body = document.body,
    table = document.getElementsByTagName('table')[0];

    let tilesCount = 64;
    const boardSize = 8;
    const alphabet = ["H","G","F","E","D","C","B","A"]; 

    table.cellSpacing=0;

    for(let trCount = boardSize; trCount>0;){
        const tr = table.insertRow();

        for(let tdCount = boardSize; tdCount>0;){
            const td = tr.insertCell();
            const conditionOne = trCount%2 == 0,
            conditionTwo = tilesCount%2 == 0;

            td.textContent = alphabet[tdCount-1] + trCount;
            td.className="komorka";
            
            if( (!conditionOne && conditionTwo) || (conditionOne && !conditionTwo) ){
                td.style.backgroundColor="#3C3D3B";
            }else{
                td.style.background="white";
                td.style.color="gray";
            }

            tilesCount--;
            tdCount--;
        }

        trCount--;
    }

    console.log("Zakończono tworzenie tabelki");
});
 