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
            "d": "M21 11.25C21.8284 11.25 22.5 11.9216 22.5 12.75V18.75C22.5 19.5784 21.8284 20.25 21 20.25H3C2.17157 20.25 1.5 19.5784 1.5 18.75V12.75C1.5 11.9216 2.17157 11.25 3 11.25H21ZM21         12.75H3V18.75H21V12.75Z",
            "fill": "currentColor",
            "stroke": "none",
            "strokeLinejoin": "round",
            "strokeMiterlimit": "10",
            "fillRule": "evenodd",
            "clipRule": "evenodd"
        }
    },
    {
        "elem": "path",
        "attrs": {
            "d": "M15 7.5V9H6.75V7.5H15Z",
            "fill": "currentColor",
            "stroke": "none",
            "strokeLinejoin": "round",
            "strokeMiterlimit": "10"
        }
    },
    {
        "elem": "path",
        "attrs": {
            "d": "M21 4.5V6H6.75V4.5H21Z",
            "fill": "currentColor",
            "stroke": "none",
            "strokeLinejoin": "round",
            "strokeMiterlimit": "10"
        }
    },
    {
        "elem": "path",
        "attrs": {
            "d": "M5.25 4.5V6H4.125V9H2.625V6H1.5V4.5H5.25Z",
            "fill": "currentColor",
            "stroke": "none",
            "strokeLinejoin": "round",
            "strokeMiterlimit": "10"
        }
    }
];
export const ICON_NAME = 'icon-page-elements-form-label';
export class WebComponentIcon extends BaseIcon {
    render() {
        return html `${createSvgIcon(content, attrs)}`;
    }
}
if (canDefine && !customElements.get(ICON_NAME)) {
    customElements.define(ICON_NAME, WebComponentIcon);
}
