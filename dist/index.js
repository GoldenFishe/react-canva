(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
    typeof define === 'function' && define.amd ? define(['exports', 'react'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['react-canva'] = {}, global.React));
}(this, (function (exports, React) { 'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

    var RenderContext = React.createContext(null);

    var RenderManager = /** @class */ (function () {
        function RenderManager(ctx) {
            this.ctx = ctx;
            this.objects = [];
        }
        RenderManager.prototype.addObject = function (object) {
            var NON_EXIST_INDEX = -1;
            var index = this.objects.findIndex(function (_a) {
                var id = _a.id;
                return id === object.id;
            });
            if (index === NON_EXIST_INDEX) {
                this.objects.push(object);
            }
            else {
                this.objects[index] = object;
            }
            this.draw();
        };
        RenderManager.prototype.draw = function () {
            this.clear();
            for (var i = 0; i < this.objects.length; i++) {
                var object = this.objects[i];
                this.resetStyle();
                object.draw(this.ctx);
            }
        };
        RenderManager.prototype.onClick = function (event) {
            var _a = event.nativeEvent, offsetX = _a.offsetX, offsetY = _a.offsetY;
            for (var i = 0; i < this.objects.length; i++) {
                var object = this.objects[i];
                if (object.path && object.onClick) {
                    var pointInPath = this.ctx.isPointInPath(object.path, offsetX, offsetY);
                    var pointInStroke = this.ctx.isPointInStroke(object.path, offsetX, offsetY);
                    if (pointInPath || pointInStroke) {
                        object.onClick(event, object);
                    }
                }
            }
        };
        RenderManager.prototype.resetStyle = function () {
            this.ctx.strokeStyle = "#000";
            this.ctx.fillStyle = "#000";
            this.ctx.lineCap = "butt";
            this.ctx.lineDashOffset = 0.0;
            this.ctx.lineJoin = "miter";
            this.ctx.lineWidth = 1.0;
            this.ctx.miterLimit = 10.0;
        };
        RenderManager.prototype.clear = function () {
            var X_START = 0;
            var Y_START = 0;
            this.ctx.clearRect(X_START, Y_START, this.ctx.canvas.width, this.ctx.canvas.height);
        };
        return RenderManager;
    }());

    // eslint-disable-next-line react/prop-types
    var Canvas = function (_a) {
        var children = _a.children;
        var canvasRef = React.useRef(null);
        var _b = React.useState(null), ctx = _b[0], setCtx = _b[1];
        var renderManager = React.useMemo(function () {
            if (ctx !== null) {
                return new RenderManager(ctx);
            }
            return null;
        }, [ctx]);
        React.useEffect(function () {
            if (canvasRef.current) {
                var currentCtx = canvasRef.current.getContext("2d");
                if (currentCtx) {
                    var DEFAULT_DPR = 1;
                    var dpr = window.devicePixelRatio || DEFAULT_DPR;
                    var rect = canvasRef.current.getBoundingClientRect();
                    canvasRef.current.width = Math.floor(rect.width * dpr);
                    canvasRef.current.height = Math.floor(rect.height * dpr);
                    currentCtx.scale(dpr, dpr);
                    setCtx(currentCtx);
                }
            }
        }, []);
        return (React__default['default'].createElement(React__default['default'].Fragment, null,
            React__default['default'].createElement("canvas", { ref: canvasRef, style: { width: "100%", height: "100%" }, onClick: renderManager === null || renderManager === void 0 ? void 0 : renderManager.onClick.bind(renderManager) }, "\u0418\u0437\u0432\u0438\u043D\u0438\u0442\u0435, \u0432\u0430\u0448 \u0431\u0440\u0430\u0443\u0437\u0435\u0440 \u043D\u0435\u0442 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442<canvas> \u044D\u043B\u0435\u043C\u0435\u043D\u0442."),
            ctx ? React__default['default'].createElement(RenderContext.Provider, { value: renderManager }, children) : null));
    };

    // This file replaces `index.js` in bundlers like webpack or Rollup,

    let nanoid = (size = 21) => {
      let id = '';
      let bytes = crypto.getRandomValues(new Uint8Array(size));

      // A compact alternative for `for (var i = 0; i < step; i++)`.
      while (size--) {
        // It is incorrect to use bytes exceeding the alphabet size.
        // The following mask reduces the random byte in the 0-255 value
        // range to the 0-63 value range. Therefore, adding hacks, such
        // as empty string fallback or magic numbers, is unneccessary because
        // the bitmask trims bytes down to the alphabet size.
        let byte = bytes[size] & 63;
        if (byte < 36) {
          // `0-9a-z`
          id += byte.toString(36);
        } else if (byte < 62) {
          // `A-Z`
          id += (byte - 26).toString(36).toUpperCase();
        } else if (byte < 63) {
          id += '_';
        } else {
          id += '-';
        }
      }
      return id
    };

    var RenderObjectTypes;
    (function (RenderObjectTypes) {
        RenderObjectTypes["TEXT"] = "TEXT";
        RenderObjectTypes["ARC"] = "ARC";
        RenderObjectTypes["RECT"] = "RECT";
        RenderObjectTypes["LINE"] = "LINE";
    })(RenderObjectTypes || (RenderObjectTypes = {}));
    var RenderObject = /** @class */ (function () {
        function RenderObject(id, type, draw, path, onClick) {
            this.id = id;
            this.type = type;
            this.draw = draw;
            this.path = path;
            this.onClick = onClick;
        }
        return RenderObject;
    }());

    var Rect = function (_a) {
        var x = _a.x, y = _a.y, width = _a.width, height = _a.height, stroke = _a.stroke, fill = _a.fill, onClick = _a.onClick;
        var renderManager = React.useContext(RenderContext);
        var ID = React.useRef(nanoid());
        React.useEffect(function () {
            var path = new Path2D();
            var id = ID.current;
            var draw = function (ctx) {
                path.rect(x, y, width, height);
                if (stroke) {
                    ctx.strokeStyle = stroke;
                    ctx.stroke(path);
                }
                if (fill) {
                    ctx.fillStyle = fill;
                    ctx.fill(path);
                }
            };
            renderManager.addObject(new RenderObject(id, RenderObjectTypes.RECT, draw, path, onClick));
        }, [x, y, width, height, fill, stroke, renderManager, onClick]);
        return null;
    };

    var Text = function (_a) {
        var x = _a.x, y = _a.y, text = _a.text, font = _a.font, stroke = _a.stroke, fill = _a.fill, onClick = _a.onClick;
        var renderManager = React.useContext(RenderContext);
        var ID = React.useRef(nanoid());
        React.useEffect(function () {
            var path = new Path2D();
            var id = ID.current;
            var draw = function (ctx) {
                ctx.font = font;
                var _a = ctx.measureText(text), width = _a.width, actualBoundingBoxAscent = _a.actualBoundingBoxAscent;
                path.rect(x, y - actualBoundingBoxAscent, width, actualBoundingBoxAscent);
                if (stroke) {
                    ctx.strokeStyle = stroke;
                    ctx.strokeText(text, x, y);
                }
                if (fill) {
                    ctx.fillStyle = fill;
                    ctx.fillText(text, x, y);
                }
            };
            renderManager.addObject(new RenderObject(id, RenderObjectTypes.TEXT, draw, path, onClick));
        }, [font, text, stroke, fill, renderManager, onClick, x, y]);
        return null;
    };

    var Arc = function (_a) {
        var x = _a.x, y = _a.y, radius = _a.radius, startAngle = _a.startAngle, endAngle = _a.endAngle, anticlockwise = _a.anticlockwise, stroke = _a.stroke, fill = _a.fill, onClick = _a.onClick;
        var renderManager = React.useContext(RenderContext);
        var ID = React.useRef(nanoid());
        React.useEffect(function () {
            var path = new Path2D();
            var id = ID.current;
            var draw = function (ctx) {
                path.arc(x, y, radius, startAngle, endAngle, anticlockwise);
                if (stroke) {
                    ctx.strokeStyle = stroke;
                    ctx.stroke(path);
                }
                if (fill) {
                    ctx.fillStyle = fill;
                    ctx.fill(path);
                }
            };
            renderManager.addObject(new RenderObject(id, RenderObjectTypes.ARC, draw, path, onClick));
        }, [x, y, radius, startAngle, endAngle, anticlockwise, stroke, fill, onClick, renderManager]);
        return null;
    };

    exports.Arc = Arc;
    exports.Canvas = Canvas;
    exports.Rect = Rect;
    exports.Text = Text;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=index.js.map
