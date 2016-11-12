'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = _deque;

var _error = require('../error');

function _deque(UnboundedDeque, BoundedDeque, SingleElementDeque, EmptyDeque) {

	var deque = function deque() {
		var iterable = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
		var maxlen = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;


		if (maxlen === null) return new UnboundedDeque(iterable);

		if (!Number.isInteger(maxlen)) throw new _error.TypeError(maxlen);

		if (maxlen === 0) return new EmptyDeque(iterable);

		if (maxlen === 1) return new SingleElementDeque(iterable);

		if (maxlen > 0) return new BoundedDeque(iterable, maxlen);

		throw new _error.ValueError(maxlen);
	};

	return deque;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kZXF1ZS9fZGVxdWUuanMiXSwibmFtZXMiOlsiX2RlcXVlIiwiVW5ib3VuZGVkRGVxdWUiLCJCb3VuZGVkRGVxdWUiLCJTaW5nbGVFbGVtZW50RGVxdWUiLCJFbXB0eURlcXVlIiwiZGVxdWUiLCJpdGVyYWJsZSIsIm1heGxlbiIsIk51bWJlciIsImlzSW50ZWdlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7a0JBRXdCQSxNOztBQUZ4Qjs7QUFFZSxTQUFTQSxNQUFULENBQWtCQyxjQUFsQixFQUFtQ0MsWUFBbkMsRUFBa0RDLGtCQUFsRCxFQUF1RUMsVUFBdkUsRUFBb0Y7O0FBRWxHLEtBQU1DLFFBQVEsU0FBUkEsS0FBUSxHQUE2QztBQUFBLE1BQWxDQyxRQUFrQyx1RUFBdkIsSUFBdUI7QUFBQSxNQUFoQkMsTUFBZ0IsdUVBQVAsSUFBTzs7O0FBRTFELE1BQUtBLFdBQVcsSUFBaEIsRUFBdUIsT0FBTyxJQUFJTixjQUFKLENBQW9CSyxRQUFwQixDQUFQOztBQUV2QixNQUFLLENBQUNFLE9BQU9DLFNBQVAsQ0FBa0JGLE1BQWxCLENBQU4sRUFBbUMsTUFBTSxxQkFBZUEsTUFBZixDQUFOOztBQUVuQyxNQUFLQSxXQUFXLENBQWhCLEVBQW9CLE9BQU8sSUFBSUgsVUFBSixDQUFnQkUsUUFBaEIsQ0FBUDs7QUFFcEIsTUFBS0MsV0FBVyxDQUFoQixFQUFvQixPQUFPLElBQUlKLGtCQUFKLENBQXdCRyxRQUF4QixDQUFQOztBQUVwQixNQUFLQyxTQUFTLENBQWQsRUFBa0IsT0FBTyxJQUFJTCxZQUFKLENBQWtCSSxRQUFsQixFQUE2QkMsTUFBN0IsQ0FBUDs7QUFFbEIsUUFBTSxzQkFBZ0JBLE1BQWhCLENBQU47QUFFQSxFQWREOztBQWdCQSxRQUFPRixLQUFQO0FBRUEiLCJmaWxlIjoiX2RlcXVlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVHlwZUVycm9yICwgVmFsdWVFcnJvciB9IGZyb20gJy4uL2Vycm9yJyA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9kZXF1ZSAoIFVuYm91bmRlZERlcXVlICwgQm91bmRlZERlcXVlICwgU2luZ2xlRWxlbWVudERlcXVlICwgRW1wdHlEZXF1ZSApIHtcblxuXHRjb25zdCBkZXF1ZSA9IGZ1bmN0aW9uICggaXRlcmFibGUgPSBudWxsICwgbWF4bGVuID0gbnVsbCApIHtcblxuXHRcdGlmICggbWF4bGVuID09PSBudWxsICkgcmV0dXJuIG5ldyBVbmJvdW5kZWREZXF1ZSggaXRlcmFibGUgKSA7XG5cblx0XHRpZiAoICFOdW1iZXIuaXNJbnRlZ2VyKCBtYXhsZW4gKSApIHRocm93IG5ldyBUeXBlRXJyb3IoIG1heGxlbiApIDtcblxuXHRcdGlmICggbWF4bGVuID09PSAwICkgcmV0dXJuIG5ldyBFbXB0eURlcXVlKCBpdGVyYWJsZSApIDtcblxuXHRcdGlmICggbWF4bGVuID09PSAxICkgcmV0dXJuIG5ldyBTaW5nbGVFbGVtZW50RGVxdWUoIGl0ZXJhYmxlICkgO1xuXG5cdFx0aWYgKCBtYXhsZW4gPiAwICkgcmV0dXJuIG5ldyBCb3VuZGVkRGVxdWUoIGl0ZXJhYmxlICwgbWF4bGVuICkgO1xuXG5cdFx0dGhyb3cgbmV3IFZhbHVlRXJyb3IoIG1heGxlbiApIDtcblxuXHR9IDtcblxuXHRyZXR1cm4gZGVxdWUgO1xuXG59XG4iXX0=