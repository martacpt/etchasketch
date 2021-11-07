let cells = document.querySelectorAll('.cells')
let startOver = document.getElementById('btn')


Array.from(cells).forEach(cell => {
    cell.addEventListener('mouseover', changeColor)
})

function changeColor() {
    this.style["background-color"] = '#'+makeColor()
}

function makeColor() {
    return Math.floor(Math.random()*16777215).toString(16);
}

startOver.addEventListener('click', resetBoard)

function resetBoard() {
    Array.from(cells).forEach(cell => {
    cell.style["background-color"] ='white'
})
}