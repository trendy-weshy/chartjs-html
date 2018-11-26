export declare type HTMLContext = string | CanvasRenderingContext2D | HTMLCanvasElement | ArrayLike<CanvasRenderingContext2D | HTMLCanvasElement>;
export declare enum ChartHTMLAttributes {
    data = "data-chartjs-data",
    labels = "data-chartjs-labels",
    dataOptions = "data-chartjs-data-options",
    options = "data-chartjs-properties"
}
export declare const exec: (str: string) => any;
export interface DataOptions<TData, TOptions = unknown> {
    data: TData;
    labels: Array<string>;
    options?: TOptions;
}
