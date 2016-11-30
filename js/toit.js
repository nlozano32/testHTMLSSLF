(function (lib, img, cjs, ss) {
var p; // shortcut to reference prototypes
// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: []
};
lib.ssMetadata = [];
// symbols:
(lib.PaneauToitPlastiqueV2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#006633").ss(2,1,1).p("AADAAQgDAAgCAB");
	this.shape.setTransform(-17.2,7.2);
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#006633").ss(2,1,1).p("ACrhHQgEABgGACQgHACgLAEQAAAAgBAAQg5AUiTBBQgTAJgWAKQgeANglAR");
	this.shape_1.setTransform(0.3,-0.2);
	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.5,-8.3,37,16.7);

	 

(lib.ToitsPlastiqueV2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// timeline functions:
	this.frame_0 = function() {
		//ToitS1
		//To change here SONDE value For example, document.getElementById("A1002").value by document.getElementById("A1003").value, 
		positionValue = document.getElementById("A1002").value;

		if(positionValue <= 0){

			positionValue = 1;
		}
		
		this.gotoAndStop(positionValue);
	}
	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(100));
	// Paneau
	this.instance = new lib.PaneauToitPlastiqueV2("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-0.5,-14.2,1,1,0,0,0,17.4,-7.3);
	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:17.3,scaleX:1,scaleY:1,rotation:30.1,x:-0.4},99).wait(1));
	// Ouverture
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFCC00").ss(2,1,1).p("ACuhIQgEABgGABQgHACgLAEQAAAAgBAAQg5AViTBBQgTAIgWALQgeANglAQQgDACgDAB");
	this.shape.setTransform(-17.9,-7);
	this.timeline.addTween(cjs.Tween.get(this.shape).wait(100));
	// Base
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#006633").ss(2,1,1).p("AlFi3QAeACDPBeQA5AaBXAnQBEAcAhAWQBhBDBIBZ");
	this.shape_1.setTransform(32.7,4.1);
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#006633").ss(2,1,1).p("AFFi3QgEAAgGACQgIACgKAEQgBAAAAAAQg6AViUBDQgTAIgXAKQgeAOgiAQQgEACgDABQgCABgDABQgJAEgJAEQgEACgEACQgDABgCABQgIAEgIADQgBAAAAABQgEACgEABQgDACgEACQgQAGgNAHQgVALgOAJQhhBDhIBZ");
	this.shape_2.setTransform(-33,4.1);
	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(100));
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-66.4,-15.3,132.8,39);
// stage content:
(lib.Test2HTML5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// timeline functions:
	this.frame_0 = function() {
		//loadVariables("SONDE.TXT", _root.afficheur);
		//loadVariables("SORTIE.TXT", _root.afficheur);
	}
	this.frame_14 = function() {
		/*
		// format de l'heure
		Heure1 = parsefloat(VHRE)
		Heure1 = Heure1.toString()
		longhre = length(Heure1)
		if (longhre > 3) {
			Heure = Heure1.substr(0, 2) + ":" + Heure1.substr(2, 2)
		}
		else {
			Heure = Heure1.substr(0, 1) + ":" + Heure1.substr(1, 2)
		}
		//========================================================================================
		  var A9999="";
		  var F9999="";
		  var T9999="";
		  var R9999="";
		  var V9999="";
		  var R9999="";
		//========================================================================================
		//this.stop();
		/*
		var stageHeight = stage.canvas.height;
		var stageWidth = stage.canvas.width;
		*/
	}
	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(14));
	// Toit
	this.toitS1 = new lib.ToitsPlastiqueV2();
	this.toitS1.parent = this;
	this.toitS1.setTransform(275.5,194.2,1.529,1.529,0,0,180);
	this.toitS1_1 = new lib.ToitsPlastiqueV2();
	this.toitS1_1.parent = this;
	this.toitS1_1.setTransform(275.5,194.2,1.529,1.529,0,0,180);
	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.toitS1_1},{t:this.toitS1}]}).wait(28));
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(449.1,370.8,203,59.6);
})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
