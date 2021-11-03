// Start Game
// function startscreen () {
//     ctx.fillStyle = "#000000"
//     ctx.font = "18px Black Ops One"
//     ctx.textAlign = "center"
// }

const game = document.getElementById('canvas')

const ctx = game.getContext('2d')

const scoreChange = document.getElementById('score')
let score = 0
let collisionCounter = 0
// startbutton = getElementById('startgame')

// const youWin = document.getElementById('winlose')
// const win = "Winner"
// const lose = "Looser"

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
        // bullet.x += 5
        bullet.x = player.x + 11
        bullet.y = player.y + 2
        console.log('pew pew')
    }
}

// const enemies = []
// function respawn() {
//     if (gameCounter < 3) {


//         // for (let i = 0; i < 6; i++) {

            

//             enemies.push(enemy)
//             enemies.push(enemy2)
//             enemies.push(enemy3)
//             enemies.push(enemy4)
//             enemies.push(enemy5)
//             enemies.push(enemy6)



//             const renderEnemy = () => {
//                 for (let j = 0; j < enemies.length; j++) {
//                     enemies[j].render()
//                 }
//             }

//             const enemyFlying = () => {
//                 for (i = 0; i < enemies.length; i++) {
//                     enemies[i].y += 10
//                 }
//             }

//         }
//     }

const explosion = () => {
    if (enemy.alive = true) {
        if (
            player.x < enemy.x + enemy.width &&
            player.x + player.width > enemy.x &&
            player.y < enemy.y + enemy.height &&
            player.y + player.height > enemy.y
        ) {
            // kill enemies
            score += 1000
            return enemy.alive = false
            // return scoreChange.innerText = score
        }  else if (
            bullet.x < enemy.x + enemy.width &&
            bullet.x + bullet.width > enemy.x &&
            bullet.y < enemy.y + enemy.height &&
            bullet.y + bullet.height > enemy.y
            ) {   // kill enemies
            score += 2000
            return enemy.alive = false
            }
    }
    
        // return scoreChange.innerText = score
    // if (
    //     player.x < enemy2.x + enemy2.width &&
    //     player.x + player.width > enemy2.x &&
    //     player.y < enemy2.y + enemy2.height &&
    //     player.y + player.height > enemy2.y
    // ) {        
    //     // kill enemies
    //     enemy2.alive = false
    //     score += 1000
    //     // score += 1000
    //     // return scoreChange.innerText = score 
    // }
    // if (
    //     bullet.x < enemy2.x + enemy2.width &&
    //     bullet.x + bullet.width > enemy2.x &&
    //     bullet.y < enemy2.y + enemy2.height &&
    //     bullet.y + bullet.height > enemy2.y
    //     ) {   // kill enemies
    //     enemy2.alive = false
    //     score += 2000
    //     // return scoreChange.innerText = score
    //     }
    // if (
    //     player.x < enemy3.x + enemy3.width &&
    //     player.x + player.width > enemy3.x &&
    //     player.y < enemy3.y + enemy3.height &&
    //     player.y + player.height > enemy3.y
    // ) {       
    //     // kill enemies
    //     enemy3.alive = false
    //     score += 1000
    //     // return scoreChange.innerText = score 
    // }
    // if (
    //     bullet.x < enemy3.x + enemy3.width &&
    //     bullet.x + bullet.width > enemy3.x &&
    //     bullet.y < enemy3.y + enemy3.height &&
    //     bullet.y + bullet.height > enemy3.y
    //     ) {   // kill enemies
    //     enemy3.alive = false
    //     score += 2000
    //     // return scoreChange.innerText = score
    //     }
    // if (
    //     player.x < enemy4.x + enemy4.width &&
    //     player.x + player.width > enemy4.x &&
    //     player.y < enemy4.y + enemy4.height &&
    //     player.y + player.height > enemy4.y
    // ) {        
    //     // kill enemies
    //     enemy4.alive = false
    //     score += 1000
    //     // return scoreChange.innerText = score 
    // } 
    // if (
    //     bullet.x < enemy4.x + enemy4.width &&
    //     bullet.x + bullet.width > enemy4.x &&
    //     bullet.y < enemy4.y + enemy4.height &&
    //     bullet.y + bullet.height > enemy4.y
    //     ) {   // kill enemies
    //     enemy4.alive = false
    //     score += 2000
    //     // return scoreChange.innerText = score
    //     }
    // if (
    //     player.x < enemy5.x + enemy5.width &&
    //     player.x + player.width > enemy5.x &&
    //     player.y < enemy5.y + enemy5.height &&
    //     player.y + player.height > enemy5.y
    // ) {        
    //     // kill enemies
    //     enemy5.alive = false
    //     score += 1000
    //     // return scoreChange.innerText = score 
    // }
    // if (
    //     bullet.x < enemy5.x + enemy5.width &&
    //     bullet.x + bullet.width > enemy5.x &&
    //     bullet.y < enemy5.y + enemy5.height &&
    //     bullet.y + bullet.height > enemy5.y
    //     ) {   // kill enemies
    //     enemy5.alive = false
    //     score += 2000
    //     // return scoreChange.innerText = score
    //     }
    // if (
    //     player.x < enemy6.x + enemy6.width &&
    //     player.x + player.width > enemy6.x &&
    //     player.y < enemy6.y + enemy6.height &&
    //     player.y + player.height > enemy6.y
    // ) {        
    //     // kill enemies
    //     enemy6.alive = false
    //     score += 1000
    //     // return scoreChange.innerText = score 
    // }
    // if (
    //     bullet.x < enemy6.x + enemy6.width &&
    //     bullet.x + bullet.width > enemy6.x &&
    //     bullet.y < enemy6.y + enemy6.height &&
    //     bullet.y + bullet.height > enemy6.y
    //     ) {   
    //         // kill enemies
    //     enemy6.alive = false
    //     score += 2000
        
        // 
    // }
    // if (
    //     enemy.alive + enemy2.alive === false
    // ) {
    //     return win.innerText = winlose
    // }
}


const gameLoop = () => {
    // clear the canvas
    ctx.clearRect(0, 0, game.width, game.height)
    // check if enemy is alive, if so, render the enemy
    if (enemy.alive) {
        enemy.render()
        enemy.x--
        // add in our detection to see if the hit has been made
        // explosion()
    }
    if (enemy2.alive) {
        enemy2.render()
        enemy2.x--
        // add in our detection to see if the hit has been made
        // explosion()
    }
    if (enemy3.alive) {
        enemy3.render()
        enemy3.x--
        // add in our detection to see if the hit has been made
        // explosion()
    }
    if (enemy4.alive) {
        enemy4.render()
        enemy4.x--
        // add in our detection to see if the hit has been made
        // explosion()
    }
    if (enemy5.alive) {
        enemy5.render()
        enemy5.x--
        // add in our detection to see if the hit has been made
        // explosion()
    }
    if (enemy6.alive) {
        enemy6.render()
        enemy6.x--
        // add in our detection to see if the hit has been made
        // explosion()
    }
    // render player and bullets
    // respawn()
    player.render()
    
    // bullet.render()
    // bullet.x++
    console.log(score)
    scoreChange.innerText = score
}
// we also need to declare a function that will stop our animation loop
let stopGameLoop = () => { clearInterval(gameInterval) }

// add event listeners for player movement
document.addEventListener('keydown', movementHandler)
document.addEventListener('keyup', bulletShoot)

// the timing function will determine how and when our game animates
let gameInterval = setInterval(gameLoop, 50)
explosion()