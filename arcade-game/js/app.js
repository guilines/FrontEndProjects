// Enemies our player must avoid
var Enemy = function(x,y,speed,cw) {

    if(!cw) {
        this.sprite = 'images/enemy-bug.png';
    } else {
        this.sprite = 'images/enemy-bug_180.png';
    }

    this.cw=cw;
    this.x=x;
    this.y=y;
    this.speed=speed;
    //Enemies weight
    this.deltaX=(101-20)/2;
    //Enemies height
    this.deltaY=(171-20)/2;
    console.log(this.deltaX);
    console.log(this.deltaY);

};

Enemy.prototype.update = function(dt) {
    //If the enemy moves from right to left
    if(!this.cw) {
        this.x += dt * this.speed;
        if (this.x > 505) {
            this.x = -100;
        }
    } else { // If the enemy moves from left ro right
        this.x -= dt * this.speed;
        if (this.x < -100) {
            this.x = 515;
        }
    }
    this.checkCollision();

};

Enemy.prototype.checkCollision = function() {
    //Avoid overwriting X and Y variables
    x=this.x;
    y=this.y;

    minX=x-this.deltaX;
    maxX=x+this.deltaX;
    minY=y-this.deltaY;
    maxY=y+this.deltaY;
    if ((player.x >= minX)  && (player.x <= maxX)) {
        if ((player.y >= minY) && (player.y <= maxY)) {
            player.lifes--;
            player.reset();
        }
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};



// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function() {
    this.sprite = 'images/char-boy.png';
    this.stars = 0;
    this.lifes = 3;
    this.gameOver=false;
    this.displayGameOver=false;
    this.batman=false; //Special char
    this.reset();
};



Player.prototype.reset = function () {
    //Resets char position
    this.now=0;
    this.x=400/2;
    this.y=400;
    this.step=60;
    //If there is no more hearts, resets the game
    if (!this.lifes) {
        this.gameOver=true;
        this.displayGameOver=true;
        this.stars = 0;
        this.lifes=3;
        allEnemies.length=1;
    }
};

Player.prototype.update = function() {
    //If the char reaches the water, adds a Start and reset the chars position
    if(this.y < 10) {
        this.addStar();
        this.reset();
    }

    if(this.gameOver) {
        this.now = Date.now() / 1000;
        this.gameOver=false;
    }
    if (this.now+3 <= Date.now()/1000 && this.displayGameOver) {
        console.log('entrou aqui');
        this.displayGameOver=false;
        this.gameOver=false;
    }

    if(this.stars >= 10 && !this.batman) {
        features.chars.push('images/batman.png');
        this.sprite='images/batman.png';
        this.batman=true;
    }

};

Player.prototype.addStar = function(){
    //When a star is added, another enemy is introduced to the game
    this.stars++;
    //Generates a random Y posiotion for the enemy, between 40 and 240
    yPos = Math.floor((Math.random() * (240-40+1)) + 1);
    //Generates a random velocity, between 45 and 200
    vel = Math.floor((Math.random() * (200-45+1)) + 1);
    //Generates random direction for the enemy
    cw=Math.random() >= 0.5;
    //Push it to the enemy vector
    allEnemies.push(new Enemy(0,yPos,vel,cw));

};

Player.prototype.render = function() {
    //Render Char position
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);

    //Render Lifes
    for(var l=0;l<this.lifes;l++) {
        ctx.drawImage(Resources.get('images/Heart.png'), 410-(l*10), 450);
    }

    //Render Stars
    for(var k=0;k<this.stars;k++) {
        ctx.drawImage(Resources.get('images/Star.png'), 410-(k*10),0);
    }

    //Render GameOver
    if(this.displayGameOver) {
        ctx.drawImage(Resources.get('images/Game_Over.png'), 100, 200);
    }
};

function wait(ms){
    var start = new Date().getTime();
    var end = start;
    while(end < start + ms) {
        end = new Date().getTime();
    }
}

Player.prototype.handleInput = function(key){
    //If Game Over is displayed, do not enable char movements
    if (this.displayGameOver){
        return;
    }
    //Process the keyboard movement
    switch(key) {
        case 'left':
            if(this.x>20) {
                this.x -= this.step;
            }
            break;
        case 'right':
            if(this.x<380) {
                this.x += this.step;
            }
            break;
        case 'up':
            if(this.y >20) {
                this.y -= this.step;
            }
            break;
        case 'down':
            if(this.y < 400) {
                this.y += this.step;
            }
            break;
    }

};

var Features = function() {
    this.selector='images/Selector.png';
    this.selector_x = 0;
    this.selector_y = 400;
    //Vector of available chars
    this.chars = ['images/char-boy.png',
                    'images/char-cat-girl.png',
                    'images/char-horn-girl.png',
                    'images/char-pink-girl.png',
                    'images/char-princess-girl.png'];
    this.moveout=true;
    this.charSelector=0;
};

Features.prototype.render = function () {
    //Render the Selector
    ctx.drawImage(Resources.get(this.selector),this.selector_x,this.selector_y);
};

Features.prototype.update = function() {
    //Update the char when it's inside the selector
    if(player.x <= 30 && player.y >= 370 && this.moveout) {
        this.charSelector++;
        if(this.charSelector >= this.chars.length) {
            this.charSelector=0;
        }
        player.sprite = this.chars[this.charSelector];
        this.moveout=false;
    } else if (player.x > 30 || player.y < 370){
        this.moveout = true;
    }

};

//Enemies array
var allEnemies = [];
allEnemies.push(new Enemy(0,80,90,false));

//Creates the player
var player = new Player();

//Load the features
var features = new Features();


document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});