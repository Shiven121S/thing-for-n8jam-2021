namespace SpriteKind {
    export const Sokobox = SpriteKind.create()
    export const Target = SpriteKind.create()
    export const Particle = SpriteKind.create()
}
function Levels () {
    if (Level == 1) {
        game.splash("Press enter to restart the level at any time.")
        scene.setTileMap(img`
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 f f f f f f f f f f f 7 7 7 7 
            7 7 7 7 7 f 7 7 7 7 7 7 7 7 7 f 7 7 7 7 
            7 7 7 7 7 f 7 7 7 7 7 7 7 7 7 f 7 7 7 7 
            7 7 7 7 7 f c 7 7 4 7 7 7 3 7 f 7 7 7 7 
            7 7 7 7 7 f 7 7 7 7 7 7 7 7 7 f 7 7 7 7 
            7 7 7 7 7 f f f f f f f f f f f 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            `, TileScale.Eight)
        AddTilesAndSprites()
    } else if (Level == 2) {
        game.splash("First firewall removed.")
        game.splash("Press enter to restart the level at any time.")
        scene.setTileMap(img`
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 f f f f f f f f f f f 7 7 7 7 
            7 7 7 7 7 f 7 7 7 7 7 7 7 7 7 f 7 7 7 7 
            7 7 7 7 7 f c 7 4 7 7 f 7 7 3 f 7 7 7 7 
            7 7 7 7 7 f 7 7 7 7 7 7 7 7 7 f 7 7 7 7 
            7 7 7 7 7 f 7 7 7 7 7 7 7 7 7 f 7 7 7 7 
            7 7 7 7 7 f f f f f f f f f f f 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            `, TileScale.Eight)
        AddTilesAndSprites()
    } else if (Level == 3) {
        game.splash("Second firewall removed.")
        game.splash("Press enter to restart the level at any time.")
        scene.setTileMap(img`
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 f f f f f f f f f f f 7 7 7 7 7 7 
            7 7 7 f 7 7 7 7 7 7 7 7 f f 7 7 7 7 7 7 
            7 7 7 f c 7 4 7 7 f 7 7 7 f 7 7 7 7 7 7 
            7 7 7 f 7 7 7 7 7 f 7 f 7 f 7 7 7 7 7 7 
            7 7 7 f 7 7 f 7 7 7 7 7 7 f 7 f f f 7 7 
            7 7 7 f f f f f f f f f 7 f 7 f 3 f 7 7 
            7 7 7 7 7 7 7 7 7 7 f 7 7 f f f 7 f 7 7 
            7 7 7 7 7 7 7 7 7 7 f 7 7 7 7 7 7 f 7 7 
            7 7 7 7 7 7 7 7 7 7 f f f f f 7 7 f 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            `, TileScale.Eight)
        AddTilesAndSprites()
    } else if (Level == 4) {
        game.splash("Third firewall removed.")
        game.splash("Press enter to restart the level at any time.")
        scene.setTileMap(img`
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 f f f f 7 7 7 7 
            7 7 7 7 f f f f f f f f f 7 7 f f 7 7 7 
            7 7 7 7 f 7 f 7 7 f 7 7 7 7 7 f f 7 7 7 
            7 7 7 7 f 7 f 7 7 f 7 7 f 7 7 f f 7 7 7 
            7 7 7 7 f 7 4 7 7 f 7 7 f 7 7 7 f 7 7 7 
            7 7 7 7 f 7 f 7 7 7 7 7 f 7 7 7 f 7 7 7 
            7 7 7 7 f c 7 f 7 f 7 7 f 7 f 3 f 7 7 7 
            7 7 7 7 f f f f f f f f f f f f f 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            `, TileScale.Eight)
        AddTilesAndSprites()
    } else if (Level == 5) {
        game.splash("Fourth firewall removed.")
        game.splash("Press enter to restart the level at any time.")
        scene.setTileMap(img`
            f f f f f f f f f f f f f f f f f f f f 
            f c 7 f 7 7 f 7 7 f 7 7 f 7 7 f 7 7 f 7 
            f 7 7 f 7 7 f 7 7 f 7 7 7 7 7 f 7 7 f 7 
            f 7 7 7 7 7 f 7 7 f 7 7 f 7 7 f 7 7 f 7 
            f 7 7 f 7 7 f 7 7 f 7 7 f 7 7 f 7 7 f 7 
            f 7 7 f 7 7 7 7 7 f 7 7 f 7 7 f 7 7 f 7 
            f 7 7 f 7 7 f 7 7 f 7 7 f 7 7 7 7 7 f 7 
            f 7 7 f 7 7 f 7 7 f 7 7 f 7 7 7 7 7 f 7 
            f 7 7 f 7 7 f 7 7 f 7 7 f 7 7 f 7 7 f 7 
            f 7 7 f 7 7 f 7 7 f 7 7 f 7 7 f 7 7 f 7 
            f 7 4 f 7 7 f 7 7 f 7 7 f 7 7 f 7 7 f 7 
            f 7 7 f 7 7 f 7 7 7 7 7 f 7 7 f 7 7 f 7 
            f 7 7 f 7 7 f 7 7 7 7 7 f 7 7 f 7 7 7 3 
            f 7 7 f 7 7 f 7 7 f 7 7 f 7 7 f 7 7 f 7 
            f f f f f f f f f f f f f f f f f f f f 
            `, TileScale.Eight)
        AddTilesAndSprites()
    } else if (Level == 6) {
        game.splash("Fifth firewall removed.")
        game.splash("Press enter to restart the level at any time.")
        scene.setTileMap(img`
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 f f f f f f f f 7 7 7 7 7 7 7 7 7 7 
            7 7 f 7 7 7 7 7 7 f f f f f f f f 7 7 7 
            7 7 f c 7 7 7 7 7 f f 7 7 7 7 7 f 7 7 7 
            7 7 f 7 7 7 7 f 7 f 7 7 7 7 7 7 f 7 7 7 
            7 7 f f f f f f 7 7 7 7 7 f 7 7 f 7 7 7 
            7 7 7 7 7 7 7 f 7 4 7 f 7 7 7 7 f 7 7 7 
            7 7 7 7 7 7 7 f 7 7 7 7 7 7 7 7 f 7 7 7 
            7 7 7 7 7 7 7 f f f f f f f f 7 f 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 7 f 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 3 f 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 7 f 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            `, TileScale.Eight)
        AddTilesAndSprites()
    } else if (Level == 7) {
        game.splash("Sixth firewall removed.")
        game.splash("Press enter to restart the level at any time.")
        scene.setTileMap(img`
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 f c 7 7 7 f 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 f 7 7 7 7 f 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 f f f f 7 f 7 7 f f f f 7 7 7 7 7 7 7 
            7 7 7 7 f 7 f f f f 7 7 f f f f f f 7 7 
            7 7 7 7 f 7 7 7 7 7 7 7 f 7 7 f 7 f 7 7 
            7 7 7 7 f 7 4 f 7 7 f 7 7 7 7 7 7 f f 7 
            7 7 7 7 f 7 7 f 7 7 7 7 7 7 7 7 7 7 f 7 
            7 7 7 7 f f f f 7 7 7 f 7 7 7 7 7 7 f 7 
            7 7 7 7 7 7 7 f f f f f 7 7 f f f 7 f 7 
            7 7 7 7 7 7 7 7 7 7 7 f f f f f f 7 f 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f 7 7 f f 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 7 7 3 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f 
            `, TileScale.Eight)
        AddTilesAndSprites()
    } else if (Level == 8) {
        game.splash("Seventh firewall removed.")
        game.splash("Press enter to restart the level at any time.")
        scene.setTileMap(img`
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 f f f f 7 7 7 7 7 f f f f f f f f f f 
            7 f c 7 f 7 7 7 7 7 f 3 7 7 7 7 7 7 7 f 
            7 f f 4 f f 7 7 7 7 f f f f f f 7 7 7 f 
            7 f 7 7 7 f 7 7 7 7 7 7 7 7 7 f f 7 f f 
            7 f 7 7 7 f 7 7 7 7 f f f f 7 7 f 7 f 7 
            7 f f 7 7 f f f f f f 7 7 f 7 7 f 7 f 7 
            7 7 f 7 7 7 7 7 7 7 7 7 7 f 7 7 f 7 f 7 
            7 7 f f f f f f f f f 7 7 f 7 f f 7 f 7 
            7 7 7 7 7 7 7 7 7 7 f 7 7 f f f 7 7 f 7 
            7 7 7 7 7 7 7 7 7 7 f 7 7 7 7 7 7 7 f 7 
            7 7 7 7 7 7 7 7 7 7 f 7 7 f 7 7 7 7 f 7 
            7 7 7 7 7 7 7 7 7 7 f 7 7 f f f f f f 7 
            7 7 7 7 7 7 7 7 7 7 f f f f 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            `, TileScale.Eight)
        AddTilesAndSprites()
    } else if (Level == 9) {
        game.splash("Eighth firewall removed.")
        game.splash("Press enter to restart the level at any time.")
        scene.setTileMap(img`
            7 f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            f f c 7 f 7 7 f f f f f f f f f 7 7 7 7 
            f 7 7 4 f 7 7 f 3 7 7 7 7 7 7 f f f f f 
            f f f 7 f 7 7 f f f f f f 7 7 7 7 7 7 f 
            7 f 7 7 f f f f f f 7 7 f 7 7 f f 7 7 f 
            7 f 7 7 7 f f 7 7 f 7 7 f f f f f 7 f f 
            7 f 7 7 7 7 7 7 7 f f f f 7 7 7 f 7 f f 
            7 f f f f f f 7 7 f f f f f f f f 7 7 f 
            7 7 7 7 7 7 f f 7 f f 7 7 7 7 7 7 7 7 f 
            7 7 7 7 7 7 7 f 7 f f 7 7 f f f 7 7 f f 
            7 7 7 7 7 7 f f 7 f f f 7 7 f f f f f 7 
            7 7 7 7 7 7 f 7 7 7 f f 7 7 f 7 7 7 7 7 
            7 7 7 7 7 7 f 7 7 7 7 7 7 7 f 7 7 7 7 7 
            7 7 7 7 7 7 f f f f f 7 7 7 f 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 f f f f f 7 7 7 7 7 
            `, TileScale.Eight)
        AddTilesAndSprites()
    } else if (Level == 10) {
        game.splash("Ninth firewall removed.")
        game.splash("Press enter to restart the level at any time.")
        scene.setTileMap(img`
            f f f f f f f f f f f f 7 7 7 7 7 7 7 7 
            f 3 7 7 7 7 7 7 7 7 7 f f f f f f 7 7 7 
            f f f f f f f 7 7 7 7 7 7 7 7 7 f 7 7 7 
            7 7 f f f 7 f 7 7 f f f f f 7 7 f 7 7 7 
            7 7 f c f 7 f f f f f f f f 7 f f f f f 
            7 7 f 7 f 7 f f f f 7 7 f f 7 7 7 7 7 f 
            7 7 f 4 f 7 f 7 7 7 7 7 7 f 7 7 f 7 7 f 
            7 7 f 7 f 7 f 7 7 f 7 7 7 f f f f 7 f f 
            7 f f 7 f f f f 7 f 7 7 7 f f 7 f 7 f 7 
            7 f 7 7 f f 7 7 7 f f f 7 7 f 7 f 7 f f 
            7 f 7 7 7 7 7 7 7 f f f 7 7 f f f 7 7 f 
            7 f f f f f f 7 7 f f 7 7 7 7 7 7 7 7 f 
            7 7 7 7 7 7 f f f f f 7 7 7 f f 7 7 7 f 
            7 7 7 7 7 7 7 7 7 7 f 7 7 7 f f f f f f 
            7 7 7 7 7 7 7 7 7 7 f f f f f 7 7 7 7 7 
            `, TileScale.Eight)
        AddTilesAndSprites()
    } else if (Level == 11) {
        game.splash("Tenth firewall removed.")
        game.splash("Press enter to restart the level at any time.")
        scene.setTileMap(img`
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 f f f 7 7 7 7 7 7 7 7 7 f f f f 7 7 
            7 7 f c f f f f 7 f f f f f f 7 7 f 7 7 
            7 7 f 7 f f 7 f 7 f 7 7 7 7 7 7 7 f 7 7 
            7 7 f 7 f f 7 f f f 7 7 f f f f 7 f f 7 
            7 7 f 7 f 7 7 7 7 7 7 7 f 7 7 f 7 7 f 7 
            7 7 f 7 f 7 7 7 7 7 7 7 f 7 7 f 7 7 f 7 
            7 7 f 7 4 7 7 f f f f f f 7 7 f 7 7 f 7 
            7 7 f 7 7 7 7 f 7 7 7 7 7 7 7 f 7 7 f 7 
            7 7 f 7 f f 7 f 7 f f f f 7 f f 7 7 f 7 
            7 7 f f f f 7 f 7 f 7 7 f f f 7 7 7 f 7 
            7 f f f f f f f f f 7 7 7 7 7 7 7 7 f 7 
            7 f 3 7 7 7 7 7 7 7 7 7 f f f f 7 7 f 7 
            7 f f f f f f f f f f f f 7 7 f f f f 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            `, TileScale.Eight)
        AddTilesAndSprites()
    } else if (Level == 12) {
        game.splash("Eleventh firewall removed.")
        game.splash("Press enter to restart the level at any time.")
        scene.setTileMap(img`
            7 f f f f f 7 f f f 7 7 7 7 7 7 7 7 7 7 
            7 f c 7 7 f 7 f 7 f 7 7 7 7 f f f f f f 
            7 f 7 7 7 f 7 f 7 f f f f 7 f 7 7 7 7 f 
            7 f 7 7 7 f f f 7 f 7 7 f f f 7 7 7 7 f 
            7 f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f 
            7 f 7 4 7 f f f f f 7 7 f f 7 7 7 7 f 7 
            7 f 7 7 7 f 7 7 7 f 7 7 f f 7 7 f f f f 
            f f f f f f f 7 7 f f 7 f f f 7 7 7 7 f 
            f 7 7 f f 7 f f 7 f f f f f f 7 f f f f 
            f 7 7 7 7 7 7 f 7 f 7 7 7 7 7 7 7 7 7 f 
            f 7 f f f 7 7 f f f 7 7 7 7 7 7 7 7 f f 
            f 7 f 7 f 7 7 7 f f f f f f f f 7 7 f 7 
            f 3 f 7 f 7 7 7 7 7 7 7 7 7 7 7 7 7 f 7 
            f f f 7 f 7 7 f f f f 7 f f f f 7 f f 7 
            7 7 7 7 f f f f 7 7 f f f 7 7 f f f 7 7 
            `, TileScale.Eight)
        AddTilesAndSprites()
    } else if (Level == 13) {
        game.splash("Twelfth firewall removed.")
        game.splash("Press enter to restart the level at any time.")
        scene.setTileMap(img`
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 f c 7 f f f f f f f f f f f f f f f 7 
            7 f 7 7 7 7 7 7 7 7 f f 3 7 7 7 7 7 f 7 
            7 f 7 4 f f f 7 7 f f f f f f f 7 7 f 7 
            7 f 7 7 f 7 f 7 7 f 7 7 7 7 7 f 7 7 f 7 
            7 f 7 7 f f f 7 7 f f f f 7 7 f 7 7 f 7 
            7 f 7 7 7 7 7 7 7 7 7 7 f f f f 7 7 f 7 
            7 f f f f f 7 7 7 7 7 7 7 7 7 f 7 f f 7 
            7 7 7 7 7 f f f f 7 7 f f f f f 7 7 f 7 
            7 7 7 7 7 7 7 7 f 7 7 f f 7 7 f 7 7 f 7 
            7 7 7 7 7 7 7 7 f f 7 7 f 7 f f 7 7 f 7 
            7 7 7 7 7 7 7 7 f 7 7 7 7 7 7 7 7 7 f 7 
            7 7 7 7 7 7 7 7 f 7 7 7 7 7 7 7 7 7 f 7 
            7 7 7 7 7 7 7 7 f f f f f f f f f f f 7 
            `, TileScale.Eight)
        AddTilesAndSprites()
    } else if (Level == 14) {
        game.splash("Thirteenth firewall removed.")
        game.splash("Press enter to restart the level at any time.")
        scene.setTileMap(img`
            f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            f 7 7 f f f f f f 7 7 7 7 7 7 7 7 7 7 7 
            f 7 7 7 7 7 7 7 f 7 7 f f f f f f f f f 
            f f f f f 7 7 7 f 7 7 f 7 7 7 7 7 7 7 f 
            7 7 7 7 f 7 7 7 f 7 7 f 7 7 7 7 7 7 7 f 
            7 7 7 7 f 7 7 7 f 7 7 f 7 7 f f f 7 7 f 
            7 7 7 7 f f 7 7 f 7 7 f 7 7 f 7 f 7 7 f 
            7 7 7 7 7 f 7 7 f 7 7 f 7 7 f 7 f 7 7 f 
            7 7 7 7 7 f 7 7 f f f f 7 7 f f f 7 7 f 
            7 7 7 7 7 f 7 7 7 7 7 7 7 7 7 f f 7 7 f 
            7 7 7 7 7 f 7 7 7 7 7 7 7 7 7 f f 7 7 f 
            7 7 7 7 7 f f f f f f f f f f f f 7 7 f 
            7 f f f f f f f f f f f f f f f f 7 7 f 
            7 f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
            7 f f f f f f f f f f f f f f f f f f f 
            `, TileScale.Eight)
        AddTilesAndSprites()
    } else if (Level == 15) {
        game.splash("Fourteenth firewall removed.")
        game.splash("Press enter to restart the level at any time.")
        scene.setTileMap(img`
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 f f f f f f f f f f f f f f f f f f 7 
            7 f 7 7 7 7 7 7 f 3 7 7 7 7 7 7 7 7 f 7 
            7 f c 7 4 7 7 7 f 7 7 f f f f f f f f 7 
            7 f f f f f 7 7 f 7 7 7 7 7 7 7 7 7 f 7 
            7 f 7 7 7 7 7 7 f 7 7 7 7 7 7 7 7 7 f 7 
            7 f 7 7 f f f f f f f f f f f f 7 7 f 7 
            7 f 7 7 7 7 7 7 f 7 7 7 7 7 7 7 7 7 f 7 
            7 f 7 7 7 7 7 7 f 7 7 7 7 7 7 7 7 7 f 7 
            7 f f f f f 7 7 f 7 7 f f f f f f f f 7 
            7 f 7 7 7 7 7 7 f 7 7 7 7 7 7 7 7 7 f 7 
            7 f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 7 
            7 f 7 7 f f f f f f f f f f f f f 7 f 7 
            7 f f f f f f f f f f f f f f f f f f 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            `, TileScale.Eight)
        AddTilesAndSprites()
    } else if (Level == 16) {
        info.pauseCountup()
        Sokobox2.destroy()
        Target2.destroy()
        game.splash("Mission Complete. Game over.")
        game.splash("Finished in " + convertToText(info.getTimeElapsed() / 60) + " minutes")
        scene.setTileMap(img`
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 c 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            `, TileScale.Eight)
    }
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    moveUp()
})
function moveRight () {
    if (!(blockMenu.isMenuOpen())) {
        if (!(mySprite.isHittingTile(CollisionDirection.Right))) {
            if (Sokobox2.x == mySprite.x + 8 && Sokobox2.y == mySprite.y) {
                if (!(Sokobox2.isHittingTile(CollisionDirection.Right))) {
                    mySprite.x += 8
                    Sokobox2.x += 8
                }
            } else {
                mySprite.x += 8
            }
        }
    }
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(blockMenu.isMenuOpen())) {
        Levels()
    }
})
function moveUp () {
    if (!(blockMenu.isMenuOpen())) {
        if (!(mySprite.isHittingTile(CollisionDirection.Top))) {
            if (Sokobox2.y == mySprite.y - 8 && Sokobox2.x == mySprite.x) {
                if (!(Sokobox2.isHittingTile(CollisionDirection.Right))) {
                    mySprite.y += -8
                    Sokobox2.y += -8
                }
            } else {
                mySprite.y += -8
            }
        }
    }
}
controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    music.thump.play()
})
function SetColors () {
    color.setColor(15, color.rgb(38, 36, 51))
    color.setColor(7, color.rgb(130, 172, 149))
    color.setColor(3, color.rgb(189, 95, 149))
    color.setColor(4, color.rgb(199, 143, 82))
    color.setColor(12, color.rgb(46, 29, 48))
}
sprites.onOverlap(SpriteKind.Sokobox, SpriteKind.Target, function (sprite, otherSprite) {
    Level += 1
    console.log(Level)
    Levels()
    music.bigCrash.play()
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    moveLeft()
})
info.onCountdownEnd(function () {
    music.setVolume(0)
    mySprite.destroy()
    Sokobox2.destroy()
    Target2.destroy()
    game.splash("You hear a thudding noise of footsteps, alerting your that you have run out of time. Though your mission ins't over, you have to flee.")
    game.over(false, effects.dissolve)
})
function moveDown () {
    if (!(blockMenu.isMenuOpen())) {
        if (!(mySprite.isHittingTile(CollisionDirection.Bottom))) {
            if (Sokobox2.y == mySprite.y + 8 && Sokobox2.x == mySprite.x) {
                if (!(Sokobox2.isHittingTile(CollisionDirection.Right))) {
                    mySprite.y += 8
                    Sokobox2.y += 8
                }
            } else {
                mySprite.y += 8
            }
        }
    }
}
function fadeThing () {
    color.setColor(7, color.rgb(38, 36, 51), 750)
    timer.after(755, function () {
        color.setColor(7, color.rgb(130, 172, 149), 750)
    })
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    moveRight()
})
function AddTilesAndSprites () {
    Bricks = [img`
        7 7 7 f 7 7 7 f 
        7 7 7 f 7 7 7 f 
        f f f f f f f f 
        f 7 7 7 f 7 7 7 
        f 7 7 7 f 7 7 7 
        f f f f f f f f 
        7 7 7 f 7 7 7 f 
        f f f f f f f f 
        `, img`
        7 7 7 f 7 7 7 f 
        f 7 7 f f 7 7 f 
        f f f f f f f f 
        f 7 7 7 f 7 7 f 
        f f 7 7 f 7 7 7 
        f f f f f f f f 
        7 7 7 f 7 7 7 f 
        f f f f f f f f 
        `, img`
        7 7 7 f 7 7 7 f 
        7 7 7 f 7 7 7 f 
        f f f f f f f f 
        f 7 7 7 f 7 7 7 
        f f f f f f f f 
        7 7 7 f 7 7 7 f 
        7 7 7 f 7 7 7 f 
        f f f f f f f f 
        `]
    scene.setTile(15, Bricks._pickRandom(), true)
    scene.setTile(7, img`
        f f f f f f f f 
        f f f f f f f f 
        f f f f f f f f 
        f f f f f f f f 
        f f f f f f f f 
        f f f f f f f f 
        f f f f f f f f 
        f f f f f f f f 
        `, false)
    scene.setTile(12, img`
        f f f f f f f f 
        f f f f f f f f 
        f f f f f f f f 
        f f f f f f f f 
        f f f f f f f f 
        f f f f f f f f 
        f f f f f f f f 
        f f f f f f f f 
        `, false)
    scene.setTile(4, img`
        f f f f f f f f 
        f f f f f f f f 
        f f f f f f f f 
        f f f f f f f f 
        f f f f f f f f 
        f f f f f f f f 
        f f f f f f f f 
        f f f f f f f f 
        `, false)
    scene.setTile(3, img`
        f f f f f f f f 
        f f f f f f f f 
        f f f f f f f f 
        f f f f f f f f 
        f f f f f f f f 
        f f f f f f f f 
        f f f f f f f f 
        f f f f f f f f 
        `, false)
    scene.placeOnRandomTile(mySprite, 12)
    scene.placeOnRandomTile(Sokobox2, 4)
    scene.placeOnRandomTile(Target2, 3)
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    moveDown()
})
function moveLeft () {
    if (!(blockMenu.isMenuOpen())) {
        if (!(mySprite.isHittingTile(CollisionDirection.Right))) {
            if (Sokobox2.x == mySprite.x - 8 && Sokobox2.y == mySprite.y) {
                if (!(Sokobox2.isHittingTile(CollisionDirection.Right))) {
                    mySprite.x += -8
                    Sokobox2.x += -8
                }
            } else {
                mySprite.x += -8
            }
        }
    }
}
blockMenu.onMenuOptionSelected(function (option, index) {
    if (option == "About") {
        game.setDialogFrame(img`
            ffffffffffffffffffffffffffffffffffffffffffffffff
            f7777777777777777777777777777777777777777777777f
            f7ffffffffffffffffffffffffffffffffffffffffffff7f
            f7f777777777777777777777777777777777777777777f7f
            f7f777777777777777777777777777777777777777777f7f
            f7f77ffffffffffffffffffffffffffffffffffffff77f7f
            f7f77ffffffffffffffffffffffffffffffffffffff77f7f
            f7f77ffffffffffffffffffffffffffffffffffffff77f7f
            f7f77ffffffffffffffffffffffffffffffffffffff77f7f
            f7f77ffffffffffffffffffffffffffffffffffffff77f7f
            f7f77ffffffffffffffffffffffffffffffffffffff77f7f
            f7f77ffffffffffffffffffffffffffffffffffffff77f7f
            f7f77ffffffffffffffffffffffffffffffffffffff77f7f
            f7f77ffffffffffffffffffffffffffffffffffffff77f7f
            f7f77ffffffffffffffffffffffffffffffffffffff77f7f
            f7f77ffffffffffffffffffffffffffffffffffffff77f7f
            f7f77ffffffffffffffffffffffffffffffffffffff77f7f
            f7f77ffffffffffffffffffffffffffffffffffffff77f7f
            f7f77ffffffffffffffffffffffffffffffffffffff77f7f
            f7f77ffffffffffffffffffffffffffffffffffffff77f7f
            f7f77ffffffffffffffffffffffffffffffffffffff77f7f
            f7f77ffffffffffffffffffffffffffffffffffffff77f7f
            f7f77ffffffffffffffffffffffffffffffffffffff77f7f
            f7f77ffffffffffffffffffffffffffffffffffffff77f7f
            f7f77ffffffffffffffffffffffffffffffffffffff77f7f
            f7f77ffffffffffffffffffffffffffffffffffffff77f7f
            f7f77ffffffffffffffffffffffffffffffffffffff77f7f
            f7f77ffffffffffffffffffffffffffffffffffffff77f7f
            f7f77ffffffffffffffffffffffffffffffffffffff77f7f
            f7f77ffffffffffffffffffffffffffffffffffffff77f7f
            f7f77ffffffffffffffffffffffffffffffffffffff77f7f
            f7f77ffffffffffffffffffffffffffffffffffffff77f7f
            f7f77ffffffffffffffffffffffffffffffffffffff77f7f
            f7f77ffffffffffffffffffffffffffffffffffffff77f7f
            f7f77ffffffffffffffffffffffffffffffffffffff77f7f
            f7f77ffffffffffffffffffffffffffffffffffffff77f7f
            f7f77ffffffffffffffffffffffffffffffffffffff77f7f
            f7f77ffffffffffffffffffffffffffffffffffffff77f7f
            f7f77ffffffffffffffffffffffffffffffffffffff77f7f
            f7f77ffffffffffffffffffffffffffffffffffffff77f7f
            f7f77ffffffffffffffffffffffffffffffffffffff77f7f
            f7f77ffffffffffffffffffffffffffffffffffffff77f7f
            f7f77ffffffffffffffffffffffffffffffffffffff77f7f
            f7f777777777777777777777777777777777777777777f7f
            f7f777777777777777777777777777777777777777777f7f
            f7ffffffffffffffffffffffffffffffffffffffffffff7f
            f7777777777777777777777777777777777777777777777f
            ffffffffffffffffffffffffffffffffffffffffffffffff
            `)
        game.setDialogTextColor(7)
        game.showLongText("Made in 4 days for the first N8Jam. You play as a character that has just escaped a digital consciousness, where billions of people are currently trapped. You must solve sokoban-esque puzzles to break the firewalls and eventually break the system, and relieve the billions of souls trapped. If you fail to finish the puzzles within the time limit, you alert the system and will hear the thumping of footsteps at your door, reminding you that your mission ins't over, but have failed for now.", DialogLayout.Center)
    } else if (option == "How to play") {
        game.setDialogFrame(img`
            ffffffffffffffffffffffffffffffffffffffffffffffff
            f7777777777777777777777777777777777777777777777f
            f7ffffffffffffffffffffffffffffffffffffffffffff7f
            f7f777777777777777777777777777777777777777777f7f
            f7f777777777777777777777777777777777777777777f7f
            f7f77ffffffffffffffffffffffffffffffffffffff77f7f
            f7f77ffffffffffffffffffffffffffffffffffffff77f7f
            f7f77ffffffffffffffffffffffffffffffffffffff77f7f
            f7f77ffffffffffffffffffffffffffffffffffffff77f7f
            f7f77ffffffffffffffffffffffffffffffffffffff77f7f
            f7f77ffffffffffffffffffffffffffffffffffffff77f7f
            f7f77ffffffffffffffffffffffffffffffffffffff77f7f
            f7f77ffffffffffffffffffffffffffffffffffffff77f7f
            f7f77ffffffffffffffffffffffffffffffffffffff77f7f
            f7f77ffffffffffffffffffffffffffffffffffffff77f7f
            f7f77ffffffffffffffffffffffffffffffffffffff77f7f
            f7f77ffffffffffffffffffffffffffffffffffffff77f7f
            f7f77ffffffffffffffffffffffffffffffffffffff77f7f
            f7f77ffffffffffffffffffffffffffffffffffffff77f7f
            f7f77ffffffffffffffffffffffffffffffffffffff77f7f
            f7f77ffffffffffffffffffffffffffffffffffffff77f7f
            f7f77ffffffffffffffffffffffffffffffffffffff77f7f
            f7f77ffffffffffffffffffffffffffffffffffffff77f7f
            f7f77ffffffffffffffffffffffffffffffffffffff77f7f
            f7f77ffffffffffffffffffffffffffffffffffffff77f7f
            f7f77ffffffffffffffffffffffffffffffffffffff77f7f
            f7f77ffffffffffffffffffffffffffffffffffffff77f7f
            f7f77ffffffffffffffffffffffffffffffffffffff77f7f
            f7f77ffffffffffffffffffffffffffffffffffffff77f7f
            f7f77ffffffffffffffffffffffffffffffffffffff77f7f
            f7f77ffffffffffffffffffffffffffffffffffffff77f7f
            f7f77ffffffffffffffffffffffffffffffffffffff77f7f
            f7f77ffffffffffffffffffffffffffffffffffffff77f7f
            f7f77ffffffffffffffffffffffffffffffffffffff77f7f
            f7f77ffffffffffffffffffffffffffffffffffffff77f7f
            f7f77ffffffffffffffffffffffffffffffffffffff77f7f
            f7f77ffffffffffffffffffffffffffffffffffffff77f7f
            f7f77ffffffffffffffffffffffffffffffffffffff77f7f
            f7f77ffffffffffffffffffffffffffffffffffffff77f7f
            f7f77ffffffffffffffffffffffffffffffffffffff77f7f
            f7f77ffffffffffffffffffffffffffffffffffffff77f7f
            f7f77ffffffffffffffffffffffffffffffffffffff77f7f
            f7f77ffffffffffffffffffffffffffffffffffffff77f7f
            f7f777777777777777777777777777777777777777777f7f
            f7f777777777777777777777777777777777777777777f7f
            f7ffffffffffffffffffffffffffffffffffffffffffff7f
            f7777777777777777777777777777777777777777777777f
            ffffffffffffffffffffffffffffffffffffffffffffffff
            `)
        game.setDialogTextColor(7)
        game.showLongText("Move with WASD or the arrow keys. Use WASD or arrow keys to push the boxed virus around, and into the target to move to the next level. Attempt to avoid overlapping with the brick wall, but you can cheat if you are stuck.", DialogLayout.Center)
    } else {
        color.setColor(7, color.rgb(38, 36, 51), 750)
        timer.after(755, function () {
            Level = 1
            glitchesExe.destroy()
            mySprite = sprites.create(img`
                . 4 4 4 4 4 4 . 
                4 4 . . . . 4 4 
                4 . . 4 4 . . 4 
                4 . 4 . . 4 . 4 
                4 . 4 . . . . 4 
                4 . . 4 4 4 4 . 
                4 . . . . . . . 
                . 4 4 4 4 4 4 4 
                `, SpriteKind.Player)
            mySprite.setPosition(120, 16)
            Sokobox2 = sprites.create(img`
                . 4 . . . . 4 . 
                4 4 4 4 4 4 4 4 
                . 4 . . 4 . 4 . 
                . 4 4 4 4 4 4 . 
                . 4 4 4 4 . 4 . 
                . 4 4 4 4 4 4 . 
                4 4 4 4 4 4 4 4 
                . 4 . . . . 4 . 
                `, SpriteKind.Sokobox)
            Sokobox2.setPosition(40, 70)
            Target2 = sprites.create(img`
                3 3 3 3 3 3 3 3 
                3 . . . . . . 3 
                3 . 3 3 3 3 . 3 
                3 . 3 . . 3 . 3 
                3 . 3 . . 3 . 3 
                3 . 3 3 3 3 . 3 
                3 . . . . . . 3 
                3 3 3 3 3 3 3 3 
                `, SpriteKind.Target)
            Target2.setPosition(70, 54)
            blockMenu.closeMenu()
            blockMenu.setControlsEnabled(false)
            color.setColor(7, color.rgb(130, 172, 149), 750)
            timer.after(755, function () {
                Levels()
                info.startCountup(false)
                info.startCountdown(210)
            })
        })
    }
})
let Bricks: Image[] = []
let mySprite: Sprite = null
let Target2: Sprite = null
let Sokobox2: Sprite = null
let Level = 0
let glitchesExe: Sprite = null
console.log("x")
blockMenu.showMenu(["Play", "How to play", "About"], MenuStyle.List, MenuLocation.BottomHalf)
blockMenu.setColors(15, 7)
glitchesExe = sprites.create(img`
    ....................................................................................................................
    .............7.....7......................77........................................................................
    .7777777.....77....7......................77........................................................................
    77.....77....77..........7................77........................................................................
    7.......7....77..........7................77........................................................................
    7.......77...77....7...777777......77777..77.7777........77777.......77777...........77777....7......7......7777....
    7.......77...77....7....77.......77.......777....77.....77...77....77..............777...77....7.....7....77....77..
    7............77....7.....7.......7........77......7....7......77...7...............7......77...77...77....7......7..
    7............77....7.....7......77........77......7....7.......7...7...............7......77....7...7....77......7..
    7............77....7.....7......77........77......7....7.......7...77..............7.......7....77.7.....77......77.
    7....77777...77....7.....7......77........77......7....7.......7....77.............7.......7.....777.....77......77.
    7.......77...77....7.....7......77........77......7....777777777......777..........777777777.....77......7777777777.
    7.......77...77....7.....7......77........77......7....7................77.........7.............777.....77.........
    7.......77...77....7.....7......77........77......7....7.................77........7............77.7.....77.........
    7.......77...77....7.....7......77........77......7....7..................7........7............7...7....77.........
    7.......7....77....7.....7.......7........77......7....7..................7..777...7...........77...77....7.........
    77.....77....77....7.....77......77.......77......7....77................77..777...77..........7.....7....77........
    ..777777......7....7......7777....777777..77......7......7777777...7777777...777....77777777..77.....77....7777777..
    `, SpriteKind.Player)
glitchesExe.setPosition(75, 23)
scene.setBackgroundColor(15)
SetColors()
