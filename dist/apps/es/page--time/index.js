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
            d: `M21.75 3.75019C21.75 2.92176 21.0784 2.25019 20.25 2.25019H8.25C8.05052 2.24483 7.85869 2.32704 7.725 2.47519L2.475 7.72519C2.32686 7.85888 2.24465 8.05071 2.25 8.25019V20.2499C2.25
        21.0784 2.92158 21.7499 3.75 21.7499H9.74976V20.2499H3.75V9.75019H8.25C9.07843 9.75019 9.75 9.07861 9.75 8.25019V3.75019H20.25L20.2498 9.74994H21.7498L21.75 3.75019ZM4.05 8.25019L8.25
        4.05019V8.25019H4.05Z`,
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
            d: 'M19.5 18.4424L18 16.9424V14.9999H16.5V17.5574L18.4425 19.4999L19.5 18.4424Z',
            fill: 'currentColor',
            stroke: 'none',
            strokeLinejoin: 'round',
            strokeMiterlimit: 10,
        },
    },
    {
        elem: 'path',
        attrs: {
            d: `M14.3332 21.6152C15.1966 22.192 16.2116 22.4999 17.25 22.4999C18.6424 22.4999 19.9777 21.9468 20.9623 20.9623C21.9469 19.9777 22.5 18.6423 22.5 17.2499C22.5 16.2116 22.1921 15.1966
        21.6152 14.3332C21.0383 13.4699 20.2184 12.7969 19.2591 12.3996C18.2998 12.0022 17.2442 11.8982 16.2258 12.1008C15.2074 12.3034 14.2719 12.8034 13.5377 13.5376C12.8034 14.2719 12.3034
        15.2073 12.1009 16.2257C11.8983 17.2441 12.0023 18.2997 12.3996 19.259C12.797 20.2183 13.4699 21.0383 14.3332 21.6152ZM15.1666 14.1319C15.7833 13.7199 16.5083 13.4999 17.25 13.4999C18.2445
        13.4999 19.1984 13.895 19.9016 14.5983C20.6049 15.3016 21 16.2554 21 17.2499C21 17.9916 20.7801 18.7167 20.368 19.3333C19.9559 19.95 19.3703 20.4307 18.6851 20.7145C17.9998 20.9983 17.2458
        21.0726 16.5184 20.9279C15.791 20.7832 15.1228 20.426 14.5983 19.9016C14.0739 19.3771 13.7167 18.709 13.572 17.9815C13.4273 17.2541 13.5016 16.5001 13.7854 15.8149C14.0693 15.1297 14.5499
        14.544 15.1666 14.1319Z`,
            fill: 'currentColor',
            stroke: 'none',
            strokeLinejoin: 'round',
            strokeMiterlimit: 10,
            fillRule: 'evenodd',
            clipRule: 'evenodd',
        },
    },
];
export const ICON_NAME = 'icon-page-time';
let WebComponentIcon = class WebComponentIcon extends BaseIcon {
    render() {
        return html `${createSvgIcon(content, attrs)}`;
    }
};
WebComponentIcon = __decorate([
    customElement(ICON_NAME)
], WebComponentIcon);
export { WebComponentIcon };
