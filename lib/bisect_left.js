"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = bisect_left;

var _aureoomsJsCollections = require("aureooms-js-collections");

function bisect_left(a, x) {
    var lo = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var hi = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : a.length;


    if (lo < 0) throw new _aureoomsJsCollections.ValueError("lo must be non-negative");

    while (lo < hi) {

        var mid = (lo + hi) / 2 | 0;

        if (x > a[mid]) lo = mid + 1;else hi = mid;
    }

    return lo;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9iaXNlY3RfbGVmdC5qcyJdLCJuYW1lcyI6WyJiaXNlY3RfbGVmdCIsImEiLCJ4IiwibG8iLCJoaSIsImxlbmd0aCIsIm1pZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7a0JBRXdCQSxXOztBQUZ4Qjs7QUFFZSxTQUFTQSxXQUFULENBQXVCQyxDQUF2QixFQUEyQkMsQ0FBM0IsRUFBd0Q7QUFBQSxRQUF6QkMsRUFBeUIsdUVBQXBCLENBQW9CO0FBQUEsUUFBaEJDLEVBQWdCLHVFQUFYSCxFQUFFSSxNQUFTOzs7QUFFbkUsUUFBS0YsS0FBSyxDQUFWLEVBQWMsTUFBTSxzQ0FBZ0IseUJBQWhCLENBQU47O0FBRWQsV0FBUUEsS0FBS0MsRUFBYixFQUFrQjs7QUFFZCxZQUFNRSxNQUFNLENBQUVILEtBQUtDLEVBQVAsSUFBYyxDQUFkLEdBQWtCLENBQTlCOztBQUVBLFlBQUtGLElBQUlELEVBQUVLLEdBQUYsQ0FBVCxFQUFrQkgsS0FBS0csTUFBTSxDQUFYLENBQWxCLEtBRUtGLEtBQUtFLEdBQUw7QUFFUjs7QUFFRCxXQUFPSCxFQUFQO0FBRUgiLCJmaWxlIjoiYmlzZWN0X2xlZnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWYWx1ZUVycm9yIH0gZnJvbSAnYXVyZW9vbXMtanMtY29sbGVjdGlvbnMnIDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYmlzZWN0X2xlZnQgKCBhICwgeCAsIGxvID0gMCAsIGhpID0gYS5sZW5ndGggKSB7XG5cbiAgICBpZiAoIGxvIDwgMCApIHRocm93IG5ldyBWYWx1ZUVycm9yKCBcImxvIG11c3QgYmUgbm9uLW5lZ2F0aXZlXCIgKSA7XG5cbiAgICB3aGlsZSAoIGxvIDwgaGkgKSB7XG5cbiAgICAgICAgY29uc3QgbWlkID0gKCBsbyArIGhpICkgLyAyIHwgMCA7XG5cbiAgICAgICAgaWYgKCB4ID4gYVttaWRdICkgbG8gPSBtaWQgKyAxIDtcblxuICAgICAgICBlbHNlIGhpID0gbWlkIDtcblxuICAgIH1cblxuICAgIHJldHVybiBsbyA7XG5cbn1cbiJdfQ==