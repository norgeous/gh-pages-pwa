function preload () {
  this.load.setBaseURL('https://labs.phaser.io');
  this.load.image('sky', 'assets/skies/space3.png');
  this.load.image('logo', 'assets/sprites/phaser3-logo.png');
  this.load.image('red', 'assets/particles/fire2.png');
}

const getConfig = ({ setScore }) => {
  const width = window.innerWidth * window.devicePixelRatio;
  const height = window.innerHeight * window.devicePixelRatio;

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
    logo.body.onWorldBounds = true;
    emitter.startFollow(logo);

    const logo2 = this.physics.add.image(width/4, height/4, 'logo');
    logo2.setVelocity(400, 800);
    logo2.setBounce(.9, .9);
    logo2.setCollideWorldBounds(true);
    logo2.body.onWorldBounds = true;

    this.physics.world.on('worldbounds', thing => {
      // console.log(thing);
      setScore(s => s + 1);
    });
  }

  // function update () {
  //   game.physics.arcade.collide(frog, layer, function(f, t) {
  //     // -------------------------------------------
  //     // don't do this!
  //     // the sound plays almost all the time!
  //     // -------------------------------------------
  //     // thudSound.play();
  //   });
  // }

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
        // gravity: { y: 200 }
      }
    },
    scene: {
      preload,
      create,
      // update,
    }
  };

  return config;
};

export default getConfig;
