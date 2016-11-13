"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = bisect_right;

var _aureoomsJsCollections = require("aureooms-js-collections");

function bisect_right(a, x) {
    var lo = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var hi = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : a.length;


    if (lo < 0) throw new _aureoomsJsCollections.ValueError("lo must be non-negative");

    while (lo < hi) {

        var mid = (lo + hi) / 2 | 0;

        if (x < a[mid]) hi = mid;else lo = mid + 1;
    }

    return lo;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9iaXNlY3RfcmlnaHQuanMiXSwibmFtZXMiOlsiYmlzZWN0X3JpZ2h0IiwiYSIsIngiLCJsbyIsImhpIiwibGVuZ3RoIiwibWlkIl0sIm1hcHBpbmdzIjoiOzs7OztrQkFFd0JBLFk7O0FBRnhCOztBQUVlLFNBQVNBLFlBQVQsQ0FBd0JDLENBQXhCLEVBQTRCQyxDQUE1QixFQUF5RDtBQUFBLFFBQXpCQyxFQUF5Qix1RUFBcEIsQ0FBb0I7QUFBQSxRQUFoQkMsRUFBZ0IsdUVBQVhILEVBQUVJLE1BQVM7OztBQUVwRSxRQUFLRixLQUFLLENBQVYsRUFBYyxNQUFNLHNDQUFnQix5QkFBaEIsQ0FBTjs7QUFFZCxXQUFRQSxLQUFLQyxFQUFiLEVBQWtCOztBQUVkLFlBQU1FLE1BQU0sQ0FBRUgsS0FBS0MsRUFBUCxJQUFjLENBQWQsR0FBa0IsQ0FBOUI7O0FBRUEsWUFBS0YsSUFBSUQsRUFBRUssR0FBRixDQUFULEVBQWtCRixLQUFLRSxHQUFMLENBQWxCLEtBRUtILEtBQUtHLE1BQU0sQ0FBWDtBQUVSOztBQUVELFdBQU9ILEVBQVA7QUFFSCIsImZpbGUiOiJiaXNlY3RfcmlnaHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWYWx1ZUVycm9yIH0gZnJvbSAnYXVyZW9vbXMtanMtY29sbGVjdGlvbnMnIDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYmlzZWN0X3JpZ2h0ICggYSAsIHggLCBsbyA9IDAgLCBoaSA9IGEubGVuZ3RoICkge1xuXG4gICAgaWYgKCBsbyA8IDAgKSB0aHJvdyBuZXcgVmFsdWVFcnJvciggXCJsbyBtdXN0IGJlIG5vbi1uZWdhdGl2ZVwiICkgO1xuXG4gICAgd2hpbGUgKCBsbyA8IGhpICkge1xuXG4gICAgICAgIGNvbnN0IG1pZCA9ICggbG8gKyBoaSApIC8gMiB8IDAgO1xuXG4gICAgICAgIGlmICggeCA8IGFbbWlkXSApIGhpID0gbWlkIDtcblxuICAgICAgICBlbHNlIGxvID0gbWlkICsgMSA7XG5cbiAgICB9XG5cbiAgICByZXR1cm4gbG8gO1xuXG59XG4iXX0=