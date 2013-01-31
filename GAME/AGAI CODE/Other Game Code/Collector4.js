#pragma strict

static var gscroll: boolean;
gscroll=false;
var fag4:boolean;
var texturewidth: int;
texturewidth=250;
var textureheight: int;
textureheight=200;


function OnTriggerEnter(other:Collider){
if(other.tag=="Player"){
gscroll=true;
yield WaitForSeconds (3);
fag4=true;
}
}

function Update(){
if(fag4){

Destroy(gameObject);
print(gscroll);
}
}

function OnGUI()
{
if(gscroll){
GUI.Label(Rect(500,40,texturewidth,textureheight),"Golden Scroll Collected");
}
}