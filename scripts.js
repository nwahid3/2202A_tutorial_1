let nextPlayer = 'X'; // takes a value of either 'X' or 'O' according to the game turns

//initalize the game by setting the value inside next-lbl to nextPlayer
document.getElementById('next-lbl').innerText = nextPlayer;

//This call will create the buttons needed for the gameboard.
createGameBoard()

function createGameBoard()
{

    //cells named c1 to c9, so build each id and add a button to it
    for(let i = 1; i<= 9; i++)
    {
        let cell = document.getElementById('c'+ i);
        let btn = document.createElement('button');
        btn.innerText = '[ ]';
        cell.appendChild(btn);
    } 

    let btns = document.querySelectorAll('button');

    for (let i=0; i<btns.length; i++)
    {
        //when clicked, pass the click event to takeCell so it knows which button was pressed
        btns[i].addEventListener('click',(event)=>{takeCell(event);})
    }
}

// This function will be used to respond to a click event on any of the board buttons.
function takeCell(event)
{

    // event.target is the button that was clicked
    let btn = event.target;
    btn.innerText = '[' + nextPlayer + ']';

    // Switch turns between X and O
    nextPlayer = (nextPlayer === 'X') ? 'O' : 'X';
    document.getElementById('next-lbl').innerText = nextPlayer;

    // disable the button once its been clicked once (not repeating moves)
    btn.disabled = true;

    // Check if the game is over
    if (isGameOver())
    {
        //uses innerHTML to render as a header
        document.getElementById('game-over-lbl').innerHTML = '<h1>Game Over </h1>';
    }

}

function isGameOver()
{
    let btns = document.querySelectorAll('button');

    //if any button can still be pressed, game is not over yet
    for(let i = 0; i < btns.length; i++)
    {
        if(!btns[i].disabled)
        {
            return false;
        }
    }

    return true;
}
