import { Game as MainGame } from './scenes/Game';
import { AUTO, {template-import-scale}Game } from 'phaser';

// Find out more information about the Game Config at:
// https://docs.phaser.io/api-documentation/typedef/types-core#gameconfig
const config = {
    type: AUTO,
    width: 1024,
    height: 768,
    parent: 'game-container',
    backgroundColor: '#028af8',{template-scale}
    scene: [
        MainGame
    ]
};

const StartGame = (parent) => {
    return new Game({ ...config, parent });
}

export default StartGame;
