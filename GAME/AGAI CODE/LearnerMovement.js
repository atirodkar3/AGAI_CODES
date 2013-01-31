var texturewidth: int;
texturewidth=250;
var textureheight: int;
textureheight=200;
var c1:int;
var myTransform:Transform;
var general=new Array(5);
var pickn=new Array();
var et:float;
var st:float;
for(c1=0;c1<general.length;c1++)
{
general[c1]=new Array(4);
}
static var pickups = new Array();
var learnarray=new Array();
var learnednum=new Array();
var arraynum=new Array(4);
//general=LearningForHumans.generalize;




function Awake()
{
myTransform=transform;
}

var i:int;
var j:int;

function initializer()
{/*
for(i=0;i<5;i++)
{
for(j=0;j<4;j++)
{
general[i][j]=new Array(LearningForHumans.generalize[i][j]);
}
}

print (general);
/*
general.push(LearningForHumans.generalize[0]);
general.push(LearningForHumans.generalize[1]);
general.push(LearningForHumans.generalize[2]);
general.push(LearningForHumans.generalize[3]);
general.push(LearningForHumans.generalize[4]);

/*
general[0]=new Array("stepb","start","blue1||blue2","stepb");
general[1]=new Array("stepg","start","green1||green2","stepg");
general[2]=new Array("stepw","start","white1||white2","stepw");
general[3]=new Array("stepy","start","yellow1||yellow2","stepy");
general[4]=new Array("stepr","start","red1||red2","stepr");
*/

learnarray[0]=LearningForHumans.generalize[arraynum[0]][1];
learnarray[1]=LearningForHumans.generalize[arraynum[0]][2];
learnarray[2]=LearningForHumans.generalize[arraynum[0]][3];
learnarray[3]=LearningForHumans.generalize[arraynum[1]][2];
learnarray[4]=LearningForHumans.generalize[arraynum[1]][3];
learnarray[5]=LearningForHumans.generalize[arraynum[2]][2];
learnarray[6]=LearningForHumans.generalize[arraynum[2]][3];
learnarray[7]=LearningForHumans.generalize[arraynum[3]][2];
learnarray[8]=LearningForHumans.generalize[arraynum[3]][3];
print ("Learn Array "+learnarray);


}


var ansnpc:String;
function Start () {
start=GameObject.FindWithTag("Start").transform;
player=GameObject.FindWithTag("Player").transform;
blue1=GameObject.FindWithTag("Blue1").transform;
blue2=GameObject.FindWithTag("Blue2").transform;
green1=GameObject.FindWithTag("Green1").transform;
green2=GameObject.FindWithTag("Green2").transform;
yellow1=GameObject.FindWithTag("Yellow1").transform;
yellow2=GameObject.FindWithTag("Yellow2").transform;
red1=GameObject.FindWithTag("Red1").transform;
red2=GameObject.FindWithTag("Red2").transform;
white1=GameObject.FindWithTag("White1").transform;
white2=GameObject.FindWithTag("White2").transform;
stepb=GameObject.FindWithTag("Stepb").transform;
stepy=GameObject.FindWithTag("Stepy").transform; 
stepg=GameObject.FindWithTag("Stepg").transform;
stepw=GameObject.FindWithTag("Stepw").transform;
stepr=GameObject.FindWithTag("Stepr").transform;


var ablue1=new Array("blue1",blue1.position.x,blue1.position.y,blue1.position.z);
var ablue2=new Array("blue2",blue2.position.x,blue2.position.y,blue2.position.z);
var agreen1=new Array("green1",green1.position.x,green1.position.y,green1.position.z);
var agreen2=new Array("green2",green2.position.x,green2.position.y,green2.position.z);
var ayellow1=new Array("yellow1",yellow1.position.x,yellow1.position.y,yellow1.position.z);
var ayellow2=new Array("yellow2",yellow2.position.x,yellow2.position.y,yellow2.position.z);
var ared1=new Array("red1",red1.position.x,red1.position.y,red1.position.z);
var ared2=new Array("red2",red2.position.x,red2.position.y,red2.position.z);
var awhite1=new Array("white1",white1.position.x,white1.position.y,white1.position.z);
var awhite2=new Array("white2",white2.position.x,white2.position.y,white2.position.z);
var astepb=new Array("stepb",stepb.position.x,stepb.position.y,stepb.position.z);
var astepg=new Array("stepg",stepg.position.x,stepg.position.y,stepg.position.z);
var astepw=new Array("stepw",stepw.position.x,stepw.position.y,stepw.position.z);
var astepy=new Array("stepy",stepy.position.x,stepy.position.y,stepy.position.z);
var astepr=new Array("stepr",stepr.position.x,stepr.position.y,stepr.position.z);
var astart=new Array("start",start.position.x,start.position.y,start.position.z);

//var pickups = new Array();
//var pickups = [];

pickups.push(ablue1);//0
pickups.push(ablue2);//1
pickups.push(agreen1);//2
pickups.push(agreen2);//3
pickups.push(ayellow1);//4
pickups.push(ayellow2);//5
pickups.push(ared1);//6
pickups.push(ared2);//7
pickups.push(awhite1);//8
pickups.push(awhite2);//9
pickups.push(astepb);//10
pickups.push(astepg);//11
pickups.push(astepw);//12
pickups.push(astepy);//13
pickups.push(astepr);//14
pickups.push(astart);//15
/*var ber1=
var ber2=
var ber3=
var ber4=
var ber5=
*/
/*

*/
//if(LearningForHumans.finalkey)
	//{
	//print ("HAPPENED ");
		var i:int;
		for(i=0;i<5;i++)
		{
	//	print ("ROW "+i+" "+general[i]);
		}
	
	LearningForHumans.finalkey=false;
	//}
//print (pickups);
//-------------------------------------------------------RANDOM NUMBER GENERATION---------------------------------
//print (Mathf.Round(Random.Range(0,5)));

ansnpc="";
ansnpc+="start";

var i2:int;
for(i2=0;i2<4;i2++)
{
var rnum=Mathf.Round(Random.Range(0,5));
arraynum[i2]=rnum;
if(rnum==0&&(i2%2==0))
{
ansnpc+="blue1";
}
if(rnum==0&&(i2%2!=0))
{
ansnpc+="blue2";
}
if(rnum==1&&(i2%2==0))
{
ansnpc+="green1";
}
if(rnum==1&&(i2%2!=0))
{
ansnpc+="green2";
}
if(rnum==2&&(i2%2==0))
{
ansnpc+="white1";
}
if(rnum==2&&(i2%2!=0))
{
ansnpc+="white2";
}
if(rnum==3&&(i2%2==0))
{
ansnpc+="yellow1";
}
if(rnum==3&&(i2%2!=0))
{
ansnpc+="yellow2";
}
if(rnum==4&&(i2%2==0))
{
ansnpc+="red1";
}
if(rnum==4&&(i2%2!=0))
{
ansnpc+="red2";
}
ansnpc+=pickups[rnum+10][0];
}

print("QUESTION STRING "+ansnpc);
print("QUESTION Array "+arraynum);
//-------------------------------------------------------RANDOM NUMBER GENERATION---------------------------------

}


var ind:int;
static var move1:int;
move1=0;
var posn:int;


function distance(x,y,z,x1,y1,z1)
{
var p:float;
p=Mathf.Sqrt( (x-x1) * (x-x1) + (y-y1) * (y-y1) + (z-z1) * (z-z1) );
return Mathf.Round(p);
}
var ranchange:boolean;
var compa:String;
function distobj(i,posn)
{
	var ii:int;
	for(ii=0;ii<16;ii++)
	{	
	if(learnarray[i].IndexOf("||")>0)
			{
			 //print ("Posn "+posn);
			if(demo){	
					//print ("Posss Happened ");
					if(posn==0)
								{
								compa=learnarray[i].Substring(0,((learnarray[i].Length)/2)-1 );
								}
					//print("UG BOOKS "+learnarray[i].Substring( (learnarray[i].Length/2)+1  ,(learnarray[i].Length/2)-1 ));		
						else	
								{
								compa=learnarray[i].Substring( (learnarray[i].Length/2)+1  ,(learnarray[i].Length/2)-1);
								}
					}
			else
					{	
					
					//print ("Learner Happened " + learnarray[i]+learnednum[i]);
					if(learnednum[i]==0){
						compa=learnarray[i].Substring(0,((learnarray[i].Length)/2)-1 );
						//compa="red1";
						}
					//print("UG BOOKS "+learnarray[i].Substring( (learnarray[i].Length/2)+1  ,(learnarray[i].Length/2)-1 ));		
					else	
						{
						compa=learnarray[i].Substring( (learnarray[i].Length/2)+1  ,(learnarray[i].Length/2)-1);
						//compa="red1";
						}
					}
					}
			else
					{
					compa=learnarray[i];
					}
				if(compa==pickups[ii][0])						
					{	//print ("Posn "+posn+" COMPA "+compa);
						var objOut = new Array(pickups[ii][1],pickups[ii][2],pickups[ii][3]);
						return objOut;
					}
	}
}




function move(pos){
var xx:float;
var yy:float;
var zz:float;
if(!ranchange)
{
posn=Mathf.Round(Random.Range(0,2));
ranchange=true;
}

var result=new Array(distobj(pos,posn));
xx=result[0];
yy=result[1];
zz=result[2];
//print (xx+yy+zz);
if(distance(myTransform.position.x,myTransform.position.y,myTransform.position.z,xx,yy,zz)>2)
{
transform.LookAt(Vector3(xx,yy,zz));
myTransform.Translate(Vector3.forward*20*Time.deltaTime);
}
else
{
ranchange=false;
move1++;
}
}
var cr1:boolean;
cr1=false;
var cr2:boolean;
cr2=false;
var cr3:boolean;
cr3=false;
var cr4:boolean;
cr4=false;
var cr5:boolean;
cr5=false;
var cr6:boolean;
cr6=false;
var cr7:boolean;
cr7=false;
var cr8:boolean;
cr8=false;
var cr9:boolean;
cr9=false;

function actmove()
{
if(move1==0)
		{
		move(0);
		if(demo)
			learnednum[0]=posn;
		else
		{
				if(!cr1)
				{sfin+=learnarray[0];
				cr1=true;
				}
		}
		}
if(move1==1)
		{
		move(1);
		if(demo)
			learnednum[1]=posn;
		else
		{
				if(!cr2)
				{sfin+=compa;
				cr2=true;
				}
		}
		}
if(move1==2)
		{
		move(2);
		if(demo)
			learnednum[2]=posn;
		else
		{
				if(!cr3)
				{sfin+=compa;
				cr3=true;
				}
		}
		}
if(move1==3)
		{
		move(3);
		if(demo)
			learnednum[3]=posn;
		else
		{
				if(!cr4)
				{sfin+=compa;
				cr4=true;
				}
		}
		}
if(move1==4)
		{
		move(4);
		if(demo)
			learnednum[4]=posn;
		else
		{
				if(!cr5)
				{sfin+=compa;
				cr5=true;
				}
		}
		}
if(move1==5)
		{
		move(5);
		if(demo)
			learnednum[5]=posn;
		else
		{
				if(!cr6)
				{sfin+=compa;
				cr6=true;
				}
		}
		}
if(move1==6)
		{
		move(6);
		if(demo)
			learnednum[6]=posn;
		else
		{
				if(!cr7)
				{sfin+=compa;
				cr7=true;
				}
		}
		}
if(move1==7)
		{
		move(7);
		if(demo)
			learnednum[7]=posn;
		else
		{
				if(!cr8)
				{sfin+=compa;
				cr8=true;
				}
		}
		}
if(move1==8)
		{
		move(8);
		if(demo)
			learnednum[8]=posn;
		else
			{
				if(!cr9)
				{sfin+=compa;
				cr9=true;
				print (sfin);
				}
			}
		//print ("Learned Numbers: "+learnednum);		
		}
}

function OnGUI()
{
	if(move1==9 && check1==0)
		{GUI.Label(Rect(100,40,texturewidth,textureheight),"Test Run Over: Feedback About Move 1: Left:Yes && Right:No");
		}
	if(move1==9 && check1==1)
		{GUI.Label(Rect(100,40,texturewidth,textureheight),"Test Run Over: Feedback About Move 2: Left:Yes && Right:No");
		}
	if(move1==9 && check1==2)
		{GUI.Label(Rect(100,40,texturewidth,textureheight),"Test Run Over: Feedback About Move 3: Left:Yes && Right:No");
		}
	if(move1==9 && check1==3)
		{GUI.Label(Rect(100,40,texturewidth,textureheight),"Test Run Over: Feedback About Move 4: Left:Yes && Right:No");
		}
	if(move1==7777 && ec1)
		{GUI.Label(Rect(100,40,texturewidth,textureheight),"Level Load Done!");
		}

	if(move1==7778 && ec1)
		{GUI.Label(Rect(100,40,texturewidth,textureheight),"Wrong Sequence... Level Lost!");
		}
}
var check1=0;
function changeNumba(i)
{		//check1=true;
	var	condition=false;
		//print ("PRINTT "+i);
					
					if(Input.GetButtonDown("Fire1"))
						{//print ("Left Happened ");
						condition=true;
						}
					if(Input.GetButtonDown("Fire2"))
						{//print ("LearnBefore "+learnednum[i]);
						//print ("Right Happened "+i);
						if(learnednum[i]==0)
							learnednum[i]=1;
						else if(learnednum[i]==1)
							learnednum[i]=0;
														
						//print ("LearnAfter "+learnednum[i]);
						condition=true;
						}
					
return condition;
}


var change:boolean;
change=false;
function changelearn(check1)
{		var cond22:boolean;
			cond22=false;
			//FIRST STEP
			//if(check1)	
			if(move1==9 && check1==0)
				{var cond=changeNumba(1);
				if(cond)
				{	cond22=true;
				}
				}
			//SECOND STEP	
			if(move1==9 && check1==1)
				{var cond1=changeNumba(3);
				if(cond1)
				{	cond22=true;
				}
				}
				
				
			if(move1==9 && check1==2)
				{var cond2=changeNumba(5);
				if(cond2)
				{	cond22=true;
				}
				}
			if(move1==9 && check1==3)
				{var cond3=changeNumba(7);
				if(cond3)
				{	cond22=true;
				//print ("NEW ARRAY "+learnednum);
				change=true;
				}
				}
return cond22;				

}


var demo:boolean;
var real:boolean;
var first:boolean;
first=true;
demo=false;
real=false;
var demofirst:boolean;
demofirst=false;
//1,3,5,7
var sfin:String;
sfin="";
var genc:boolean;
genc=false;
var ec1:boolean;
var ec2:boolean;
ec1=false;
ec2=false;
function Update () {
et=Time.time;
if(LearningForHumans.finalkey)
{
		if(LearningForHumans.finalkey && !demo && move1!=9 &&!demofirst && !genc)
		{genc=true;
		initializer();
		}
		
		if(LearningForHumans.finalkey && !demo && move1!=9 &&!demofirst)
			{
			demo=true;

			}
		if(demo)
			actmove();
		
		if(move1==9)
		{
		demo=false;
		demofirst=true;
		var test=changelearn(check1);
		if(test)
		{check1++;
		}
		
		}
		
		if(change && !demo)
		{
		real=true;
		}
		
		if(change && real)	
		{	if(move1==9 &&first)
				move1=0;
			if(move1==9 &&!first)
			{	
				if(ansnpc.Equals(sfin) && st==0)
					{move1=7777;	
					 ec1=true;
					st=Time.time;	
					LearningForHumans.entercheck=false;	
					}
				else
					move1=7778;
					ec1=true;
					st=Time.time;
					LearningForHumans.entercheck=false;
			}
			if((et-st)>10)
				ec1=false;
				
			if(move1==8 &&first)
				first=false;
			
			
			actmove();
			
		}
}
}

		

