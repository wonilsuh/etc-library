# javascript object waiter

When certain libraries or data are loaded asynchronously, your script that uses these need to wait until they are available. Here is a simple method that will do this for you.

## Example

```
<script>

var k = ['k0', 'k1'];

jsObjectWaiter.addWaiter(k, function(waiter){console.log('done!')});

setTimeout(function(){
	window.k0 = {
		k1:{}
	}
},2000);

</script>
```