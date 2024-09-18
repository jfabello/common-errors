/**
 * @module jfabello/common-errors
 * @description  Common error classes.
 * @license GPL-3.0-only
 * @author Juan F. Abello <juan@jfabello.com>
 */

// Sets strict mode
"use strict";

class ERROR_UNKNOWN extends Error {
	constructor() {
		super(`Unknown error.`);
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}

const errors = {
	ERROR_UNKNOWN
};

Object.freeze(errors);

module.exports = errors;
