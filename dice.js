let playername = prompt("enter your Player 1 Name ");
document.querySelectorAll(".item")[0].innerHTML=playername;

let playername1 = prompt("enter your Player 2 Name ");
document.querySelectorAll(".item")[1].innerHTML=playername1;

let random1 = Math.floor (Math.random()*6)+1;
let random2 = "dice"+ random1+ ".png";

document.getElementsByClassName("image")[0].setAttribute("src",random2);


let random3 = Math.floor(Math.random()*6)+1;
let random4 = "dice"+ random3+ ".png";

document.getElementsByClassName("image")[1].setAttribute("src",random4);

if (random1>random3) {
    document.getElementsByClassName("winner")[0].innerHTML="<h1>🚩" +playername+" is winner</h1>";
}
else if (random1<random3) {
    document.getElementsByClassName("winner")[0].innerHTML="<h1>🚩" +playername1+ " is winner</h1>";
}
else if(random1==random3) {
    document.getElementsByClassName("winner")[0].innerHTML="<h1>😐 Draw</h1>";
}


