var menuBurger=document.getElementsByClassName('header-burger');
var item=document.getElementsByClassName('our-team-body');
var objects=document.getElementsByClassName('team-wrapper');
var indicators=document.getElementsByClassName('slider-button');
var bodyWidths=document.getElementsByClassName('our-team-body');
var bodyWidth=bodyWidths[0];
var menuShow=menuBurger[0];
var menuArray=document.getElementsByClassName('header-bottom');
var menu=menuArray[0];
var IndexValue=0;

var direction=false;
var value=0;
var count=0;
var show=true;
menuShow.addEventListener('click',function(){
	console.log("clicked");
	if(show){
		menu.style.display="block";
		show=!show;
	}
	else{
		menu.style.display='none';
		show=!show;
	}
})
window.onresize=function(){
location.reload();
}
window.addEventListener("load",myCarousel);
function myCarousel(){
bodyWidth.style.width=objects.length*objects[0].clientWidth+'px';
setInterval(function(){
console.log(objects[0].clientWidth);
	if(value>-(IndexValue*objects[0].clientWidth)){
	item[0].style.marginLeft=value+'px';
	value-=10;
	
}
for(var i=0;i<indicators.length;i++){
	indicators[i].style.backgroundColor="white";
	indicators[IndexValue].style.backgroundColor="purple";
}
count+=1;
if(count===500){
	IndexValue+=1;
	if(IndexValue>2){
		IndexValue=0;
		value=920;
	}
	count=0;
}
},10);	

}

