import { ChartAnimationOptions, ChartColor, ChartLegendOptions, ChartPoint, ChartTitleOptions, ChartTooltipOptions } from 'chart.js';
import { DataOptions } from './type';
interface PieChartDataOptions {
    backgroundColor: ChartColor[];
    borderWidth?: number | number[];
    borderColor?: ChartColor | ChartColor[];
    hoverBackgroundColor?: string | string[];
    hoverBorderColor?: string | string[];
    hoverBorderWidth?: number | number[];
}
interface PieChartOptions {
    circumference?: number;
    rotation?: number;
    animation?: ChartAnimationOptions;
    cutoutPercentage?: number;
    title?: ChartTitleOptions;
    legend?: ChartLegendOptions;
    tooltips?: ChartTooltipOptions;
}
declare class PieChart {
    private readonly chartContext;
    private ctx;
    private dataset;
    private datalabels;
    private dataoptions;
    private properties;
    readonly context: Chart;
    chartOptions: PieChartOptions;
    chartDataProps: DataOptions<Array<number | null | undefined> | ChartPoint[], PieChartDataOptions>;
    static generate(canvas: string): Chart;
    private constructor();
    private draw;
}
export { PieChart, DataOptions };
