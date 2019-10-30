/*var items=document.getElementsByClassName('team-wrapper');
var value=0;
var direction=true;
var position=0;
setInterval(function(){
	var xyz=value;
	console.log(items[0].clientWidth);
	for(var i=0;i<items.length;i++){

		console.log(value);
		items[i].style.marginLeft=xyz+'px';
	}
*/

	/*items[1].style.marginLeft=value+'px';
	if(value<-(items[0].clientWidth*(items.length-1))){
		direction=false;
	}
	if(value>0){
		direction=true;
	}
	if(direction){
		value-=10;
	}
	else{
		value+=10;
	}

},100);*/
var item=document.getElementsByClassName('our-team-body');
var objects=document.getElementsByClassName('team-wrapper');
var indicators=document.getElementsByClassName('slider-button');
var bodyWidths=document.getElementsByClassName('our-team-body');
var bodyWidth=bodyWidths[0];
var IndexValue=0;

var direction=false;
var value=0;
var count=0;
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



