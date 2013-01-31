

var target: Transform;
var movespeed=3; 
var rotationSpeed=3;
var myTransform:Transform;
var enemy:Transform;
var hel:double;
hel=15;
var texturewidth: int;
texturewidth=250;
var textureheight: int;
textureheight=200;
var kill:boolean;
kill=false;

function Start()
{
target=GameObject.FindWithTag("Player").transform;
}


function Awake()
{
myTransform=transform;
}



function OnTriggerEnter(other:Collider){

}

function OnTriggerExit(other:Collider){
if(other.tag=="Player")
kill=false;
}

function OnGUI(){

if(hel<15){
GUI.Label(Rect(20,40,texturewidth,textureheight),"Hel"+hel);
}
}


function Update(){

if(((target.position.x-myTransform.position.x)<2) && ((target.position.y-myTransform.position.y)<2) && ((target.position.z-myTransform.position.z)<2))
{
hel-=0.01;
if(hel<0)
{Application.LoadLevel(5);
}
}



if(((target.position.x-myTransform.position.x)<2) && ((target.position.y-myTransform.position.y)<2) && ((target.position.z-myTransform.position.z)<2))
{
hel-=0.01;
if(hel<0)
{Application.LoadLevel(5);
}
}




if(((target.position.x-myTransform.position.x)<50) && ((target.position.y-myTransform.position.y)<50) && ((target.position.z-myTransform.position.z)<50))
{movespeed=3;
transform.LookAt(Vector3(target.position.x,transform.position.y,target.position.z));
myTransform.Translate(Vector3.forward*movespeed*Time.deltaTime);
}
else
{movespeed=0;
}




}
