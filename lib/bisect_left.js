"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = bisect_left;

var _jsError = require("@aureooms/js-error");

function bisect_left(a, x) {
    var lo = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var hi = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : a.length;


    if (lo < 0) throw new _jsError.ValueError("lo must be non-negative");

    while (lo < hi) {

        var mid = (lo + hi) / 2 | 0;

        if (x > a[mid]) lo = mid + 1;else hi = mid;
    }

    return lo;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9iaXNlY3RfbGVmdC5qcyJdLCJuYW1lcyI6WyJiaXNlY3RfbGVmdCIsImEiLCJ4IiwibG8iLCJoaSIsImxlbmd0aCIsIm1pZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7a0JBRXdCQSxXOztBQUZ4Qjs7QUFFZSxTQUFTQSxXQUFULENBQXVCQyxDQUF2QixFQUEyQkMsQ0FBM0IsRUFBd0Q7QUFBQSxRQUF6QkMsRUFBeUIsdUVBQXBCLENBQW9CO0FBQUEsUUFBaEJDLEVBQWdCLHVFQUFYSCxFQUFFSSxNQUFTOzs7QUFFbkUsUUFBS0YsS0FBSyxDQUFWLEVBQWMsTUFBTSx3QkFBZ0IseUJBQWhCLENBQU47O0FBRWQsV0FBUUEsS0FBS0MsRUFBYixFQUFrQjs7QUFFZCxZQUFNRSxNQUFNLENBQUVILEtBQUtDLEVBQVAsSUFBYyxDQUFkLEdBQWtCLENBQTlCOztBQUVBLFlBQUtGLElBQUlELEVBQUVLLEdBQUYsQ0FBVCxFQUFrQkgsS0FBS0csTUFBTSxDQUFYLENBQWxCLEtBRUtGLEtBQUtFLEdBQUw7QUFFUjs7QUFFRCxXQUFPSCxFQUFQO0FBRUgiLCJmaWxlIjoiYmlzZWN0X2xlZnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWYWx1ZUVycm9yIH0gZnJvbSAnQGF1cmVvb21zL2pzLWVycm9yJyA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJpc2VjdF9sZWZ0ICggYSAsIHggLCBsbyA9IDAgLCBoaSA9IGEubGVuZ3RoICkge1xuXG4gICAgaWYgKCBsbyA8IDAgKSB0aHJvdyBuZXcgVmFsdWVFcnJvciggXCJsbyBtdXN0IGJlIG5vbi1uZWdhdGl2ZVwiICkgO1xuXG4gICAgd2hpbGUgKCBsbyA8IGhpICkge1xuXG4gICAgICAgIGNvbnN0IG1pZCA9ICggbG8gKyBoaSApIC8gMiB8IDAgO1xuXG4gICAgICAgIGlmICggeCA+IGFbbWlkXSApIGxvID0gbWlkICsgMSA7XG5cbiAgICAgICAgZWxzZSBoaSA9IG1pZCA7XG5cbiAgICB9XG5cbiAgICByZXR1cm4gbG8gO1xuXG59XG4iXX0=