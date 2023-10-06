class Picker extends BaseSprite {
    constructor() {
        super(assets.image`picker`, SpriteKind.Picker, 3);
        controller.moveSprite(this.sprite);
        this.sprite.z = 2;
    }
}