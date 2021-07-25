import { MouseEvent, PointerEvent } from "react";
import { IRenderObject } from "./RenderObject";
import { RectProps } from "./components/Rect";
import { ArcProps } from "./components/Arc";
import { LineProps } from "./components/Line";
import { TextProps } from "./components/Text";
export declare type EventName = keyof Events;
export declare type Event = MouseEvent | PointerEvent;
export declare type EventRenderObject = Pick<IRenderObject, "id" | "type"> & {
    event: Event;
    eventType: EventName;
};
export declare type Params = RectParams | ArcParams | LineParams | TextParams;
export declare type RectParams = Pick<RectProps, "stroke" | "fill">;
export declare type ArcParams = Pick<ArcProps, "stroke" | "fill">;
export declare type LineParams = Pick<LineProps, "stroke" | "fill">;
export declare type TextParams = Pick<TextProps, "stroke" | "fill">;
export declare enum RenderObjectTypes {
    TEXT = "TEXT",
    ARC = "ARC",
    RECT = "RECT",
    LINE = "LINE"
}
export interface Events {
    onAuxClick?: (object: EventRenderObject) => void;
    onAuxClickCapture?: (object: EventRenderObject) => void;
    onClick?: (object: EventRenderObject) => void;
    onClickCapture?: (object: EventRenderObject) => void;
    onContextMenu?: (object: EventRenderObject) => void;
    onContextMenuCapture?: (object: EventRenderObject) => void;
    onDoubleClick?: (object: EventRenderObject) => void;
    onDoubleClickCapture?: (object: EventRenderObject) => void;
    onMouseDown?: (object: EventRenderObject) => void;
    onMouseDownCapture?: (object: EventRenderObject) => void;
    onMouseEnter?: (object: EventRenderObject) => void;
    onMouseLeave?: (object: EventRenderObject) => void;
    onMouseMove?: (object: EventRenderObject) => void;
    onMouseMoveCapture?: (object: EventRenderObject) => void;
    onMouseOut?: (object: EventRenderObject) => void;
    onMouseOutCapture?: (object: EventRenderObject) => void;
    onMouseOver?: (object: EventRenderObject) => void;
    onMouseOverCapture?: (object: EventRenderObject) => void;
    onMouseUp?: (object: EventRenderObject) => void;
    onMouseUpCapture?: (object: EventRenderObject) => void;
    onPointerDown?: (object: EventRenderObject) => void;
    onPointerDownCapture?: (object: EventRenderObject) => void;
    onPointerMove?: (object: EventRenderObject) => void;
    onPointerMoveCapture?: (object: EventRenderObject) => void;
    onPointerUp?: (object: EventRenderObject) => void;
    onPointerUpCapture?: (object: EventRenderObject) => void;
    onPointerCancel?: (object: EventRenderObject) => void;
    onPointerCancelCapture?: (object: EventRenderObject) => void;
    onPointerEnter?: (object: EventRenderObject) => void;
    onPointerEnterCapture?: (object: EventRenderObject) => void;
    onPointerLeave?: (object: EventRenderObject) => void;
    onPointerLeaveCapture?: (object: EventRenderObject) => void;
    onPointerOver?: (object: EventRenderObject) => void;
    onPointerOverCapture?: (object: EventRenderObject) => void;
    onPointerOut?: (object: EventRenderObject) => void;
    onPointerOutCapture?: (object: EventRenderObject) => void;
    onGotPointerCapture?: (object: EventRenderObject) => void;
    onGotPointerCaptureCapture?: (object: EventRenderObject) => void;
    onLostPointerCapture?: (object: EventRenderObject) => void;
    onLostPointerCaptureCapture?: (object: EventRenderObject) => void;
}
