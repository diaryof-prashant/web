var randomvar1=Math.floor(Math.random()*6)+1;

var imagesource="images/dice"+randomvar1+".png";
var img1=document.querySelectorAll("img")[0];
img1.setAttribute("src",imagesource);


var randomvar2=Math.floor(Math.random()*6)+1;
var imagsource="images/dice"+randomvar2+".png";
document.querySelectorAll("img")[1].setAttribute("src",imagsource);

if (randomvar1>randomvar2)
{
    document.querySelector("h1").textContent="🎌Player1 Wins";
}
else if (randomvar2>randomvar1)
{
    document.querySelector("h1").textContent="Player2 Wins🎌";
}
else
{
    document.querySelector("h1").textContent="🎌Draw🎌";
}
