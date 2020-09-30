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
const xMap = new Map()
const yMap = new Map()

for (let i = 0;i<=clientWidth;i++){
    xMap.set(i,false)
}
for (let i = 0;i<=clientHeight;i++){
    yMap.set(i,false)
}
function fillMap(map,min,max){
    for(let i = min;i<=max;i++){
        map.set(i,true)
    }
}

for (let item of holeDataList) {
    const {size, h, w, rotate} = item
    const hole = document.createElement('div')
    let [x, y] = [random(0, clientWidth - size), random(0, clientHeight - size)]

    while ((yMap.get(y)||yMap.get(y+size))&&(xMap.get(x)||xMap.get(x+size))){
        console.log('fuck')
        x = random(0, clientWidth - size)
        y = random(0, clientHeight - size)
    }
    fillMap(xMap,x,x+size)
    fillMap(yMap,y,y+size)
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
console.log(xMap)
console.log(yMap)
