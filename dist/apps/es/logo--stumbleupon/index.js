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
    "viewBox": "0 0 32 32",
    "width": 32,
    "height": 32
};
const content = [
    {
        "elem": "path",
        "attrs": {
            "d": "M16,2A14,14,0,1,0,30,16,14,14,0,0,0,16,2Zm-.09,10.45a.84.84,0,0,0-.84.84v5.14a3.55,3.55,0,0,1-7.1,0V16.09h2.71v2.24a.84.84,0,0,0,1.68,0v-5a3.55,3.55,0,0,1,7.09,0v1l-1.58.51-1.12-.51v-1A.85.85        ,0,0,0,15.91,12.45Zm7.93,6a3.55,3.55,0,0,1-7.09,0V16.14l1.12.51,1.58-.51v2.29a.84.84,0,0,0,1.68,0V16.19h2.71Z",
            "fill": "currentColor",
            "stroke": "none",
            "strokeLinejoin": "round",
            "strokeMiterlimit": "10"
        }
    }
];
export const ICON_NAME = 'icon-logo-stumbleupon';
export class WebComponentIcon extends BaseIcon {
    render() {
        return html `${createSvgIcon(content, attrs)}`;
    }
}
if (canDefine && !customElements.get(ICON_NAME)) {
    customElements.define(ICON_NAME, WebComponentIcon);
}
