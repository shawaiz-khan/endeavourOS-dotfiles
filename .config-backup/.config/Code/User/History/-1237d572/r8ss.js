'use strict';

var implementation = require('reflect.getprototypeof/implementation');

var getProto = require('get-proto');

module.exports = function getPolyfill() {
	if (typeof Reflect === 'object' && Reflect && Reflect.getPrototypeOf) {
		return Reflect.getPrototypeOf;
	}
	return getProto
		? function getPrototypeOf(O) { return getProto(O); }
		: implementation;
};
