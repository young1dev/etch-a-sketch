const container = document.getElementById("grid-container");

//alert("Hello");

function createGrid() {
let boxNum = parseInt(prompt("How many box do you want"));
    if(boxNum) {
        let boxSize = 100 / boxNum;
        for(let i=0; i<boxNum*boxNum; i++){
         
            const gridBox = document.createElement("div");
            gridBox.style.width = `${boxSize}%`;
        gridBox.style.paddingTop = `${boxSize}%`;
            gridBox.className="grid-box"
            
            let r = Math.floor(Math.random()*255)
let g = Math.floor(Math.random()*255)
let b = Math.floor(Math.random()*255)
let a = Math.random()*1

gridBox.style.backgroundColor=`rgb(${r}, ${g}, ${b})`
            
            container.appendChild(gridBox)
      }
}else {
        alert("Please enter a valid number");
}
}

document.addEventListener("DOMContentLoaded", () => {
createGrid()

    
const resetBtn = document.querySelector('.reset-btn');


resetBtn.addEventListener('click', () => {
   
  container.innerHTML = "";
  createGrid()
});
    
    
    container.addEventListener("mouseover", (e) => {
       const bgColor= e.target.style.backgroundColor;
       
        let numString = bgColor.replace('rgb(', '').replace(')', '')
        let numArr = numString.split(', ')
        
            let r=parseInt(numArr[0])
            let g=parseInt(numArr[1])
            let b=parseInt(numArr[2])
        let currentOpacity = 0.2
        let a = currentOpacity + Math.random()*0.1
        e.target.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${a})`;
        
    })
})

