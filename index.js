
let container=document.querySelector(".container");
let getgrid=document.querySelector(".getgrid");
container.addEventListener("mouseover",(event) => {
    let i=0;
    let color="rgba("
    while(i<4){
    a=Math.floor(Math.random()*255);
    if(i<3){
    color+=a+",";
    }else{
        color+=a+")"
    }
    i++;
    }
    console.log(color);
    event.target.style.background=color;
  })
getgrid.addEventListener("click", (event)=>{
    container.replaceChildren();
    generategrid(prompt("Enter no.of Squares in grid")-1+1);
})
function generategrid(numberofboxes=16){
    if(numberofboxes>100){
        alert("you cannot enter such high values, try numbers below 100");
        return;
    }
    let i=0;
    while(i<(numberofboxes**2)){
        const box=document.createElement("div");
        box.classList.add("box");
        box.style.minWidth=600/numberofboxes+"px";
        box.style.minHeight=600/numberofboxes+"px";
        container.appendChild(box).cloneNode(true);
        i++;
    }      
}
generategrid();