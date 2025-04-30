export interface IIconContent {
    elem: string;
    attrs: {
        [key: string]: string | number;
    };
}
export interface IIconAttrs {
    xmlns: string;
    viewBox: string;
    width: number;
    height: number;
}
declare const createSvgIcon: (content: IIconContent[], attrs: IIconAttrs) => SVGSVGElement;
export { createSvgIcon, };
