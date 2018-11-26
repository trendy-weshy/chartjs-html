import {BarChart} from './lib/bar.chart';
import {LineChart} from './lib/line.chart';
import {PieChart} from './lib/pie.chart';

/**
 * Expose Chart HTML to the global browser window
 */
( window as any ).ChartHTML = {
    Bar: BarChart,
    Line: LineChart,
    Pie: PieChart,
};

/**
 * For support of ES6 modules
 */
export {
    BarChart,
    LineChart,
    PieChart,
};
