/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/*
 * rps.js: January 2017
 * Varghese Eldhose
 */

 // DON'T TOUCH, Just Read  --------------
 // array of moves/ids
 var pics = ["rock", "paper", "scissors"];
 var srcs=["images/rock.png","images/paper.png","images/scissors.png"];
 var details=["SCORE","You:","Computer:"];
 // load the page elements
 document.addEventListener("DOMContentLoaded", init, false);
 var results=["Comp-wins","Player-wins","Tied"];
 var player_score=0;
 var comp_score=0;
 // --------------------------------------
 function init()
 {
  var x=document.createElement("h1");
  x.innerHTML="Play Rock,Paper,Scissors!";
  document.body.append(x);
 
 x=document.createElement("div");
 x.className="game-header";
 x.innerHTML="Choose your method of destruction";
 document.body.append(x);
 
 for(var i=0;i<pics.length;++i)
 {
 var c=document.createElement("img")
 c.className="rps-img no-img-border";
 c.setAttribute("id",pics[i]);
 c.src=srcs[i];
 document.getElementById("img-container").appendChild(c);
 

 
 }


 var image=document.getElementById("img-container");
 x.insertAdjacentElement("afterend",image);
 
 var v=document.createElement("div");
 v.className="game-header";
 v.innerHTML="The computer chooses:";
 document.body.append(v);
 
 v=document.createElement("table");
 document.body.append(v);
 
 var w=document.createElement("tr")
 v.appendChild(w);
 
 var x1=document.createElement("td");
 w.appendChild(x1);
 
 var x2=document.createElement("img")
 x2.className="rps-img";
 x2.id="j";
 x1.appendChild(x2);
 
 var x3=document.createElement("td")
 x3.className="vert-center";
 w.appendChild(x3);
 
 var x4=document.createElement("div")
 x4.setAttribute("id","output");
 x3.appendChild(x4);
 
 var div=document.createElement("div");
 div.setAttribute("id","score");
 
 document.body.append(div);
 
 for(var i=0;i<details.length;i++)
 {
 
 var div2=document.createElement("div");
 div2.innerHTML=details[i];
 div2.setAttribute("id",details[i]);
 div.appendChild(div2);

 
 
 }

 for(var i=0;i<3;i++)
 {
 var ele=document.getElementsByClassName("rps-img no-img-border");
 ele[i].addEventListener("click",move);
 }
 var d=document.createElement("footer");
 
 d.innerHTML="Copyright @ 2017 Wendi Jollymore";
 document.body.appendChild(d);
 
 
 
 }
 
 function getComputerMove()
 {
    var m= Math.floor(Math.random()*3);
    var fu=document.getElementById("j")
    fu.src=srcs[m];
    return m;

 }

 function move()
 {
     var t2=getComputerMove();
     this.classList.remove("no-img-border");
     this.classList.add("img-border");

     var t=pics.indexOf(this.id);
   for(var j=0;j<3;j++)
    {
    if(t!=j)
    {
        var c=document.getElementById(pics[j]);
        c.classList.add("no-img-border");
     c.classList.remove("img-border");
    }
    }
    
   if(t==t2)
   {
       document.getElementById("output").innerHTML=results[2];

   }
   else if((t==0&&t2==2)||(t==1&&t2==0)||(t==2&&t2==1))
   {
       document.getElementById("output").innerHTML=results[1];
       player_score++;
   }
   else
   {
       
    document.getElementById("output").innerHTML=results[0];
    comp_score++;
   }
  
   document.getElementById("You:").innerText="You:"+player_score;
   document.getElementById("Computer:").innerHTML="Computer:"+comp_score;


 }
 
 

 