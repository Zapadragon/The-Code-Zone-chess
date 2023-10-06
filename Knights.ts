class Knight extends BaseSprite {
    public moveableSquares: tiles.Location[];
    public spr: Sprite[]
    constructor(image: Image, spriteKind: any, colour: number) {
        super(image, spriteKind, colour);
        this.moveableSquares = []
        if (this.spriteKind == SpriteKind.Black)
         {
            this.spr = sprites.allOfKind(SpriteKind.White);
          }
          if (this.spriteKind == SpriteKind.White)
          {
            this.spr = sprites.allOfKind(SpriteKind.Black);
          }
    }

    public registerMoveableSquares(value: number): Indicator[] {
        this.moveableSquares = []
        let spritesl: Indicator[] = []
        let location: tiles.Location
        let row = this.sprite.tilemapLocation().row
        let column = this.sprite.tilemapLocation().column
        //let spr: Sprite[];
        location = tiles.getTileLocation(column + 2, row + 1);
        if (!tiles.tileAtLocationIsWall(tiles.getTileLocation(column + 2, row + 1))) {

            this.moveableSquares.push(location);
        }
        else {

            let squares = this.moveableSquares
            console.log(this.moveableSquares)
            this.spr.forEach(function (element): void {



                if ((element.x == location.x) && element.y == location.y) {
                    squares.push(location)
                    console.log("squares = ")
                    console.log(squares)
                }

            })
            this.moveableSquares = squares
        }

        location = tiles.getTileLocation(column + 2, row - 1)
        if (!tiles.tileAtLocationIsWall(location)) {
            this.moveableSquares.push(location);

        }
        else {

            let squares = this.moveableSquares
            console.log(this.moveableSquares)
            this.spr.forEach(function (element): void {



                if ((element.x == location.x) && element.y == location.y) {
                    squares.push(location)
                    console.log("squares = ")
                    console.log(squares)
                }

            })
            this.moveableSquares = squares
        }
        location = tiles.getTileLocation(column - 2, row + 1)
        if (!tiles.tileAtLocationIsWall(location)) {
            this.moveableSquares.push(location);
        }
        else {

            let squares = this.moveableSquares
            console.log(this.moveableSquares)
            this.spr.forEach(function (element): void {



                if ((element.x == location.x) && element.y == location.y) {
                    squares.push(location)
                    console.log("squares = ")
                    console.log(squares)
                }

            })
            this.moveableSquares = squares
        }
        location = tiles.getTileLocation(column - 2, row - 1)
        if (!tiles.tileAtLocationIsWall(location)) {
            this.moveableSquares.push(location);
        }
        else {

            let squares = this.moveableSquares
            console.log(this.moveableSquares)
            this.spr.forEach(function (element): void {



                if ((element.x == location.x) && element.y == location.y) {
                    squares.push(location)
                    console.log("squares = ")
                    console.log(squares)
                }

            })
            this.moveableSquares = squares
        }
        location = tiles.getTileLocation(column + 1, row + 2)
        if (!tiles.tileAtLocationIsWall(location)) {
            this.moveableSquares.push(location);
        }
        else {

            let squares = this.moveableSquares
            console.log(this.moveableSquares)
            this.spr.forEach(function (element): void {



                if ((element.x == location.x) && element.y == location.y) {
                    squares.push(location)
                    console.log("squares = ")
                    console.log(squares)
                }

            })
            this.moveableSquares = squares
        }
        location = tiles.getTileLocation(column - 1, row + 2)
        if (!tiles.tileAtLocationIsWall(location)) {
            this.moveableSquares.push(location);
        }
        else {

            let squares = this.moveableSquares
            console.log(this.moveableSquares)
            this.spr.forEach(function (element): void {



                if ((element.x == location.x) && element.y == location.y) {
                    squares.push(location)
                    console.log("squares = ")
                    console.log(squares)
                }

            })
            this.moveableSquares = squares
        }
        location = tiles.getTileLocation(column + 1, row - 2)
        if (!tiles.tileAtLocationIsWall(location)) {
            this.moveableSquares.push(location);
        }
        else {

            let squares = this.moveableSquares
            console.log(this.moveableSquares)
            this.spr.forEach(function (element): void {



                if ((element.x == location.x) && element.y == location.y) {
                    squares.push(location)
                    console.log("squares = ")
                    console.log(squares)
                }

            })
            this.moveableSquares = squares
        }
        location = tiles.getTileLocation(column - 1, row - 2)
        if (!tiles.tileAtLocationIsWall(location)) {
            this.moveableSquares.push(location);
        }
        else {

            let squares = this.moveableSquares
            console.log(this.moveableSquares)
            this.spr.forEach(function (element): void {



                if ((element.x == location.x) && element.y == location.y) {
                    squares.push(location)
                    console.log("squares = ")
                    console.log(squares)
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
    }
}

