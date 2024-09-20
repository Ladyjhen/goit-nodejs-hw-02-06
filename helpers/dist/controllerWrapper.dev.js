"use strict";

var controllerWrapper = function controllerWrapper(controller) {
  var func = function func(request, response, next) {
    return regeneratorRuntime.async(function func$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return regeneratorRuntime.awrap(controller(request, response, next));

          case 3:
            _context.next = 8;
            break;

          case 5:
            _context.prev = 5;
            _context.t0 = _context["catch"](0);
            next(_context.t0);

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[0, 5]]);
  };

  return func;
};

module.exports = controllerWrapper;