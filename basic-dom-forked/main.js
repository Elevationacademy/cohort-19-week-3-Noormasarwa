// console.log(document)

const up = document.getElementById("down")

up.onclick = function(){
    const block = document.getElementById("block")
    let up = parseInt(block.style.top) || 0
    up += 15
    
block.style.top = up + "px"
}

const down = document.getElementById("up")

down.onclick = function(){
    const block = document.getElementById("block")
    let down = parseInt(block.style.top) || 0
    down -= 15;
    block.style.top = down + "px"

}

const right = document.getElementById("right")

right.onclick = function(){
    const block = document.getElementById("block")
    let right = parseInt(block.style.left) || 0
    right += 15;
    block.style.left = right + "px"
}

const left = document.getElementById("left")

left.onclick = function(){
    const block = document.getElementById("block")
    let left = parseInt(block.style.left) || 0
    left -= 15;
    block.style.left = left + "px"
}





