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
    width: 32,
    height: 32,
};
const content = [
    {
        elem: 'path',
        attrs: {
            d: 'M21.87,7.84l-1.74-1L16,14h0a2,2,0,1,0,2,2,2,2,0,0,0-.27-1Z',
            fill: 'currentColor',
            stroke: 'none',
            strokeLinejoin: 'round',
            strokeMiterlimit: 10,
        },
    },
    {
        elem: 'path',
        attrs: {
            d: `M16,2A14,14,0,1,0,30,16,14,14,0,0,0,16,2Zm0,2a12,12,0,0,1,11.17,7.65,25.69,25.69,0,0,0-3.69-1.5l-1,1.77a22.7,22.7,0,0,1,5.41,2.39,11.05,11.05,0,0,1,0,3.38A22.92,22.92,0,0,1,16,21,22.92
        ,22.92,0,0,1,4.13,17.69a11.05,11.05,0,0,1,0-3.38A22.8,22.8,0,0,1,15,11V9a25,25,0,0,0-10.17,2.6A12,12,0,0,1,16,4Zm0,24A12,12,0,0,1,4.83,20.35,24.88,24.88,0,0,0,16,23a24.88,24.88,0,0,0
        ,11.17-2.65A12,12,0,0,1,16,28Z`,
            fill: 'currentColor',
            stroke: 'none',
            strokeLinejoin: 'round',
            strokeMiterlimit: 10,
        },
    },
];
export const ICON_NAME = 'icon-research-bloch-sphere';
let WebComponentIcon = class WebComponentIcon extends BaseIcon {
    render() {
        return html `${createSvgIcon(content, attrs)}`;
    }
};
WebComponentIcon = __decorate([
    customElement(ICON_NAME)
], WebComponentIcon);
export { WebComponentIcon };
