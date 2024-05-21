import { Game as MainGame } from './scenes/Game';
import { AUTO, {template-import-scale}Game } from 'phaser';

//  Find out more information about the Game Config at:
//  https://newdocs.phaser.io/docs/3.70.0/Phaser.Types.Core.GameConfig
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

{template-export}
