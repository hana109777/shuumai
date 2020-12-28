info.onCountdownEnd(function () {
    game.over(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.destroy()
})
let cerry: Sprite = null
game.splash("cherry pickr")
tiles.setTilemap(tiles.createTilemap(hex`10001000010d0d0d0d0d0d0d0d0d0d0d0d0d0d0b010c0c0c0c0c0c0c0c0c0c0c0c0c0c0b010c0c0c0c0c0c0c0c0c0c0c0c0c0c0b01090c0c0c0c0c0c0c0c0c0c0c0c050b01090c0c0c0c0c0c0c0c0c0c0c0c050b01090c0c0c0c0c0c0c0c0c0c0c0c050b01090c0c0c0c0c0c0c0c0c0c0c0c050b01090c0c0c0c0c0c0c0c0c0c0c0c050b01090c0c0c0c0c0c0c0c0c0c0c0c050b01090c0c0c0c0c0c0c0c0c0c0c0c050b01090c0c0c0c0c0c0c0c0c0c0c0c050b01090c0c0c0c0c0c0c0c0c0c0c0c050b01090c0c0c0c0c0c0c0c0c0c0c0c050b010d0d0d0d0d0d0d0d0d0d0d0d0d0d0b010d0d0d0d0d0d0d0d0d0d0d0d0d0d0b0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0b`, img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, [myTiles.tile0,sprites.castle.tileGrass2,sprites.castle.tilePath1,sprites.castle.tilePath2,sprites.castle.tilePath3,sprites.castle.tilePath6,sprites.castle.tilePath9,sprites.castle.tilePath8,sprites.castle.tilePath7,sprites.castle.tilePath4,sprites.castle.tileGrass1,sprites.castle.tileGrass3,sprites.castle.tilePath5,sprites.builtin.forestTiles0,sprites.builtin.forestTiles1], TileScale.Sixteen))
let mySprite = sprites.create(img`
    e e e . . . . e e e . . . . 
    c d d c . . c d d c . . . . 
    c b d d f f d d b c . . . . 
    c 3 b d d b d b 3 c . . . . 
    f b 3 d d d d 3 b f . . . . 
    e d d d d d d d d e . . . . 
    e d f d d d d f d e . b f b 
    f d d f d d f d d f . f d f 
    f b d d b b d d 2 f . f d f 
    . f 2 2 2 2 2 2 b b f f d f 
    . f b d d d d d d b b d b f 
    . f d d d d d b d d f f f . 
    . f d f f f d f f d f . . . 
    . f f . . f f . . f f . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 150, 150)
scene.cameraFollowSprite(mySprite)
info.setScore(0)
info.startCountdown(30)
game.onUpdateInterval(500, function () {
    cerry = sprites.create(img`
        . . . . . . . . . . . 6 6 6 6 6 
        . . . . . . . . . 6 6 7 7 7 7 8 
        . . . . . . 8 8 8 7 7 8 8 6 8 8 
        . . e e e e c 6 6 8 8 . 8 7 8 . 
        . e 2 5 4 2 e c 8 . . . 6 7 8 . 
        e 2 4 2 2 2 2 2 c . . . 6 7 8 . 
        e 2 2 2 2 2 2 2 c . . . 8 6 8 . 
        e 2 e e 2 2 2 2 e e e e c 6 8 . 
        c 2 e e 2 2 2 2 e 2 5 4 2 c 8 . 
        . c 2 e e e 2 e 2 4 2 2 2 2 c . 
        . . c 2 2 2 e e 2 2 2 2 2 2 2 e 
        . . . e c c e c 2 2 2 2 2 2 2 e 
        . . . . . . . c 2 e e 2 2 e 2 c 
        . . . . . . . c e e e e e e 2 c 
        . . . . . . . . c e 2 2 2 2 c . 
        . . . . . . . . . c c c c c . . 
        `, SpriteKind.Food)
    cerry.setPosition(randint(0, 160), randint(0, 120))
})
