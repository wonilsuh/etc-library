# javascript object waiter

When certain libraries or data are loaded asynchronously, your script that uses these need to wait until they are available. Here is a simple method that will do this for you.

## Example

```
<script>

/* Let's say, we are waiting for window.dataContainer.asyncData to be populated. When it's fianlly populated, we want to run processData() function.

// prepare the parent object.
window.dataContainer = {};

// define the callback function
function processData(data){
    console.log(data);
}

// add a waiter, which will start the interval interval
window.jsObjectWaiter.addWaiter('asyncData', processData, window.dataContainer);

</script>
```