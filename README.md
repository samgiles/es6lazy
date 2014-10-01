# ES6 Lazy Higher Order Functions

Map and filter over generators.

Example:

```JS
'use strict';
function* myGenerator() {
	for(let x = 0; x < 10; x++) {
		yield x;
	}
}

const filtered = lazy.filter(myGenerator(), function(x) {
	return (x % 2) === 0;
});

const mapped = lazy.map(filtered, function(x) {
	return x + 1;
});

console.log(lazy.iterToArray(mapped));
// [1, 3, 5, 7, 9]
```

## API

TODO:


### License

MIT (c) Samuel Giles 2014
