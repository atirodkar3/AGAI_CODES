#pragma strict

static var goodhealth: boolean;
goodhealth=false;
var fagg:boolean;
var texturewidth: int;

var textureheight: int;


function OnTriggerEnter(other:Collider){
if(other.tag=="Player"){
goodhealth=true;
yield WaitForSeconds (3);
fagg=true;
}
}

function Update(){
if(DamagePotionScript.poison)
{Destroy(gameObject);
}



if(fagg){

Destroy(gameObject);
print(goodhealth);
}
}

function OnGUI()
{
if(goodhealth){
GUI.Label(Rect(450,40,texturewidth,textureheight),"Health Potion Collected");
}
}