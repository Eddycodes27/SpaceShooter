const game = document.getElementById('canvas')
const ctx = game.getContext('2d')

const reset = document.getElementById('resetButton')
const winner = document.getElementById('over')
const gameOver = document.getElementById('over')
const scoreChange = document.getElementById('score')
let score = 0

function Character(x, y, color, width, height) {
    this.x = x
    this.y = y
    this.color = color
    this.width = width
    this.height = height
    this.alive = true
    this.render = function () {
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
}

let player = new Character(10, 70, 'gray', 16, 9)
let bullet = new Character(25, 80, 'yellow', 120, 5)
let enemy = new Character(200, 40, 'red', 15, 8)
let enemy2 = new Character(220, 50, 'blue', 15, 8)
let enemy3 = new Character(240, 60, 'cyan', 15, 8)
let enemy4 = new Character(260, 70, 'purple', 15, 8)
let enemy5 = new Character(280, 90, 'orange', 15, 8)
let enemy6 = new Character(260, 100, 'white', 15, 8)
let enemyArr = [enemy, enemy2, enemy3, enemy4, enemy5, enemy6]

let movementHandler = (e) => {
    switch (e.key.toLowerCase()) {
        case ('w'):
            // move up
            player.y -= 10
            if (player.y <= 0) {
                player.y = 0
            }
            break
        case ('a'):
            // moves left
            player.x -= 10
            if (player.x <= 0) {
                player.x = 0
            }
            break
        case ('s'):
            // move down
            player.y += 10
            if (player.y + player.height >= game.height) {
                player.y = game.height - player.height
            }
            break
        case ('d'):
            // move right
            player.x += 10
            if (player.x + player.width >= game.width) {
                player.x = game.width - player.width
            }
            break
    }
}

let bulletShoot = (e) => {
    if (e.code === 'Space') {
        bullet.render()
        bullet.x += 5
        bullet.x = player.x + 11
        bullet.y = player.y + 2
        console.log('pew pew')
    }
}
const alien = enemyArr
const explosion = (alien) => {
    if (
        player.x < alien.x + alien.width &&
        player.x + player.width > alien.x &&
        player.y < alien.y + alien.height &&
        player.y + player.height > alien.y
    ) {
        // kill enemies
        alien.alive = false
        stopGameLoop()
        gameOver.innerText = "Loser!"
        

    } if (
        bullet.x < alien.x + alien.width &&
        bullet.x + bullet.width > alien.x &&
        bullet.y < alien.y + alien.height &&
        bullet.y + bullet.height > alien.y
        ) {   // kill enemies
        alien.alive = false
        score += 2000

        }
}

const winMessage = () => {
    if (score === 12000) {
        gameOver.innerText = "Winner!"
        stopGameLoop()
    }
}

const gameLoop = () => {
    // clear the canvas
    ctx.clearRect(0, 0, game.width, game.height)
    // check if enemy is alive, if so, render the enemy

winMessage()

   if (player.alive) {
        player.render()
   }
for (let i = 0; i < enemyArr.length; i++) {
    
    if (enemyArr[i].alive) {
        enemyArr[i].render()
        enemyArr[i].x--
        explosion(enemyArr[i])
    }
}
    console.log(score)
    scoreChange.innerText = score
}
let stopGameLoop = () => {
        clearInterval(gameInterval)
        ctx.clearRect(0, 0, game.width, game.height)
    }
// add event listeners for player movement

document.addEventListener('keydown', movementHandler)
document.addEventListener('keyup', bulletShoot)

let gameInterval = setInterval(gameLoop, 50)
reset.addEventListener('click', gameLoop)
