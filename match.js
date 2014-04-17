function player(){this.name="";this.score=0};

function display(player1)
{
	scoreboard=document.getElementById('player');
// for(i in scoreboard){console.log(i)}
	scoreboard.innerHTML ="<div style='color:white;position:relative;top:35px;left:255px;font:50px arial,sans-serif'>"+player1.name+":"+player1.score+"<!--<button onclick='pouse();'>Pouse</button>--></div>";
}
function init()
{ 
 player1 = new player();
 container=document.getElementById('container');
 name=document.getElementById('name').value;
 player1.name=name;
 player1.score=0;
 display(player1); 
 container.hidden=false;
 load();
 //match(img1,img2);
}
function load()
{
	 img1=[];
	 img2=[];
	 arr1=[];
	 arr2=[];
	 for(i=1;i<6;i++)
	 {
		 img1[i]=document.getElementById(i);
		 file=Math.floor(Math.random()*34+1);
		 if(arr1.indexOf(file,1)>0)
		 {
			console.log("got same");
			file=Math.floor(Math.random()*34+1);
		 }
		 else
		 {
		 arr1[i]=file;
		 }
		 path="img/"+file+".jpg"
		 /*k=i;
		 while(k>1)
		 {
			if(img1[i].src==path)
			{
			file=Math.floor(Math.random()*34+1);
			path="img/"+file+".jpg"
			}
			k--;
		 }*/
		 img1[i].src=path;
		// img1[i].addEventListener('click',score);
		//console.log(img[i].id+":"+path);
	 }
	 for(i=11;i<16;i++)
	 {
		 img2[i]=document.getElementById(i);
		 file=Math.floor(Math.random()*34+1);
		 if(arr2.indexOf(file,11)>0)
		 {
			console.log("got same in arr2")
			file=Math.floor(Math.random()*34+1);
		 }
		 else
		 {
		 arr2[i]=file;
		 }
		 path="img/"+file+".jpg"
		 /*k=i;
		 while(k>11)
		 {
			if(img2[i].src==path)
			{
			file=Math.floor(Math.random()*34+1);;
			path="img/"+file+".jpg"
			}
			k--;
		 }*/
		 img2[i].src=path;
		 img2[i].addEventListener('click',score);
		 //console.log(img[i].id+":"+path);
	 } 
	 
} 

function score(event)
{
	flag=0;
	for(i in img1)
	{	//console.log(img1[i].src)
		if(event.srcElement.src==img1[i].src)
		{
			player1.score+=1;
			display(player1);
			flag=1;
			
		}
		
		
	}
	if(flag==0){
				player1.score-=1;
				display(player1);
			
		}
	load();
/*console.log("img pressed");

console.log(":"+event.srcElement.src);
*/
}