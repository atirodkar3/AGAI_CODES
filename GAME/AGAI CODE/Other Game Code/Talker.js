#pragma strict

static var decrement: boolean;
decrement=false;
var fagtalk:boolean;
var dest:boolean;
dest=false;
var scrolla:boolean;
var texturewidth: int;
var gscroll:boolean;
var textureheight: int;
var fintalk:boolean;
var rr: int;
var tc1:float;
var et:float;
rr=0;

function OnTriggerEnter(other:Collider){
if(other.tag=="Player" &&rr!=5 && rr!=3 &&rr!=6){
fagtalk=true;
rr=1;}
if(rr==5 || rr==6)
{fintalk=true;
}
if(Collector4.gscroll)
{scrolla=true;
}
}

function OnTriggerExit(other:Collider){
if(other.tag=="Player"){
fagtalk=false;
if(rr==3)
{rr=5;
}
if(rr==1)
{rr=0;
}
if(rr==6)
{fintalk=false;
rr=5;
}
print(rr);
}

}

function OnGUI(){

if(rr==2){
GUI.Label(Rect(900,40,texturewidth,textureheight),"Loot and Plunder What? The Developer hasn't even built a form of currency!");
}
if(rr==1){
GUI.Label(Rect(900,40,texturewidth,textureheight),"So Wanderer, once again someone braves the lands of Level Ameya123. Pray, what might thine mission be? Left: Loot and Plunder Right: Finish Class Project");
}

if(rr==3){
GUI.Label(Rect(900,40,texturewidth,textureheight),"A Noble Cause Indeed. Fetch me the Golden Scroll and I'll weaken your prey by half...");

}
if(rr==4){
GUI.Label(Rect(900,40,texturewidth,textureheight),"You Possess The Golden Scroll!! Your enemy is weakened. And Now I will function call my Game Script to Take me Away!!...");
}

if(rr==77){
GUI.Label(Rect(900,40,texturewidth,textureheight),"Now why did you get that loser? You don't really deserve help...!");
}


if(rr==6){
GUI.Label(Rect(900,40,texturewidth,textureheight),"Have you got it? Run and fetch me the scroll, CUBE!");

}
}


function Update(){
if(fagtalk)
{
if(Input.GetButtonDown("Fire1")&&rr!=3)
{rr=2;
dest=true;
print(rr);
}
else
if(Input.GetButtonDown("Fire2") &&rr!=2)
{rr=3;
print(rr);

print(rr);
}
}

if(fintalk)
{
rr=6;
print(rr);

print(rr);
}

/*
if(scrolla)
{rr=4;
print(rr);
dest=true;
decrement=true;
}
if(dest)
Destroy(gameObject,8);
}

*/

if(scrolla)
{
if(!NPC.init)
{rr=4;
tc1=Time.time;
//vax=1;
}
else if(NPC.init)
{rr=77;
tc1=Time.time;
//vax=1;
decrement=true;
}
//print(rr);
dest=true;

}

//--------------------------------------------------------------------------
if((et-tc1)>5 && (rr==4 || rr==77))
{rr=27;
}


if(dest)
Destroy(gameObject,8);
}

