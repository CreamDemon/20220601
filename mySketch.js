var inputElement
var txts=[]
var colors = "064789-427aa1-ebf2fa-679436-a5be00".split("-").map(a=>"#"+a)
function setup() {
	background(0)
	createCanvas(windowWidth, windowHeight);
	background(100);
	inputElement =createInput("")
  inputElement.position(50,50)
	inputElement.style("color",'green')
	inputElement.style("font-size",'30px')
	inputElement.input(userInput)
}
	function userInput(){
	txts.push({
	text: this.value(),
	x:width/2,
	y:50,
	vx:random(-4,4),
	vy:1,
	color:random(colors)
	
	})
	this.value("")
}
function draw(){
	background(0);
	fill(255)
	textSize(50)
	for(var i=0;i<txts.length;i++){
	
	let txt=txts[i]
	fill(txt.color)
 text(txt.text ,txt.x ,txt.y)
		txt.x=txt.x + txt.vx
		txt.y=txt.y + txt.vy
		txt.vy=txt.vy+0.1//速率增加
		txt.vx=txt.vx*0.998
		txt.vy=txt.vy*0.998
		if(txt.y>height){
			txt.vy = -abs(txt.vy)
		}
	}
	}
	

