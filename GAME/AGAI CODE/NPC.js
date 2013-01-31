#pragma strict

import System.Collections.Generic;

// Personality Class: represents the BIG-FIVE Model
class Personality
{
    var openness:double;
	var conscientousness: double;
	var extraversion: double;
	var agreeableness: double;
	var neuroticism: double;
	
	function Personality()
	{
		openness = 0;
		conscientousness = 0;
		extraversion = 0;
		agreeableness = 0;
		neuroticism = 0;
	}
	
	function Personality(o : double, c : double, e: double, a: double, n : double)
	{
		openness = o;
		conscientousness = c;
		extraversion = e;
		agreeableness = a;
		neuroticism = n;
	}
}

class Emotion
{
    var P: double;
    var A: double;
    var D: double;
    var intensity: double;
    
    function Emotion()
    {
        P = 0;
        A = 0;
        D = 0;
        intensity = 0;
    }

    function Emotion(p: double, a: double, d: double)
    {
        P = p;
        A = a;
        D = d;
        intensity = Mathf.Sqrt(P*P + A*A + D*D);
    }
    
    function decay()
    {
        //TODO
    }
}

class Mood
{
    var P: double;
    var A: double;
    var D: double;
    var intensity: double;
    
    function Mood()
    {
        P = 0;
        A = 0;
        D = 0;
        intensity = 0;
    }

    function Mood(p: double, a: double, d: double)
    {
        P = p;
        A = a;
        D = d;
        intensity = Mathf.Sqrt(P*P + A*A + D*D);
    }
}

class Player
{
    var personality: Personality;
    var activeEmotions: ArrayList;
    var mood: Mood;

    function Player()     
    {
        // Give Personality Values
        personality = new Personality(0.2, 0.1, 0.15, 0.65, 0.8);
        
        var p: double;
        var a: double;
        var d: double;
         	
        //Calculate Default Mood
        p = 0.21 * personality.extraversion + 0.59 * personality.agreeableness
                        + 0.19 * personality.neuroticism;
        a = 0.15 * personality.openness + 0.3 * personality.agreeableness
                        - 0.57 * personality.neuroticism;
        d = 0.25 * personality.openness + 0.17 * personality.conscientousness
                        + 0.6 * personality.extraversion - 0.32 * personality.agreeableness;
 
        mood = new Mood(p, a, d);
        
        activeEmotions = new ArrayList();		
    }
    
    function addEmotion(e:Emotion)
    {
    	activeEmotions.Add(e);
    }
    
    function clearActiveEmotion()
    {
    	activeEmotions.Clear();
    }
    
    function pull(emotionCenter: Emotion)
    {
    	Debug.Log("Inside Pull");
    	Debug.Log("Emotion Center = " + emotionCenter.P + ", " + emotionCenter.A + ", " + emotionCenter.D);
    	
    	var changeP: double;
    	var changeA: double;
    	var changeD: double;
    	var magnitude: double;
    	
    	changeP = emotionCenter.P - mood.P;
    	changeA = emotionCenter.A - mood.A;
    	changeD = emotionCenter.D - mood.D;
    	magnitude = Mathf.Sqrt(changeP*changeP + changeA*changeA + changeD*changeD);
    	
    	Debug.Log("Changes before Dividing by magnitude = " + changeP + ", " + changeA + ", " + changeD);
    	Debug.Log("Magnitude of Change = " + magnitude);
    	
    	changeP *= magnitude;
    	changeA *= magnitude;
    	changeD *= magnitude;
    	
    	Debug.Log("Changes after Dividing by magnitude = " + changeP + ", " + changeA + ", " + changeD);
    	
    	//Remove 5
    	changeP *= emotionCenter.intensity;
    	changeA *= emotionCenter.intensity;
    	changeP *= emotionCenter.intensity;
    	
    	Debug.Log("Emotional Intensity" + emotionCenter.intensity);
    	Debug.Log("Changes after Multiplying by Emotional Intensity = " + changeP + ", " + changeA + ", " + changeD);
    	
    	mood.P += changeP;
    	mood.A += changeA;
    	mood.D += changeD;
    	
    	Debug.Log("Mood Final Values at end of Pull = " + mood.P + ", " + mood.A + ", " + mood.D);
    	Debug.Log("End of Pull");  	
    }
    
    function push(emotionCenter: Emotion)
    {
    	Debug.Log("Inside Push");
    	Debug.Log("Emotion Center = " + emotionCenter.P + ", " + emotionCenter.A + ", " + emotionCenter.D);
    	
    	var changeP: double;
    	var changeA: double;
    	var changeD: double;
    	
    	changeP = (emotionCenter.P) / emotionCenter.intensity * 5;
    	changeA = (emotionCenter.A) / emotionCenter.intensity * 5;
    	changeD = (emotionCenter.D) / emotionCenter.intensity * 5;
    	
    	mood.P += changeP;
    	mood.A += changeA;
    	mood.D += changeD;
    	
    	Debug.Log("Mood Final Values at end of Push = " + mood.P + ", " + mood.A + ", " + mood.D);
    	Debug.Log("End of Push");
    }
    
    function sameQuadrant(emotionCenter: Emotion)
    {
    	 
	    //First Quadrant(+P, +A, +D)
    	if((emotionCenter.P > 0 && mood.P > 0) && (emotionCenter.A > 0 && mood.A > 0) && (emotionCenter.D > 0 && mood.D > 0))
    	{
    		Debug.Log("First Quadrant");
    		if(mood.P >= emotionCenter.P && mood.A >= emotionCenter.A && mood.D >= emotionCenter.D)
    			push(emotionCenter);
    		else
    			pull(emotionCenter);
    			
    	}       
    	
    	// Second Quadrant(+P, +A, -D)
    	if((emotionCenter.P > 0 && mood.P > 0) && (emotionCenter.A > 0 && mood.A > 0) && (emotionCenter.D < 0 && mood.D < 0))
    	{
    		Debug.Log("Second Quadrant");
    		if(mood.P >= emotionCenter.P && mood.A >= emotionCenter.A && mood.D <= emotionCenter.D)
    			push(emotionCenter);
    		else
    			pull(emotionCenter);
    			
    	}
    	
    	//Third Quadrant (+P, -A, +d)
    	if((emotionCenter.P > 0 && mood.P > 0) && (emotionCenter.A < 0 && mood.A < 0) && (emotionCenter.D > 0 && mood.D > 0))
    	{
    		Debug.Log("Third Quadrant");
    		if(mood.P >= emotionCenter.P && mood.A <= emotionCenter.A && mood.D >= emotionCenter.D)
    			push(emotionCenter);
    		else
    			pull(emotionCenter);
    			
    	}       
    	
    	//Fourth Quadrant(+P, -A, -D)
    	if((emotionCenter.P > 0 && mood.P > 0) && (emotionCenter.A < 0 && mood.A < 0) && (emotionCenter.D < 0 && mood.D < 0))
    	{
    		Debug.Log("Fourth Quadrant");
    		if(mood.P >= emotionCenter.P && mood.A <= emotionCenter.A && mood.D <= emotionCenter.D)
    			push(emotionCenter);
    		else
    			pull(emotionCenter);
    			
    	}
    	
    	//Fifth Quadrant(-P, +A, +D)
    	if((emotionCenter.P < 0 && mood.P < 0) && (emotionCenter.A > 0 && mood.A > 0) && (emotionCenter.D > 0 && mood.D > 0))
    	{
    		Debug.Log("Fifth Quadrant");
    		if(mood.P <= emotionCenter.P && mood.A >= emotionCenter.A && mood.D >= emotionCenter.D)
    			push(emotionCenter);
    		else
    			pull(emotionCenter);
    			
    	}
    	
    	//Sixth Quadrant(-P, +A, -D)
    	if((emotionCenter.P < 0 && mood.P < 0) && (emotionCenter.A > 0 && mood.A > 0) && (emotionCenter.D < 0 && mood.D < 0))
    	{
    		Debug.Log("Sixth Quadrant");
    		if(mood.P <= emotionCenter.P && mood.A >= emotionCenter.A && mood.D <= emotionCenter.D)
    			push(emotionCenter);
    		else
    			pull(emotionCenter);
    			
    	}
    	
    	//Seventh Quadrant(-P, -A, +D)
    	if((emotionCenter.P < 0 && mood.P < 0) && (emotionCenter.A < 0 && mood.A < 0) && (emotionCenter.D > 0 && mood.D > 0))
    	{
    		Debug.Log("Seventh Quadrant");
    		if(mood.P <= emotionCenter.P && mood.A <= emotionCenter.A && mood.D >= emotionCenter.D)
    			push(emotionCenter);
    		else
    			pull(emotionCenter);
    			
    	}

		//Eighth Quadrant(-P, -A, -D)
    	if((emotionCenter.P < 0 && mood.P < 0) && (emotionCenter.A < 0 && mood.A < 0) && (emotionCenter.D < 0 && mood.D < 0))
    	{
    		Debug.Log("Eigth Quadrant");
    		if(mood.P <= emotionCenter.P && mood.A <= emotionCenter.A && mood.D <= emotionCenter.D)
    			push(emotionCenter);
    		else
    			pull(emotionCenter);
    			
    	}
    
    }
    
    function pushPull()
    {
    	Debug.Log("Push Pull");
    	
	    // If No active Emotions exits, Mood does not change
	    if(activeEmotions.Count == 0)
	        return;
		
		Debug.Log("Active Emotions Number" + activeEmotions.Count);
	    // Comute the Virtual Emotion Centre
	    var pCenter: double; 
	    var aCenter: double;
	    var dCenter: double;
		
		pCenter = 0;
		aCenter = 0;
		dCenter = 0;
		
		
	    for(var i = 0; i < activeEmotions.Count; i++)
	    {
	    	var temp: Emotion = activeEmotions[i];
	        pCenter += temp.P;
	        aCenter += temp.A;
	        dCenter += temp.D;
	    }
		
		Debug.Log("Summation of Emotions =" + pCenter + ", " + aCenter + ", " + dCenter);
		
	    pCenter /= activeEmotions.Count;
	    aCenter /= activeEmotions.Count;
	    dCenter /= activeEmotions.Count;
	
	    Debug.Log("Final Emotional Centre =" + pCenter + ", " + aCenter + ", " + dCenter);
	    
	    
	    var emotionCenter: Emotion;
	    emotionCenter = new Emotion(pCenter, aCenter, dCenter);
		
		
	    //PUSH OR PULL
	    if((emotionCenter.P > 0 && mood.P > 0) || (emotionCenter.P < 0 && mood.P < 0))
	        if ((emotionCenter.A > 0 && mood.A > 0) || (emotionCenter.A < 0 && mood.A < 0))
	            if ((emotionCenter.D > 0 && mood.D > 0) || (emotionCenter.D < 0 && mood.D < 0))
	           	{
	           		Debug.Log("Same Quadrant from Push-Pull");
	           		//Same Quadrant: Can be either push or pull
	           		sameQuadrant(emotionCenter);
	           		return;
	            }
	            

        // The emotion center and Mood Center are in different quadrants
        // So emotion center cannot be betweem the current mood and PAD Zero
        // So Pull
        Debug.Log("Pull through Push-Pull");
        pull(emotionCenter);
	}
}


//import Mathf;
static var init: boolean;
var hitter: boolean;
var target: Transform;
var om: Transform;
var cor: Transform;
var coro: Transform;
var boss: Transform;
var movespeed = 15; 
var rotationSpeed = 3;
var myTransform: Transform;
var textureheight: int;
textureheight = 200;
var texturewidth: int;
var initial: boolean;
texturewidth = 250;
var tempval: int;
static var finalanswer: int;
var cherk: boolean;
var tempcon: boolean;

//Player Variable
var npc = new Player();
//Emotions Global Variable
var emotionlist:Hashtable = new Hashtable();

emotionlist['Anger'] = new Emotion(- 0.51, 0.59, 0.25);
emotionlist['Disliking'] = new Emotion(- 0.4, 0.2, 0.1);
emotionlist['Gloating'] = new Emotion(0.3, -0.3, -0.1);
emotionlist['Hate'] = new Emotion(- 0.6, 0.6, 0.3);
emotionlist['Dissappointment'] = new Emotion(- 0.3, 0.1, -0.4);
emotionlist['Fear'] = new Emotion(- 0.64, 0.60, -0.43);
emotionlist['Gratification'] = new Emotion(0.6, 0.5, 0.4);
emotionlist['Love'] = new Emotion(0.3, 0.1, 0.2);
emotionlist['Joy'] = new Emotion(0.4, 0.2, 0.1);
emotionlist['Resentment'] = new Emotion(- 0.2, -0.3, -0.2);
emotionlist['Shame'] = new Emotion(- 0.3, 0.1, -0.6);
emotionlist['Remorse'] = new Emotion(-0.3, 0.1, -0.4);
emotionlist['HappyFor'] = new Emotion(0.4, 0.2, 0.2);
emotionlist['Satisfaction'] = new Emotion(0.3, -0.2, 0.4);




// Not Used         
var PPad = 0.0;
var APad = 0.0;
var DPad = 0.0;

var talk: int;
var st: float;
var st1: float;
var st2: float;
var st3: float;
var st4: float;
var st5: float;
var st6: float;
var st7: float;
var st8: float;
var st9: float;
var st10: float;
var st11: float;
var st12: float;
var et: float;
st = st1 = st2 = st3 = st4 = st5 = st6 = st7 = st8 = st9 = st10 = st11 = st12 = 999999;
talk = 0;

function Awake()
{
    myTransform=transform;
}

function runALMA(e: ArrayList)
{
	npc.activeEmotions = e;
	npc.pushPull();
}

function Start()
{
    target=GameObject.FindWithTag("Player").transform;
    om=GameObject.FindWithTag("OldMan").transform;
    cor=GameObject.FindWithTag("Corpse4").transform;
    coro=GameObject.FindWithTag("Corpse2").transform;
    boss=GameObject.FindWithTag("boss").transform;
}


function OnGUI()
{

    if(talk==1 && (PPad==0) && (APad==0) &&(DPad==0))
    {
        GUI.Label(Rect(20,40,texturewidth,textureheight),"Help!");
        GUI.Label(Rect(20,240,texturewidth,textureheight)," P = "+npc.mood.P+"\n"+" A = "+npc.mood.A+"\n"+" D = "+npc.mood.D);
    }

    if(talk==1 && (PPad==1) && (APad==1) &&(DPad==1))
    {
        GUI.Label(Rect(20,40,texturewidth,textureheight),"Help!");
    }

    if(talk==1 && (PPad==-1) && (APad==-1) &&(DPad==-1))
    {
        GUI.Label(Rect(20,40,texturewidth,textureheight),"Help!");
    }

    if(talk==3)
    {
        GUI.Label(Rect(20,40,texturewidth,textureheight),"The Vile Beasts that Plague this Level have Killed and Flattened my dear Capsule Friends..! Fetch me a Potion from the above Cave and Save My Life!"+talk);
    }

    if(talk==5)
    {
        GUI.Label(Rect(20,40,texturewidth,textureheight),"Ah.. you chose the right one... You are worth following!!");
        GUI.Label(Rect(20,240,texturewidth,textureheight)," P = "+npc.mood.P+"\n"+" A = "+npc.mood.A+"\n"+" D = "+npc.mood.D);
    }

    if(talk==6)
    {
        GUI.Label(Rect(20,40,texturewidth,textureheight),"Oh no... The Bad one! You do not seem as insightful as you look...");
        GUI.Label(Rect(20,240,texturewidth,textureheight)," P = "+npc.mood.P+"\n"+" A = "+npc.mood.A+"\n"+" D = "+npc.mood.D);
    }

    if(talk==8 && (npc.mood.P)>0.2 && (npc.mood.A)>0 && (npc.mood.D)>0.1 )
    {
        GUI.Label(Rect(20,40,texturewidth,textureheight),"The Old White Capsule is not as Trustworthy as he looks. He seeks the Golden Scroll.. He can summon it from you... Will you do it? Left: Yeah.. He seems Alright! Right: Hmmm...you have a point..");
    }

    if(talk==8 && (npc.mood.P)<0.2 && (npc.mood.A)>0 && (npc.mood.D)<0.1 )
    {
        GUI.Label(Rect(20,40,texturewidth,textureheight),"I'm sure the Old White Capsule has tricked you already into Giving the Golden Scroll.. Will you let him summon it from you?.. Left: Duh!! Yes!! Right: You is Right Bro!");
    }
    
    //YES
    if(talk==33 && (npc.mood.P)>0.3 && (npc.mood.A)<0.1 && (npc.mood.D)>0.15 )
    {
        GUI.Label(Rect(20,40,texturewidth,textureheight),"What?? Alright.. I haven't been programmed to kill you!");
        GUI.Label(Rect(20,240,texturewidth,textureheight)," P = "+npc.mood.P+"\n"+" A = "+npc.mood.A+"\n"+" D = "+npc.mood.D);
    }

    //YES
    if(talk==33 && (npc.mood.P)<0.3 && (npc.mood.A)>0.1 && (npc.mood.D)<0.15 )
    {
        GUI.Label(Rect(20,40,texturewidth,textureheight),"Do you have any AI at all??");
        GUI.Label(Rect(20,240,texturewidth,textureheight)," P = "+npc.mood.P+"\n"+" A = "+npc.mood.A+"\n"+" D = "+npc.mood.D);
    }

    //NO
    if(talk==32 &&  (npc.mood.P)>0.1 && (npc.mood.A)<0.18 && (npc.mood.D)>0.08)
    {
        GUI.Label(Rect(20,40,texturewidth,textureheight),"You're a Prudent One I see... Though the scroll is powerless for us, it is not for him...");
        GUI.Label(Rect(20,240,texturewidth,textureheight)," P = "+npc.mood.P+"\n"+" A = "+npc.mood.A+"\n"+" D = "+npc.mood.D);
    }

    //NO
    if(talk==32 && (npc.mood.P)<0.1 && (npc.mood.A)>0.18 && (npc.mood.D)<0.08 )
    {
        GUI.Label(Rect(20,40,texturewidth,textureheight),"Not Bad... That's a good decision..");
        GUI.Label(Rect(20,240,texturewidth,textureheight)," P = "+npc.mood.P+"\n"+" A = "+npc.mood.A+"\n"+" D = "+npc.mood.D);
    }
    
    //NPC AVOID
    if(talk==65)
    {
        GUI.Label(Rect(20,40,texturewidth,textureheight),"More of my fallen friends... You shouldn't be one of them.. And Neither should I. There is a route in the back with some scrolls.. Get it from there. Don't touch the enemy... Every Enemy Killed Weakens Me.");
        GUI.Label(Rect(20,240,texturewidth,textureheight)," P = "+npc.mood.P+"\n"+" A = "+npc.mood.A+"\n"+" D = "+npc.mood.D);
    }
    
    //NPC FIGHT
    if(talk==66)
    {
        GUI.Label(Rect(20,40,texturewidth,textureheight),"The Fallen have no memory... You lack the cunning to deserve a way out.. Fight the Monster with me..!");
        GUI.Label(Rect(20,240,texturewidth,textureheight)," P = "+npc.mood.P+"\n"+" A = "+npc.mood.A+"\n"+" D = "+npc.mood.D);
    }
    
    //BUGLINES... Don't do anything... let em be!
    //NO
    if(talk==12 && (npc.mood.P)<0.1 && (npc.mood.A)>0.18 && (npc.mood.D)<0.08 )
    {
        GUI.Label(Rect(20,40,texturewidth,textureheight),"Not Bad... That's a good decision..");
    }

    //NO
    if(talk==13 && (npc.mood.P)<0.1 && (npc.mood.A)>0.18 && (npc.mood.D)<0.08 )
    {
        GUI.Label(Rect(20,40,texturewidth,textureheight),"Not Bad... That's a good decision..");
    }

    //NO
    if(talk==14)
    {
        GUI.Label(Rect(20,40,texturewidth,textureheight),"Got the Scroll Right??... I hope you have no scrolls left... Finish everything you need to before facing the boss!");
    }

    if(talk==16)
    {
        GUI.Label(Rect(20,40,texturewidth,textureheight),"You will have to do everything now.. I am too weak to do anything really!");
    }

    if(talk==17)
    {
        GUI.Label(Rect(20,40,texturewidth,textureheight),"You have been an obedient friend... Let me get you out of here.... There is a path behind the cave from where you got the potion. Thank me later. (Complete Exuberant)");
        GUI.Label(Rect(20,240,texturewidth,textureheight)," P = "+npc.mood.P+"\n"+" A = "+npc.mood.A+"\n"+" D = "+npc.mood.D);
    }

    if(talk==18)
    {
        GUI.Label(Rect(20,40,texturewidth,textureheight),"Behind this.... Fare thee well Friend..");
    }

    if(talk==20)
    {
        GUI.Label(Rect(20,40,texturewidth,textureheight),"You shall be the end of me... But you have the scroll.. I will kill the Enemy by myself... follow me! (Complete Hostile)");
        GUI.Label(Rect(20,240,texturewidth,textureheight)," P = "+npc.mood.P+"\n"+" A = "+npc.mood.A+"\n"+" D = "+npc.mood.D);
    }

    if(Cube1AI.bigguy && (finalanswer==1 || finalanswer==11 || finalanswer==7))
    {
        GUI.Label(Rect(20,40,texturewidth,textureheight),"Down in two Shots...! Now get out of this level..!! "+finalanswer);
        GUI.Label(Rect(20,240,texturewidth,textureheight)," P = "+npc.mood.P+"\n"+" A = "+npc.mood.A+"\n"+" D = "+npc.mood.D);
    }
}




function Update () 
{
    et = Time.time;
    //Movement Code

    if((Mathf.Abs(target.position.x-myTransform.position.x)<40) && (Mathf.Abs(target.position.z-myTransform.position.z)<40))
    {
        //hitter=true;
        //init=true;
        //initial=true;
    }

    if(finalanswer!=7 &&((Mathf.Abs(target.position.x-myTransform.position.x))<4) && ((Mathf.Abs(target.position.y-myTransform.position.y))<4) && ((Mathf.Abs(target.position.z-myTransform.position.z))<4))
    {
        hitter=false;
    }
    else if(initial)
    {
        hitter=true;
    }

    if(talk==19)
    {
        hitter=false;
        finalanswer=99;
    }

    if(Cube1AI.bigguy)
    {
        hitter=false;
        finalanswer=99;
    }
    //!Cube1AI.bigguy && talk!=19 && 


    if(hitter==true&& finalanswer!=7)
    {
        transform.LookAt(Vector3(target.position.x,target.position.y,target.position.z));
        myTransform.Translate(Vector3.forward*movespeed*Time.deltaTime);
    }

    if(finalanswer==7)
    {
        transform.LookAt(Vector3(boss.position.x,boss.position.y,boss.position.z));
        myTransform.Translate(Vector3.forward*movespeed*Time.deltaTime);
    }

    //Dialog Code
    //HELP
    if(talk==0 && (Mathf.Abs(target.position.x-myTransform.position.x)<40) && (Mathf.Abs(target.position.y-myTransform.position.y)<40) && (Mathf.Abs(target.position.z-myTransform.position.z)<40))
    {
        st=Time.time;
        talk=1;
    }

    if((et-st)>4 && talk<2)
    {
        talk=2;
    }
    
    //POTION
    if(talk==2 && (Mathf.Abs(target.position.x-myTransform.position.x)<4) && (Mathf.Abs(target.position.y-myTransform.position.y)<4) && (Mathf.Abs(target.position.z-myTransform.position.z)<4))
    {
        st1=Time.time;
        talk=3;
    }
    if((et-st1)>10 && talk<4)
    {
        talk=4;
    }
    
    //POTIONTYPE!
    if(GoodHealthScript.goodhealth && (Mathf.Abs(target.position.x-myTransform.position.x)<4) && (Mathf.Abs(target.position.y-myTransform.position.y)<4) && (Mathf.Abs(target.position.z-myTransform.position.z)<4) && talk==4)
    {   
        st2=Time.time;
        talk=5;

        //Appraising Heath Potion Event and Running ALMA
        var active1: ArrayList = new ArrayList();
        active1.Add(emotionlist['Joy']);
        active1.Add(emotionlist['Gratification']);
        runALMA(active1);

        init=true;
        hitter=true;
        initial=true;
    }
    else if(DamagePotionScript.poison && (Mathf.Abs(target.position.x-myTransform.position.x)<4) && (Mathf.Abs(target.position.y-myTransform.position.y)<4) && (Mathf.Abs(target.position.z-myTransform.position.z)<4) && talk==4)
    {
        st2=Time.time;
        talk=6;
        init=true;
        hitter=true;
        initial=true;

        //Appraising DamagePotion Event and Running ALMA
        var active2: ArrayList = new ArrayList();
        active2.Add(emotionlist['Anger']);
        active2.Add(emotionlist['Disliking']);
        active2.Add(emotionlist['Hate']);
        active2.Add(emotionlist['Fear']);
        active2.Add(emotionlist['Resentment']);
        runALMA(active2);

    }

    if((et-st2)>10 && talk<7)
    {
        talk=7;
    }

    //Approach Old Man
    if(talk==7 && (Mathf.Abs(om.position.x-target.position.x)<20) && (Mathf.Abs(om.position.y-target.position.y)<20) && (Mathf.Abs(om.position.z-target.position.z)<20))
    {
        st3=Time.time;
        talk=8;
    }

    if(talk==8 && (et-st3)>10 && talk<9)
    {
        talk=9;
    }
    
    if(talk==9 && Input.GetButtonDown("Fire2")&&!cherk)
    {
        //PAD;
        cherk=true;
        st9=Time.time;

        //Appraising Old Man Proximity Talk. Bad Talk....
        var active3: ArrayList = new ArrayList();
        active3.Add(emotionlist['Anger']);
        active3.Add(emotionlist['Disliking']);
        active3.Add(emotionlist['Hate']);
        active3.Add(emotionlist['Resentment']);
        runALMA(active3);
        talk=32;
    }
    
    if(talk==9 && Input.GetButtonDown("Fire1")&&!cherk)
    {
        //PAD;
        cherk=true;
        st9=Time.time;
        //Appraising Old Man Proximity Talk. Good Talk....
        var active4: ArrayList = new ArrayList();
        active4.Add(emotionlist['Joy']);
        active4.Add(emotionlist['Love']);
        active4.Add(emotionlist['Gratification']);
        runALMA(active4);
        talk=33;
    }
    
    if((et-st9)>10 && st9!=999999 && (talk==32 || talk==33))
    {
        talk=9;
    }



    //REACH CORPSE
    if(talk==9 && (Mathf.Abs(cor.position.x-target.position.x)<10) && (Mathf.Abs(cor.position.y-target.position.y)<10) && (Mathf.Abs(cor.position.z-target.position.z)<10))
    {
        st4=Time.time;
        talk=10;

        //if((npc.mood.P==0) && (npc.mood.A==0) &&(npc.mood.D==0))
        if((talk==10))
        {
            tempval=1;
            tempcon=true;
            //talk=65;
            //AVOID
        }

        if(talk==10 && (npc.mood.D>0.15 || npc.mood.D<0.08))
        {
            tempval=2;
            tempcon=false;
            //talk=66;
            //FIGHT
        }

        if(tempcon)
        {
            talk=65;
        }
        else
        {
            talk=66;
        }

        var active5: ArrayList = new ArrayList();
        active5.Add(emotionlist['Disliking']);
        active5.Add(emotionlist['Remorse']);
        runALMA(active5);
    }
    if((et-st4)>10 && (talk==66||talk==65))
    {
        talk=11;
    }

    
    //---------------------------------------------------------------------------------
    if(talk==11 && tempval==1 && Cubesmall1AI.cube2 && Collector3.card3)
    {
        st5=Time.time;
        //ANGRYTALK PAD REALLY HOSTILE
        var active6: ArrayList = new ArrayList();
        active6.Add(emotionlist['Anger']);
        active6.Add(emotionlist['Disliking']);
        active6.Add(emotionlist['Hate']);
        runALMA(active6);
        talk=12;
        //finalanswer=7;
    }


    //---------------------------------------------------------------------------------
    if(talk==11 && tempval==1 && !Cubesmall1AI.cube2 && Collector3.card3)
    {
        st5=Time.time;
        //HAPPYTALK
        var active7: ArrayList = new ArrayList();
        active7.Add(emotionlist['Gratification']);
        active7.Add(emotionlist['HappyFor']);
        active7.Add(emotionlist['Joy']);
        active7.Add(emotionlist['Satisfaction']);
        runALMA(active7);
        talk=13;
        //finalanswer=1;
    }
    
    //---------------------------------------------------------------------------------
    if(talk==11 && tempval==2  && Collector3.card3)
    {
        st5=Time.time;
        //&& Collector3.card3
        var active8: ArrayList = new ArrayList();
        active8.Add(emotionlist['Shame']);
        runALMA(active8);
        talk=14;
        finalanswer=11;
    }

    if((et-st5)>7 && talk<14)
    {
        talk=16;
    }
    
    //Exuberant Mood.... Gives Avoiding Path
    if(npc.mood.P>0 && npc.mood.A>0 && npc.mood.D>0)
    {
        finalanswer=1;
    }
    
    //Hostile Mood... Goes and Kills the Enemy
    if(npc.mood.P<0 && npc.mood.A>0 && npc.mood.D>0)
    {
        finalanswer=7;
    }

    //---------------------------------------------------------------------------------
    // DOCILE ACTIONS
    if(finalanswer==1 && talk==13)
    {
        st6=Time.time;//TELL ABOUT ALTERNATIVE PATH
        talk=17;
    }
    if(finalanswer==1 && talk==17 && (Mathf.Abs(coro.position.x-target.position.x)<30) && (Mathf.Abs(coro.position.y-target.position.y)<30) && (Mathf.Abs(coro.position.z-target.position.z)<30))
    {
        st7=Time.time;//GO TO CORPSE ORIGINAL
        talk=18;
    }
    if((et-st7)>10 && talk==18)
    {
        talk=19;
    }

    // ANGRY ACTIONS
    if(finalanswer==7 && talk==12)
    {
        talk=20;
        st8=Time.time;
    }
    if((et-st8)>10 && talk==20)
    {
        talk=21;
    }
}