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
        RenderManager.prototype.onEvent = function (eventName) {
            var _this = this;
            return function (event) {
                var _a = event.nativeEvent, offsetX = _a.offsetX, offsetY = _a.offsetY;
                for (var i = 0; i < _this.objects.length; i++) {
                    var object = _this.objects[i];
                    var eventHandler = object.events[eventName];
                    if (object.path && eventHandler) {
                        var pointInPath = _this.ctx.isPointInPath(object.path, offsetX, offsetY);
                        var pointInStroke = _this.ctx.isPointInStroke(object.path, offsetX, offsetY);
                        if (pointInPath || pointInStroke) {
                            eventHandler({
                                id: object.id,
                                type: object.type,
                                eventType: eventName,
                                event: event
                            });
                        }
                    }
                }
            };
        };
        RenderManager.prototype.draw = function () {
            this.clear();
            for (var i = 0; i < this.objects.length; i++) {
                var object = this.objects[i];
                this.resetStyle();
                object.draw(this.ctx);
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
                    var rect = canvasRef.current.getBoundingClientRect();
                    canvasRef.current.width = rect.width;
                    canvasRef.current.height = rect.height;
                    setCtx(currentCtx);
                }
            }
        }, []);
        return (React__default['default'].createElement(React__default['default'].Fragment, null,
            React__default['default'].createElement("canvas", { ref: canvasRef, style: {
                    width: "100%",
                    height: "100%"
                }, 
                // onAuxClick={renderManager?.onEvent("onAuxClick")}
                // onAuxClickCapture={renderManager?.onEvent("onAuxClickCapture")}
                onClick: renderManager === null || renderManager === void 0 ? void 0 : renderManager.onEvent("onClick"), 
                // onClickCapture={renderManager?.onEvent("onClickCapture")}
                onContextMenu: renderManager === null || renderManager === void 0 ? void 0 : renderManager.onEvent("onContextMenu"), 
                // onContextMenuCapture={renderManager?.onEvent("onContextMenuCapture")}
                onDoubleClick: renderManager === null || renderManager === void 0 ? void 0 : renderManager.onEvent("onDoubleClick"), 
                // onDoubleClickCapture={renderManager?.onEvent("onDoubleClickCapture")}
                onMouseDown: renderManager === null || renderManager === void 0 ? void 0 : renderManager.onEvent("onMouseDown"), 
                // onMouseDownCapture={renderManager?.onEvent("onMouseDownCapture")}
                // onMouseEnter={renderManager?.onEvent("onMouseEnter")}
                // onMouseLeave={renderManager?.onEvent("onMouseLeave")}
                onMouseMove: renderManager === null || renderManager === void 0 ? void 0 : renderManager.onEvent("onMouseMove"), 
                // onMouseMoveCapture={renderManager?.onEvent("onMouseMoveCapture")}
                // onMouseOut={renderManager?.onEvent("onMouseOut")}
                // onMouseOutCapture={renderManager?.onEvent("onMouseOutCapture")}
                // onMouseOver={renderManager?.onEvent("onMouseOver")}
                // onMouseOverCapture={renderManager?.onEvent("onMouseOverCapture")}
                onMouseUp: renderManager === null || renderManager === void 0 ? void 0 : renderManager.onEvent("onMouseUp"), 
                // onMouseUpCapture={renderManager?.onEvent("onMouseUpCapture")}
                onPointerDown: renderManager === null || renderManager === void 0 ? void 0 : renderManager.onEvent("onPointerDown") }, "\u0418\u0437\u0432\u0438\u043D\u0438\u0442\u0435, \u0432\u0430\u0448 \u0431\u0440\u0430\u0443\u0437\u0435\u0440 \u043D\u0435\u0442 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442<canvas> \u044D\u043B\u0435\u043C\u0435\u043D\u0442."),
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

    // eslint-disable-next-line no-shadow
    var RenderObjectTypes;
    (function (RenderObjectTypes) {
        RenderObjectTypes["TEXT"] = "TEXT";
        RenderObjectTypes["ARC"] = "ARC";
        RenderObjectTypes["RECT"] = "RECT";
        RenderObjectTypes["LINE"] = "LINE";
    })(RenderObjectTypes || (RenderObjectTypes = {}));
    var RenderObject = /** @class */ (function () {
        function RenderObject(id, type, draw, path, events, params) {
            this.id = id;
            this.type = type;
            this.draw = draw;
            this.path = path;
            this.events = events;
            this.params = params;
        }
        return RenderObject;
    }());

    function getEventHandlersFromProps(props) {
        var events = {};
        var eventPrefix = "on";
        for (var propName in props) {
            if (propName.slice(0, 2) === eventPrefix) {
                // @ts-ignore
                events[propName] = props[propName];
            }
        }
        return events;
    }
    function drawAtCanvas(ctx, path, stroke, fill) {
        if (fill) {
            ctx.fillStyle = fill;
            ctx.fill(path);
        }
        if (stroke) {
            ctx.strokeStyle = stroke;
            ctx.stroke(path);
        }
    }

    var Rect = function (props) {
        var x = props.x, y = props.y, width = props.width, height = props.height, stroke = props.stroke, fill = props.fill;
        var renderManager = React.useContext(RenderContext);
        var ID = React.useRef(nanoid());
        var events = getEventHandlersFromProps(props);
        React.useEffect(function () {
            var path = new Path2D();
            var params = {
                x: x,
                y: y,
                width: width,
                height: height,
                stroke: stroke,
                fill: fill
            };
            var draw = function (ctx) {
                path.rect(x, y, width, height);
                drawAtCanvas(ctx, path, stroke, fill);
            };
            var renderObject = new RenderObject(ID.current, RenderObjectTypes.RECT, draw, path, events, params);
            renderManager === null || renderManager === void 0 ? void 0 : renderManager.addObject(renderObject);
        }, [events, fill, height, renderManager, stroke, width, x, y]);
        return null;
    };

    var Arc = function (props) {
        var x = props.x, y = props.y, radius = props.radius, startAngle = props.startAngle, endAngle = props.endAngle, anticlockwise = props.anticlockwise, stroke = props.stroke, fill = props.fill;
        var renderManager = React.useContext(RenderContext);
        var ID = React.useRef(nanoid());
        var events = getEventHandlersFromProps(props);
        React.useEffect(function () {
            var path = new Path2D();
            var params = {
                x: x,
                y: y,
                radius: radius,
                startAngle: startAngle,
                endAngle: endAngle,
                anticlockwise: anticlockwise,
                stroke: stroke,
                fill: fill
            };
            var draw = function (ctx) {
                path.arc(x, y, radius, startAngle, endAngle, anticlockwise);
                drawAtCanvas(ctx, path, stroke, fill);
            };
            renderManager === null || renderManager === void 0 ? void 0 : renderManager.addObject(new RenderObject(ID.current, RenderObjectTypes.ARC, draw, path, events, params));
        }, [anticlockwise, endAngle, events, fill, radius, renderManager, startAngle, stroke, x, y]);
        return null;
    };

    var Line = function (props) {
        var x1 = props.x1, y1 = props.y1, x2 = props.x2, y2 = props.y2, stroke = props.stroke, fill = props.fill;
        var renderManager = React.useContext(RenderContext);
        var ID = React.useRef(nanoid());
        var events = getEventHandlersFromProps(props);
        React.useEffect(function () {
            var path = new Path2D();
            var params = {
                x1: x1,
                y1: y1,
                x2: x2,
                y2: y2,
                stroke: stroke,
                fill: fill
            };
            var draw = function (ctx) {
                path.moveTo(x1, y1);
                path.lineTo(x2, y2);
                ctx.stroke(path);
            };
            renderManager === null || renderManager === void 0 ? void 0 : renderManager.addObject(new RenderObject(ID.current, RenderObjectTypes.LINE, draw, path, events, params));
        }, [events, fill, renderManager, stroke, x1, x2, y1, y2]);
        return null;
    };

    var Text = function (props) {
        var x = props.x, y = props.y, text = props.text, font = props.font, stroke = props.stroke, fill = props.fill;
        var renderManager = React.useContext(RenderContext);
        var ID = React.useRef(nanoid());
        var events = getEventHandlersFromProps(props);
        React.useEffect(function () {
            var path = new Path2D();
            var params = {
                x: x,
                y: y,
                text: text,
                font: font,
                stroke: stroke,
                fill: fill
            };
            var draw = function (ctx) {
                ctx.font = font;
                var _a = ctx.measureText(text), width = _a.width, actualBoundingBoxAscent = _a.actualBoundingBoxAscent;
                path.rect(x, y - actualBoundingBoxAscent, width, actualBoundingBoxAscent);
                if (fill) {
                    ctx.fillStyle = fill;
                    ctx.fillText(text, x, y);
                }
                if (stroke) {
                    ctx.strokeStyle = stroke;
                    ctx.strokeText(text, x, y);
                }
            };
            renderManager === null || renderManager === void 0 ? void 0 : renderManager.addObject(new RenderObject(ID.current, RenderObjectTypes.TEXT, draw, path, events, params));
        }, [events, fill, font, renderManager, stroke, text, x, y]);
        return null;
    };

    exports.Arc = Arc;
    exports.Canvas = Canvas;
    exports.Line = Line;
    exports.Rect = Rect;
    exports.Text = Text;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
