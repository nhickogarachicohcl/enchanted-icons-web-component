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
import { createSvgIcon, canDefine } from '../../../utils';
import { BaseIcon } from '../../../utils/base-icon';
const attrs = {
    "xmlns": "http://www.w3.org/2000/svg",
    "viewBox": "0 0 24 24",
    "width": 24,
    "height": 24
};
const content = [
    {
        "elem": "path",
        "attrs": {
            "d": "M21.75 13.5V15H2.25V13.5H21.75ZM13.5 18V19.5H2.25V18H13.5ZM6.75 4.5V6H5.25V10.5H3.75V6H2.25V4.5H6.75Z",
            "fill": "currentColor",
            "stroke": "none",
            "strokeLinejoin": "round",
            "strokeMiterlimit": "10"
        }
    }
];
export const ICON_NAME = 'icon-page-elements-short-text';
export class WebComponentIcon extends BaseIcon {
    render() {
        return html `${createSvgIcon(content, attrs)}`;
    }
}
if (canDefine && !customElements.get(ICON_NAME)) {
    customElements.define(ICON_NAME, WebComponentIcon);
}
