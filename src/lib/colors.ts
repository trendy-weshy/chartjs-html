import {random} from 'lodash';

interface ColorScheme {
    accent:string;
    secondary:string;
    primary:string;
}

class Colors {

    get names() {
      return ['red', 'blue', 'green', 'yellow', 'pink', 'orange', 'purple', 'defaults', 'blueGrey', 'brown', 'lime', 'teal'];
    }

    get availableVariants() {
      return ['accent', 'secondary', 'primary'];
    }

    readonly red:ColorScheme = {
        primary: '#c62828',
        secondary: '#e57373',
        accent: '#7f0000',
    };

    readonly blue:ColorScheme = {
        primary: '#01579b',
        secondary: '#6ff9ff',
        accent: '#002171',
    };

    readonly green:ColorScheme = {
        primary: '#00c853',
        secondary: '#69f0ae',
        accent: '#003300',
    };

    readonly yellow:ColorScheme = {
        primary: '#ffd600',
        secondary: '#ffff52',
        accent: '#f9a825',
    };

    readonly pink:ColorScheme = {
        primary: '#c2185b',
        secondary: '#f48fb1',
        accent: '#560027',
    };

    readonly orange:ColorScheme = {
        primary: '#f57c00',
        secondary: '#ff7043',
        accent: '#dd2c00',
    };

    readonly purple:ColorScheme = {
        primary: '#7b1fa2',
        secondary: '#b39ddb',
        accent: '#311b92',
    };

    private readonly blueGrey:ColorScheme = {
        accent: '#000a12',
        primary: '#4b636e',
        secondary: '#b0bec5',
    };

    readonly brown:ColorScheme = {
        primary: '#5d4037',
        accent: '#1b0000',
        secondary: '#be9c91',
    };

    readonly amber:ColorScheme = {
        primary: '#ffab00',
        accent: '#ff6f00',
        secondary: '#ffcc80',
    };

    readonly defaults:ColorScheme = {
        primary: '#00000',
        accent: '#757575',
        secondary: '#212121',
    };

    readonly lime:ColorScheme = {
        primary: '#9e9d24',
        secondary: '#b4a647',
        accent: '#524c00',
    };

    readonly teal:ColorScheme = {
        primary: '#00796b',
        secondary: '#1de9b6',
        accent: '#00251a',
    };

}

class ColorGenerator {

    private readonly schemeLock:Array<string> = [];

    readonly scheme:Array<string> = [];

    /**
     * generates a color scheme
     */
    constructor(data: Array<any>) {
        const colors = new Colors();
        let releaseLockAfter = 20;

        while (this.scheme.length !== data.length) {
            const color = colors.names[random(colors.names.length - 1)];
            const variant = colors.availableVariants[random(colors.availableVariants.length - 1)];

            if (!this.isAlreadyAdded(color, variant)) {
                this.scheme.push(colors[color][
                    colors.availableVariants[random(colors.availableVariants.length - 1)]
                ]);
            } else if (releaseLockAfter === 0) {
                this.scheme.push(colors[color][
                    colors.availableVariants[random(colors.availableVariants.length - 1)]
                ]);
            } else {
                releaseLockAfter--;
            }
        }
    }

    private isAlreadyAdded(color:string, variant:string) {
        const schemeKey = this.schemeLock.filter(name => name === `${color}:${variant}`);
        if (schemeKey.length > 0) return true;
        this.schemeLock.push(`${color}:${variant}`);

        return false;
    }
}

export {Colors, ColorGenerator, ColorScheme};
