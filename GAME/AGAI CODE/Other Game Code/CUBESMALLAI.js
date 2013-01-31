#pragma strict

static var cuba : boolean;
var health:int;
var texturewidth: int;
texturewidth=250;
var textureheight: int;
textureheight=200;
var hitSound : AudioClip;

health=4;

var TakeDamage : boolean;


function OnTriggerEnter(other:Collider){
if(other.tag=="Player"){
TakeDamage=true;
}
}

function OnTriggerExit(other:Collider){
if(other.tag=="Player"){
TakeDamage=false;
}
}

function Update(){

if(TakeDamage){
if(Input.GetButtonDown("Fire1")){
health--;
audio.PlayOneShot(hitSound);
}
}
if(health<0){
health=0;
cuba=true;
Destroy(gameObject);

}
}

function OnGUI()
{
if(health<4){
GUI.Label(Rect(80,40,texturewidth,textureheight),"Boss Health"+health);
}
}

