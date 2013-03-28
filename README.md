jQuery.alldone
==============

jQuery plugin to bind events on multiple elements and execute a callback when every element has triggered one of the supplied events.


**Usage:**

```javascript
$('div[data-video],div[data-tweet]').allDone('video:loaded tweet:loaded', function(){
  // Reposition DOM elements for example
});
```
