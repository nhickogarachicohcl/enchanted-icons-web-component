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
            "d": "M12 3L6 9H18L12 3Z",
            "fill": "currentColor",
            "stroke": "none",
            "strokeLinejoin": "round",
            "strokeMiterlimit": "10"
        }
    },
    {
        "elem": "path",
        "attrs": {
            "d": "M12 21L18 15H6L12 21Z",
            "fill": "currentColor",
            "stroke": "none",
            "strokeLinejoin": "round",
            "strokeMiterlimit": "10"
        }
    }
];
export const ICON_NAME = 'icon-caret-sort-alt';
export class WebComponentIcon extends BaseIcon {
    render() {
        return html `${createSvgIcon(content, attrs)}`;
    }
}
if (canDefine && !customElements.get(ICON_NAME)) {
    customElements.define(ICON_NAME, WebComponentIcon);
}
