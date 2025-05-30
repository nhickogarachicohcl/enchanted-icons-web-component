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
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 32 32',
    width: 24,
    height: 24,
};
const content = [
    {
        elem: 'path',
        attrs: {
            // eslint-why - because the svg path is to long
            // eslint-disable-next-line max-len
            d: 'M5,20H3V18H5Zm0,2v3H8v2H5a2,2,0,0,1-2-2V22ZM21,5H19V3h2Zm2,0V3h2a2,2,0,0,1,2,2V7H25V5ZM5,16H3V13H5ZM17,5H14V3h3Zm8,6V9h2v2Zm0,2h2v2H25V13ZM5,11H3V9H5Zm7,14v2H10V25Zm2,0h2v2H14ZM12,5H10V3h2ZM5,7H3V5A2,2,0,0,1,5,3H8V5H5ZM25,25v4H23V25H19V23h4V19h2v4h4v2Z',
            fill: 'currentColor',
        },
    },
];
export const ICON_NAME = 'icon-screenshot';
let WebComponentIcon = class WebComponentIcon extends BaseIcon {
    render() {
        return html `${createSvgIcon(content, attrs)}`;
    }
};
WebComponentIcon = __decorate([
    customElement(ICON_NAME)
], WebComponentIcon);
export { WebComponentIcon };
