'use strict';

/**
 * Filter each item in an iterable (generator), returning a generator which,
 * will yield the result;
 * @param   iterable       {Generator}  Accepts a generator function to filter.
 * @param   filterFunction {Function}   Accepts a predicate function to filter.
 * @returns {Generator} A generator which yields the results of the filter.
 */
function* filter(iterable, filterFunction) {
    for (let x of iterable) {
        if (filterFunction(x)) {
            yield x;
        }
    }
}

/**
 * Reduce every item in an iterable (generator). This returns a value only
 * when all of the items in the iterable have been processed. If the iterable
 * is expected to be large or inifinite, reducing it could take a long time.
 *
 * @param iterable     {Generator} Accepts a generator to reduce.
 * @param reducer      {Function}  Accepts a reducer function to reduce the
 *                                 iterator.
 * @param initialValue {Any}         The initial value of the reduction.
 * @returns {Any}
 */
function reduce(iterable, reducer, initialValue) {
	let value = initialValue;

	for (let x of iterable) {
		value = reducer(value, x);
	}

	return value;
}

/**
 * Map each item in an iterable (generator).
 *
 * @param iterable    {Generator} Accepts a generator function.
 * @param mapFunction {Function}  Accepts a map function.
 * @returns {Generator}
 */
function* map(iterable, mapFunction) {
	for (let x of iterable) {
		yield mapFunction(x);
	}
}

/**
 * Convert an array into a generator.
 * @param array {Array} The array to convert.
 * @returns {Generator}
 */
function* arrayToIter(array) {
	for (let x in array) {
		yield array[x];
	}
}

/**
 * Converts an iterable into an array.
 * This needs to finalise the iterable (and uses reduce to do so).
 *
 * @param iterable {Generator} The iterable to convert to array
 * @returns {Array}
 */
function iterToArray(iterable) {
	return reduce(iterable, function(result, x) {
		result.push(x);
		return result;
	}, []);
}

module.exports = {
	filter: filter,
	map: map,
	reduce: reduce,
	iterToArray: iterToArray,
	arrayToIter: arrayToIter
};
