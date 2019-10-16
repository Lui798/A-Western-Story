import { Player } from "./Player.js";
import { LevelTutorial } from "./levels/LevelTutorial.js";
import { AlexLevel } from "./levels/AlexLevel.js";
import { EthanLevel } from "./levels/EthanLevel.js";

export class Game 
{
    constructor() {
        this.MatterPhysics = Phaser.Physics.Matter.Matter;

        let levelTutorial = new LevelTutorial(this);
        let alexlevel = new AlexLevel(this);
        let ethanlevel = new EthanLevel(this);

        this.config = {
            type: Phaser.AUTO,
            //game: 'game',
            width: 800,
            height: 600,
            pixelArt: true,
            physics: {
                default: 'matter',
                matter: {
                    gravity: { y: 2},
                    debug: true
                }
            },
            scene: [ethanlevel]
        };

        let game = new Phaser.Game(this.config);
    }
}
