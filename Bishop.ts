class Bishop extends BaseSprite {

    public moveableSquares: tiles.Location[]
    public moveableSquares2: tiles.Location[]
    constructor(image: Image, spriteKind: any, colour: number) {
        super(image, spriteKind, colour);
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

        //testing
        //tiles.placeOnTile(this.sprite, tiles.getTileLocation(this.sprite.tilemapLocation().column, 2))

        for (let i = 1; i <= 8; i++) {
 
            let location = tiles.getTileLocation(this.sprite.tilemapLocation().column + i, this.sprite.tilemapLocation().row + i)

            console.log(tiles.tileAtLocationIsWall(tiles.getTileLocation(this.sprite.tilemapLocation().column + i, this.sprite.tilemapLocation().row + i)))
            if (!tiles.tileAtLocationIsWall(tiles.getTileLocation(this.sprite.tilemapLocation().column + i, this.sprite.tilemapLocation().row + i))) {
                this.moveableSquares.push((tiles.getTileLocation(this.sprite.tilemapLocation().column + i, this.sprite.tilemapLocation().row + i)))




            }
            else {

                let squares = this.moveableSquares
                console.log(this.moveableSquares)
                spr.forEach(function (element): void {



                    if ((element.x == location.x) && element.y == location.y) {
                        squares.push(location)
                    }

                })
                this.moveableSquares = squares
                break;
            }
        }

        for (let i = -1; i >= -7; i -= 1) {
            let location = tiles.getTileLocation(this.sprite.tilemapLocation().column + i, this.sprite.tilemapLocation().row + i)
            if (!tiles.tileAtLocationIsWall(tiles.getTileLocation(this.sprite.tilemapLocation().column + i, this.sprite.tilemapLocation().row + i))) {
                this.moveableSquares.push(tiles.getTileLocation(this.sprite.tilemapLocation().column + i, this.sprite.tilemapLocation().row + i))

            }
            else {
                let squares = this.moveableSquares
                spr.forEach(function (element): void {



                    if ((element.x == location.x) && element.y == location.y) {
                        squares.push(location)
                    }

                })
                this.moveableSquares = squares
                break;
            }
        }

        for(let i = 1; i<8; i++)
        {
            let location = tiles.getTileLocation(this.sprite.tilemapLocation().column + i, this.sprite.tilemapLocation().row - i)
            if (!tiles.tileAtLocationIsWall(tiles.getTileLocation(this.sprite.tilemapLocation().column + i, this.sprite.tilemapLocation().row - i))) {
                this.moveableSquares.push(tiles.getTileLocation(this.sprite.tilemapLocation().column + i, this.sprite.tilemapLocation().row - i))

            }
            else {
                let squares = this.moveableSquares
                spr.forEach(function (element): void {



                    if ((element.x == location.x) && element.y == location.y) {
                        squares.push(location)
                    }

                })
                this.moveableSquares = squares
                break;
            }
        }

        for (let i = 1; i < 8; i++) {
            let location = tiles.getTileLocation(this.sprite.tilemapLocation().column - i, this.sprite.tilemapLocation().row + i)
            if (!tiles.tileAtLocationIsWall(tiles.getTileLocation(this.sprite.tilemapLocation().column - i, this.sprite.tilemapLocation().row + i))) {
                this.moveableSquares.push(tiles.getTileLocation(this.sprite.tilemapLocation().column - i, this.sprite.tilemapLocation().row + i))

            }
            else {
                let squares = this.moveableSquares
                spr.forEach(function (element): void {



                    if ((element.x == location.x) && element.y == location.y) {
                        squares.push(location)
                    }

                })
                this.moveableSquares = squares
                break;
            }
        }







        this.moveableSquares.forEach(function (element): void {
            let indicator: Indicator = new Indicator();
            spritest.push(indicator)
            tiles.placeOnTile(indicator.sprite, element);
        })

        //console.log("end of story")
        return spritest;

        //testing

        //tiles.placeOnTile(this.sprite, this.moveableSquares[0]);
    }
}

      //  if (!tiles.tileAtLocationIsWall(tiles.getTileLocation(this.sprite.tilemapLocation().column, this.sprite.tilemapLocation().row + value)))
      //  {
      //      this.moveableSquares.push(tiles.getTileLocation(this.sprite.tilemapLocation().column, this.sprite.tilemapLocation().row + value))
     //   }

     //   if (!tiles.tileAtLocationIsWall(tiles.getTileLocation(this.sprite.tilemapLocation().column, this.sprite.tilemapLocation().row + (value*2))) && ((this.sprite.tilemapLocation().row == 1 ) || (this.sprite.tilemapLocation().row == 5)))
   //     {
      //      this.moveableSquares.push(tiles.getTileLocation(this.sprite.tilemapLocation().column, this.sprite.tilemapLocation().row + (value*2)))
  //      }

  //      if (tiles.tileAtLocationIsWall(tiles.getTileLocation(this.sprite.tilemapLocation().column + 1, this.sprite.tilemapLocation().row + value)))
   //     {
    //        this.moveableSquares.push(tiles.getTileLocation(this.sprite.tilemapLocation().column + 1, this.sprite.tilemapLocation().row + value))
    //    }

     //   if (tiles.tileAtLocationIsWall(tiles.getTileLocation(this.sprite.tilemapLocation().column - 1, this.sprite.tilemapLocation().row + value)))
    //    {
     //       this.moveableSquares.push(tiles.getTileLocation(this.sprite.tilemapLocation().column - 1, this.sprite.tilemapLocation().row + value))
     //   }

// Add your code here
