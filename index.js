const box=document.createElement("div");
box.classList.add("box");
box.style.width(16);
box.style.height(16);
box.style.backgroundColor("blue");
let container=document.querySelector(".container");
let i=0;
while(i<20){
    container.appendChild(box);
    i++;
}