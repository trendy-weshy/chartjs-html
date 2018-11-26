import {
    Chart,
    ChartAnimationOptions,
    ChartColor,
    ChartLegendOptions,
    ChartPoint,
    ChartTitleOptions,
    ChartTooltipOptions
} from 'chart.js';
import { ColorGenerator } from './colors';
import {exec, ChartHTMLAttributes, DataOptions, HTMLContext} from './type';

interface PieChartDataOptions {
    backgroundColor:ChartColor[];
    borderWidth?:number | number[];
    borderColor?:ChartColor | ChartColor[];
    hoverBackgroundColor?:string | string[];
    hoverBorderColor?:string | string[];
    hoverBorderWidth?:number | number[];
}

interface PieChartOptions {
    circumference?:number;
    rotation?:number;
    animation?:ChartAnimationOptions;
    cutoutPercentage?:number;
    title?:ChartTitleOptions;
    legend?:ChartLegendOptions;
    tooltips?:ChartTooltipOptions;
}

class PieChart {

    private ctx:Chart;

    private dataset:Array<number | null | undefined> | ChartPoint[];
    private datalabels:Array<string>;
    private dataoptions:PieChartDataOptions;

    private properties:PieChartOptions;

    get context(): Chart {
        return this.ctx;
    }

    set chartOptions(options:PieChartOptions) {
        this.properties = options;
    }

    set chartDataProps(opts:DataOptions<Array<number | null | undefined> | ChartPoint[], PieChartDataOptions>) {
        this.dataset = opts.data;
        this.datalabels = opts.labels;

        if (opts.options) this.dataoptions = opts.options;
    }

    static generate(canvas:string):Chart {
        const ctx = document.querySelector(canvas);

        const chart = new PieChart(ctx as HTMLContext);

        let dataAttr;
        let labelAttr;
        let dataOptionsAttr;
        let chartPropertiesAttr;

        try {
            dataAttr = exec(ctx.getAttribute(ChartHTMLAttributes.data)) as Array<number | null | undefined> | ChartPoint[];
            labelAttr = exec(ctx.getAttribute(ChartHTMLAttributes.labels)) as Array<string>;
        } catch (e) {
            console.log('Please ensure to prodive the following in your HTML Canvas Element');
            console.log('aria-chartjs-data', 'aria-chartjs-labels');
            throw e;
        }

        // set core pie chart properties
        chart.chartDataProps = {
            data: dataAttr,
            labels: labelAttr,
        };

        try {
            dataOptionsAttr = exec(ctx.getAttribute(ChartHTMLAttributes.dataOptions)) as PieChartDataOptions;
            chart.chartDataProps.options = dataOptionsAttr;
        } catch (e) {
            console.log('no chart data options provided using aria-chartjs-data-options');
        }

        try {
            chartPropertiesAttr = exec(ctx.getAttribute(ChartHTMLAttributes.options)) as PieChartOptions;
            chart.chartOptions = chartPropertiesAttr;
        } catch (e) {
            console.log('no chart data options provided using aria-chartjs-properties');
        }

        // draw chart
        chart.draw();

        return chart.ctx;
    }

    private constructor(private readonly chartContext: HTMLContext) { }

    private draw() {
        this.ctx = new Chart(this.chartContext, {
            type: 'pie',
            data: {
              labels: this.datalabels,
              datasets: [
                {
                  data: this.dataset,
                  ...this.dataoptions,

                  // dynamic color generation //
                  backgroundColor: this.dataoptions && this.dataoptions.backgroundColor ?
                    this.dataoptions.backgroundColor : new ColorGenerator(this.dataset).scheme,
                },
              ],
            },
            options: {...this.properties},
        });
    }

}

export {PieChart, DataOptions};
