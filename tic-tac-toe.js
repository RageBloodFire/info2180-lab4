//function to display grid boxes
function grid() {
    
    let boxes = document.getElementById("board").children;
    
    //loop for each box
    for (let i=0;i<boxes.length;i++){
        
        boxes[i].setAttribute("class","square");
        boxes[i].setAttribute("onClick","place()");
        boxes[i].setAttribute("onmouseover","hoverStyle()");
        boxes[i].setAttribute("onmouseout","hoverOff()");
        //boxes[i].setAttribute("onClick","winner()");
        
        
    }
    
//    winner();
}

window.onload=grid;

//global variable
var x_o =0;


//box functions
function place() {
    
    //box assignment
    let boxDem = window.document.getElementById("board").children;
    

    //box checking
    for(var i=0; i<boxDem.length; i++) {
        let box = boxDem[i];

        box.onclick = function() {
            
            if(x_o%2 == 0 && box.innerHTML == ""){
                box.innerHTML = "X";
                box.classList.add("square","X");
                winner();
                x_o +=1;
            }
            else if(x_o%2 == 1 && box.innerHTML == ""){
                box.innerHTML = "O";;
                box.classList.add("square","O");
                winner();
                x_o +=1;
            }
        };

    }
    
}


//hover function
function hoverStyle() {
    
    //box assignment
    let boxDem = window.document.getElementById("board").children;

    //box checking
    for(var i=0; i<boxDem.length; i++) {
        let box = boxDem[i];

        box.onmouseover = function() {
           
            box.classList.add("hover");
           
        };

    }
    
}


//hover-off function
function hoverOff() {
    
    //box assignment
    let boxDem = window.document.getElementById("board").children;

    //box checking
    for(var i=0; i<boxDem.length; i++) {
        let box = boxDem[i];

        box.onmouseout = function() {
           
            box.classList.remove("hover");
           
        };

    }
    
}


//which winner fucntion- determines whether X or O won
function whichWin() {
    
    //div assignment
    let stat = document.getElementById("status");
    
    //box assignment
    let boxDem = window.document.getElementById("board").children;
    
    for(var i=0;i<boxDem.length;i++) {
        
        boxDem[i].removeAttribute("onClick");
        
    }
    
 
    //checking who won
    if(x_o%2==0) {
        
        stat.innerHTML = " ";
        stat.innerHTML = "Congratulations! X is the Winner!";
        stat.classList.add("you-won");
    }
    else if(x_o%2==1) {
        
        stat.innerHTML = " ";
        stat.innerHTML = "Congratulations! O is the Winner!";
        stat.classList.add("you-won");
    }
    
}


//winner function
function winner() {
    
    //box assignment
    let boxDem = window.document.getElementById("board").children;
    
    var box1 = boxDem[0], box2 = boxDem[1], box3 = boxDem[2],
        box4 = boxDem[3], box5 = boxDem[4], box6 = boxDem[5],
        box7 = boxDem[6], box8 = boxDem[7], box9 = boxDem[8];
    
    //check who won
    if(box1.innerHTML !== "" && box1.innerHTML === box2.innerHTML && box1.innerHTML === box3.innerHTML) {
        
        whichWin();
    }
    else if(box1.innerHTML !== "" && box1.innerHTML === box4.innerHTML && box1.innerHTML === box7.innerHTML) {
        
        whichWin();
    }
    else if(box1.innerHTML !== "" && box1.innerHTML === box5.innerHTML && box1.innerHTML === box9.innerHTML) {
        
        whichWin();
    }
    else if(box2.innerHTML !== "" && box2.innerHTML === box5.innerHTML && box2.innerHTML === box8.innerHTML) {
        
        whichWin();
    }
    else if(box3.innerHTML !== "" && box3.innerHTML === box6.innerHTML && box3.innerHTML === box9.innerHTML) {
        
        whichWin();
    }
    else if(box3.innerHTML !== "" && box3.innerHTML === box5.innerHTML && box3.innerHTML === box7.innerHTML) {
        
        whichWin();
    }
    else if(box4.innerHTML !== "" && box4.innerHTML === box5.innerHTML && box4.innerHTML === box6.innerHTML) {
        
        whichWin();
    }
    else if(box7.innerHTML !== "" && box7.innerHTML === box8.innerHTML && box7.innerHTML === box9.innerHTML) {
        
        whichWin();
    }
    
}
