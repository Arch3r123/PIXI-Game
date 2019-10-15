 //Aliasess
 let Application = PIXI.Application,
     Container = PIXI.Container,
     loader = PIXI.loader,
     resources = PIXI.loader.resources,
     Graphics = PIXI.Graphics,
     TextureCache = PIXI.utils.TextureCache,
     Sprite = PIXI.Sprite,
     Text = PIXI.Text,
     TextStyle = PIXI.TextStyle;


 PIXI.SCALE_MODES.DEFAULT = PIXI.SCALE_MODES.NEAREST;

 //Create a Pixi Application
 let app = new Application({
     width: 1920,
     height: 1001,
     antialiasing: true,
     transparent: false,
     resolution: 1
 });

 app.renderer.view.style.position = "absolute";
 app.renderer.view.style.display = "block";
 app.renderer.autoResize = true;
 app.renderer.resize(window.innerWidth, window.innerHeight);


 //Add the canvas that Pixi automatically created for you to the HTML document
 document.body.appendChild(app.view);

 loader
     .add("images/bossRoom.json")
     .load(setup);

 //Capture the keyboard arrow keys
 let left = keyboard(65),
     up = keyboard(87),
     right = keyboard(68),
     down = keyboard(83);

 //Define variables that might be used in more 
 //than one function
 let state, explorer, treasure, chimes, exit, player, dungeon,
     door, healthBar, message, gameScene, gameOverScene, enemies,
     id, blobs, sanic, sans, nyanCat, cavemanSpongebob,
     ugandanKnuckles, theDrowned, kakashi, healthPickup, shaggy, walls = [],
     ladder;

 function setup() {
     bossRoom = new Container();
     app.stage.addChild(bossRoom);


     id = resources["images/bossRoom.json"].textures;

     //Dungeon
     room = new Sprite(id["room.png"]);
     bossRoom.addChild(room);

     //ladder
     ladderUp = new Sprite(id["ladderUp.png"]);
     ladderUp.position.set(808, 352);
     ladderUp.scale.x = 1;
     ladderUp.scale.y = 1;
     bossRoom.addChild(ladderUp);

     //Explorer
     bobRoss = new Sprite(id["bobRoss.png"]);
     bobRoss.scale.x = 1.5;
     bobRoss.scale.y = 1.5;
     bobRoss.x = 38;
     bobRoss.y = 10;
     bobRoss.vx = 0;
     bobRoss.vy = 0;
     bossRoom.addChild(bobRoss);

     //Treasure
     treasure = new Sprite(id["treasure.png"]);
     treasure.x = gameScene.width - treasure.width - 48;
     treasure.y = gameScene.height / 2 - treasure.height / 2;
     bossRoom.addChild(treasure);
 }