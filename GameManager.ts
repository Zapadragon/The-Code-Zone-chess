
//this class manages game events
class GameManager {

    public tileMapManager: TileMapManager;
    private whiteGo: boolean
    private blackGo: boolean
    private picker: Picker
    private squaresRegistered: boolean;
    private squares: Sprite[];
    private canGo: boolean
    constructor() {

        this.squares = []
        this.setUpBoard();
        this.whiteGo = true;
        this.placeWalls(this.whiteGo, this.blackGo);
        this.picker = new Picker()
        this.inputs()
        this.pickerOverlaps()
        this.spriteOverlaps()

    }
    //this calls the function in the tileMapManager
    public setUpBoard() {

        this.tileMapManager = new TileMapManager();
        this.tileMapManager.setUpBoard();
    }


    //when calling this function, pass in whiteGo for black and blackGo for white
    private placeWalls(black: boolean, white: boolean) {
        for (let i = 0; i < 9; i++) {
            for (let v = 0; v < 9; v++) {
                tiles.setWallAt(tiles.getTileLocation(i,v), false)
            }
        }


        this.tileMapManager.blackPieces.forEach(element => {
            let location = element.sprite.tilemapLocation()
            tiles.setWallAt(location, true);
        });
        this.tileMapManager.whitePieces.forEach(element => {
            let location = element.sprite.tilemapLocation()
            tiles.setWallAt(location, true);
        });

        this.canGo = true

        //testing

        //this.tileMapManager.whitePieces[0].sprite.data.registerMoveableSquares(-1)


    }

    private placeWallsTwo(piece: Sprite, black: boolean) {
        if (black) {
            this.tileMapManager.blackPieces.removeElement(piece.data)
            piece.destroy()
            // let index: number
            //this.tileMapManager.blackPieces.every(function (element, number): boolean{
            //     if (element.sprite == piece) {


            //       return false;
            //        index = number
            //    }

            //   return true;

            // })

            //  this.tileMapManager.blackPieces.removeAt(index)

            //  this.tileMapManager.blackPieces.forEach(element => {
            //      let location = element.sprite.tilemapLocation()
            //     tiles.setWallAt(location,false );
            //  });
            ///  this.tileMapManager.whitePieces.forEach(element => {
            //      let location = element.sprite.tilemapLocation()
            //     tiles.setWallAt(location,true);
            // });
            //this.placeWalls(false, true)
        }

        else {
            this.tileMapManager.whitePieces.removeElement(piece.data)
            piece.destroy()
            //let index: number
            //this.tileMapManager.whitePieces.every(function (element, number): boolean{
            //   if (element.sprite == piece) {


            //      return false;
            //      index = number
            //   }

            // return true;
            //})

            //  this.tileMapManager.whitePieces.removeAt(index)

            this.tileMapManager.whitePieces.forEach(element => {
                let location = element.sprite.tilemapLocation()
                tiles.setWallAt(location, false);
            });
            this.tileMapManager.blackPieces.forEach(element => {
                let location = element.sprite.tilemapLocation()
                tiles.setWallAt(location, true);
            });

            //this.placeWalls(false, true)
        }

    }

    private inputs() {
        this.picker.sprite.setFlag(SpriteFlag.GhostThroughWalls, true)



    }

    private spriteOverlaps() {
        let removedPiece: Sprite
        sprites.onOverlap(SpriteKind.Black, SpriteKind.White, function (black, white): void {
            if (this.blackGo) {  //this means white has just moved
                this.placeWallsTwo(black, true)
                if (black == this.tileMapManager.blackKing.sprite) {
                    game.over(true)
                }


            }

            else {
                //this.tileMapManager.whitePieces.removeElement(white.data)
                this.placeWallsTwo(white, false)
                if (white == this.tileMapManager.whiteKing.sprite) {
                    game.over(false)
                }

                

            }
        })

        sprites.onOverlap(SpriteKind.Black, SpriteKind.Black, function(rook, king): void{
            tiles.placeOnTile(rook, tiles.getTileLocation(4,0))
        })
        sprites.onOverlap(SpriteKind.White, SpriteKind.White, function (rook, king): void {
            tiles.placeOnTile(rook, tiles.getTileLocation(4, 7))
        })
    }

    private pickerOverlaps()//: tiles.Location
    {
        let squares: Indicator[]
        let squaresRegistered: boolean;
        let registeredPiece: any
        squaresRegistered = false
        squares = []
        sprites.onOverlap(SpriteKind.Picker, SpriteKind.White, function (picker, other) {

            if (controller.A.isPressed() && (!squaresRegistered) && (this.whiteGo)) {
                registeredPiece = other.data;
                let a = other.data.registerMoveableSquares(-1)
                squares = (a)
                squaresRegistered = true;
            }

        })


        sprites.onOverlap(SpriteKind.Picker, SpriteKind.Black, function (picker, other) {

            if (controller.A.isPressed() && (!squaresRegistered) && (this.blackGo)) {
                registeredPiece = other.data;
                let a = other.data.registerMoveableSquares(1)
                squares = (a)
                squaresRegistered = true;
            }

        })


        sprites.onOverlap(SpriteKind.Picker, SpriteKind.Food, function (picker, indicator) {
            if (controller.B.isPressed() && (this.canGo)) {
                this.canGo = false
                if (squaresRegistered) {
                    squares.forEach((element) => {
                        //squares.removeElement(element);
                        element.sprite.destroy()
                        squaresRegistered = false
                    })
                }
                tiles.placeOnTile(registeredPiece.sprite, indicator.tilemapLocation())
                this.whiteGo = !this.whiteGo
                this.blackGo = !this.blackGo

                this.placeWalls(this.whiteGo, this.blackGo)
            }
        })


        controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
            if (squaresRegistered) {
                squaresRegistered = false
                squares.forEach((element) => {
                    //squares.removeElement(element);
                    element.sprite.destroy()

                })
            }

        })

    }


}
