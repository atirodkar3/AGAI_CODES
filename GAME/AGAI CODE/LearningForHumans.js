
var texturewidth: int;
texturewidth=250;
var textureheight: int;
textureheight=200;
static var pickups = new Array();
var npcheck=new Array(5);
var c1:int;
for(c1=0;c1<npcheck.length;c1++)
{
npcheck[c1]=new Array(10);
}
//print (npcheck[3][2]);
static var generalize=new Array(5);
for(c1=0;c1<generalize.length;c1++)
{
generalize[c1]=new Array(4);
}
static var cr:boolean;
cr=false;
var myTransform:Transform;
var st:float;
var et:float;
var player:Transform;
var blue1:Transform;
var blue2:Transform;
var green1:Transform;
var green2:Transform;
var yellow1:Transform;
var yellow2:Transform;
var white1:Transform;
var white2:Transform;
var red1:Transform;
var red2:Transform;
var stepb:Transform;
var stepw:Transform;
var stepy:Transform;
var stepr:Transform;
var stepg:Transform;
var npc:Transform;
var start:Transform;
var anst1:String;
var anst2:String;
var anst3:String;
var donestr:String;
var donestr1:String;
var donestr2:String;

var check:boolean;
donestr="";

function Awake()
{
myTransform=transform;
}

function distance(x,y,z,par)
{
var p:float;
p=Mathf.Sqrt( (x-parseFloat(par[1].ToString())) * (x-parseFloat(par[1].ToString())) + (y-parseFloat(par[2].ToString())) * (y-parseFloat(par[2].ToString())) + (z-parseFloat(par[3].ToString())) * (z-parseFloat(par[3].ToString())));
return Mathf.Round(p);
}
/*
function lcs(a, b): String {
  var aSub = a.Substring(0, a.Length-1);
  var bSub = b.Substring(0, b.Length-1);
if (a.Length == 0 || b.Length == 0) {
    return "";
  } else if (a[a.Length-1] == b[b.Length-1]) {
    return lcs(aSub, bSub) + a[a.Length-1];
  } else {
    var x = lcs(a, bSub);
    var y = lcs(aSub, b);
    return (x.Length > y.Length) ? x : y;
  }
}
*/
function lcs(a,b): String{
    var aLen = a.Length;
    var bLen = b.Length;
    if(aLen == 0 || bLen == 0){
        return "";
    }else if(a[aLen-1] == b[bLen-1]){
        return lcs(a.Substring(0,aLen-1),b.Substring(0,bLen-1)) + a[aLen-1];
    }else{
        var x = lcs(a, b.Substring(0,bLen-1));
        var y = lcs(a.Substring(0,aLen-1), b);
        return (x.Length > y.Length) ? x : y;
    }
}

function npcvals(donestr)
{
var ic:int;
for(ic=0;ic<5;ic++)
{
	if(donestr.IndexOf((npcheck[ic][0]))>0)
	{
		var t:int;
		for(t=0;t<10;t++)
		{	print("YES"+npcheck[ic][0]);	
			if(npcheck[ic][t]==null)
				{	var tempp:String;
					tempp=donestr.Substring(0,5);
					npcheck[ic][t]=tempp;
					var temp2:String;
						if(npcheck[ic][0].Equals("stepw"))
						{
						 temp2="white";
						 temp2+=donestr[donestr.IndexOf((npcheck[ic][0]))-1];
							npcheck[ic][t+1]=temp2;
						}
						if(npcheck[ic][0].Equals("stepr"))
						{
						 temp2="red";
						 temp2+=donestr[donestr.IndexOf((npcheck[ic][0]))-1];
							npcheck[ic][t+1]=temp2;
						}
						if(npcheck[ic][0].Equals("stepy"))
						{
						 temp2="yellow";
						 temp2+=donestr[donestr.IndexOf((npcheck[ic][0]))-1];
							npcheck[ic][t+1]=temp2;
						}
						if(npcheck[ic][0].Equals("stepg"))
						{
						 temp2="green";
						 temp2+=donestr[donestr.IndexOf((npcheck[ic][0]))-1];
							npcheck[ic][t+1]=temp2;
						}
						if(npcheck[ic][0].Equals("stepb"))
						{
						 temp2="blue";
						 temp2+=donestr[donestr.IndexOf((npcheck[ic][0]))-1];
							npcheck[ic][t+1]=temp2;
						}																	
					
					npcheck[ic][t+2]=npcheck[ic][0];
				break;
				}
		}
	}

}
print ("NPCHECK " +npcheck[0]);
print ("NPCHECK " +npcheck[1]);
print ("NPCHECK " +npcheck[2]);
print ("NPCHECK " +npcheck[3]);
print ("NPCHECK " +npcheck[4]);

}


function Start()
{
/*var ss:String;
ss="Startblue1green2step4";
var sss:String;
sss="blue1";
print ("IndexVal "+ss.IndexOf(sss));
*/
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

/*
npcheck.push(ablue1[0]);//0
npcheck.push(ablue2[0]);//1
npcheck.push(agreen1[0]);//2
npcheck.push(agreen2[0]);//3
npcheck.push(ayellow1[0]);//4
npcheck.push(ayellow2[0]);//5
npcheck.push(ared1[0]);//6
npcheck.push(ared2[0]);//7
npcheck.push(awhite1[0]);//8
npcheck.push(awhite2[0]);//9
npcheck.push(astepb[0]);//10
npcheck.push(astepg[0]);//11
npcheck.push(astepw[0]);//12
npcheck.push(astepy[0]);//13
npcheck.push(astepr[0]);//14
npcheck.push(astart[0]);//15*/
var ii:int;
for(ii=0;ii<5;ii++)
{
npcheck[ii][0]=pickups[10+ii][0];
generalize[ii][0]=pickups[10+ii][0];
}

print ("NPCHECK " +npcheck);




// SALIL PAI BIRTHDAY 7157685111
//print (pickups);
//print ("DISTANCE"+distance(pickups[2][1],pickups[2][2],pickups[2][3],pickups[2]));

//print ("Lets see"+pickups);
var a1:String;
a1="startblue1stepbgreen2stepgred1stepryellow2stepy";
var a2:String;
a2="start";
print ("AmyChilds"+lcs(a2,a1));
cr=true;





/*pickups[0][1]=ablue1[0][1];
pickups[0][2]=ablue1[0][2];
pickups[0][3]=ablue1[0][3];
pickups[0][4]=ablue1[0][4];
*/

//print (pickups[0]);
//print ("DEBUG "+parseFloat(pickups[0][2].ToString) * 10);


//print ("Values ARE "+blue1);

//print ("MUL"+2.0*parseFloat(blue1[2].ToString()));
}

var printcase1:boolean;
printcase1=false;
var printcase2:boolean;
printcase2=false;
var printcase3:boolean;
printcase3=false;
var positive:boolean;
var negative:boolean;
var positive1:boolean;
var negative1:boolean;
var positive2:boolean;
var negative2:boolean;
static var finalkey:boolean;
finalkey=false;
var extra:boolean;
extra=false;

function OnGUI()
{
if(printcase1 && !printcase2 && !printcase3)
{GUI.Label(Rect(100,40,texturewidth,textureheight),"TEST CASE 1: Blue-Green-Red-Yellow");
}
if(!printcase1 && printcase2 && !printcase3)
{GUI.Label(Rect(100,40,texturewidth,textureheight),"TEST CASE 2: White-Red-Yellow-Blue");
}
if(!printcase1 && !printcase2 && printcase3 &&extra)
{GUI.Label(Rect(100,40,texturewidth,textureheight),"TEST CASE 3: Green-White-Blue-Red");
}
if(positive1)
{GUI.Label(Rect(1000,40,texturewidth,textureheight),"Step Correct");
}
if(negative1)
{GUI.Label(Rect(1000,40,texturewidth,textureheight),"Step InCorrect");
}
if(positive2)
{GUI.Label(Rect(1000,40,texturewidth,textureheight),"Step Correct");
}
if(entercheck)
{GUI.Label(Rect(600,560,texturewidth,textureheight),"Go to the Purple Step to Start Combination Puzzle. Follow the Step Directions as they Come up.");
}
//if(check)
//{GUI.Label(Rect(1000,400,texturewidth,textureheight),lcs(donestr,anst1));
//}
}

function distcheck(donestr)
{

p=99999;
index=0;
//Checks for what the player is closest to
		for(count=0;count<16;count++)
		{
		if(distance(player.position.x,player.position.y,player.position.z,pickups[count])<p)
		{
		p=distance(player.position.x,player.position.y,player.position.z,pickups[count]);
		index=count;
		}
		}
print (index);		
//var temparray=new Array(Length(npcheck[index])+3);
//npcheck[index];
//var ind:int;
//ind=npcheck[index];

donestr=donestr+pickups[index][0];
print ("DONE STRING "+donestr);
return donestr;
}

static var entercheck:boolean;

function Update () {
var case1:boolean;
var case2:boolean;
var case3:boolean;
var count:int;
var p:int;
var index:int;
et=Time.time;

anst1="startblue1stepbgreen2stepgred1stepryellow2stepy";
if(distance(player.position.x,player.position.y,player.position.z,pickups[15])<5  && !printcase1 && !printcase2 && !printcase3)
{entercheck=true;
//print ("HIT " + distance(player.position.x,player.position.y,player.position.z,pickups[15]));
if(Input.GetButtonDown("Fire1") && !printcase1 && !printcase2 && !printcase3)
{negative1=false;
printcase1=true;
donestr="";
}
}

//var donestr:String;

if(Input.GetButtonDown("Fire1") && printcase1 && !printcase2 && !printcase3)
{
donestr=distcheck(donestr);
}

if(Input.GetButtonDown("Fire2")  && printcase1 && !printcase2 && !printcase3)
{
//printcase2=true;
print (donestr);
//check=true;
if((donestr).Equals(anst1))
{
positive1=true; 
printcase1=false;
printcase2=true;
printcase3=true;
npcvals(donestr);
//generalizer();
}
else
{negative1=true;
printcase1=false;
printcase2=false;
printcase3=false;
}

}



//-----------------------------------------------------------CASE 2---------------------------------------
anst2="startwhite1stepwred2stepryellow1stepyblue2stepb";
if(distance(player.position.x,player.position.y,player.position.z,pickups[15])<5  && !printcase1 && printcase2 && printcase3)
{
//print ("HIT " + distance(player.position.x,player.position.y,player.position.z,pickups[15]));
if(Input.GetButtonDown("Fire1") && printcase3)
{negative1=false;
positive1=false;
printcase3=false;
donestr1="";
}
}

//var donestr:String;

if(Input.GetButtonDown("Fire1") && !printcase1 && printcase2 && !printcase3)
{
donestr1=distcheck(donestr1);
}

if(Input.GetButtonDown("Fire2") && !printcase1 && printcase2 && !printcase3)
{
//printcase2=true;
print (donestr1);
//check=true;
if((donestr1).Equals(anst2))
{
positive1=true; 
printcase1=false;
printcase2=false;
printcase3=true;
npcvals(donestr1);
}
else
{negative1=true;
printcase1=false;
printcase2=true;
printcase3=true;
}

}

//-----------------------------------------------------------CASE 3---------------------------------------

anst3="startgreen1stepgwhite2stepwblue1stepbred2stepr";
if(distance(player.position.x,player.position.y,player.position.z,pickups[15])<5  && !printcase1 && !printcase2 && printcase3 && !extra)
{
//print ("HIT " + distance(player.position.x,player.position.y,player.position.z,pickups[15]));
if(Input.GetButtonDown("Fire1") && !printcase1 && !printcase2 && printcase3 && !extra)
{negative1=false;
extra=true;
positive1=false;
printcase3=true;
donestr2="";
}
}

//var donestr:String;

if(Input.GetButtonDown("Fire1") && !printcase1 && !printcase2 && printcase3 && extra)
{
donestr2=distcheck(donestr2);
}

if(Input.GetButtonDown("Fire2") && !printcase1 && !printcase2 && printcase3 && extra)
{
//printcase2=true;
print (donestr2);
//check=true;
if((donestr2).Equals(anst3))
{st=Time.time;
positive2=true; 
printcase1=true;
printcase2=true;
printcase3=true;
npcvals(donestr2);
generalizer();
finalkey=true;
}
else
{negative1=true;
printcase1=false;
printcase2=false;
printcase3=true;
extra=false;
}

}

if(et-st>15)
{positive2=false;
}
}

function generalizer()
{
var i:int;
		for(i=0;i<5;i++)
		{
		var s1:String;
		var s2:String;
		var s3:String;
		var lcout1:String;
		var lcout2:String;
		var lcout3:String;
		var lcout4:String;
		
		if(npcheck[i][1]!=null)
			s1=npcheck[i][1].ToString()+npcheck[i][2].ToString()+npcheck[i][3].ToString();
		if(npcheck[i][4]!=null)
			s2=npcheck[i][4].ToString()+npcheck[i][5].ToString()+npcheck[i][6].ToString();
		if(npcheck[i][7]!=null)
			s3=npcheck[i][7].ToString()+npcheck[i][2].ToString()+npcheck[i][9].ToString();
		
			if(npcheck[i][7]!=null)
				{
				lcout=lcs(s1,s2);
				lcout1=lcs(lcout,s3);
				}
			else
			if(npcheck[i][4]!=null)
				{lcout1=lcs(s1,s2);
				}
			else
				{
				lcout1=s1;
				}		
		
//print ("LCout val: "+i+" "+(lcout1)+" "+lcout1.Length );
//print (((lcout1.Length)-5)+" "+((lcout1.Length)-2));
				if(lcout1!=null)
				{
				print (" 5 "+lcout1[lcout1.length-5]+" 6 "+lcout1[lcout1.length-6]+" 7 "+lcout1[lcout1.length-7]);
				generalize[i][1]=lcout1.Substring(0,5);
				generalize[i][3]=lcout1.Substring( ((lcout1.Length)-5), ( ((lcout1.Length))-((lcout1.Length)-5) )  );
				if(lcout1[lcout1.length-6]!="1" && lcout1[lcout1.length-6]!="2")
				{
				generalize[i][2]=lcout1.Substring(5, ( ((lcout1.Length)-10)))+"1||"+lcout1.Substring(5, ( ((lcout1.Length)-10)))+"2";
				}
				else
				{generalize[i][2]=lcout1.Substring(5, ( ((lcout1.Length)-10)));
				}
				}
				var i2:int;
				for(i2=0;i2<5;i2++)
				{print ("GENERALIZED ARRAY "+i2+" "+generalize[i2]);
				}
				}
				}
			

			