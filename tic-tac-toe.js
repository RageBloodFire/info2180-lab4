//function to display grid boxes
function grid(){
    
    let boxes = document.getElementById("board").children;
    
    //loop for each box
    for(let i=0;i<boxes.length;i++){
        boxes[i].className="square";
    }
}

window.onload=grid;

