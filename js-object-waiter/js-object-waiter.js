/*-----------------------------------------------------
 *	this script waits for a javascript object to be populated and then runs a supplied function
 */

(function(){

	window.jsObjectWaiter = (function(app){
		// console.log('jsObjectWaiter!!!');

		app.waiters = [];

		app.addWaiter = function(keys, callback, timeout){
			// console.log('jsObjectWaiter.addWaiter...');

			app.waiters.push({
				callback:callback,
				keys:keys,
				timeout:timeout,
				startTime:Date.now(),
				state:false
			});

			app.startInterval();
		};

		app.startInterval = function(){
			// console.log('jsObjectWaiter.startInterval...number of waiters == ' + app.waiters.length);

			if(app.waiters.length >0){
				app.stopInterval();
				app.intervalId = setInterval(function(){
					// console.log('jsObjectWaiter:interval...');

					app.waiters = app.waiters.filter(function(waiter, waiterI){
						
						if(waiter.state !== true){
							var prev = window;
							var goodToGo = true;

							waiter.keys.forEach(function(key, i){
								if(goodToGo === true){
									goodToGo = goodToGo && (typeof(prev[key]) !== 'undefined');
									prev = prev[key];
								}
							});

							console.log('goodToGo==='+goodToGo);

							if( goodToGo === true ){
								waiter.callback(waiter);
								return false;
							}else if(typeof(waiter.timeout) !== undefined && Date.now() > waiter.startTime + waiter.timeout) {
								return false;
							}else{
								return true;
							}
						}
					});
					if(app.waiters.length === 0) app.stopInterval();
				},500);
			}
		}

		app.stopInterval = function(){
			// console.log('jsObjectWaiter.stopInterval...');
			clearInterval(app.intervalId);
		}

		return app;
	})(window.jsObjectWaiter || {});
})();
