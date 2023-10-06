class Pawn extends BaseSprite {

    public moveableSquares: tiles.Location[];
    constructor(image: Image, spriteKind: any, colour: number) {
        super(image, spriteKind, colour);
        this.moveableSquares = []
    }

    public registerMoveableSquares(value: number): Indicator[] {
        let spr: Sprite[];
        if (this.spriteKind == SpriteKind.Black) {
            spr = sprites.allOfKind(SpriteKind.White);
        }
        else {
            spr = sprites.allOfKind(SpriteKind.Black);
        }
        this.moveableSquares = []
        let spritesl: Indicator[] = []
        //testing
        //tiles.placeOnTile(this.sprite, tiles.getTileLocation(this.sprite.tilemapLocation().column, 2))

        if (!tiles.tileAtLocationIsWall(tiles.getTileLocation(this.sprite.tilemapLocation().column, this.sprite.tilemapLocation().row + value))) {
            this.moveableSquares.push(tiles.getTileLocation(this.sprite.tilemapLocation().column, this.sprite.tilemapLocation().row + value))
        }

        if (!tiles.tileAtLocationIsWall(tiles.getTileLocation(this.sprite.tilemapLocation().column, this.sprite.tilemapLocation().row + (value * 2))) && ((this.sprite.tilemapLocation().row == 1) || (this.sprite.tilemapLocation().row == 6))) {
            this.moveableSquares.push(tiles.getTileLocation(this.sprite.tilemapLocation().column, this.sprite.tilemapLocation().row + (value * 2)))
        }

        if (tiles.tileAtLocationIsWall(tiles.getTileLocation(this.sprite.tilemapLocation().column + 1, this.sprite.tilemapLocation().row + value))) {


            let squares = this.moveableSquares

            spr.forEach(function (element): void {



                if ((element.x == tiles.getTileLocation(this.sprite.tilemapLocation().column + 1, this.sprite.tilemapLocation().row + value).x) && element.y == tiles.getTileLocation(this.sprite.tilemapLocation().column + 1, this.sprite.tilemapLocation().row + value).y) {
                    squares.push(tiles.getTileLocation(this.sprite.tilemapLocation().column + 1, this.sprite.tilemapLocation().row + value))

                }

            })
            this.moveableSquares = squares


        }

        if (tiles.tileAtLocationIsWall(tiles.getTileLocation(this.sprite.tilemapLocation().column - 1, this.sprite.tilemapLocation().row + value))) {
            let squares = this.moveableSquares

            spr.forEach(function (element): void {



                if ((element.x == tiles.getTileLocation(this.sprite.tilemapLocation().column - 1, this.sprite.tilemapLocation().row + value).x) && element.y == tiles.getTileLocation(this.sprite.tilemapLocation().column - 1, this.sprite.tilemapLocation().row + value).y) {
                    squares.push(tiles.getTileLocation(this.sprite.tilemapLocation().column - 1, this.sprite.tilemapLocation().row + value))

                }

            })
            this.moveableSquares = squares


        }



        this.moveableSquares.forEach(function (element): void {
            let indicator: Indicator = new Indicator();
            spritesl.push(indicator)
            tiles.placeOnTile(indicator.sprite, element);
        })

        return spritesl;
        //testing

        //tiles.placeOnTile(this.sprite, this.moveableSquares[0]);
    }
}