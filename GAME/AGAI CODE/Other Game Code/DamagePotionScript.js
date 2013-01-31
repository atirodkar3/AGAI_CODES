#pragma strict

static var poison: boolean;
poison=false;
var fagp:boolean;
var texturewidth: int;

var textureheight: int;



function OnTriggerEnter(other:Collider){
if(other.tag=="Player"){
poison=true;
yield WaitForSeconds (3);
fagp=true;
}
}

function Update(){
if(GoodHealthScript.goodhealth)
{Destroy(gameObject);
}


if(fagp){

Destroy(gameObject);
print(poison);
}
}

function OnGUI()
{
if(poison){
GUI.Label(Rect(450,40,texturewidth,textureheight),"Poison Collected");
}
}