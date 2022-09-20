const board = document.querySelector("#board");
const buttons = board.querySelectorAll("button");

let whoIsPlaying;
let whoIsPlaying2;

const whoStartsPlaying = Math.floor(Math.random(2) * (2 - 0) - 0) + 1;

const whoPlaysNow = document.querySelector("#whoPlaysNow");

// Sorteando quem vai começar

whoPlaysNow.innerText = `Jogador ${whoStartsPlaying} começa jogando!`;

// whoIsPlaying is actually who will play

whoIsPlaying = whoStartsPlaying;

// whoIsPlaying2 is who is playing.

whoIsPlaying2 = whoIsPlaying;

const players = {
    player1:{
        type: "X"
    },

    player2:{
        type: "0"
    },
};

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const type = players[`player${whoIsPlaying}`].type;
        button.innerText = type;

        if(whoIsPlaying == 1) {
            button.setAttribute("type", type);
            whoIsPlaying += 1;
            whoIsPlaying2 = 1;
        }

        else {
            button.setAttribute("type", type);
            whoIsPlaying -= 1;
            whoIsPlaying2 = 2;
        };

        whoPlaysNow.innerText = `Vez do jogador ${whoIsPlaying}`;

        // X, Y and Diagonal lines

        const xLines = {
            xline1: Array.from(board.querySelectorAll("#btn1, #btn2, #btn3")),
            xline2: Array.from(board.querySelectorAll("#btn4, #btn5, #btn6")),
            xline3: Array.from(board.querySelectorAll("#btn7, #btn8, #btn9")),
        }; 

        const yLines = {
            yline1: Array.from(board.querySelectorAll("#btn1, #btn4, #btn7")),
            yline2: Array.from(board.querySelectorAll("#btn2, #btn5, #btn8")),
            yline3: Array.from(board.querySelectorAll("#btn3, #btn6, #btn9")),
        };

        const diagonalLines = {
            dline1: Array.from(board.querySelectorAll("#btn1, #btn5, #btn9")),
            dline2: Array.from(board.querySelectorAll("#btn3, #btn5, #btn7")),
        };

        // How many...
    
        const howManyFilledOnX = {};
        const howManyFilledOnY = {};
        const howManyFilledOnDiagonal = {};
 
        // How many on X lines

        Object.keys(xLines).forEach(line => {
            howManyFilledOnX[line] = xLines[line].filter(btn => {
                if(btn.getAttribute("type") == type) {
                    return true;
                };
            }).length;
        });

        // How many on Y lines

        Object.keys(yLines).forEach(line => {
            howManyFilledOnY[line] = yLines[line].filter(btn => {
                if(btn.getAttribute("type") == type) {
                    return true;
                };
            }).length;
        });

        // How many on Diagonal lines

        Object.keys(diagonalLines).forEach(line => {
            howManyFilledOnDiagonal[line] = diagonalLines[line].filter(btn => {
                if(btn.getAttribute("type") == type) {
                    return true;
                };
            }).length;
        });

        // Winning

        // On X

        Object.keys(howManyFilledOnX).forEach(line => {
            const howManyFilled = howManyFilledOnX[line];
            
            if(howManyFilled == 3) {
                buttons.forEach(button => {
                    button.setAttribute("disabled", "true");

                    whoPlaysNow.classList.remove("text-dark");
                    whoPlaysNow.classList.add("text-success");

                    whoPlaysNow.innerText = `Jogador ${whoIsPlaying2} ganhou!`;
                });

                xLines[line].forEach(button => {
                    button.classList.remove("btn-secondary");
                    button.classList.add("btn-success");
                });
            };
        });

        // On Y

        Object.keys(howManyFilledOnY).forEach(line => {
            const howManyFilled = howManyFilledOnY[line];
            
            if(howManyFilled == 3) {
                buttons.forEach(button => {
                    button.setAttribute("disabled", "true");

                    whoPlaysNow.classList.remove("text-dark");
                    whoPlaysNow.classList.add("text-success");

                    whoPlaysNow.innerText = `Jogador ${whoIsPlaying2} ganhou!`;  
                });

                yLines[line].forEach(button => {
                    button.classList.remove("btn-secondary");
                    button.classList.add("btn-success");
                });
            };
        });

        // On Diagonal

        Object.keys(howManyFilledOnDiagonal).forEach(line => {
            const howManyFilled = howManyFilledOnDiagonal[line];
            
            if(howManyFilled == 3) {
                buttons.forEach(button => {
                    button.setAttribute("disabled", "true");

                    whoPlaysNow.classList.remove("text-dark");
                    whoPlaysNow.classList.add("text-success");

                    whoPlaysNow.innerText = `Jogador ${whoIsPlaying2} ganhou!`;  
                });

                diagonalLines[line].forEach(button => {
                    button.classList.remove("btn-secondary");
                    button.classList.add("btn-success");
                });
            };
        });
    });
});