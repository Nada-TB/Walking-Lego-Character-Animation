
/***********************************************variables*********************************************************** */
let start =-100;
let state=false;
const body = document.getElementById("body");
const arm1 = document.getElementById("arm1");
const arm2 = document.getElementById("arm2");
const leg1=document.getElementById('leg1');
const leg2=document.getElementById('leg2');
let memberMove=setInterval(moveArm,500);
let walk=setInterval(moveRight, 20);

/*******************************************functions***************************************************************** */

function static(){
  arm1.style.transform="rotate(30deg)";
  arm2.style.transform= "rotate(-35deg)";
  arm1.style.left="-10px";
  arm2.style.left="40px";
  leg1.style.transform="rotate(-20deg)";
  leg2.style.transform="rotate(25deg)";
  leg1.style.left="55px";
  leg2.style.left="0px";
}

function moving(){
   arm2.style.transform="rotate(30deg)";
   arm1.style.transform= "rotate(-20deg)";
   arm1.style.left="70px";
   arm2.style.left="10px";
   leg1.style.transform="rotate(30deg)";
   leg2.style.transform="rotate(-25deg)";
   leg1.style.left="10px";
   leg2.style.left="55px";
}


function moveRight() {
    start++;
    body.style.right= start + "px";
    if(start===screen.width+50){
        document.querySelector('h1').style.visibility="visible";   
        clearInterval(walk); 
        clearInterval(memberMove);
        
    }
  
}
 
function moveArm(){
  if(state===false){
    moving();
   state=true;
  }else{
    static();
    state=false;
  }
}



 


