const {clientWidth, clientHeight} = document.documentElement
// const holeDataList = [
//     {size: 50, h: 50, w: 20},
//     {size: 60, h: 60, w: 30},
//     {size: 70, h: 70, w: 30},
//     {size: 60, h: 40, w: 60},
//     {size: 60, h: 40, w: 50},
//     {size: 50, h: 50, w: 20},
//     {size: 60, h: 60, w: 30},
//     {size: 70, h: 70, w: 30},
//     {size: 60, h: 40, w: 60},
//     {size: 60, h: 40, w: 50},
// ]
const holeDataList = [
    {size: 50, h: 50, w: 20},
    {size: 60, h: 60, w: 30},
]

function random(min, max) {
    return Math.floor(Math.random() * (max - min) + min) + 1
}

const existPosList = []
for (let item of holeDataList) {
    const {size, h, w, rotate} = item
    const hole = document.createElement('div')
    let [x, y] = [random(0, clientWidth - size), random(0, clientHeight - size)]
    for (let posItem of existPosList) {
        const {x: oldX, y: oldY, size: oldSize} = posItem
        while (
            (oldX <= x + size && x + size <= oldX + oldSize) || (oldX <= x && x <= oldX + oldSize) &&
            (oldY <= y + size && y + size <= oldY + oldSize) || (oldY <= y && x <= oldY + oldSize)
            ) {
            x = random(0, clientWidth - size)
            y = random(0, clientHeight - size)
            console.log('old')

            console.log(oldY,oldX)
            console.log('new')
            console.log(y,x)
            console.log((oldX <= x + size && x + size <= oldX + oldSize), (oldX <= x && x <= oldX + oldSize))
            console.log((oldY <= y + size && y + size <= oldY + oldSize), (oldY <= y && x <= oldY + oldSize))
        }
    }
    hole.classList.add('hole')
    hole.style.width = `${size}px`
    hole.style.height = `${size}px`
    hole.style.borderRadius = `${h}px ${w}px`
    hole.style.left = x + 'px'
    hole.style.top = y + 'px'
    existPosList.push({x, y, size})
    app.appendChild(hole)
}
console.log(existPosList)
