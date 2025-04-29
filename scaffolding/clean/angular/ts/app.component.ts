import { Component, viewChild } from '@angular/core';
import { PhaserGame } from './phaser-game.component';
import { CommonModule } from '@angular/common';
import { EventBus } from '../game/EventBus';
import Phaser from 'phaser';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, PhaserGame],
    templateUrl: './app.component.html'
})
export class AppComponent
{

    public spritePosition = { x: 0, y: 0 };

    // New way to get the component instance
    phaserRef = viewChild.required(PhaserGame);

    constructor()
    {

        // You can now safely set up your EventBus subscriptions here
        EventBus.on('current-scene-ready', (scene: Phaser.Scene) => {
            console.log('Scene ready:', scene.scene.key);
        });

    }

    public addSprite()
    {
        const scene = this.phaserRef().scene;
        if (scene)
        {

            const x = Phaser.Math.Between(64, scene.scale.width - 64);
            const y = Phaser.Math.Between(64, scene.scale.height - 64);

            //  `add.sprite` is a Phaser GameObjectFactory method and it returns a Sprite Game Object instance
            scene.add.sprite(x, y, 'star');

        }
    }
}
