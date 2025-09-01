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
            "d": "M3.5 3.50024H9.91177V9.91201H3.5V3.50024ZM2 3.50024C2 2.67181 2.67158 2.00024 3.5 2.00024H9.91177C10.7402 2.00024 11.4118 2.67181 11.4118 3.50024V9.91201C11.4118 10.7404 10.7402         11.412 9.91177 11.412H3.5C2.67158 11.412 2 10.7404 2 9.91201V3.50024ZM14.0883 3.50024H20.5V9.91201H14.0883V3.50024ZM12.5883 3.50024C12.5883 2.67181 13.2598 2.00024 14.0883         2.00024H20.5C21.3284 2.00024 22 2.67181 22 3.50024V9.91201C22 10.7404 21.3284 11.412 20.5 11.412H14.0883C13.2598 11.412 12.5883 10.7404 12.5883 9.91201V3.50024ZM20.5         14.0886H14.0883V20.5003H20.5V14.0886ZM14.0883 12.5886C13.2598 12.5886 12.5883 13.2602 12.5883 14.0886V20.5003C12.5883 21.3288 13.2598 22.0003 14.0883 22.0003H20.5C21.3284 22.0003         22 21.3288 22 20.5003V14.0886C22 13.2602 21.3284 12.5886 20.5 12.5886H14.0883ZM3.5 14.0886H9.91177V20.5003H3.5V14.0886ZM2 14.0886C2 13.2602 2.67158 12.5886 3.5 12.5886H9.91177C10.7402         12.5886 11.4118 13.2602 11.4118 14.0886V20.5003C11.4118 21.3288 10.7402 22.0003 9.91177 22.0003H3.5C2.67158 22.0003 2 21.3288 2 20.5003V14.0886Z",
            "fill": "currentColor",
            "stroke": "none",
            "strokeLinejoin": "round",
            "strokeMiterlimit": "10",
            "fillRule": "evenodd",
            "clipRule": "evenodd"
        }
    }
];
export const ICON_NAME = 'icon-workspace-alt';
export class WebComponentIcon extends BaseIcon {
    render() {
        return html `${createSvgIcon(content, attrs)}`;
    }
}
if (canDefine && !customElements.get(ICON_NAME)) {
    customElements.define(ICON_NAME, WebComponentIcon);
}
