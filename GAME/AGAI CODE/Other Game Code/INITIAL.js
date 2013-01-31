#pragma strict
var rrr:int;
var texturewidth: int;
var textureheight: int; 
rrr=1;
function Start () {
yield WaitForSeconds (10);
rrr=0;

}

function Update () {

}

function OnGUI(){

if(rrr==1){
GUI.Label(Rect(100,30,texturewidth,textureheight),"Collect the Scrolls and Defeat the Level Boss. Areas in Red Hold the Keys.");
}


}