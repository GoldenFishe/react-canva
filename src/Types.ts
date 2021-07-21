import {MouseEvent, PointerEvent} from "react";
import {IRenderObject} from "./RenderObject";

export type EventName = keyof Events;
export type Event = MouseEvent | PointerEvent;
export type EventRenderObject = Pick<IRenderObject, "id" | "type"> & { event: Event, eventType: EventName };

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
