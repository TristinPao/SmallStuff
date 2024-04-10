const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d');

canvas.width = 64 * 16,
canvas.height = 64 * 9


const parsedCollisions = collisionsLevel1.parse2D()
const collisionBlocks = parsedCollisions.createObjectFrom2D()

const keys = {
    w: {
        pressed: false
    },
    a: {
        pressed: false
    },
    d: {
        pressed: false
    },
}

const backgroundLevel1 = new Sprite({
    position: {
        x: 0,
        y: 0,
    },
    imageSrc: 'Assets/img/backgroundLevel1.png'
})

const player = new Player({
    collisionBlocks,
    imageSrc: 'Assets/img/king/idle.png',
    frameRate: 11,
    animations: {
        idleRight: { 
            frameRate: 11,
            frameBuffer: 3.5,
            loop: true,
            imageSrc: 'Assets/img/king/idle.png',
        },
        idleLeft: {
            frameRate: 11,
            frameBuffer: 3.5,
            loop: true,
            imageSrc: 'Assets/img/king/idleLeft.png'
        },
        runRight: {
            frameRate: 8,
            frameBuffer: 6.5,
            loop: true,
            imageSrc: 'Assets/img/king/runRight.png'
        },
        runLeft: {
            frameRate: 8,
            frameBuffer: 6.5,
            loop: true,
            imageSrc: 'Assets/img/king/runLeft.png'
        },
        enterDoor: {
            frameRate: 8,
            frameBuffer: 6.5,
            loop: false,
            imageSrc: 'Assets/img/king/enterDoor.png',
            onComplete: () => {
                console.log('complete animation')
            }
        },
    }
})

const doors = [
    new Sprite({
        position: {
            x:767,
            y:271,
        },
        imageSrc: 'Assets/img/doorOpen.png',
        frameRate: 5,
        frameBuffer: 25,
        loop: false,
        autoplay: false
    })
]

function animate() {
    window.requestAnimationFrame(animate)

    backgroundLevel1.draw()
    collisionBlocks.forEach((collisionBlock) => {
        collisionBlock.draw()
    })

    doors.forEach((door) => {
        door.draw()
    })

    player.handleInput(keys)
    player.draw()
    player.update()

}
animate()
