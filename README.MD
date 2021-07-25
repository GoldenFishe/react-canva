# React-Canva
![npm bundle size](https://img.shields.io/bundlephobia/min/react-canva?color=green)
#### (Project in development)

## [Demo/Sandbox](https://goldenfishe.github.io/react-canva/)

React-Canva is a JavaScript library for drawing complex canvas graphics using
[React](http://facebook.github.io/react/).

This is not another renderer for React as [React Konva](https://github.com/konvajs/react-konva). You can use this
library together with DOM (as opposed to [React Konva](https://github.com/konvajs/react-konva)). This library takes
control of the canvas in the usual form for [React](http://facebook.github.io/react/).

## Installation

```bash
npm install react-canva --save
```

## Example

```javascript
import React from "react";
import {render} from "react-dom";
import {Canvas, Text, Rect, Arc, Line} from "react-canva";

const App = () => {
    return (
        <div>
            <Canvas>
                <Rect x={10}
                      y={10}
                      width={200}
                      height={200}
                      fill="#030303"
                      stroke="red"/>
                <Text text={"React-Canva"}
                      font={"48px serif"}
                      x={100}
                      y={100}
                      stroke={"cyan"}
                      fill={"white"}
                      onClick={onClick}/>
                <Line x1={10}
                      y1={10}
                      x2={20}
                      y2={30}
                      onClick={onClick}/>
                <Arc x={10}
                     y={10}
                     radius={50}
                     startAngle={0}
                     endAngle={180}
                     stroke={"cyan"}
                     fill={"white"}
                     onClick={onClick}
                     lineCap="butt"
                     lineDashOffset={0.0}
                     lineJoin="miter"
                     lineWidth={1.0}
                     miterLimit={10.0}/>
            </Canvas>
        </div>
    );
}

render(<App/>, document.getElementById('root'));
```

## Core API
### Supported Events
* `onClick`
* `onContextMenu`
* `onDoubleClick`
* `onMouseDown`
* `onMouseUp`
* `onPointerDown`
### Base Props
```javascript
export interface BaseProps {
    stroke?: string;
    fill?: string;
    lineCap?: CanvasLineCap;
    lineDashOffset?: number;
    lineJoin?: CanvasLineJoin;
    lineWidth?: number;
    miterLimit?: number;
}
```
### Rect
```javascript
export interface RectProps extends BaseProps {
    x: number;
    y: number;
    width: number;
    height: number;
}
```
### Arc
```javascript
export interface ArcProps extends BaseProps {
    x: number;
    y: number;
    radius: number;
    startAngle: number;
    endAngle: number;
    anticlockwise?: boolean;
}
```
### Line
```javascript
export interface LineProps extends BaseProps {
    x1: number;
    y1: number;
    x2: number;
    y2: number;
}
```
### Text
```javascript
export interface TextProps extends BaseProps {
    x: number;
    y: number;
    text: string;
    font: string;
}
```