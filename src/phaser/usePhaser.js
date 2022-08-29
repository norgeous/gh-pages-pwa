import { useState, useEffect } from 'react';
import Phaser from 'phaser';

function preload () {
  this.load.setBaseURL('https://labs.phaser.io');
  this.load.image('sky', 'assets/skies/space3.png');
  this.load.image('logo', 'assets/sprites/phaser3-logo.png');
  this.load.image('red', 'assets/particles/red.png');
}

function create () {
  this.add.image(400, 300, 'sky');
  var particles = this.add.particles('red');
  var emitter = particles.createEmitter({
      speed: 100,
      scale: { start: 1, end: 0 },
      blendMode: 'ADD'
  });
  var logo = this.physics.add.image(400, 100, 'logo');
  logo.setVelocity(100, 200);
  logo.setBounce(1, 1);
  logo.setCollideWorldBounds(true);
  emitter.startFollow(logo);
}

const config = {
  type: Phaser.AUTO,
  scale: {
      mode: Phaser.Scale.FIT,
      parent: 'phaser',
      autoCenter: Phaser.Scale.CENTER_BOTH,
      width: 800,
      height: 600
  },
  // width: 800,
  // height: 600,
  physics: {
    default: 'arcade',
    arcade: {
        gravity: { y: 200 }
    }
  },
  scene: {
    preload: preload,
    create: create
  }
};

const usePhaser = () => {
  const [game, setGame] = useState();

  useEffect(() => {
    setGame(new Phaser.Game(config));
  }, []);

  return { game };
};

export default usePhaser;
