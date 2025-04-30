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
            d: `M8.25 12.75C9.07843 12.75 9.75 13.4216 9.75 14.25V15.75C9.75 16.5784 9.07843 17.25 8.25 17.25H6.75C5.92157 17.25 5.25 16.5784 5.25 15.75V14.25C5.25 13.4216 5.92157 12.75 6.75
        12.75H8.25ZM8.25 14.25H6.75V15.75H8.25V14.25Z`,
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
            d: 'M18.75 14.25V15.75H11.25V14.25H18.75Z',
            fill: 'currentColor',
            stroke: 'none',
            strokeLinejoin: 'round',
            strokeMiterlimit: 10,
        },
    },
    {
        elem: 'path',
        attrs: {
            d: `M8.25 6.75C9.07843 6.75 9.75 7.42157 9.75 8.25V9.75C9.75 10.5784 9.07843 11.25 8.25 11.25H6.75C5.92157 11.25 5.25 10.5784 5.25 9.75V8.25C5.25 7.42157 5.92157 6.75 6.75 6.75H8.25ZM8.25
        8.25H6.75V9.75H8.25V8.25Z`,
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
            d: 'M18.75 8.25V9.75H11.25V8.25H18.75Z',
            fill: 'currentColor',
            stroke: 'none',
            strokeLinejoin: 'round',
            strokeMiterlimit: 10,
        },
    },
    {
        elem: 'path',
        attrs: {
            d: `M20.25 2.25C21.0784 2.25 21.75 2.92157 21.75 3.75V20.25C21.75 21.0784 21.0784 21.75 20.25 21.75H3.75C2.92157 21.75 2.25 21.0784 2.25 20.25V3.75C2.25 2.92157 2.92157 2.25 3.75
        2.25H20.25ZM20.25 3.75H3.75V20.25H20.25V3.75Z`,
            fill: 'currentColor',
            stroke: 'none',
            strokeLinejoin: 'round',
            strokeMiterlimit: 10,
            fillRule: 'evenodd',
            clipRule: 'evenodd',
        },
    },
];
export const ICON_NAME = 'icon-page-elements-list';
let WebComponentIcon = class WebComponentIcon extends BaseIcon {
    render() {
        return html `${createSvgIcon(content, attrs)}`;
    }
};
WebComponentIcon = __decorate([
    customElement(ICON_NAME)
], WebComponentIcon);
export { WebComponentIcon };
