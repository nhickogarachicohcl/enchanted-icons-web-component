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
            d: 'M22 6H4V8H22V6Z',
            fill: 'currentColor',
            stroke: 'none',
            strokeLinejoin: 'round',
            strokeMiterlimit: 10,
        },
    },
    {
        elem: 'path',
        attrs: {
            d: 'M22 12H4V14H22V12Z',
            fill: 'currentColor',
            stroke: 'none',
            strokeLinejoin: 'round',
            strokeMiterlimit: 10,
        },
    },
    {
        elem: 'path',
        attrs: {
            d: 'M18 18H4V20H18V18Z',
            fill: 'currentColor',
            stroke: 'none',
            strokeLinejoin: 'round',
            strokeMiterlimit: 10,
        },
    },
    {
        elem: 'path',
        attrs: {
            d: 'M14 24H4V26H14V24Z',
            fill: 'currentColor',
            stroke: 'none',
            strokeLinejoin: 'round',
            strokeMiterlimit: 10,
        },
    },
    {
        elem: 'path',
        attrs: {
            d: `M26.71 16.2958L29.71 19.2958C29.8037 19.3888 29.8781 19.4994 29.9289 19.6212C29.9797 19.7431 30.0058 19.8738 30.0058 20.0058C30.0058 20.1378 29.9797 20.2685 29.9289 20.3904C29.8781 20.5122
         29.8037 20.6228 29.71 20.7158L20.41 30.0058H16V25.5958L25.29 16.2958C25.383 16.2021 25.4936 16.1277 25.6154 16.0769C25.7373 16.0261 25.868 16 26 16C26.132 16 26.2627 16.0261 26.3846
         16.0769C26.5064 16.1277 26.617 16.2021 26.71 16.2958ZM18 28.0058H19.59L24.59 23.0058L23 21.4158L18 26.4158V28.0058ZM24.41 20.0058L26 21.5958L27.59 20.0058L26 18.4158L24.41 20.0058Z`,
            fill: 'currentColor',
            stroke: 'none',
            strokeLinejoin: 'round',
            strokeMiterlimit: 10,
        },
    },
];
export const ICON_NAME = 'icon-list-edit';
let WebComponentIcon = class WebComponentIcon extends BaseIcon {
    render() {
        return html `${createSvgIcon(content, attrs)}`;
    }
};
WebComponentIcon = __decorate([
    customElement(ICON_NAME)
], WebComponentIcon);
export { WebComponentIcon };
