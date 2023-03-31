import 'styled-components';
interface IBackground {
    [key: string]: string;
}
interface IFont {
    [key: string]: string;
}

declare module 'styled-components' {
    export interface DefaultTheme {
        background: IBackground;
        font: IFont;
    }
}
