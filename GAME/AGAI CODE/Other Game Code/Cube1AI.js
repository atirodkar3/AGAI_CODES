#pragma strict

var target: Transform;
var movespeed=15; 
static var cube1:boolean;
var rotationSpeed=3;
var flagg:boolean;
var myTransform:Transform;
var nonp:Transform;
static var bigguy : boolean;
var health:int;
var texturewidth: int;
texturewidth=250;
var textureheight: int;
textureheight=200;
var hitSound: AudioClip;
var nhealth:int;
nhealth=5;
health=10;


var TakeDamage : boolean;
cube1=false;

function Awake()
{
myTransform=transform;
}

function Start()
{
nonp=GameObject.FindWithTag("NPC").transform;
target=GameObject.FindWithTag("Player").transform;
}

function OnTriggerEnter(other:Collider){
if(other.tag=="Player")
TakeDamage=true;
if(Talker.decrement){
health=5;
}
}

function OnTriggerExit(other:Collider){
if(other.tag=="Player"){
TakeDamage=false;
}
}


function decra()
{health--;
yield WaitForSeconds (2);
}

function Update(){

if((Mathf.Abs(nonp.position.x-myTransform.position.x)<15) && (Mathf.Abs(nonp.position.y-myTransform.position.y)<15) && (Mathf.Abs(nonp.position.z-myTransform.position.z)<15) && NPC.finalanswer==7)
{
flagg=true;
decra();
}

if(TakeDamage){
if(Input.GetButtonDown("Fire1") && !flagg){
health--;
audio.PlayOneShot(hitSound);
}
if(Input.GetButtonDown("Fire1") && flagg){
health=health-3;
audio.PlayOneShot(hitSound);
}
}


if(health<0){
health=0;
bigguy=true;
cube1=true;
Destroy(gameObject);
NPC.finalanswer=0;
print(cube1);
}
}

function OnGUI()
{
if(health<10){
GUI.Label(Rect(80,40,texturewidth,textureheight),"Boss Health"+health);
}
}

