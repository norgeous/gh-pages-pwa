import { useState, useEffect } from 'react';
import Phaser from 'phaser';

const width = window.innerWidth * window.devicePixelRatio;
const height = window.innerHeight * window.devicePixelRatio;

function preload () {
  this.load.setBaseURL('https://labs.phaser.io');
  this.load.image('sky', 'assets/skies/space3.png');
  this.load.image('logo', 'assets/sprites/phaser3-logo.png');
  this.load.image('red', 'assets/particles/fire2.png');
}

function create () {
  this.add.image(width/2, height/2, 'sky');
  const particles = this.add.particles('red');
  const emitter = particles.createEmitter({
    speed: 100,
    scale: { start: 1, end: 0 },
    blendMode: 'ADD'
  });
  const logo = this.physics.add.image(width/2, height/4, 'logo');
  logo.setVelocity(100, 200);
  logo.setBounce(1, 1);
  logo.setCollideWorldBounds(true);
  emitter.startFollow(logo);

  const logo2 = this.physics.add.image(width/4, height/4, 'logo');
  logo2.setVelocity(400, 800);
  logo2.setBounce(.9, .9);
  logo2.setCollideWorldBounds(true);
}

const config = {
  type: Phaser.AUTO,
  scale: {
    mode: Phaser.Scale.FIT,
    parent: 'phaser',
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width,
    height,
  },
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
