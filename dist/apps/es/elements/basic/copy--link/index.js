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
import { createSvgIcon } from '../../../../../utils';
import { BaseIcon } from '../../../../../utils/base-icon';
const attrs = {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 32 32',
    width: 32,
    height: 32,
};
const content = [
    {
        elem: 'path',
        attrs: {
            d: `M11.9474,19a4.9476,4.9476,0,0,1-3.4991-8.4465l5.1053-5.1043a4.9482,4.9482,0,0,1,6.9981,6.9976l-.5523.5526-1.4158-1.4129.5577-.5579a2.95,2.95,0,0,
          0-.0039-4.1653,3.02,3.02,0,0,0-4.17,0l-5.1047,5.104a2.9474,2.9474,0,0,0,0,4.1692,3.02,3.02,0,0,0,4.17,0l1.4143,1.4145A4.9176,4.9176,0,0,1,11.9474,19Z`,
            fill: 'currentColor',
            stroke: 'none',
            strokeLinejoin: 'round',
            strokeMiterlimit: 10,
        },
    },
    {
        elem: 'path',
        attrs: {
            d: `M19.9474,17a4.9476,4.9476,0,0,1-3.4991-8.4465l.5526-.5526,1.4143,1.4146-.5526.5523a2.9476,2.9476,0,0,0,0,4.1689,3.02,3.02,0,0,0,4.17,0c.26-.26,
          4.7293-4.7293,5.1053-5.1045a2.951,2.951,0,0,0,0-4.1687,3.02,3.02,0,0,0-4.17,0L21.5536,3.449a4.9483,4.9483,0,0,1,6.9981,6.9978c-.3765.376-4.844,4.8428-5.1038,
            5.1035A4.9193,4.9193,0,0,1,19.9474,17Z`,
            fill: 'currentColor',
            stroke: 'none',
            strokeLinejoin: 'round',
            strokeMiterlimit: 10,
        },
    },
    {
        elem: 'path',
        attrs: {
            d: 'M24,30H4a2.0021,2.0021,0,0,1-2-2V8A2.0021,2.0021,0,0,1,4,6H8V8H4V28H24V18h2V28A2.0021,2.0021,0,0,1,24,30Z',
            fill: 'currentColor',
            stroke: 'none',
            strokeLinejoin: 'round',
            strokeMiterlimit: 10,
        },
    },
];
export const ICON_NAME = 'icon-copy-link';
let WebComponentIcon = class WebComponentIcon extends BaseIcon {
    render() {
        return html `${createSvgIcon(content, attrs)}`;
    }
};
WebComponentIcon = __decorate([
    customElement(ICON_NAME)
], WebComponentIcon);
export { WebComponentIcon };
