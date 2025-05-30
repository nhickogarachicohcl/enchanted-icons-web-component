import { BaseIcon } from '../../utils/base-icon';
export declare const ICON_NAME = "svg-sametime";
export declare class SvgSametime extends BaseIcon {
    static styles: import("lit").CSSResult;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        [ICON_NAME]: SvgSametime;
    }
}
