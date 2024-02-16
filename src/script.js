// Variável de configuração do jogo
var config = {
  type: Phaser.AUTO,
  width: 766,
  height: 619,
  backgroundColor: "#3242a8",
  physics: {
    gravity: { y: 0 },
    default: "arcade",
    arcade: {
      debug: false,
    },
  },
  scene: {
    preload: preload,
    create: create,
    update: update,
  },
};

var player;
var cursors;
var platforms;

// Cria instância do Phaser
var game = new Phaser.Game(config);

// Função para carregar os assets dentro do jogo
function preload() {
  // Background
  this.load.image("background", "../assets/recepcao.png");
  // Tamanho da plataforma = 200x50
  this.load.image("platform", "./assets/platform.png");
  // SpriteSheet do personagem
  this.load.spritesheet("player", "../assets/AmeliaFull.png", {
    frameWidth: 16,
    frameHeight: 24,
  });
}

// Função para criar os objetos do jogo
function create() {
  // Adiciona a tela de fundo
  this.add.image(383, 310.5, "background");

  // Cria as plataformas
  // platforms = this.physics.add.staticGroup();

  // Variável para verificar quais teclas foram pressionadas
  cursors = this.input.keyboard.createCursorKeys();

  // Adiciona o jogador e proíbe ele de ultrapassar os limites do mapa
  player = this.physics.add.sprite(100, 350, "player").setScale(2);
  player.setCollideWorldBounds(true);

  // Cria as animações do personagem
  this.anims.create({
    key: "left",
    frames: this.anims.generateFrameNumbers("player", { start: 12, end: 17 }),
    frameRate: 10,
    repeat: -1,
  });

  this.anims.create({
    key: "turn",
    frames: [{ key: "player", frame: 27 }],
    frameRate: 20,
  });

  this.anims.create({
    key: "right",
    frames: this.anims.generateFrameNumbers("player", { start: 0, end: 5 }),
    frameRate: 10,
    repeat: -1,
  });

  this.anims.create({
    key: "up",
    frames: this.anims.generateFrameNumbers("player", { start: 6, end: 11 }),
    frameRate: 10,
    repeat: -1,
  });

  this.anims.create({
    key: "down",
    frames: this.anims.generateFrameNumbers("player", { start: 18, end: 23 }),
    frameRate: 10,
    repeat: -1,
  });
}

// Função que atualiza constantemente, visando mudanças constantes
function update() {
  // Lógica de estrutura de condição para verificar o botão clicado
  // e assim definir a velocidade e a direção para qual o personagem vai
  // além de invocar a animação correta para cada situação
  if (cursors.left.isDown) {
    player.setVelocityX(-160);
    player.anims.play("left", true);
  } else if (cursors.right.isDown) {
    player.setVelocityX(160);
    player.anims.play("right", true);
  } else if (cursors.up.isDown) {
    player.setVelocityY(-160);
    player.anims.play("up", true);
  } else if (cursors.down.isDown) {
    player.setVelocityY(160);
    player.anims.play("down", true);
  } else {
    player.setVelocityX(0);
    player.setVelocityY(0);
    player.anims.play("turn");
  }
}
