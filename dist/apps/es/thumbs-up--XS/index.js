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
            d: `M12 3.00007C11.5761 2.9997 11.1384 2.99671 10.7316 3.1323C10.1534 3.32503 9.77513 3.81906 9.75136 4.42986L9.03362 8.7363L7.07536 12.0001H3V21.0001H16.5C19.0516 21.0001 21 19.2686
        21 17.2501L21 12C20.9977 11.1399 20.78 10.3445 20.2178 9.78224C19.6526 9.21698 18.8656 9.00007 18 9.00007H15V6.00007C15 5.13446 14.7831 4.3475 14.2178 3.78224C13.6526 3.21698 12.8656
        3.00007 12 3.00007ZM11.4991 4.51012C11.6454 4.50037 11.8072 4.50007 12 4.50007C12.6344 4.50007 12.9724 4.65816 13.1572 4.8429C13.3419 5.02764 13.5 5.36568 13.5 6.00007V10.5001H18C18.6344
        10.5001 18.9724 10.6582 19.1572 10.8429C19.3419 11.0276 19.5 11.3657 19.5 12.0001C19.5 13.7501 19.5 15.5001 19.5 17.2501C19.5 18.2316 18.4484 19.5001 16.5 19.5001H8.25V12.9578L10.4664
        9.26383L11.2373 4.63848C11.2611 4.49547 11.3654 4.51904 11.4991 4.51012ZM6.75 13.5001H4.5V19.5001H6.75V13.5001Z`,
            fill: 'currentColor',
            stroke: 'none',
            strokeLinejoin: 'round',
            strokeMiterlimit: 10,
            fillRule: 'evenodd',
            clipRule: 'evenodd',
        },
    },
];
export const ICON_NAME = 'icon-thumbs-up-xs';
let WebComponentIcon = class WebComponentIcon extends BaseIcon {
    render() {
        return html `${createSvgIcon(content, attrs)}`;
    }
};
WebComponentIcon = __decorate([
    customElement(ICON_NAME)
], WebComponentIcon);
export { WebComponentIcon };
