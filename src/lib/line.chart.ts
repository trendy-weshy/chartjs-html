import {Chart, ChartColor, ChartData, ChartElementsOptions, ChartPoint, ChartScales} from 'chart.js';
import {DataOptions} from './pie.chart';
import {exec, ChartHTMLAttributes, HTMLContext} from './type';

enum LineChartFill {
    ORIGIN= 'origin',
    START= 'start',
    END= 'end',
}

interface LineChartDataOptions {
    data:Array<number | null | undefined> | ChartPoint[];
    label:string;
    backgroundColor:ChartColor;
    xAxisID?:string;
    yAxisID?:string;
    showLine?:boolean;
    fill?:LineChartFill | boolean | string;
    borderColor?:ChartColor;
    lineTension?:number;
}

interface LineChartProperties {
    scales:ChartScales;
    elements:ChartElementsOptions;
}

class LineChart {

    private ctx:Chart;

    private dataproperties:LineChartDataOptions[];
    private datalabels:Array<string>;
    private properties:LineChartProperties;

    get context(): Chart {
        return this.ctx;
    }

    set chartOptions(options:LineChartProperties) {
        this.properties = options;
    }

    set chartData(opts:DataOptions<LineChartDataOptions[]>) {
        this.dataproperties = opts.data;
        this.datalabels = opts.labels;
    }

    static generate(canvas:string):Chart {
        const ctx = document.querySelector(canvas) as HTMLElement;

        const chart = new LineChart(ctx as HTMLContext);

        let dataAttr;
        let dataLabels;
        let chartPropertiesAttr;

        try {
            dataAttr = exec(ctx.getAttribute(ChartHTMLAttributes.data)) as LineChartDataOptions[];
            dataLabels = exec(ctx.getAttribute(ChartHTMLAttributes.labels));
        } catch (e) {
            console.log('Please ensure to prodive the following in your HTML Canvas Element', 'aria-chartjs-data');
            throw e;
        }

        // set core pie chart properties
        chart.chartData = {data: dataAttr, labels: dataLabels};

        try {
            chartPropertiesAttr = exec(ctx.getAttribute(ChartHTMLAttributes.options)) as LineChartProperties;
            chart.chartOptions = chartPropertiesAttr;
        } catch (e) {
            console.log('no chart data options provided using aria-chartjs-properties');
        }

        // draw chart //
        chart.draw();

        return chart.ctx;
    }

    private constructor(private readonly chartContext: HTMLContext) { }

    private draw() {
        this.ctx = new Chart(this.chartContext, {
            type: 'line',
            data: { labels: this.datalabels, datasets: this.dataproperties },
            options: {...this.properties},
        });
    }
}

export {LineChart};
