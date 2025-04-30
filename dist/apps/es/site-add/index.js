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
    viewBox: '0 0 24 24',
    width: 24,
    height: 24,
};
const content = [
    {
        elem: 'path',
        attrs: {
            d: 'M20.2,2.2H3.8c-0.8,0-1.5,0.7-1.5,1.5v16.5c0,0.8,0.7,1.5,1.5,1.5h7.5v-1.5H3.8v-1.5h7.5v-1.5H3.8V9.8h16.5v1.5h1.5V3.8C21.8,2.9,21.1,2.2,20.2,2.2z M20.2,5.6v2.7H3.8V3.8h16.5V5.6z',
            fill: 'currentColor',
            stroke: 'none',
            strokeLinejoin: 'round',
            strokeMiterlimit: 10,
        },
    },
    {
        elem: 'path',
        attrs: {
            d1: 'M3.8,8.2h16.5V5.6V3.8H3.8V8.2z M14.2,5.2h2.1h2.4v1.5h-4.5V5.2z M5.2,5.2h1.5V6v0.8H5.2V5.2z',
            fill: 'currentColor',
            stroke: 'none',
            strokeLinejoin: 'round',
            strokeMiterlimit: 10,
        },
    },
    {
        elem: 'polygon',
        attrs: {
            points: '18,13.5 16.5,13.5 16.5,16.5 13.5,16.5 13.5,18 16.5,18 16.5,21 18,21 18,18 21,18 21,16.5 18,16.5',
            fill: 'currentColor',
            stroke: 'none',
        },
    },
    {
        elem: 'polygon',
        attrs: {
            points: '18.8,5.2 16.3,5.2 14.2,5.2 14.2,6.8 18.8,6.8',
            fill: 'currentColor',
            stroke: 'none',
        },
    },
    {
        elem: 'polygon',
        attrs: {
            points: '6.8,6 6.8,5.2 5.2,5.2 5.2,6.8 6.8,6.8',
            fill: 'currentColor',
            stroke: 'none',
        },
    },
];
export const ICON_NAME = 'icon-site-add';
let WebComponentIcon = class WebComponentIcon extends BaseIcon {
    render() {
        return html `${createSvgIcon(content, attrs)}`;
    }
};
WebComponentIcon = __decorate([
    customElement(ICON_NAME)
], WebComponentIcon);
export { WebComponentIcon };
