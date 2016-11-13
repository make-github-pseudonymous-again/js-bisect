'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = insort_right;

var _bisect_right = require('./bisect_right');

var _bisect_right2 = _interopRequireDefault(_bisect_right);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function insort_right(a, x) {
	var lo = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
	var hi = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : a.length;


	var pos = (0, _bisect_right2.default)(a, x, lo, hi);

	a.splice(pos, 0, x);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbnNvcnRfcmlnaHQuanMiXSwibmFtZXMiOlsiaW5zb3J0X3JpZ2h0IiwiYSIsIngiLCJsbyIsImhpIiwibGVuZ3RoIiwicG9zIiwic3BsaWNlIl0sIm1hcHBpbmdzIjoiOzs7OztrQkFFd0JBLFk7O0FBRnhCOzs7Ozs7QUFFZSxTQUFTQSxZQUFULENBQXdCQyxDQUF4QixFQUE0QkMsQ0FBNUIsRUFBeUQ7QUFBQSxLQUF6QkMsRUFBeUIsdUVBQXBCLENBQW9CO0FBQUEsS0FBaEJDLEVBQWdCLHVFQUFYSCxFQUFFSSxNQUFTOzs7QUFFdkUsS0FBTUMsTUFBTSw0QkFBY0wsQ0FBZCxFQUFrQkMsQ0FBbEIsRUFBc0JDLEVBQXRCLEVBQTJCQyxFQUEzQixDQUFaOztBQUVBSCxHQUFFTSxNQUFGLENBQVVELEdBQVYsRUFBZ0IsQ0FBaEIsRUFBb0JKLENBQXBCO0FBRUEiLCJmaWxlIjoiaW5zb3J0X3JpZ2h0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGJpc2VjdF9yaWdodCBmcm9tICcuL2Jpc2VjdF9yaWdodCcgO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbnNvcnRfcmlnaHQgKCBhICwgeCAsIGxvID0gMCAsIGhpID0gYS5sZW5ndGggKSB7XG5cblx0Y29uc3QgcG9zID0gYmlzZWN0X3JpZ2h0KCBhICwgeCAsIGxvICwgaGkgKSA7XG5cblx0YS5zcGxpY2UoIHBvcyAsIDAgLCB4ICkgO1xuXG59XG4iXX0=