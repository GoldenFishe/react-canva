export type Pipe = {
    id: string;
    pipe: (ctx: CanvasRenderingContext2D) => void;
}

export interface IDrawPipeline {
    ctx: CanvasRenderingContext2D | null;
    pipes: Array<Pipe>;
    addPipe: (pipe: Pipe) => void;
    draw: () => void;
}

export class DrawPipeline implements IDrawPipeline {
    ctx: CanvasRenderingContext2D;
    pipes: Array<Pipe>;

    constructor(ctx: CanvasRenderingContext2D) {
        this.ctx = ctx;
        this.pipes = [];
    }

    addPipe(pipe: Pipe) {
        const index = this.pipes.findIndex(({id}) => id === pipe.id);
        if (index === -1) this.pipes.push(pipe);
        else this.pipes[index] = pipe;
        this.draw();
    }

    draw() {
        console.log('draw');
        this.ctx.clearRect(0, 0, 400, 400);
        this.pipes.forEach(p => p.pipe(this.ctx));
    }
}