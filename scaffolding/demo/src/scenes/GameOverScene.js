import { Scene } from "phaser";

export class GameOverScene extends Scene {
    end_points = 0;
    constructor() {
        super("GameOverScene");
    }

    init(data) {
        this.cameras.main.fadeIn(1000, 0, 0, 0);
        this.end_points = data.points || 0;
    }

    create() {
        // Backgrounds
        this.add.image(0, 0, "background")
            .setOrigin(0, 0);
        this.add.image(0, this.scale.height, "floor")
            .setOrigin(0, 1);

        // Rectangles to show the text
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
            this.scale.height / 2 + 105,
            this.scale.width,
            90,
            0x000000
        ).setAlpha(.8).setOrigin(0, 0.5);

        const gameover_text = this.add.bitmapText(
            this.scale.width / 2,
            this.scale.height / 2,
            "knighthawks",
            "GAME\nOVER",
            62,
            1
        )
        gameover_text.setOrigin(0.5, 0.5);
        gameover_text.postFX.addShine();

        this.add.bitmapText(
            this.scale.width / 2,
            this.scale.height / 2 + 85,
            "pixelfont",
            `YOUR POINTS: ${this.end_points}`,
            24
        ).setOrigin(0.5, 0.5);

        this.add.bitmapText(
            this.scale.width / 2,
            this.scale.height / 2 + 130,
            "pixelfont",
            "CLICK TO RESTART",
            24
        ).setOrigin(0.5, 0.5);

        // Click to restart
        this.time.addEvent({
            delay: 1000,
            callback: () => {
                this.input.on("pointerdown", () => {
                    this.scene.start("MainScene");
                });
            }
        
        })
    }
}