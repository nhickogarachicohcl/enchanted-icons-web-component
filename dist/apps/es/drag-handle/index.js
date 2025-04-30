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
            d: `M 2.5 26.300781 C 1.101562 26.300781 0 27.300781 0 28.699219 C 0 30.097656 1.300781 31.097656 2.5 31.097656 C 3.898438 31.097656 5 30.097656 5 28.699219 C 5 27.300781 3.898438 26.300781 2.5
         26.300781 Z M 16.101562 26.300781 C 14.699219 26.300781 13.601562 27.300781 13.601562 28.699219 C 13.601562 30.097656 14.601562 31.097656 16.101562 31.097656 C 17.5 31.097656 18.601562
         30.097656 18.601562 28.699219 C 18.601562 27.300781 17.5 26.300781 16.101562 26.300781 Z M 29.398438 26.300781 C 28 26.300781 26.898438 27.300781 26.898438 28.699219 C 26.898438 30.097656
         28 31.097656 29.5 31.097656 C 30.898438 31.097656 32 30.097656 32 28.699219 C 32 27.300781 30.898438 26.300781 29.398438 26.300781 Z M 29.398438 13.699219 C 28 13.699219 26.898438
         14.699219 26.898438 16.101562 C 26.898438 17.300781 28 18.5 29.398438 18.5 C 30.800781 18.5 31.898438 17.5 31.898438 16.101562 C 31.898438 14.699219 30.800781 13.699219 29.398438
         13.699219 Z M 26.898438 3.300781 C 26.898438 1.898438 28 0.898438 29.398438 0.898438 C 30.800781 0.898438 31.898438 1.898438 31.898438 3.300781 C 31.898438 4.699219 30.800781 5.699219
         29.398438 5.699219 C 28 5.699219 26.898438 4.699219 26.898438 3.300781 Z M 13.601562 16.101562 C 13.601562 14.699219 14.699219 13.699219 16.101562 13.699219 C 17.5 13.699219 18.601562
         14.699219 18.601562 16.101562 C 18.601562 17.5 17.5 18.5 16.101562 18.5 C 14.601562 18.5 13.601562 17.300781 13.601562 16.101562 Z M 13.601562 16.101562 `,
            fill: 'currentColor',
            stroke: 'none',
            strokeLinejoin: 'round',
            strokeMiterlimit: 10,
        },
    },
];
export const ICON_NAME = 'icon-drag-handle';
let WebComponentIcon = class WebComponentIcon extends BaseIcon {
    render() {
        return html `${createSvgIcon(content, attrs)}`;
    }
};
WebComponentIcon = __decorate([
    customElement(ICON_NAME)
], WebComponentIcon);
export { WebComponentIcon };
