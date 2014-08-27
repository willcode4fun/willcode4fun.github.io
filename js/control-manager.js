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
		Hammer(document.body).on("swipeup", _callback );
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
		Hammer(document.body).on("swipedown", _callback );
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
	Hammer(document.body).on("swipeleft", _callback );
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


	
// swipe or key
// Action UP
// Action DOWN
// Action LEFT
// Action RIGHT

// tap or click
// Action TAP

// gesture or mouse or key
// Action ZOOMIN
// Action ZOOMOUT