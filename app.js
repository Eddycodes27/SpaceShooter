const game = document.getElementById('canvas')
// another thing we'll do here, is get the movement tracker
const moveDisplay = document.getElementById('movement')

const ctx = game.getContext('2d')

let backgroundPosition = new function() {
    this.canvas = new Image()
    this.canvas.src = "img/space.jpeg"
}
function Drawable() {
this.init = function(x, y) {
    this.x = y
    this.y = y
}
this.speed = 0;
this.canvasWidth = 0
this.canvasHeight = 0

this.draw = function() {
}

function Background() {
    this.speed = 1
    this.draw = function() {
        this.y += this.speed
        this.context.drawImage(backgroundImage.canvas, this.x, this.y)
        this.context.drawImage(backgroundImage.background, this.x, this.y - this.canvasHeight)

        if (this.y >= this.canvasHeight)
        this.y =0
    }
}
Background.prototype = new Drawable()

function Game( {
    this.init = function() {
        this.bgCanvas = documentgetElementById(canvas)
        if (this.bgCanvas.getContext) {
            this.bgContext = this.bgCanvas.getContext('2d')
            Background.prototype.context = this.bgContext
            Background.prototype.canvasWitdh = this.bgCanvas.canvasWidth
            Background.prototype.canvasHeight = this.bgCanvas.canvasHeight
            this.background = new Background()
            this.background.init(0,0)
            return true
        } else {
            return false
        }
        }
    }
    this.start = function() {
        animate()
    }
})

function animate() {
    requestAnimationFrame( animate )
    game.background.draw()
}

window.requestAnimframe = (function(){
    return window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
			window.mozRequestAnimationFrame    ||
			window.oRequestAnimationFrame      ||
			window.msRequestAnimationFrame     ||
			function(/* function */ callback, /* DOMElement */ element){
				window.setTimeout(callback, 1000 / 60);
})
}

let game =new Game()

function init() {
    if(game.init())
    game.start()
}

function Crawler(x, y, color, width, height) {
    this.x = x
    this.y = y
    this.color = color
    this.width = width
    this.height = height
    this.alive = true
    // then we declare the same type of render method
    this.render = function () {
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
}

let player = new Crawler(10, 10, '#bada55', 16, 16)
let ogre = new Crawler(200, 50, 'lightgreen', 32, 48)
console.log('this is the player', player)
console.log('this is the ogre', ogre)

let movementHandler = (e) => {
    switch(e.key.toLowerCase()) {
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

const detectHit = () => {
    // if the player's x + width or y + height hits the ogre's x+width or y+height, kill shrek
    if (
        player.x < ogre.x + ogre.width &&
        player.x + player.width > ogre.x &&
        player.y < ogre.y + ogre.height &&
        player.y + player.height > ogre.y
    ) {
        // kill shrek
        ogre.alive = false
        // end the game
        document.querySelector('#btm-right > h2').innerText = 'You Win!'
        // this is not quite where we want to stop our loop
        // stopGameLoop()
    }
}

// we're going to set up our game loop, to be used in our timing function
// set up gameLoop function, declaring what happens when our game is running
const gameLoop = () => {
    // clear the canvas
    ctx.clearRect(0, 0, game.width, game.height)
    // display relevant game state(player movement) in our movement display
    moveDisplay.innerText = `X: ${player.x}\nY: ${player.y}`
    // check if the ogre is alive, if so, render the ogre
    if (ogre.alive) {
        ogre.render()
        // add in our detection to see if the hit has been made
        detectHit()
    }
    // render our player
    player.render()
}

// we also need to declare a function that will stop our animation loop
let stopGameLoop = () => {clearInterval(gameInterval)}

// add event listener for player movement
document.addEventListener('keydown', movementHandler)
// the timing function will determine how and when our game animates
let gameInterval = setInterval(gameLoop, 70)