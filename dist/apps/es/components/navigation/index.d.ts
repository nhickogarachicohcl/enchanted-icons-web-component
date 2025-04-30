import { BaseIcon } from '../../../../utils/base-icon';
export declare const ICON_NAME = "icon-navigation";
export declare class WebComponentIcon extends BaseIcon {
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        [ICON_NAME]: WebComponentIcon;
    }
}
