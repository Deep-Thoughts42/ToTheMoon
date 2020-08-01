const progressBar = document.getElementsByClassName('progress-bar')[0]
setInterval(() => {
  const computedStyle = getComputedStyle(progressBar)
  const width = parseFloat(computedStyle.getPropertyValue('--width')) || 0
  progressBar.style.setProperty('--width', width + .1)
}, 5)


// First we need to create a planet object that has variables initialized in it
// Then we need "step" functions depending on the button pressed 
// The step functions would contain the code and all for the animations to be attempted. 
// We could try using while loops as well
// Upon each step, we need to determine if the step is valid before doing score calcs and animations
// If not valid we need to understand what message to give to the user, and also what kinds of animations we want to attempt



https://www.w3schools.com/js/js_object_classes.asp
// Test


// https://www.digitalocean.com/community/tutorials/understanding-classes-in-javascript


class PlanetEdit {
  constructor() {
    this.water = 0
    this.flora = 0
    this.albedo = 1
    this.oxygen = 1
    this.population = 0
    this.hab_percent = 0

  }

 
// addWater should activate whenever the button for "Increase Water is pressed"

  addWater() {
    if (this.albedo == 0) {
      return "Not Possible";
    }

    else if (this.albedo == 1) {
      if (this.water < 3) {
        return "Possible";

      }

      else if (this.water > 2) {
        return "Not Possible";
      }


    }

    else if (this.albedo == 2) {
        if (this.water < 5) {
          return "Possible";
  
        }
  
        else if (this.water > 4) {
          return "Not Possible";
        }
  
  
      }

    else if (this.albedo == 3) {
        if (this.water < 6) {
          return "Possible";
  
        }
  
        else if (this.water > 5) {
          return "Not Possible";
        }
  
  
      }

      else if (this.albedo == 4) {
        if (this.water < 8) {
          return "Possible";
  
        }
  
        else if (this.water > 7) {
          return "Not Possible";
        }
  
  
      }
      
      else if (this.albedo == 5) {
        if (this.water < 10) {
          return "Possible";
  
        }
  
        else if (this.water > 9) {
          return "Not Possible";
        }
  
  
      }

  }


  removeWater() {


    if (this.water > 0 ) {
      // we need to figure out how to return a specific water level animation if it goes one step back, plus check if it makes any flora invalid.
      return "Possible";
    }
        

  }


  addFlora() {

    if (this.oxygen == 0) {
      return "Not Possible";

    }

    else if (this.oxygen == 1) {
      if (this.water > 0 && this.flora < 1) {
        return "Possible";
      }

      else {
        return "Not Possible";
      }


    }
    
    else if (this.oxygen == 2) {
      if (this.water > 0 && this.flora < 2) {
        return "Possible";

      }
      else {
        return "Not Possible";

      }

      
    }
    
    else if (this.oxygen == 3) {
      if ((1 < this.water < 7) && this.flora < 4 ) {
        return "Possible";
      }

      else if (this.water == 1 && this.flora < 3) {
        return "Possible";
      }

      else if (this.water == 7 && this.flora < 3 ) {
        return "Possible";

      }

      else if (this.water == 8 && this.flora < 2 ) {
        return "Possible";

      }

      else if (this.water == 9 && this.flora < 1 ) {
        return "Possible";

      }

      else {
        return "Not Possible";
      }

      
    }
   
    else if (this.oxygen == 4) {
      if (this.water == 1 && this.flora < 3) {
        return "Possible";

      }

      else if (this.water == 2 && this.flora < 4) {
        return "Possible";

      }

      else if (this.water == 3 && this.flora < 5) {
        return "Possible";

      }

      else if (this.water == 4 && this.flora < 5) {
        return "Possible";

      }

      else if (this.water == 5 && this.flora < 5) {
        return "Possible";

      }

      else if (this.water == 6 && this.flora < 4) {
        return "Possible";

      }

      else if (this.water == 7 && this.flora < 3) {
        return "Possible";

      }
      
      else if (this.water == 8 && this.flora < 2) {
        return "Possible";

      }

      else if (this.water == 9 && this.flora < 1) {
        return "Possible";

      }

      else {
        return "Not Possible"
      }


      
    }
    
    else if (this.oxygen == 5) {
      if (this.water == 1 && this.flora < 3) {
        return "Possible";

      }

      else if (this.water == 2 && this.flora < 4) {
        return "Possible";

      }

      else if (this.water == 3 && this.flora < 5) {
        return "Possible";

      }

      else if (this.water == 4 && this.flora < 6) {
        return "Possible";

      }

      else if (this.water == 5 && this.flora < 5) {
        return "Possible";

      }

      else if (this.water == 6 && this.flora < 4) {
        return "Possible";

      }

      else if (this.water == 7 && this.flora < 3) {
        return "Possible";

      }
      
      else if (this.water == 8 && this.flora < 2) {
        return "Possible";

      }

      else if (this.water == 9 && this.flora < 1) {
        return "Possible";

      }

      else {
        return "Not Possible"
      }



    
      
    }


    
  }

  removeFlora() {

    if (this.flora > 0 ) {
      // we need to figure out how to return a specific flora level animation if it goes one step back
      return "Possible";
    }
    
  }

  addOxygen() {
    if (this.oxygen < 5) {
      return "Possible";
    }

  }

  removeOxygen() {
    if (this.oxygen > 0) {
      return "Possible";
    }
    
  }

  addAlbedo() {
    if (this.albedo < 5) {
      return "Possible";
    }


  }

  removeAlbedo() {
    if (this.albedo > 0) {
      return "Possible";
    }
    
  }

  updatePopScore() {
    var water_weights = {
      0 : 0,
      1 : 0.2,
      2 : 0.4,
      3 : 0.6, 
      4 : 1,
      5 : 0.8,
      6 : 0.7,
      7 : 0.6,
      8 : 0.4,
      9 : 0.2,
      10 : 0 

    };
    var flora_weights = {
      0 : 0,
      1 : 0.2,
      2 : 0.4,
      3 : 0.6, 
      4 : 0.7,
      5 : 0.8,
      6 : 1

    };
    var albedo_weights = {
      0 : 0,
      1 : 0.5,
      2 : 1,
      3 : 0.75, 
      4 : 0.3,
      5 : 0

      
    };
    var oxygen_weights = {
      0 : 0,
      1 : 0.2,
      2 : 0.4,
      3 : 0.6, 
      4 : 0.8,
      5 : 1,

      
    };
    
    var calculation = ((water_weights[this.water]*15)+(flora_weights[this.flora]*20)+(albedo_weights[this.albedo]*5)+(oxygen_weights[this.oxygen]*10)*1000000000);

    return calculation;

  }

  updateHabScore() {
    var water_weights = {
      0 : 0,
      1 : 0.25,
      2 : 0.5,
      3 : 0.76, 
      4 : 1,
      5 : 1,
      6 : 0.75,
      7 : 0.6,
      8 : 0.45,
      9 : 0.25,
      10 : 0 

    };
    var flora_weights = {
      0 : 0,
      1 : 0.25,
      2 : 0.5,
      3 : 0.65, 
      4 : 0.75,
      5 : 1,
      6 : 1

    };
    var albedo_weights = {
      0 : 0,
      1 : 0.45,
      2 : 1,
      3 : 1, 
      4 : 0.45,
      5 : 0

      
    };
    var oxygen_weights = {
      0 : 0,
      1 : 0.25,
      2 : 0.5,
      3 : 0.75, 
      4 : 1,
      5 : 1,

      
    };

    var calculation = (water_weights[this.water]*30)+(flora_weights[this.flora]*40)+(albedo_weights[this.albedo]*10)+(oxygen_weights[this.oxygen]*20);
    return calculation;
  }


}











// function draw() {
//     let locX = mouseX - height / 0.01;
//   let locY = mouseY - width / 0.01;
//   background(0);
//   ambientLight(170);
//     ambientLight(0, 20, 135);
//   pointLight(0, 0, 255, locX, locY, 250);
//   sun.show();
//   sun.orbit();