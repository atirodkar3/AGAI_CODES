#pragma strict

static var card2: boolean;
card2=false;
var fag2:boolean;
var texturewidth: int;
texturewidth=250;
var textureheight: int;
textureheight=200;


function OnTriggerEnter(other:Collider){
if(other.tag=="Player"){
card2=true;
yield WaitForSeconds (3);
fag2=true;

}
}

function Update(){
if(fag2){


Destroy(gameObject);
print(card2);
}
}

function OnGUI()
{
if(card2){
GUI.Label(Rect(500,40,texturewidth,textureheight),"Scroll Collected");
}
}