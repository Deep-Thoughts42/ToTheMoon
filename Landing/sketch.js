let sun;
let cam;

let sunTexture;
const textures = [];

// Because of the asynchronous nature of file loading in JavaScript, we
// have to load the images in p5.js' preload() instead of in setup().

function preload() {
	sunTexture = loadImage('data/water1-flora1.jpg');
}

function setup() {
  let canvas = createCanvas(500, 500, WEBGL);
  canvas.parent('sketch-holder');

  // Disable the context menu on the canvas so the camera can use the right mouse button
  canvas.elt.oncontextmenu = () => false;
  
  //WHICH TEXTURE TO CALL IN 
	
  	sun = new Planet(200, 0, 0, sunTexture);
	sun.spawnMoons(0, 0);
	
	var Wbutton = createButton("Increase Water");
	Wbutton.size(200,50)  
	Wbutton.position(140,900);
  Wbutton.style("font-size", '20px');
  Wbutton.style("font-family","Poppins, san-serif");
  Wbutton.style("background-color","#3E3E3E");
  Wbutton.style("color","#fff");
	Wbutton.mousePressed(addWater);
	
	
	var Fbutton = createButton("Increase Flora");
	Fbutton.size(200,50)  
	Fbutton.position(140,980);
  Fbutton.style("font-size", '20px');
  Fbutton.style("font-family","Poppins, san-serif");
  Fbutton.style("background-color","#3E3E3E");
  Fbutton.style("color","#fff");
	Fbutton.mousePressed(addFlora);
	
	var minWbutton = createButton("Decrease Water");
	minWbutton.size(200,50)  
	minWbutton.position(1130,900);
  minWbutton.style("font-size", '20px');
  minWbutton.style("font-family","Poppins, san-serif");
  minWbutton.style("background-color","#3E3E3E");
  minWbutton.style("color","#fff");
	minWbutton.mousePressed(minusWater);
	
	var minFbutton = createButton("Decrease Flora");
	minFbutton.size(200,50)  
	minFbutton.position(1130,980);
  minFbutton.style("font-size", '20px');
  minFbutton.style("font-family","Poppins, san-serif");
  minFbutton.style("background-color","#3E3E3E");
  minFbutton.style("color","#fff");
	minFbutton.mousePressed(minusFlora);
	
	var Abutton = createButton("Increase Albedo");
	Abutton.size(200,50)  
	Abutton.position(140,1060);
  Abutton.style("font-size", '20px');
  Abutton.style("font-family","Poppins, san-serif");
  Abutton.style("background-color","#3E3E3E");
  Abutton.style("color","#fff");
	Abutton.mousePressed(addAlbedo);
	
	var minAbutton = createButton("Decrease Albedo");
	minAbutton.size(200,50)  
	minAbutton.position(1130,1060);
  minAbutton.style("font-size", '20px');
  minAbutton.style("font-family","Poppins, san-serif");
  minAbutton.style("background-color","#3E3E3E");
  minAbutton.style("color","#fff");
	minAbutton.mousePressed(minusAlbedo);
	
	var Obutton = createButton("Increase Oxygen");
	Obutton.size(200,50)  
	Obutton.position(140,1140);
  Obutton.style("font-size", '20px');
  Obutton.style("font-family","Poppins, san-serif");
  Obutton.style("background-color","#3E3E3E");
  Obutton.style("color","#fff");
	Obutton.mousePressed(addOxygen);
	
	var minObutton = createButton("Decrease Oxygen");
	minObutton.size(200,50)  
	minObutton.position(1130,1140);
  minObutton.style("font-size", '20px');
  minObutton.style("font-family","Poppins, san-serif");
  minObutton.style("background-color","#3E3E3E");
  minObutton.style("color","#fff");
		minObutton.mousePressed(minusOxygen);
}


function addWater() {
	sun.water += 1;
	change();
	updatePopScore();
}
function addFlora() {
	sun.flora += 1;
	change();
	updatePopScore();
}
function minusWater() {
	if(sun.water >= 1){
	sun.water -= 1;
	change();
		updatePopScore();
	}
}
function minusFlora() {
	if(sun.flora >= 1){
	sun.flora -= 1;
	change();
		updatePopScore();
	}
}
function addAlbedo() {
	if(sun.albedo >= 0 && sun.albedo <=4){
	sun.albedo += 1;
		updatePopScore();
	}
}
function minusAlbedo() {
	if(sun.albedo >= 1 && sun.albedo <=5){
	sun.albedo -= 1;
		updatePopScore();
	}
}	
function addOxygen() {
	if(sun.oxygen >= 0 && sun.oxygen <=4){
	sun.oxygen += 1;
		updatePopScore();
	}
}
function minusOxygen() {
	if(sun.oxygen >= 1 && sun.oxygen <=5){
	sun.oxygen -= 1;
		updatePopScore();
	}
}	

function change(){
		if (sun.flora == 0){
		if(sun.water == 1){
		sun.texture = loadImage('data/ptwater3.jpg');
		}
		if(sun.water == 2){
		sun.texture = loadImage('data/ptwater6.jpg');
		}
		if(sun.water == 3){
		sun.texture = loadImage('data/ptwater9.jpg');
		}
		if(sun.water == 4){
		sun.texture = loadImage('data/ptwater14.jpg');
		}
		if(sun.water == 5){
		sun.texture = loadImage('data/ptwater19.jpg');
		}
		if(sun.water == 6){
		sun.texture = loadImage('data/ptwater22.jpg');
		}
		if(sun.water == 7){
		sun.texture = loadImage('data/ptwater25.jpg');
		}
		if(sun.water == 8){
		sun.texture = loadImage('data/ptwater28.jpg');
		}
		if(sun.water == 9){
		sun.texture = loadImage('data/ptwater31.jpg');
		}
		if(sun.water == 10){
		sun.texture = loadImage('data/ptwater34.jpg');
		}
	}
	
	if (sun.water == 1){
		if(sun.flora == 1){
		sun.texture = loadImage('data/water1-flora1.jpg');
		}
		if(sun.flora == 2){
		sun.texture = loadImage('data/water1-flora2.jpg');
		}
		if(sun.flora == 3){
		sun.texture = loadImage('data/water1-flora3.jpg');
		}
		if(sun.flora == 4){
		sun.texture = loadImage('data/water1-flora4.jpg');
		}
	}
	
	if (sun.water == 2){
		if(sun.flora == 1){
		sun.texture = loadImage('data/water2-flora1.jpg');
		}
		if(sun.flora == 2){
		sun.texture = loadImage('data/water2-flora2.jpg');
		}
		if(sun.flora == 3){
		sun.texture = loadImage('data/water2-flora3.jpg');
		}
		if(sun.flora == 4){
		sun.texture = loadImage('data/water2-flora4.jpg');
		}
		if(sun.flora == 5){
		sun.texture = loadImage('data/water2-flora4.jpg');
		}
	}
	
	if (sun.water == 3){
		if(sun.flora == 1){
		sun.texture = loadImage('data/water3-flora1.jpg');
		}
		if(sun.flora == 2){
		sun.texture = loadImage('data/water3-flora2.jpg');
		}
		if(sun.flora == 3){
		sun.texture = loadImage('data/water3-flora3.jpg');
		}
		if(sun.flora == 4){
		sun.texture = loadImage('data/water3-flora4.jpg');
		}
		if(sun.flora == 5){
		sun.texture = loadImage('data/water3-flora5.jpg');
		}
		if(sun.flora == 6){
		sun.texture = loadImage('data/water3-flora6.jpg');
		}
	}
	
	if (sun.water == 4){
		if(sun.flora == 1){
		sun.texture = loadImage('data/water4-flora1.jpg');
		}
		if(sun.flora == 2){
		sun.texture = loadImage('data/water4-flora2.jpg');
		}
		if(sun.flora == 3){
		sun.texture = loadImage('data/water4-flora3.jpg');
		}
		if(sun.flora == 4){
		sun.texture = loadImage('data/water4-flora4.jpg');
		}
		if(sun.flora == 5){
		sun.texture = loadImage('data/water4-flora5.jpg');
		}
		if(sun.flora == 6){
		sun.texture = loadImage('data/water4-flora6.jpg');
		}
	}
		
	if (sun.water == 5){
		if(sun.flora == 1){
		sun.texture = loadImage('data/water5-flora1.jpg');
		}
		if(sun.flora == 2){
		sun.texture = loadImage('data/water5-flora2.jpg');
		}
		if(sun.flora == 3){
		sun.texture = loadImage('data/water5-flora3.jpg');
		}
		if(sun.flora == 4){
		sun.texture = loadImage('data/water5-flora4.jpg');
		}
		if(sun.flora == 5){
		sun.texture = loadImage('data/water5-flora5.jpg');
		}
		if(sun.flora == 6){
		sun.texture = loadImage('data/water5-flora6.jpg');
		}
	}
	
		
	if (sun.water == 6){
		if(sun.flora == 1){
		sun.texture = loadImage('data/water6-flora1.jpg');
		}
		if(sun.flora == 2){
		sun.texture = loadImage('data/water6-flora2.jpg');
		}
		if(sun.flora == 3){
		sun.texture = loadImage('data/water6-flora3.jpg');
		}
		if(sun.flora == 4){
		sun.texture = loadImage('data/water6-flora4.jpg');
		}
		if(sun.flora == 5){
		sun.texture = loadImage('data/water6-flora5.jpg');
		}
	}
			
	if (sun.water == 7){
		if(sun.flora == 1){
		sun.texture = loadImage('data/water7-flora1.jpg');
		}
		if(sun.flora == 2){
		sun.texture = loadImage('data/water7-flora2.jpg');
		}
		if(sun.flora == 3){
		sun.texture = loadImage('data/water7-flora3.jpg');
		}
		if(sun.flora == 4){
		sun.texture = loadImage('data/water7-flora4.jpg');
		}
	}
	
	if (sun.water == 8){
		if(sun.flora == 1){
		sun.texture = loadImage('data/water8-flora1.jpg');
		}
		if(sun.flora == 2){
		sun.texture = loadImage('data/water8-flora2.jpg');
		}
		if(sun.flora == 3){
		sun.texture = loadImage('data/water8-flora3.jpg');
		}
	}
	
	if (sun.water == 9){
		if(sun.flora == 1){
		sun.texture = loadImage('data/water9-flora1.jpg');
		}
		if(sun.flora == 2){
		sun.texture = loadImage('data/water9-flora2.jpg');
		}
	}
		
	if (sun.water == 10){
		if(sun.flora == 1){
		sun.texture = loadImage('data/water10-flora1.jpg');
		}
	}
}



function updatePopScore() {
    
var water_weight = 0;
var flora_weight = 0;
var albedo_weight = 0;
var oxygen_weight = 0;
var pop_calc = 0;
var hab_calc = 0;
	
	if(sun.water == 0 ){
		  water_weight = 0;
	  }
      if(sun.water == 1 ){
		  water_weight = 0.2;
	  }
      if(sun.water == 2 ){
		  water_weight = 0.4;
	  }
      if(sun.water == 3 ){
		  water_weight = 0.6;
	  }
      if(sun.water == 4 ){
		  water_weight = 1;
	  }
      if(sun.water == 5 ){
		  water_weight = 0.8;
	  }
      if(sun.water == 6 ){
		  water_weight = 0.7;
	  }
      if(sun.water == 7 ){
		  water_weight = 0.6;
	  }
      if(sun.water == 8 ){
		  water_weight = 0.4;
	  }
      if(sun.water == 9 ){
		  water_weight = 0.2;
	  }
      if(sun.water == 10){
		  water_weight = 0;
      }

      if(sun.flora == 0){
		  flora_weight = 0;
	  }
      if(sun.flora == 1){
		  flora_weight = 0.2;
	  }
      if(sun.flora == 2){
		  flora_weight = 0.4;
	  }
      if(sun.flora == 3){
		  flora_weight = 0.6;
	  }
      if(sun.flora == 4){
		  flora_weight = 0.7;
	  }
      if(sun.flora == 5){
		  flora_weight = 0.8;
	  }
      if(sun.flora == 0){
		  flora_weight = 1;
      }
	
      if(sun.albedo == 0){
		  albedo_weight = 0;
	  }
      if(sun.albedo == 1){
		  albedo_weight = 0.5;
	  }
      if(sun.albedo == 2){
		  albedo_weight = 1;
	  }
      if(sun.albedo == 3){
		  albedo_weight = 0.75;
	  }
      if(sun.albedo == 4){
		  albedo_weight = 0.3;
	  }
      if(sun.albedo == 5){
		  albedo_weight = 0;
	  }
  
      if(sun.oxygen == 0){
		  oxygen_weight = 0;
	  }
      if(sun.oxygen == 1){
		  oxygen_weight = 0.2;
	  }
      if(sun.oxygen == 2){
		  oxygen_weight = 0.4;
	  }
      if(sun.oxygen == 3){
		  oxygen_weight = 0.6;
	  }
      if(sun.oxygen == 4){
		  oxygen_weight = 0.8;
	  }
      if(sun.oxygen == 5){
		  oxygen_weight = 1;
	  }

          
    pop_calc = ((water_weight*15.0)+(flora_weight*20.0)+(albedo_weight*5.0)+(oxygen_weight*10.0)*1000000000.0);
    document.getElementById("pop_cal").innerHTML = pop_calc;
	
    hab_calc = (water_weight*30.0)+(flora_weight*40.0)+(albedo_weight*10.0)+(oxygen_weight*20.0);
  	document.getElementById("percent").innerHTML = hab_calc + '%';
	
	const progressBar = document.getElementsByClassName('progress-bar')[0]
	setInterval(() => {
  	const computedStyle = getComputedStyle(progressBar)
  	const width = hab_calc;
  progressBar.style.setProperty('width',width)
}, 5)
	
  }



let angle = 0;

function draw() {
  //background(11,24,36);
	
	if(sun.albedo == 5){
    	ambientLight(87, 161, 158);
		}
	if(sun.albedo == 4){
		ambientLight(114, 157, 157);
	}
	if(sun.albedo == 3){
    	ambientLight(134, 163, 163);
	}
	if(sun.albedo == 2){
		ambientLight(140, 140, 140);
	}
	if(sun.albedo == 1){
		ambientLight(150, 135, 115);
	}
	if(sun.albedo == 0){
		ambientLight(168, 116, 17);
	}
	else{
		ambientLight(10,10, 10);
	}
	
	if(sun.oxygen == 5){
		ambientLight(135,135,135)
	}
	if(sun.oxygen == 4){
		ambientLight(105,105,105)
	}
	if(sun.oxygen == 3){
		ambientLight(85,85,85)
	}
	if(sun.oxygen == 2){
		ambientLight(55,55,55)
	}
	if(sun.oxygen == 1){
		ambientLight(25,25,25)
	}
	if(sun.oxygen == 0){
		ambientLight(5,5,5)
	}
	
  //pointLight(255, 255, 255, 0, 0, 0);
	//directionalLight(0, 0, 0, 19, 19, -1);
	 let dirX = (mouseX / width - 0.5) * 2;
  let dirY = (mouseY / height - 0.5) * 2;
  directionalLight(250, 250, 250, -dirX, -dirY, -1);
  rotateY(angle);
  sun.show();
  angle += 0.02;
  sun.orbit();
}

