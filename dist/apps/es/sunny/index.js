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
            d: 'M16,12a4,4,0,1,1-4,4,4.0045,4.0045,0,0,1,4-4m0-2a6,6,0,1,0,6,6,6,6,0,0,0-6-6Z',
            fill: 'currentColor',
            stroke: 'none',
            strokeLinejoin: 'round',
            strokeMiterlimit: 10,
            transform: 'translate(0 .005)',
        },
    },
    {
        elem: 'path',
        attrs: {
            d: 'M6.854 5.375H8.854V10.333H6.854z',
            fill: 'currentColor',
            stroke: 'none',
            strokeLinejoin: 'round',
            strokeMiterlimit: 10,
            transform: 'rotate(-45 7.86 7.856)',
        },
    },
    {
        elem: 'path',
        attrs: {
            d: 'M2 15.005H7V17.005000000000003H2z',
            fill: 'currentColor',
            stroke: 'none',
            strokeLinejoin: 'round',
            strokeMiterlimit: 10,
        },
    },
    {
        elem: 'path',
        attrs: {
            d: 'M5.375 23.147H10.333V25.147H5.375z',
            fill: 'currentColor',
            stroke: 'none',
            strokeLinejoin: 'round',
            strokeMiterlimit: 10,
            transform: 'rotate(-45 7.86 24.149)',
        },
    },
    {
        elem: 'path',
        attrs: {
            d: 'M15 25.005H17V30.005H15z',
            fill: 'currentColor',
            stroke: 'none',
            strokeLinejoin: 'round',
            strokeMiterlimit: 10,
        },
    },
    {
        elem: 'path',
        attrs: {
            d: 'M23.147 21.668H25.147V26.625999999999998H23.147z',
            fill: 'currentColor',
            stroke: 'none',
            strokeLinejoin: 'round',
            strokeMiterlimit: 10,
            transform: 'rotate(-45 24.152 24.149)',
        },
    },
    {
        elem: 'path',
        attrs: {
            d: 'M25 15.005H30V17.005000000000003H25z',
            fill: 'currentColor',
            stroke: 'none',
            strokeLinejoin: 'round',
            strokeMiterlimit: 10,
        },
    },
    {
        elem: 'path',
        attrs: {
            d: 'M21.668 6.854H26.625999999999998V8.854H21.668z',
            fill: 'currentColor',
            stroke: 'none',
            strokeLinejoin: 'round',
            strokeMiterlimit: 10,
            transform: 'rotate(-45 24.152 7.856)',
        },
    },
    {
        elem: 'path',
        attrs: {
            d: 'M15 2.005H17V7.005H15z',
            fill: 'currentColor',
            stroke: 'none',
            strokeLinejoin: 'round',
            strokeMiterlimit: 10,
        },
    },
];
export const ICON_NAME = 'icon-sunny';
let WebComponentIcon = class WebComponentIcon extends BaseIcon {
    render() {
        return html `${createSvgIcon(content, attrs)}`;
    }
};
WebComponentIcon = __decorate([
    customElement(ICON_NAME)
], WebComponentIcon);
export { WebComponentIcon };
