function EventManager(_options) {
	this.options = _options;
	this.KeyCodes = {
		UP : 38,
		DOWN : 40,
		LEFT : 37,
		RIGHT : 39,
		PAGEUP  : 33,
		PAGEDOWN  : 34 ,
		PLUS :107,
		MINUS:109
	};
	return this;
}
var KeyCodes = {
		UP : 38,
		DOWN : 40,
		LEFT : 37,
		RIGHT : 39,
		PAGEUP  : 33,
		PAGEDOWN  : 34 ,
		PLUS :107,
		MINUS:109
	};
EventManager.prototype.isMobile =  {
    Android: function() {
		return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
		return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
		return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
		return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
		return navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i);
    }
};
EventManager.prototype.onUpAction = function(_callback) {
	if(this.isMobile.any()){
		Hammer(document, { drag_lock_to_axis: true }).on("swipeup", function(event){
			 _callback.call(this);
			 event.gesture.preventDefault();
		  } );
	} else {
		$( document.body ).keyup(function(event){
			  if (event.which == KeyCodes.UP && typeof _callback == 'function') {
				  _callback.call(this);
				  event.preventDefault();
			    }
		  });
	}
};
EventManager.prototype.onDownAction = function(_callback) {
	if(this.isMobile.any()){
		Hammer(document, { drag_lock_to_axis: true }).on("swipedown", function(event){
			 _callback.call(this);
			 event.gesture.preventDefault();
		  } );
	} else {
		$( document.body ).keyup(function(event){
			  if (event.which == KeyCodes.DOWN && typeof _callback == 'function') {
				  _callback.call(this);
				  event.preventDefault();
			    }
		  });
	}
};
EventManager.prototype.onLeftAction = function(_callback) {
	if(this.isMobile.any()){
		Hammer(document.body).on("swipeleft", _callback );
	} else {
		$( document.body ).keyup(function(event){
			  if (event.which == KeyCodes.LEFT && typeof _callback == 'function') {
				  _callback.call(this);
				  event.preventDefault();
			    }
		  });
	}
};
EventManager.prototype.onRightAction = function(_callback) {
	if(this.isMobile.any()){
		Hammer(document.body).on("swiperight", _callback );
	} else {
		$( document.body ).keyup(function(event){
			  if (event.which == KeyCodes.RIGHT && typeof _callback == 'function') {
				  _callback.call(this);
				  event.preventDefault();
			    }
		  });
	}
};

EventManager.prototype.onZoomAction = function(_callbackZoomIn, _callbackZoomOut) {
	if(this.isMobile.any()){
		Hammer(document.body).on("pinchin", _callbackZoomIn );
		Hammer(document.body).on("pinchout", _callbackZoomOut );
	} else {
		// mouse wheel
		$(window).bind('mousewheel DOMMouseScroll', function(event){
			if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
				_callbackZoomIn.call(this);
				event.preventDefault();
			}
			else {
			   _callbackZoomOut.call(this);
			   event.preventDefault();
			}
		});
	
		$( document.body ).keyup(function(event){
			  if (event.which == KeyCodes.RIGHT && typeof _callback == 'function') {
				  _callback.call(this);
				  event.preventDefault();
			    }
		  });
	}
};

EventManager.prototype.mouseWheelHandler = function(e,_callbackZoomIn, _callbackZoomOut) {
// cross-browser wheel delta
	var e = window.event || e; // old IE support
	var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));

	if(delta > 0){
		_callbackZoomIn.call(this);
	} else {
		_callbackZoomOut.call(this);
	}

	return false;
};


// tap or click
// Action TAP

// gesture or mouse or key
// Action ZOOMIN
// Action ZOOMOUT