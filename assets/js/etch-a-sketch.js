var squareDim = createGrid();

var btn = document.querySelector ('#btn');
btn.addEventListener ('click', () =>{
    squareDim = createGrid();
});



//creates grid given number of grid squares
function createGrid(){

    clearGrid();
    var numGrid = sizeOfGrid();
    var squareDim = (650 - 0.02*numGrid*2)/numGrid;
    const maxboxes = numGrid*numGrid;
    var i = 1;

    while (i <= maxboxes){
    const container = document.querySelector('#container');

    const div = document.createElement ('div');
    
    div.classList.add('gridSquare');
    div.id = i;

    container.appendChild (div);
        i++;
    }

    const boxes = document.querySelectorAll('.gridSquare');
    boxes.forEach((box) => {
    box.addEventListener ('mouseover',(e) =>{
        var boxnum = event.currentTarget.id;
        paint (boxnum);
    });
    box.style.width = squareDim + 'px';
    box.style.height = squareDim + 'px';
});

    return squareDim;
}

//clears grid

function clearGrid(){
    var contain = document.getElementById('container');
    while (container.firstChild){
        container.removeChild(container.firstChild);
    }
}

//prompts user for grid size, returs size;
function sizeOfGrid(){
    do {
        numGrid = prompt("please enter a grid size between 1 and 100");

    } while (numGrid < 1 || numGrid >100);
   return numGrid;
}


//changes color of hovered box
function paint (boxnum){
    const drawOn = document.getElementById(boxnum);
    drawOn.id = "painted";
}

