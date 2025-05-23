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
            d: `M18 17.25C18.4142 17.25 18.75 17.5858 18.75 18C18.75 18.3682 18.4847 18.6744 18.1348 18.7379L18 18.75H12.75C12.3358 18.75 12 18.4142 12 18C12 17.6318 12.2653 17.3256 12.6152 17.2621L12.75
        17.25H18Z`,
            fill: 'currentColor',
            stroke: 'none',
            strokeLinejoin: 'round',
            strokeMiterlimit: 10,
        },
    },
    {
        elem: 'path',
        attrs: {
            d: `M17.25 11.25C18.0784 11.25 18.75 11.9216 18.75 12.75V14.25C18.75 15.0784 18.0784 15.75 17.25 15.75H6.75C5.92157 15.75 5.25 15.0784 5.25 14.25V12.75C5.25 11.9216 5.92157 11.25 6.75
        11.25H17.25ZM17.25 12.75H6.75V14.25H17.25V12.75Z`,
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
            d: `M17.25 5.25C18.0784 5.25 18.75 5.92157 18.75 6.75V8.25C18.75 9.07843 18.0784 9.75 17.25 9.75H6.75C5.92157 9.75 5.25 9.07843 5.25 8.25V6.75C5.25 5.92157 5.92157 5.25 6.75 5.25H17.25ZM17.25
        6.75H6.75V8.25H17.25V6.75Z`,
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
export const ICON_NAME = 'icon-page-elements-form';
let WebComponentIcon = class WebComponentIcon extends BaseIcon {
    render() {
        return html `${createSvgIcon(content, attrs)}`;
    }
};
WebComponentIcon = __decorate([
    customElement(ICON_NAME)
], WebComponentIcon);
export { WebComponentIcon };
