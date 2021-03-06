function log(str){
	//document.getElementById('action').innerText = str;
	console.log(str);
}
function addGestureEventListener(elem, callback) {
	var startPoints = {};
	
	elem.addEventListener('touchstart', function(event) {
	  var touch = event.changedTouches[0];
	  startPoints[touch.identifier] = {'x' : parseInt(touch.pageX), 'y':parseInt(touch.pageY)};
	  event.preventDefault();
	});

	elem.addEventListener('touchend', function(event) {
	  var touch = event.changedTouches[0];
	  var start = startPoints[touch.identifier];
	  var end = {'x' : parseInt(touch.pageX), 'y':parseInt(touch.pageY)};
	  if(squareDist(start,end) < 50){
		//log('touch ('+end.x+','+end.y+')'); 
	  } else {
		  var dx = end.x - start.x;
		  var dy = end.y - start.y;
		  var det = (dx*dx-dy*dy)/(dx*dx + dy*dy);
		  if(det > 0.8){
			  if(dx > 0){
				  callback('right');
			  } else {
				  callback('left');
			  }
		  } else if(det <(-0.8)){
			  if(dy > 0){
				callback('down');
			  } else {
				callback('up');
			  }
		  } else {
			  log('diag ('+det+')('+start.x+','+start.y+') to ('+end.x+','+end.y+')');
		  }
	  }
	  event.preventDefault();
	});
	
	log('listening gestures'); 
}
function squareDist(a,b){
	return (a.x-b.x)*(a.x-b.x) + (a.y-b.y)*(a.y-b.y);
}
