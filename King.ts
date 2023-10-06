class King extends BaseSprite {
    public moveableSquares: tiles.Location[];
    public spr: Sprite[]
    private canCastleLeft: boolean;
    private canCastleRight: boolean
    private spawnRow: number
    constructor(image: Image, spriteKind: any, colour: number) {
        super(image, spriteKind, colour);
        this.moveableSquares = []
        if (this.spriteKind == SpriteKind.Black) {
            this.spr = sprites.allOfKind(SpriteKind.White);
        }
        if (this.spriteKind == SpriteKind.White) {
            this.spr = sprites.allOfKind(SpriteKind.Black);
        }
        
        this.canCastleLeft= false
        this.canCastleRight = false
    }

    public setUpKing()
    {
        this.spawnRow= this.sprite.tilemapLocation().row
    }

    public registerMoveableSquares(value: number): Indicator[] {
        // console.log("console.log")
        this.moveableSquares = []

        let spritest: Indicator[] = []
        let spr: Sprite[];
        if (this.spriteKind == SpriteKind.Black) {
            spr = sprites.allOfKind(SpriteKind.White);
        }
        else {
            spr = sprites.allOfKind(SpriteKind.Black);
        }

        let location = tiles.getTileLocation(this.sprite.tilemapLocation().column +1, this.sprite.tilemapLocation().row)
        if (!tiles.tileAtLocationIsWall(location)) {
            this.moveableSquares.push(location)




        }
        else {

            let squares = this.moveableSquares
            //console.log("squares = ")
            //console.log(squares)
           // console.log("moveablesquares = ")
           // console.log(this.moveableSquares)
            spr.forEach(function (element): void {



                if ((element.x == location.x) && element.y == location.y) {
                    squares.push(location)
                    console.log("squares = ")
                    console.log(squares)
                }

            })
            this.moveableSquares = squares
        }

        location = tiles.getTileLocation(this.sprite.tilemapLocation().column - 1, this.sprite.tilemapLocation().row)
        if (!tiles.tileAtLocationIsWall(location)) {
            console.log("push")
            this.moveableSquares.push(location)




        }
        else {

            let squares = this.moveableSquares
            //console.log("squares = ")
            //console.log(squares)
            // console.log("moveablesquares = ")
            // console.log(this.moveableSquares)
            spr.forEach(function (element): void {



                if ((element.x == location.x) && element.y == location.y) {
                    squares.push(location)
                    console.log("squares = ")
                    console.log(squares)
                }

            })
            this.moveableSquares = squares
        }

        location = tiles.getTileLocation(this.sprite.tilemapLocation().column , this.sprite.tilemapLocation().row + 1)
        if (!tiles.tileAtLocationIsWall(location)) {
            console.log("push")
            this.moveableSquares.push(location)




        }
        else {

            let squares = this.moveableSquares
            //console.log("squares = ")
            //console.log(squares)
            // console.log("moveablesquares = ")
            // console.log(this.moveableSquares)
            spr.forEach(function (element): void {



                if ((element.x == location.x) && element.y == location.y) {
                    squares.push(location)
                    console.log("squares = ")
                    console.log(squares)
                }

            })
            this.moveableSquares = squares
        }

        location = tiles.getTileLocation(this.sprite.tilemapLocation().column, this.sprite.tilemapLocation().row - 1)
        if (!tiles.tileAtLocationIsWall(location)) {
            console.log("push")
            this.moveableSquares.push(location)




        }
        else {

            let squares = this.moveableSquares
            //console.log("squares = ")
            //console.log(squares)
            // console.log("moveablesquares = ")
            // console.log(this.moveableSquares)
            spr.forEach(function (element): void {



                if ((element.x == location.x) && element.y == location.y) {
                    squares.push(location)
                    console.log("squares = ")
                    console.log(squares)
                }

            })
            this.moveableSquares = squares
        }

        location = tiles.getTileLocation(this.sprite.tilemapLocation().column + 1, this.sprite.tilemapLocation().row + 1)
        if (!tiles.tileAtLocationIsWall(location)) {
            console.log("push")
            this.moveableSquares.push(location)




        }
        else {

            let squares = this.moveableSquares
            //console.log("squares = ")
            //console.log(squares)
            // console.log("moveablesquares = ")
            // console.log(this.moveableSquares)
            spr.forEach(function (element): void {



                if ((element.x == location.x) && element.y == location.y) {
                    squares.push(location)
                    console.log("squares = ")
                    console.log(squares)
                }

            })
            this.moveableSquares = squares
        }

        location = tiles.getTileLocation(this.sprite.tilemapLocation().column + 1, this.sprite.tilemapLocation().row -1)
        if (!tiles.tileAtLocationIsWall(location)) {
            console.log("push")
            this.moveableSquares.push(location)




        }
        else {

            let squares = this.moveableSquares
            //console.log("squares = ")
            //console.log(squares)
            // console.log("moveablesquares = ")
            // console.log(this.moveableSquares)
            spr.forEach(function (element): void {



                if ((element.x == location.x) && element.y == location.y) {
                    squares.push(location)
                    console.log("squares = ")
                    console.log(squares)
                }

            })
            this.moveableSquares = squares
        }

        location = tiles.getTileLocation(this.sprite.tilemapLocation().column - 1, this.sprite.tilemapLocation().row + 1)
        if (!tiles.tileAtLocationIsWall(location)) {
            console.log("push")
            this.moveableSquares.push(location)




        }
        else {

            let squares = this.moveableSquares
            //console.log("squares = ")
            //console.log(squares)
            // console.log("moveablesquares = ")
            // console.log(this.moveableSquares)
            spr.forEach(function (element): void {



                if ((element.x == location.x) && element.y == location.y) {
                    squares.push(location)
                    console.log("squares = ")
                    console.log(squares)
                }

            })
            this.moveableSquares = squares
        }

        location = tiles.getTileLocation(this.sprite.tilemapLocation().column - 1, this.sprite.tilemapLocation().row -1)
        if (!tiles.tileAtLocationIsWall(location)) {
            console.log("push")
            this.moveableSquares.push(location)




        }
        else {

            let squares = this.moveableSquares
            //console.log("squares = ")
            //console.log(squares)
            // console.log("moveablesquares = ")
            // console.log(this.moveableSquares)
            spr.forEach(function (element): void {



                if ((element.x == location.x) && element.y == location.y) {
                    squares.push(location)
                    console.log("squares = ")
                    console.log(squares)
                }

            })
            this.moveableSquares = squares
        }

        for (let i = 1; i < 3; i++) {
            if (this.sprite.tilemapLocation().row == this.spawnRow) {
                console.log("hi")
                location = tiles.getTileLocation(this.sprite.tilemapLocation().col + i, this.sprite.tilemapLocation().row)
                if (!tiles.tileAtLocationIsWall(location)) {
                    this.canCastleRight = true
                    console.log(this.canCastleRight)
                }
                else {
                    this.canCastleRight = false
                    console.log(this.canCastleRight)
                }
            }
        }

        for (let i = -1; i > -4; i--) {
            if (this.sprite.tilemapLocation().row == this.spawnRow) {
                location = tiles.getTileLocation(this.sprite.tilemapLocation().col + i, this.sprite.tilemapLocation().row)
                if(!tiles.tileAtLocationIsWall(location))
                {
                    this.canCastleLeft =true
                    console.log(this.canCastleLeft)
                }
                else{
                    this.canCastleLeft= false
                    console.log(this.canCastleLeft)
                }
            }
        }

        if(this.canCastleLeft)
        {
            if(this.spriteKind == SpriteKind.Black)
            {
                this.moveableSquares.push(tiles.getTileLocation(0,0))
            }
            else{
                this.moveableSquares.push(tiles.getTileLocation(0,7))
            }
            
        }
        if(this.canCastleRight){
            if (this.spriteKind == SpriteKind.Black) {
                this.moveableSquares.push(tiles.getTileLocation(0, 7))
            }
            else {
                this.moveableSquares.push(tiles.getTileLocation(7, 7))
            }
        }

        this.moveableSquares.forEach(function (element): void {
            let indicator: Indicator = new Indicator();
            spritest.push(indicator)
            tiles.placeOnTile(indicator.sprite, element);
        })

        //console.log("end of story")
        return spritest;

    }

    
}