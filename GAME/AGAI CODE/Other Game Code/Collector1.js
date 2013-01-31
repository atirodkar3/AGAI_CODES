#pragma strict

static var card1: boolean;
card1=false;
var fag1:boolean;
var texturewidth: int;
texturewidth=250;
var textureheight: int;
textureheight=200;


function OnTriggerEnter(other:Collider){
if(other.tag=="Player"){
card1=true;
yield WaitForSeconds (3);
fag1=true;
}
}

function Update(){
if(fag1){

Destroy(gameObject);
print(card1);
}
}

function OnGUI()
{
if(card1){
GUI.Label(Rect(500,40,texturewidth,textureheight),"Scroll Collected");
}
}