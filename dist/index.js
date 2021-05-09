'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var crypto = require('crypto');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var crypto__default = /*#__PURE__*/_interopDefaultLegacy(crypto);

var CanvasContext = React.createContext(null);

var DrawPipeline = /** @class */ (function () {
    function DrawPipeline(ctx) {
        this.ctx = ctx;
        this.pipes = [];
    }
    DrawPipeline.prototype.addPipe = function (pipe) {
        var index = this.pipes.findIndex(function (_a) {
            var id = _a.id;
            return id === pipe.id;
        });
        if (index === -1)
            this.pipes.push(pipe);
        else
            this.pipes[index] = pipe;
        this.draw();
    };
    DrawPipeline.prototype.draw = function () {
        var _this = this;
        console.log('draw');
        this.ctx.clearRect(0, 0, 400, 400);
        this.pipes.forEach(function (p) { return p.pipe(_this.ctx); });
    };
    return DrawPipeline;
}());

var Canvas = function (_a) {
    var children = _a.children;
    var canvasRef = React.useRef();
    var _b = React.useState(null), ctx = _b[0], setCtx = _b[1];
    var drawPipeline = React.useMemo(function () { return new DrawPipeline(ctx); }, [ctx]);
    React.useEffect(function () {
        var ctx = canvasRef.current.getContext('2d');
        var dpr = window.devicePixelRatio || 1;
        var rect = canvasRef.current.getBoundingClientRect();
        canvasRef.current.width = Math.floor(rect.width * dpr);
        canvasRef.current.height = Math.floor(rect.height * dpr);
        ctx.scale(dpr, dpr);
        setCtx(ctx);
    }, []);
    console.log(drawPipeline.pipes);
    console.log('canvas');
    return (React__default['default'].createElement(CanvasContext.Provider, { value: drawPipeline },
        React__default['default'].createElement("canvas", { ref: canvasRef, style: {
                width: '100%',
                height: '100%'
            } }, "\u0418\u0437\u0432\u0438\u043D\u0438\u0442\u0435, \u0432\u0430\u0448 \u0431\u0440\u0430\u0443\u0437\u0435\u0440 \u043D\u0435\u0442 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442<canvas> \u044D\u043B\u0435\u043C\u0435\u043D\u0442."),
        ctx && children));
};

// This alphabet uses `A-Za-z0-9_-` symbols. The genetic algorithm helped
// optimize the gzip compression for this alphabet.
let urlAlphabet =
  'ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW';

// It is best to make fewer, larger requests to the crypto module to
// avoid system call overhead. So, random numbers are generated in a
// pool. The pool is a Buffer that is larger than the initial random
// request size by this multiplier. The pool is enlarged if subsequent
// requests exceed the maximum buffer size.
const POOL_SIZE_MULTIPLIER = 32;
let pool, poolOffset;

let random = bytes => {
  if (!pool || pool.length < bytes) {
    pool = Buffer.allocUnsafe(bytes * POOL_SIZE_MULTIPLIER);
    crypto__default['default'].randomFillSync(pool);
    poolOffset = 0;
  } else if (poolOffset + bytes > pool.length) {
    crypto__default['default'].randomFillSync(pool);
    poolOffset = 0;
  }

  let res = pool.subarray(poolOffset, poolOffset + bytes);
  poolOffset += bytes;
  return res
};

let nanoid = (size = 21) => {
  let bytes = random(size);
  let id = '';
  // A compact alternative for `for (let i = 0; i < size; i++)`.
  while (size--) {
    // It is incorrect to use bytes exceeding the alphabet size.
    // The following mask reduces the random byte in the 0-255 value
    // range to the 0-63 value range. Therefore, adding hacks, such
    // as empty string fallback or magic numbers, is unneccessary because
    // the bitmask trims bytes down to the alphabet size.
    id += urlAlphabet[bytes[size] & 63];
  }
  return id
};

var ID$1 = nanoid();
var Rect = function (_a) {
    var x = _a.x, y = _a.y, width = _a.width, height = _a.height;
    var drawPipeline = React.useContext(CanvasContext);
    React.useEffect(function () {
        console.log('rect');
        drawPipeline.addPipe({
            id: ID$1,
            pipe: function (ctx) {
                ctx.rect(x, y, width, height);
                ctx.fill();
            }
        });
    }, [x, y, width, height]);
    return null;
};

var ID = nanoid();
var Text = function () {
    var drawPipeline = React.useContext(CanvasContext);
    React.useEffect(function () {
        console.log('text');
        drawPipeline.addPipe({
            id: ID,
            pipe: function (ctx) {
                ctx.font = "48px serif";
                ctx.strokeStyle = 'red';
                ctx.strokeText("Hello world", 50, 100);
            }
        });
    }, []);
    return null;
};

exports.Canvas = Canvas;
exports.Rect = Rect;
exports.Text = Text;
//# sourceMappingURL=index.js.map
