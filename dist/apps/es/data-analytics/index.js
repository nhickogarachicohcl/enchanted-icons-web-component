var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { createSvgIcon } from '../../../utils';
import { BaseIcon } from '../../../utils/base-icon';
const attrs = {
    "width": 16,
    "height": 16,
    "viewBox": "0 0 16 16",
    "xmlns": "http://www.w3.org/2000/svg"
};
const content = [
    {
        "elem": "path",
        "attrs": {
            "d": "M7 5.5H6V8.5H7V5.5Z",
            "fill": "currentColor"
        }
    },
    {
        "elem": "path",
        "attrs": {
            "d": "M4.5 6.5H3.5V8.5H4.5V6.5Z",
            "fill": "currentColor"
        }
    },
    {
        "elem": "path",
        "attrs": {
            "d": "M2 3.5H1V8.5H2V3.5Z",
            "fill": "currentColor"
        }
    },
    {
        "elem": "path",
        "attrs": {
            "d": "M15 14.2929L11.2239 10.5169C12.0198 9.56275 12.5 8.33665 12.5 7C12.5 3.9673 10.0327 1.5 7 1.5C5.7987 1.5 4.65735 1.88035 3.69935 2.6001L4.29995 3.39965C5.0834 2.81105 6.0171 2.5 7 2.5C9.4813 2.5 11.5 4.51855 11.5 7C11.5 9.48145 9.4813 11.5 7 11.5C5.5713 11.5 4.25905 10.844 3.39965 9.69995L2.6001 10.3008C3.65015 11.6982 5.2539 12.5 7 12.5C8.33665 12.5 9.56275 12.0198 10.5168 11.2239L14.2929 15L15 14.2929Z",
            "fill": "currentColor"
        }
    }
];
export const ICON_NAME = 'icon-data-analytics';
let WebComponentIcon = class WebComponentIcon extends BaseIcon {
    render() {
        return html `${createSvgIcon(content, attrs)}`;
    }
};
WebComponentIcon = __decorate([
    customElement(ICON_NAME)
], WebComponentIcon);
export { WebComponentIcon };
