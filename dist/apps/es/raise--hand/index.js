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
            d: `M18.747 4.49965C18.4515 4.49965 18.1755 4.57015 17.913 4.66915C17.6565 3.71215 16.8 3.00265 15.7755 3.00265C15.4785 3.00265 15.198 3.06415 14.9385 3.16765C14.6805 2.20765 13.8105
        1.49365 12.771 1.49365C11.73 1.49365 10.86 2.20765 10.602 3.16765C10.344 3.06415 10.062 3.00265 9.76651 3.00265C8.52451 3.00265 7.51351 4.01365 7.51351 5.25565L7.51201 13.6827L6.13201
        12.8547C5.08951 12.2307 3.74551 12.5352 3.07201 13.5447C2.47351 14.4447 2.59351 15.6507 3.35551 16.4127L8.09101 21.1497C8.94901 22.0077 10.137 22.4997 11.3475 22.4997H15.756C18.648 22.4997
        21 20.1477 21 17.2557V6.68665C21 5.46115 20.01 4.49965 18.747 4.49965ZM19.5 17.2557C19.5 19.3197 17.82 20.9997 15.756 20.9997H11.3475C10.5315 20.9997 9.72901 20.6667 9.15151 20.0892L4.41601
        15.3507C4.15651 15.0927 4.11751 14.6817 4.32001 14.3757C4.54951 14.0337 5.00701 13.9272 5.36101 14.1417L8.98801 16.3167L9.01351 5.25565C9.01351 4.84165 9.35101 4.50265 9.76651 4.50265C10.1805
        4.50265 10.518 4.84165 10.518 5.25565V13.4997H12.018V3.74665C12.018 3.33265 12.3555 2.99365 12.771 2.99365C13.185 2.99365 13.524 3.33265 13.524 3.74665V13.4997H15.024V5.25565C15.024 4.84165
        15.36 4.50265 15.7755 4.50265C16.182 4.50265 16.5 4.83415 16.5 5.25565V13.4997H18V6.42415L18.0435 6.42865C18.273 5.86615 19.5 5.84665 19.5 6.68665V17.2557Z`,
            fill: 'currentColor',
            stroke: 'none',
            strokeLinejoin: 'round',
            strokeMiterlimit: 10,
            fillRule: 'evenodd',
            clipRule: 'evenodd',
        },
    },
];
export const ICON_NAME = 'icon-raise-hand';
let WebComponentIcon = class WebComponentIcon extends BaseIcon {
    render() {
        return html `${createSvgIcon(content, attrs)}`;
    }
};
WebComponentIcon = __decorate([
    customElement(ICON_NAME)
], WebComponentIcon);
export { WebComponentIcon };
