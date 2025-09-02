/* ======================================================================== *
 * Copyright 2025 HCL America Inc.                                          *
 * Licensed under the Apache License, Version 2.0 (the "License");          *
 * you may not use this file except in compliance with the License.         *
 * You may obtain a copy of the License at                                  *
 *                                                                          *
 * http://www.apache.org/licenses/LICENSE-2.0                               *
 *                                                                          *
 * Unless required by applicable law or agreed to in writing, software      *
 * distributed under the License is distributed on an "AS IS" BASIS,        *
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. *
 * See the License for the specific language governing permissions and      *
 * limitations under the License.                                           *
 * ======================================================================== */
import { html } from 'lit';
import { createSvgIcon, canDefine } from '../../../../../utils';
import { BaseIcon } from '../../../../../utils/base-icon';
const attrs = {
    "xmlns": "http://www.w3.org/2000/svg",
    "viewBox": "0 0 32 32",
    "width": 32,
    "height": 32
};
const content = [
    {
        "elem": "path",
        "attrs": {
            "d": "M14,23 L12,23 L12,9 L18,9 C19.1045695,9 20,9.8954305 20,11 L20,16 C20,17.1045695 19.1045695,18 18,18 L14,18 L14,23 Z M14,16 L18,16 L18,11 L14,11 L14,16 Z",
            "fill": "currentColor",
            "stroke": "none",
            "strokeLinejoin": "round",
            "strokeMiterlimit": "10"
        }
    }
];
export const ICON_NAME = 'icon-paragraph';
export class WebComponentIcon extends BaseIcon {
    render() {
        return html `${createSvgIcon(content, attrs)}`;
    }
}
if (canDefine && !customElements.get(ICON_NAME)) {
    customElements.define(ICON_NAME, WebComponentIcon);
}
