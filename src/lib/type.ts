export type HTMLContext = string | CanvasRenderingContext2D | HTMLCanvasElement | ArrayLike<CanvasRenderingContext2D | HTMLCanvasElement>;

export enum ChartHTMLAttributes {
    data= 'data-chartjs-data',
    labels= 'data-chartjs-labels',
    dataOptions= 'data-chartjs-data-options',
    options= 'data-chartjs-properties',
}

export const exec = function (str:string) {
    // tslint:disable-next-line:no-eval
    return eval(`(${str})`);
};

export interface DataOptions<TData, TOptions = unknown> {
    data:TData;
    labels:Array<string>;
    options?:TOptions;
}
