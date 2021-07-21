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
        RenderManager.prototype.onEvent = function (eventName) {
            var self = this;
            return function eventHandler(event) {
                var _a = event.nativeEvent, offsetX = _a.offsetX, offsetY = _a.offsetY;
                for (var i = 0; i < self.objects.length; i++) {
                    var object = self.objects[i];
                    var eventHandler_1 = object.events[eventName];
                    if (object.path && eventHandler_1) {
                        var pointInPath = self.ctx.isPointInPath(object.path, offsetX, offsetY);
                        var pointInStroke = self.ctx.isPointInStroke(object.path, offsetX, offsetY);
                        if (pointInPath || pointInStroke) {
                            eventHandler_1({
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
            React__default['default'].createElement("canvas", { ref: canvasRef, style: {
                    width: "100%",
                    height: "100%"
                }, onAuxClick: renderManager === null || renderManager === void 0 ? void 0 : renderManager.onEvent("onAuxClick"), onAuxClickCapture: renderManager === null || renderManager === void 0 ? void 0 : renderManager.onEvent("onAuxClickCapture"), onClick: renderManager === null || renderManager === void 0 ? void 0 : renderManager.onEvent("onClick"), onClickCapture: renderManager === null || renderManager === void 0 ? void 0 : renderManager.onEvent("onClickCapture"), onContextMenu: renderManager === null || renderManager === void 0 ? void 0 : renderManager.onEvent("onContextMenu"), onContextMenuCapture: renderManager === null || renderManager === void 0 ? void 0 : renderManager.onEvent("onContextMenuCapture"), onDoubleClick: renderManager === null || renderManager === void 0 ? void 0 : renderManager.onEvent("onDoubleClick"), onDoubleClickCapture: renderManager === null || renderManager === void 0 ? void 0 : renderManager.onEvent("onDoubleClickCapture"), onMouseDown: renderManager === null || renderManager === void 0 ? void 0 : renderManager.onEvent("onMouseDown"), onMouseDownCapture: renderManager === null || renderManager === void 0 ? void 0 : renderManager.onEvent("onMouseDownCapture"), onMouseEnter: renderManager === null || renderManager === void 0 ? void 0 : renderManager.onEvent("onMouseEnter"), onMouseLeave: renderManager === null || renderManager === void 0 ? void 0 : renderManager.onEvent("onMouseLeave"), onMouseMove: renderManager === null || renderManager === void 0 ? void 0 : renderManager.onEvent("onMouseMove"), onMouseMoveCapture: renderManager === null || renderManager === void 0 ? void 0 : renderManager.onEvent("onMouseMoveCapture"), onMouseOut: renderManager === null || renderManager === void 0 ? void 0 : renderManager.onEvent("onMouseOut"), onMouseOutCapture: renderManager === null || renderManager === void 0 ? void 0 : renderManager.onEvent("onMouseOutCapture"), onMouseOver: renderManager === null || renderManager === void 0 ? void 0 : renderManager.onEvent("onMouseOver"), onMouseOverCapture: renderManager === null || renderManager === void 0 ? void 0 : renderManager.onEvent("onMouseOverCapture"), onMouseUp: renderManager === null || renderManager === void 0 ? void 0 : renderManager.onEvent("onMouseUp"), onMouseUpCapture: renderManager === null || renderManager === void 0 ? void 0 : renderManager.onEvent("onMouseUpCapture"), onPointerDown: renderManager === null || renderManager === void 0 ? void 0 : renderManager.onEvent("onPointerDown"), onPointerDownCapture: renderManager === null || renderManager === void 0 ? void 0 : renderManager.onEvent("onPointerDownCapture"), onPointerMove: renderManager === null || renderManager === void 0 ? void 0 : renderManager.onEvent("onPointerMove"), onPointerMoveCapture: renderManager === null || renderManager === void 0 ? void 0 : renderManager.onEvent("onPointerMoveCapture"), onPointerUp: renderManager === null || renderManager === void 0 ? void 0 : renderManager.onEvent("onPointerUp"), onPointerUpCapture: renderManager === null || renderManager === void 0 ? void 0 : renderManager.onEvent("onPointerUpCapture"), onPointerCancel: renderManager === null || renderManager === void 0 ? void 0 : renderManager.onEvent("onPointerCancel"), onPointerCancelCapture: renderManager === null || renderManager === void 0 ? void 0 : renderManager.onEvent("onPointerCancelCapture"), onPointerEnter: renderManager === null || renderManager === void 0 ? void 0 : renderManager.onEvent("onPointerEnter"), onPointerEnterCapture: renderManager === null || renderManager === void 0 ? void 0 : renderManager.onEvent("onPointerEnterCapture"), onPointerLeave: renderManager === null || renderManager === void 0 ? void 0 : renderManager.onEvent("onPointerLeave"), onPointerLeaveCapture: renderManager === null || renderManager === void 0 ? void 0 : renderManager.onEvent("onPointerLeaveCapture"), onPointerOver: renderManager === null || renderManager === void 0 ? void 0 : renderManager.onEvent("onPointerOver"), onPointerOverCapture: renderManager === null || renderManager === void 0 ? void 0 : renderManager.onEvent("onPointerOverCapture"), onPointerOut: renderManager === null || renderManager === void 0 ? void 0 : renderManager.onEvent("onPointerOut"), onPointerOutCapture: renderManager === null || renderManager === void 0 ? void 0 : renderManager.onEvent("onPointerOutCapture"), onGotPointerCapture: renderManager === null || renderManager === void 0 ? void 0 : renderManager.onEvent("onGotPointerCapture"), onGotPointerCaptureCapture: renderManager === null || renderManager === void 0 ? void 0 : renderManager.onEvent("onGotPointerCaptureCapture"), onLostPointerCapture: renderManager === null || renderManager === void 0 ? void 0 : renderManager.onEvent("onLostPointerCapture"), onLostPointerCaptureCapture: renderManager === null || renderManager === void 0 ? void 0 : renderManager.onEvent("onLostPointerCaptureCapture") }, "\u0418\u0437\u0432\u0438\u043D\u0438\u0442\u0435, \u0432\u0430\u0448 \u0431\u0440\u0430\u0443\u0437\u0435\u0440 \u043D\u0435\u0442 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442<canvas> \u044D\u043B\u0435\u043C\u0435\u043D\u0442."),
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
        function RenderObject(id, type, draw, path, events) {
            this.id = id;
            this.type = type;
            this.draw = draw;
            this.path = path;
            this.events = events;
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

    var Rect = function (props) {
        var x = props.x, y = props.y, width = props.width, height = props.height, stroke = props.stroke, fill = props.fill;
        var renderManager = React.useContext(RenderContext);
        var ID = React.useRef(nanoid());
        var events = getEventHandlersFromProps(props);
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
            renderManager === null || renderManager === void 0 ? void 0 : renderManager.addObject(new RenderObject(id, RenderObjectTypes.RECT, draw, path, events));
        }, [events, fill, height, renderManager, stroke, width, x, y]);
        return null;
    };

    var Text = function (props) {
        var x = props.x, y = props.y, text = props.text, font = props.font, stroke = props.stroke, fill = props.fill;
        var renderManager = React.useContext(RenderContext);
        var ID = React.useRef(nanoid());
        var events = getEventHandlersFromProps(props);
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
            renderManager === null || renderManager === void 0 ? void 0 : renderManager.addObject(new RenderObject(id, RenderObjectTypes.TEXT, draw, path, events));
        }, [events, fill, font, renderManager, stroke, text, x, y]);
        return null;
    };

    var Arc = function (props) {
        var x = props.x, y = props.y, radius = props.radius, startAngle = props.startAngle, endAngle = props.endAngle, anticlockwise = props.anticlockwise, stroke = props.stroke, fill = props.fill;
        var renderManager = React.useContext(RenderContext);
        var ID = React.useRef(nanoid());
        var events = getEventHandlersFromProps(props);
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
            renderManager === null || renderManager === void 0 ? void 0 : renderManager.addObject(new RenderObject(id, RenderObjectTypes.ARC, draw, path, events));
        }, [anticlockwise, endAngle, events, fill, radius, renderManager, startAngle, stroke, x, y]);
        return null;
    };

    var Line = function (props) {
        var x1 = props.x1, y1 = props.y1, x2 = props.x2, y2 = props.y2; props.stroke; props.fill;
        var renderManager = React.useContext(RenderContext);
        var ID = React.useRef(nanoid());
        var events = getEventHandlersFromProps(props);
        React.useEffect(function () {
            var path = new Path2D();
            var id = ID.current;
            var draw = function (ctx) {
                path.moveTo(x1, y1);
                path.lineTo(x2, y2);
                ctx.stroke(path);
            };
            renderManager === null || renderManager === void 0 ? void 0 : renderManager.addObject(new RenderObject(id, RenderObjectTypes.LINE, draw, path, events));
        }, [events, renderManager, x1, x2, y1, y2]);
        return null;
    };

    exports.Arc = Arc;
    exports.Canvas = Canvas;
    exports.Line = Line;
    exports.Rect = Rect;
    exports.Text = Text;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
