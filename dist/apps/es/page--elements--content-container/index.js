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
            d: `M21 12C21.8284 12 22.5 12.6716 22.5 13.5V21C22.5 21.8284 21.8284 22.5 21 22.5H13.5C12.6716 22.5 12 21.8284 12 21V13.5C12 12.6716 12.6716 12 13.5 12H21ZM21 19.5H13.5V21H21V19.5ZM21
        16.5H13.5V18H21V16.5ZM21 13.5H13.5V15H21V13.5Z`,
            fill: 'currentColor',
            stroke: 'none',
            strokeLinejoin: 'round',
            strokeMiterlimit: 10,
            fillRule: 'evenodd',
            clipRule: 'evenodd',
        },
    },
    {
        elem: 'path',
        attrs: {
            d: 'M19.5 1.5C20.3284 1.5 21 2.17157 21 3V10.5H19.5V3H3V19.5H10.5V21H3C2.17157 21 1.5 20.3284 1.5 19.5V3C1.5 2.17157 2.17157 1.5 3 1.5H19.5Z',
            fill: 'currentColor',
            stroke: 'none',
            strokeLinejoin: 'round',
            strokeMiterlimit: 10,
        },
    },
    {
        elem: 'path',
        attrs: {
            d: `M8.25 12C9.07843 12 9.75 12.6716 9.75 13.5V15.75C9.75 16.5784 9.07843 17.25 8.25 17.25H6C5.17157 17.25 4.5 16.5784 4.5 15.75V13.5C4.5 12.6716 5.17157 12 6 12H8.25ZM8.25
        13.5H6V15.75H8.25V13.5Z`,
            fill: 'currentColor',
            stroke: 'none',
            strokeLinejoin: 'round',
            strokeMiterlimit: 10,
            fillRule: 'evenodd',
            clipRule: 'evenodd',
        },
    },
    {
        elem: 'path',
        attrs: {
            d: 'M16.5 5.25C17.3284 5.25 18 5.92157 18 6.75V9C18 9.82843 17.3284 10.5 16.5 10.5H6C5.17157 10.5 4.5 9.82843 4.5 9V6.75C4.5 5.92157 5.17157 5.25 6 5.25H16.5ZM16.5 6.75H6V9H16.5V6.75Z',
            fill: 'currentColor',
            stroke: 'none',
            strokeLinejoin: 'round',
            strokeMiterlimit: 10,
            fillRule: 'evenodd',
            clipRule: 'evenodd',
        },
    },
];
export const ICON_NAME = 'icon-page-elements-content-container';
let WebComponentIcon = class WebComponentIcon extends BaseIcon {
    render() {
        return html `${createSvgIcon(content, attrs)}`;
    }
};
WebComponentIcon = __decorate([
    customElement(ICON_NAME)
], WebComponentIcon);
export { WebComponentIcon };
