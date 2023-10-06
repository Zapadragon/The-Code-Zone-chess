abstract class BaseSprite {
    public image: Image;
    public spriteKind: any
    public sprite: Sprite
    public colour: number;

    constructor(image: Image, spriteKind: any, colour: number) {
        this.image = image
        this.spriteKind = spriteKind
        this.colour = colour;
        this.createSprite();
        //console.log(this.sprite);
    }

    public createSprite() {
        this.sprite = sprites.create(this.image, this.spriteKind)
        this.sprite.data = this;
        console.log(this.sprite);
    }
}



class Indicator extends BaseSprite {
    constructor() {
        super(assets.image`indicator`, SpriteKind.Food, 3)
    }
}
