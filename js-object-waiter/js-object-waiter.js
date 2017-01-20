/*-----------------------------------------------------
 *	this script waits for a javascript object to be populated and then runs a supplied function
 */

(function(){

	window.jsObjectWaiter = (function(app){

		app.waiters = [];

		app.addWaiter = function(objectName, callback, objectScope){

			app.waiters.push({
				callback:callback,
				objectName:objectName,
				objectScope:objectScope
			});

			app.startInterval();
		};

		app.startInterval = function(){

			if(app.waiters.length >0){
				app.stopInterval();
				app.intervalId = setInterval(function(){

					app.waiters = app.waiters.filter(function(waiter, waiterI){

						if( typeof( (waiter.objectScope || window)[waiter.objectName]) !== 'undefined' ){
							waiter.callback((waiter.objectScope || window)[waiter.objectName]);
							return false;
						}else{
							return true;
						}
					});

					if(app.waiters.length === 0) app.stopInterval();
				},500);
			}
		}

		app.stopInterval = function(){
			clearInterval(app.intervalId);
		}

		return app;
	})(window.jsObjectWaiter || {});
})();