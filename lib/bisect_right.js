"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = bisect_right;

var _jsError = require("@aureooms/js-error");

function bisect_right(a, x) {
    var lo = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var hi = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : a.length;


    if (lo < 0) throw new _jsError.ValueError("lo must be non-negative");

    while (lo < hi) {

        var mid = (lo + hi) / 2 | 0;

        if (x < a[mid]) hi = mid;else lo = mid + 1;
    }

    return lo;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9iaXNlY3RfcmlnaHQuanMiXSwibmFtZXMiOlsiYmlzZWN0X3JpZ2h0IiwiYSIsIngiLCJsbyIsImhpIiwibGVuZ3RoIiwibWlkIl0sIm1hcHBpbmdzIjoiOzs7OztrQkFFd0JBLFk7O0FBRnhCOztBQUVlLFNBQVNBLFlBQVQsQ0FBd0JDLENBQXhCLEVBQTRCQyxDQUE1QixFQUF5RDtBQUFBLFFBQXpCQyxFQUF5Qix1RUFBcEIsQ0FBb0I7QUFBQSxRQUFoQkMsRUFBZ0IsdUVBQVhILEVBQUVJLE1BQVM7OztBQUVwRSxRQUFLRixLQUFLLENBQVYsRUFBYyxNQUFNLHdCQUFnQix5QkFBaEIsQ0FBTjs7QUFFZCxXQUFRQSxLQUFLQyxFQUFiLEVBQWtCOztBQUVkLFlBQU1FLE1BQU0sQ0FBRUgsS0FBS0MsRUFBUCxJQUFjLENBQWQsR0FBa0IsQ0FBOUI7O0FBRUEsWUFBS0YsSUFBSUQsRUFBRUssR0FBRixDQUFULEVBQWtCRixLQUFLRSxHQUFMLENBQWxCLEtBRUtILEtBQUtHLE1BQU0sQ0FBWDtBQUVSOztBQUVELFdBQU9ILEVBQVA7QUFFSCIsImZpbGUiOiJiaXNlY3RfcmlnaHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWYWx1ZUVycm9yIH0gZnJvbSAnQGF1cmVvb21zL2pzLWVycm9yJyA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJpc2VjdF9yaWdodCAoIGEgLCB4ICwgbG8gPSAwICwgaGkgPSBhLmxlbmd0aCApIHtcblxuICAgIGlmICggbG8gPCAwICkgdGhyb3cgbmV3IFZhbHVlRXJyb3IoIFwibG8gbXVzdCBiZSBub24tbmVnYXRpdmVcIiApIDtcblxuICAgIHdoaWxlICggbG8gPCBoaSApIHtcblxuICAgICAgICBjb25zdCBtaWQgPSAoIGxvICsgaGkgKSAvIDIgfCAwIDtcblxuICAgICAgICBpZiAoIHggPCBhW21pZF0gKSBoaSA9IG1pZCA7XG5cbiAgICAgICAgZWxzZSBsbyA9IG1pZCArIDEgO1xuXG4gICAgfVxuXG4gICAgcmV0dXJuIGxvIDtcblxufVxuIl19