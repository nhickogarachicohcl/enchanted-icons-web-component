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
            "d": "M21 20.2499C21 21.0784 20.3284 21.7499 19.5 21.7499H15C14.1716 21.7499 13.5 21.0784 13.5 20.2499V3.74994C13.5 2.92151 14.1716 2.24994 15 2.24994H19.5C20.3284 2.24994 21 2.92151 21         3.74994V20.2499ZM19.5 20.2499V3.74994H15V20.2499H19.5Z",
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
            "d": "M10.5 20.2499C10.5 21.0784 9.82843 21.7499 9 21.7499H4.5C3.67157 21.7499 3 21.0784 3 20.2499V3.74994C3 2.92151 3.67157 2.24994 4.5 2.24994H9C9.82843 2.24994 10.5 2.92151 10.5         3.74994V20.2499ZM9 20.2499V3.74994H4.5V20.2499H9Z",
            "fill": "currentColor",
            "stroke": "none",
            "strokeLinejoin": "round",
            "strokeMiterlimit": "10",
            "fillRule": "evenodd",
            "clipRule": "evenodd"
        }
    }
];
export const ICON_NAME = 'icon-page-elements-layout-columns';
export class WebComponentIcon extends BaseIcon {
    render() {
        return html `${createSvgIcon(content, attrs)}`;
    }
}
if (canDefine && !customElements.get(ICON_NAME)) {
    customElements.define(ICON_NAME, WebComponentIcon);
}
