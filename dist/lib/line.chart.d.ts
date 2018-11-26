import { ChartColor, ChartElementsOptions, ChartPoint, ChartScales } from 'chart.js';
import { DataOptions } from './pie.chart';
declare enum LineChartFill {
    ORIGIN = "origin",
    START = "start",
    END = "end"
}
interface LineChartDataOptions {
    data: Array<number | null | undefined> | ChartPoint[];
    label: string;
    backgroundColor: ChartColor;
    xAxisID?: string;
    yAxisID?: string;
    showLine?: boolean;
    fill?: LineChartFill | boolean | string;
    borderColor?: ChartColor;
    lineTension?: number;
}
interface LineChartProperties {
    scales: ChartScales;
    elements: ChartElementsOptions;
}
declare class LineChart {
    private readonly chartContext;
    private ctx;
    private dataproperties;
    private datalabels;
    private properties;
    readonly context: Chart;
    chartOptions: LineChartProperties;
    chartData: DataOptions<LineChartDataOptions[]>;
    static generate(canvas: string): Chart;
    private constructor();
    private draw;
}
export { LineChart };
