import { Scene } from "phaser";

export class MenuScene extends Scene {
    constructor() {
        super("MenuScene");
    }

    init() {
        this.cameras.main.fadeIn(1000, 0, 0, 0);
    }

    create() {

        // Background rectangles
        this.add.rectangle(
            0,
            this.scale.height / 2,
            this.scale.width,
            120,
            0xffffff
        ).setAlpha(.8).setOrigin(0, 0.5);
        this.add.rectangle(
            0,
            this.scale.height / 2 + 85,
            this.scale.width,
            50,
            0x000000
        ).setAlpha(.8).setOrigin(0, 0.5);

        // Logo
        const logo_game = this.add.bitmapText(
            this.scale.width / 2,
            this.scale.height / 2,
            "knighthawks",
            "PHASER'S\nREVENGE",
            52,
            1
        )
        logo_game.setOrigin(0.5, 0.5);
        logo_game.postFX.addShine();

        const start_msg = this.add.bitmapText(
            this.scale.width / 2,
            this.scale.height / 2 + 85,
            "pixelfont",
            "CLICK TO START",
            24
        ).setOrigin(0.5, 0.5);
        

        // Tween to blink the text
        this.tweens.add({
            targets: start_msg,
            alpha: 0,
            duration: 800,
            ease: (value) => Math.abs(Math.round(value)),
            yoyo: true,
            repeat: -1
        });

        // Send start-game event when user clicks
        this.input.on("pointerdown", () => {
            this.game.events.emit("start-game");
        });
    }
}