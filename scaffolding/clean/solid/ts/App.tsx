import type { IRefPhaserGame } from './game/PhaserGame';
import { PhaserGame } from './game/PhaserGame';
import Phaser from 'phaser';

const App = () => {
    
    // References to the PhaserGame component (game and scene are exposed)
    let phaserRef: IRefPhaserGame;

    const addSprite = () => {

        const scene = phaserRef.scene;

        if (scene)
        {
            // Add a new sprite to the current scene at a random position
            const x = Phaser.Math.Between(64, scene.scale.width - 64);
            const y = Phaser.Math.Between(64, scene.scale.height - 64);

            //  `add.sprite` is a Phaser GameObjectFactory method and it returns a Sprite Game Object instance
            scene.add.sprite(x, y, 'star');

        }

    }

    return (
        <div id="app">
            <PhaserGame ref={(el: IRefPhaserGame) => phaserRef = el} />
            <div>
                <button class="button" onClick={addSprite}>Add New Sprite</button>
            </div>
        </div>
    );
};

export default App;
