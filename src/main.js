const {clientWidth, clientHeight} = document.documentElement
const holeDataList = [
    {size: 80, x: '20%', y: '10%'},
    {size: 100, x: '10%', y: '80%'},
    {size: 70, x: '80%', y: '10%'},
    {size: 110, x: '0', y: '60%'},
    {size: 90, x: '80%', y: '80%'},
]
for (let item of holeDataList) {
    const {size, h, w, rotate, x, y} = item
    const hole = document.createElement('div')
    hole.classList.add('hole')
    hole.classList.add('round')
    hole.style.width = `${size}px`
    hole.style.height = `${size}px`
    hole.style.left = x
    hole.style.top = y
    app.appendChild(hole)
}


class Eyes {
    constructor(eye, ball) {
        this.ball = ball
        this.eye = eye
        this.ballCenterX = Math.floor(ball.offsetWidth / 2)
        this.ballCenterY = Math.floor(ball.offsetHeight / 2)
        this.ballX = ball.getBoundingClientRect().left + this.ballCenterX
        this.ballY = ball.getBoundingClientRect().top + this.ballCenterY
        this.maxMove = Math.floor(this.eye.clientWidth / 2 - this.ballCenterX)
    }

    init() {
        this.events()
    }

    events() {
        if (clientWidth <= 500) {
            window.addEventListener('touchmove', (e) => this.touchMove(e))
        } else {
            window.addEventListener('mousemove', (e) => this.mouseMove(e))
        }
    }
    move(pointX,pointY){
        this.ball.classList.remove('center')
        let pointRadian = Math.atan2(pointX, pointY) // 弧度
        let pointRadius = Math.floor(this.radius({ //半径
            x:pointX - this.ballCenterX,
            y:pointY - this.ballCenterY
        }))

        let ballPos = this.pos_xy(Math.min(this.maxMove, pointRadius / 5), pointRadian) //位置
        this.setPos(Math.floor(ballPos.x + this.maxMove), Math.floor(ballPos.y + this.maxMove))
    }
    mouseMove(e) {
        let pointX = e.clientX - this.ballX
        let pointY = e.clientY - this.ballY
        this.move(pointX ,pointY)
    }
    touchMove(e) {
        let pointX = e.targetTouches[0].clientX - this.ballX
        let pointY = e.targetTouches[0].clientY - this.ballY
        this.move(pointX ,pointY)
    }
    setPos(left, top) {
        this.ball.style.top = `${top}px`
        this.ball.style.left = `${left}px`
    }

    pos_xy(radius, radian) {
        return {
            x: Math.floor(Math.sin(radian) * radius),
            y: Math.floor(Math.cos(radian) * radius),
        }
    }

    radius(pos) {
        const {x,y} = pos
        return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2))
    }
}


const leftEye = new Eyes(document.querySelector('.leftEye'), document.querySelector('.leftEye .ball'))
const rightEye = new Eyes(document.querySelector('.rightEye'), document.querySelector('.rightEye .ball'))
leftEye.init()
rightEye.init()