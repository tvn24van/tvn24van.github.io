/**
 * Tworzenie tabelki na szachy
 */

/**
 * @param table which is used to create chcess board 
 */
function createChessBoard(table){
    const alphabet = ['H','G','F','E','D','C','B','A'],
    boardSize = 8;

    let tilesCount = boardSize^2;

    table.cellSpacing=0;

    for(let trCount = boardSize; trCount>0;){
        const tr = table.insertRow();

        for(let tdCount = boardSize; tdCount>0;){
            const td = tr.insertCell();

            td.textContent = alphabet[tdCount-1] + trCount;
            td.className = "komorka";

            tilesCount--;
            tdCount--;
        }

        trCount--;
    }
}

document.addEventListener("DOMContentLoaded", async function() {
    const debug = false,
    main = document.getElementsByTagName("main")[0];

    if(debug)
        for(let i=1; i<100; i++)
            main.appendChild(document.createElement('table'));

    const tables = document.getElementsByTagName('table'),
    startTime = new Date().getTime();

    for(const table of tables)
        createChessBoard(table);

    const executionTime = new Date().getTime() - startTime;
    console.log("Zakończono tworzenie "+tables.length +" szachownic/y w czasie "+executionTime+" ms");
});


 