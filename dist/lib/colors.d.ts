interface ColorScheme {
    accent: string;
    secondary: string;
    primary: string;
}
declare class Colors {
    readonly names: string[];
    readonly availableVariants: string[];
    readonly red: ColorScheme;
    readonly blue: ColorScheme;
    readonly green: ColorScheme;
    readonly yellow: ColorScheme;
    readonly pink: ColorScheme;
    readonly orange: ColorScheme;
    readonly purple: ColorScheme;
    private readonly blueGrey;
    readonly brown: ColorScheme;
    readonly amber: ColorScheme;
    readonly defaults: ColorScheme;
    readonly lime: ColorScheme;
    readonly teal: ColorScheme;
}
declare class ColorGenerator {
    private readonly schemeLock;
    readonly scheme: Array<string>;
    constructor(data: Array<any>);
    private isAlreadyAdded;
}
export { Colors, ColorGenerator, ColorScheme };
