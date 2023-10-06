class TileMapManager {
    //pieces
    //public blackBishop: BlackBishop;
    public blackPieces: BaseSprite[];
    public whitePieces: BaseSprite[];
    public blackKing: King
    public whiteKing: King
    constructor() {

    }
    //this sets up the origional board with the starting pieces.
    public setUpBoard() {
        this.blackPieces = []
        this.whitePieces = []
        tiles.setCurrentTilemap(assets.tilemap`board`)
        //row of pawns
        this.placePawns(1)
        this.placePawns(6)
        //black peaces
        let bishop: Bishop
        bishop = new Bishop(assets.image`blackbishop`, SpriteKind.Black, 2)
        this.blackPieces.push(bishop)
        tiles.placeOnTile(bishop.sprite, tiles.getTileLocation(2, 0));

        ///let bishop2: Bishop
        bishop = new Bishop(assets.image`blackbishop`, SpriteKind.Black, 2)
        this.blackPieces.push(bishop)
        tiles.placeOnTile(bishop.sprite, tiles.getTileLocation(5, 0));

        let knight = new Knight(assets.image`blackknight`, SpriteKind.Black, 2)
        this.blackPieces.push(knight)
        tiles.placeOnTile(knight.sprite, tiles.getTileLocation(1, 0))
        knight = new Knight(assets.image`blackknight`, SpriteKind.Black, 2)
        this.blackPieces.push(knight)
        tiles.placeOnTile(knight.sprite, tiles.getTileLocation(6, 0))

        let rook = new Roock(assets.image`blackrook`, SpriteKind.Black, 2)
        this.blackPieces.push(rook)
        tiles.placeOnTile(rook.sprite, tiles.getTileLocation(0,0))
        rook = new Roock(assets.image`blackrook`, SpriteKind.Black, 2)
        this.blackPieces.push(rook)
        tiles.placeOnTile(rook.sprite, tiles.getTileLocation(7, 0))

        let queen = new Queen(assets.image`blackqueen`,SpriteKind.Black, 2)
        this.blackPieces.push(queen)
        tiles.placeOnTile(queen.sprite, tiles.getTileLocation(3, 0))
        this.blackKing = new King(assets.image`blackking`, SpriteKind.Black, 2)
        this.blackPieces.push(this.blackKing)
        tiles.placeOnTile(this.blackKing.sprite, tiles.getTileLocation(4, 0))
        this.blackKing.setUpKing()
        //whitepieces



        bishop = new Bishop(assets.image`whitebishop`, SpriteKind.White, 1)
        this.whitePieces.push(bishop)
        tiles.placeOnTile(bishop.sprite, tiles.getTileLocation(2, 7));
        bishop = new Bishop(assets.image`whitebishop`, SpriteKind.White, 1)
        this.whitePieces.push(bishop)
        tiles.placeOnTile(bishop.sprite, tiles.getTileLocation(5, 7));
        knight = new Knight(assets.image`whiteknight`, SpriteKind.White, 1)
        this.whitePieces.push(knight)
        tiles.placeOnTile(knight.sprite, tiles.getTileLocation(6, 7))
        knight = new Knight(assets.image`whiteknight`, SpriteKind.White, 1)
        this.whitePieces.push(knight)
        tiles.placeOnTile(knight.sprite, tiles.getTileLocation(1, 7))
        rook = new Roock(assets.image`whiterook`, SpriteKind.White, 1)
        this.whitePieces.push(rook)
        tiles.placeOnTile(rook.sprite, tiles.getTileLocation(7, 7))
        rook = new Roock(assets.image`whiterook`, SpriteKind.White, 1)
        this.whitePieces.push(rook)
        tiles.placeOnTile(rook.sprite, tiles.getTileLocation(0, 7))
        queen = new Queen(assets.image`whitequeen`, SpriteKind.White, 1)
        this.whitePieces.push(queen)
        tiles.placeOnTile(queen.sprite, tiles.getTileLocation(3, 7))
        this.whiteKing = new King(assets.image`whiteking`, SpriteKind.White, 1)
        this.whitePieces.push(this.whiteKing)
        tiles.placeOnTile(this.whiteKing.sprite, tiles.getTileLocation(4, 7))
        this.whiteKing.setUpKing()
    }
    private placePawns(row: number) {

        //placing the pawns
        for (let i = 0; i < 8; i++) {
            let pawn;
            if (row == 1) {
                pawn = new Pawn(assets.image`blackpawn`, SpriteKind.Black, 2);
                this.blackPieces.push(pawn);
            }
            else {

                pawn = new Pawn(assets.image`whitepawn`, SpriteKind.White, 1);
                this.whitePieces.push(pawn);
            }

            tiles.placeOnTile(pawn.sprite, tiles.getTileLocation(i, row))
        }


    }

}