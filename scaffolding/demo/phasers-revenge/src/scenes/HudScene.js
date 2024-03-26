import { Scene } from "phaser";

// The HUD scene is the scene that shows the points and the remaining time.
export class HudScene extends Scene {
    
    remaining_time = 0;

    remaining_time_text;
    points_text;

    constructor() {
        super("HudScene");
    }

    init(data) {
        this.cameras.main.fadeIn(1000, 0, 0, 0);
        this.remaining_time = data.remaining_time;
    }

    create() {
        this.points_text = this.add.bitmapText(10, 10, "pixelfont", "POINTS:0000", 24);
        this.remaining_time_text = this.add.bitmapText(this.scale.width - 10, 10, "pixelfont", `REMAINING:${this.remaining_time}s`, 24)
            .setOrigin(1, 0);
    }

    update_points(points) {
        this.points_text.setText(`POINTS:${points.toString().padStart(4, "0")}`);
    }

    update_timeout(timeout) {
        this.remaining_time_text.setText(`REMAINING:${timeout.toString().padStart(2, "0")}s`);
    }
}