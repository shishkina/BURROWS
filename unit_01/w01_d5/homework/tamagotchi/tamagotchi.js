function Tamagotchi(hungry, sick, age, restLevel){
	this.age = age;
	this.sick = sick;
	this.age = age;
	this.restLevel = restLevel;
	this.feed = function(){
	  	console.log(this.hungry);
    	if (this.hungry === true){
      		this.hungry = false;
   	  		return "That was yummy!";
    	} else {
      		this.hungry = true;
      		return "No thanks, I'm full.";
    	}
	};
	this.sleep = function(){
	  	console.log(Tamagotchi.prototype.restLevel);
    	this.restLevel +=1;
    	return "zzzzzzzz";
	};

  	this.medicate = function(){
    	if (this.sick === true){
    	  this.sick = false;
    	  return "I feel much better!";
    	} else {
    	  this.sick = true;
    	  return "No, thanks, I feel fine.";
    	}
  	};
	this.increaseAge = function(){
  		console.log(this.age);
	  this.age += 1;
	  return "Happy birthday to me! I am " + this.age + " years old!";
  	};
}
var dog = new Tamagotchi(false, false, 0, 5);
var cat = new Tamagotchi(false, false, 0, 5);
var fish = new Tamagotchi(false, false, 0, 5);

dog.bark = function(){
  return "ruff ruff";
};
dog.goOutside = function(){
  return "I own that tree now!";
};
cat.meow = function(){
  return "Meow!";
};
cat.useLitterBox = function(){
  return "Burried treasure!";
};
fish.swim = function(){
  return "just keep swiming ...";
};
dog.feed();
dog.feed();
dog.increaseAge();
dog.increaseAge();
dog.bark();
dog.goOutside();
cat.meow();
cat.sleep();
cat.useLitterBox();
fish.medicate();
fish.medicate();
fish.swim();
