var target: Transform;
var movespeed=3; 
var rotationSpeed=3;
var myTransform:Transform;
var hel:int;
hel=15;
var texturewidth: int;
texturewidth=250;
var textureheight: int;
textureheight=200;
var kill:boolean;
kill=false;
var hitter:boolean;
function Awake()
{
myTransform=transform;
}

function Start()
{
target=GameObject.FindWithTag("Player").transform;
}

function OnTriggerEnter(other:Collider){
if(other.tag=="Player"){
kill=true;

while(kill)
{
hel--;
yield WaitForSeconds (0.5);
}
//}
}
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
if(((target.position.x-myTransform.position.x)<10) && ((target.position.y-myTransform.position.y)<20) && ((target.position.z-myTransform.position.z)<20))
{hitter=true;
}
if(hitter==true)
{
transform.LookAt(Vector3(target.position.x,transform.position.y,target.position.z));
myTransform.Translate(Vector3.forward*movespeed*Time.deltaTime);

if(hel==0)
{Application.LoadLevel(2);
}
}
}