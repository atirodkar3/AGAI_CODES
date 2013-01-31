#pragma strict

static var card3: boolean;
card3=false;
var fag3:boolean;
var texturewidth: int;
texturewidth=250;
var textureheight: int;
textureheight=200;


function OnTriggerEnter(other:Collider){
if(other.tag=="Player"){
card3=true;
yield WaitForSeconds (3);

fag3=true;
}
}

function Update(){
if(fag3){
Destroy(gameObject);
print(card3);
}
}

function OnGUI()
{
if(card3){
GUI.Label(Rect(500,40,texturewidth,textureheight),"Scroll Collected");
}
}