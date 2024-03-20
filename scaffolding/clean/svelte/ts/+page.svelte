<script lang="ts">

    import type { Scene } from "phaser";
    import PhaserGame, { type TPhaserRef } from "../game/PhaserGame.svelte";

    //  References to the PhaserGame component (game and scene are exposed)
    let phaserRef: TPhaserRef = { game: null, scene: null};

    const addSprite = () => {

        const scene = phaserRef.scene as Scene;

        if (scene)
        {

            // Add a new sprite to the current scene at a random position
            const x = Phaser.Math.Between(64, scene.scale.width - 64);
            const y = Phaser.Math.Between(64, scene.scale.height - 64);

            //  `add.sprite` is a Phaser GameObjectFactory method and it returns a Sprite Game Object instance
            scene.add.sprite(x, y, 'star');
            
        }

    }

    
</script>

<div id="app">
    <PhaserGame bind:phaserRef={phaserRef} />
    <div>
        <div>
            <button class="button" on:click={addSprite}>Add New Sprite</button>
        </div>
    </div>
</div>

<style>
    #app {
        width: 100%;
        height: 100vh;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    .button {
        width: 140px;
        margin: 10px;
        padding: 10px;
        background-color: #000000;
        color: rgba(255, 255, 255, 0.87);
        border: 1px solid rgba(255, 255, 255, 0.87);
        cursor: pointer;
        transition: all 0.3s;

        &:hover {
            border: 1px solid #0ec3c9;
            color: #0ec3c9;
        }

        &:active {
            background-color: #0ec3c9;
        }

        /* Disabled styles */
        &:disabled {
            cursor: not-allowed;
            border: 1px solid rgba(255, 255, 255, 0.3);
            color: rgba(255, 255, 255, 0.3);
        }
    }
</style>
