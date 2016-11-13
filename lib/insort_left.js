'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = insort_left;

var _bisect_left = require('./bisect_left');

var _bisect_left2 = _interopRequireDefault(_bisect_left);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function insort_left(a, x) {
	var lo = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
	var hi = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : a.length;


	var pos = (0, _bisect_left2.default)(a, x, lo, hi);

	a.splice(pos, 0, x);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbnNvcnRfbGVmdC5qcyJdLCJuYW1lcyI6WyJpbnNvcnRfbGVmdCIsImEiLCJ4IiwibG8iLCJoaSIsImxlbmd0aCIsInBvcyIsInNwbGljZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7a0JBRXdCQSxXOztBQUZ4Qjs7Ozs7O0FBRWUsU0FBU0EsV0FBVCxDQUF1QkMsQ0FBdkIsRUFBMkJDLENBQTNCLEVBQXdEO0FBQUEsS0FBekJDLEVBQXlCLHVFQUFwQixDQUFvQjtBQUFBLEtBQWhCQyxFQUFnQix1RUFBWEgsRUFBRUksTUFBUzs7O0FBRXRFLEtBQU1DLE1BQU0sMkJBQWFMLENBQWIsRUFBaUJDLENBQWpCLEVBQXFCQyxFQUFyQixFQUEwQkMsRUFBMUIsQ0FBWjs7QUFFQUgsR0FBRU0sTUFBRixDQUFVRCxHQUFWLEVBQWdCLENBQWhCLEVBQW9CSixDQUFwQjtBQUVBIiwiZmlsZSI6Imluc29ydF9sZWZ0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGJpc2VjdF9sZWZ0IGZyb20gJy4vYmlzZWN0X2xlZnQnIDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5zb3J0X2xlZnQgKCBhICwgeCAsIGxvID0gMCAsIGhpID0gYS5sZW5ndGggKSB7XG5cblx0Y29uc3QgcG9zID0gYmlzZWN0X2xlZnQoIGEgLCB4ICwgbG8gLCBoaSApIDtcblxuXHRhLnNwbGljZSggcG9zICwgMCAsIHggKSA7XG5cbn1cbiJdfQ==