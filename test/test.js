'use strict';

const assert = require('assert');
const lazy = require('../lib/index');

describe('lazy collections', function() {
	describe('toIter iterToArray', function() {
		it("Should convert an array into an iterable and iterToArray should convert an iterable into an array",function() {
			let array = ['a', 'b', 'c', 'd'];
			const iterable = lazy.arrayToIter(array);
			const newArray = lazy.iterToArray(iterable);
			assert.deepEqual(array, newArray);
		});
	});

	describe('map', function() {
		it("Should map each item in the iterable", function() {
			let array = [1, 2, 3, 4, 5];

			const iterable = lazy.arrayToIter(array);
			const lazyMapResult = lazy.map(iterable, increment);

			assert.deepEqual([2, 3, 4, 5, 6], lazy.iterToArray(lazyMapResult));
		});
	});

	describe('filter', function() {
		it("Should filter each item in the iterable", function() {
			let array = [1, 2, 3, 4, 5, 6, 7, 8];

			const iterable = lazy.arrayToIter(array);
			const lazyFilterResult = lazy.filter(iterable, isEven);

			assert.deepEqual([2, 4, 6, 8], lazy.iterToArray(lazyFilterResult));
		});
	});

	describe('reduce', function() {
		it("Should left reduce each item in the iterable", function() {
			let array = [1, 2, 3, 4, 5, 6, 7, 8];
			const iterable = lazy.arrayToIter(array);
			const reducedValue = lazy.reduce(iterable, accumulator, 0);
			assert(36, reducedValue);
		});
	});

	describe('filter map composability', function() {
		it("filter and map should compose", function() {
			let array = [1, 2, 3, 4, 5, 6, 7, 8];
			const iterable = lazy.arrayToIter(array);
			const newIterable = lazy.map(lazy.filter(iterable, isEven), increment);

			assert.deepEqual([3, 5, 7, 9], lazy.iterToArray(newIterable));
		});
	});
});

function increment(x) {
	return x + 1;
}

function isEven(x) {
	return (x % 2) === 0;
}

function accumulator(result, x) {
	return result + x;
}

