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
            d: `M14.0296 20.6887C13.2487 20.6893 12.4853 20.4582 11.8359 20.0247C11.1864 19.5911 10.6802 18.9747 10.3813 18.2533C10.0824 17.532 10.0042 16.7381 10.1566 15.9723C10.309 15.2065 10.6852 14.5031 
        11.2376 13.9512L12.2988 15.0117C11.8397 15.4707 11.5817 16.0933 11.5817 16.7425C11.5816 17.3918 11.8394 18.0144 12.2985 18.4735C12.7575 18.9326 13.3801 19.1906 14.0293 19.1906C14.6785 19.1907 
        15.3012 18.9329 15.7603 18.4738L20.2828 13.9514C20.7418 13.4922 20.9997 12.8696 20.9997 12.2203C20.9997 11.5711 20.7417 10.9484 20.2826 10.4893C19.8235 10.0303 19.2008 9.77239 18.5516 
        9.77242C17.9023 9.77245 17.2797 10.0304 16.8206 10.4895L15.7601 9.429C16.5005 8.68862 17.5046 8.27266 18.5516 8.27262C19.07 8.2726 19.5834 8.3747 20.0624 8.57308C20.5414 8.77146 20.9766 
        9.06224 21.3432 9.42881C21.7098 9.79539 22.0006 10.2306 22.199 10.7095C22.3974 11.1885 22.4995 11.7019 22.4995 12.2203C22.4996 12.7387 22.3975 13.2521 22.1991 13.7311C22.0007 14.21 21.7099  
        14.6453 21.3433 15.0119L16.8208 19.5343C16.4546 19.9012 16.0194 20.192 15.5404 20.3901C15.0614 20.5882 14.5479 20.6897 14.0296 20.6887Z`,
            fill: 'currentColor',
            stroke: 'none',
            strokeLinejoin: 'round',
            strokeMiterlimit: 10,
        },
    },
    {
        elem: 'path',
        attrs: {
            d: `M7.69815 22.4978C6.91741 22.4982 6.15411 22.2669 5.50483 21.8333C4.85555 21.3997 4.34946 20.7833 4.05061 20.062C3.75175 19.3408 3.67355 18.547 3.8259 17.7813C3.97826 17.0156 4.35432 16.3122 
        4.9065 15.7603L9.429 11.2378C9.79507 10.8689 10.2304 10.5759 10.7099 10.3757C11.1895 10.1754 11.7039 10.0718 12.2236 10.0708C12.7432 10.0698 13.258 10.1715 13.7383 10.3699C14.2187 10.5683 
        14.6551 10.8596 15.0226 11.2271C15.39 11.5945 15.6813 12.031 15.8798 12.5113C16.0782 12.9916 16.1798 13.5064 16.1788 14.0261C16.1778 14.5458 16.0742 15.0601 15.874 15.5397C15.6737 16.0193 
        15.3807 16.4546 15.0119 16.8206L13.9514 15.7601C14.1804 15.5332 14.3624 15.2633 14.4869 14.9658C14.6113 14.6684 14.6758 14.3492 14.6765 14.0268C14.6773 13.7044 14.6143 13.3849 14.4913 
        13.0869C14.3683 12.7889 14.1876 12.5181 13.9596 12.2901C13.7316 12.0621 13.4608 11.8814 13.1627 11.7583C12.8647 11.6353 12.5453 11.5723 12.2228 11.5731C11.9004 11.5739 11.5813 11.6383 
        11.2838 11.7628C10.9864 11.8872 10.7164 12.0692 10.4895 12.2983L5.967 16.8208C5.51116 17.2805 5.25601 17.9021 5.25737 18.5495C5.25873 19.1969 5.5165 19.8175 5.97427 20.2753C6.43204 20.7331 
        7.05253 20.9909 7.69995 20.9924C8.34736 20.9938 8.96898 20.7387 9.42878 20.2829L10.4893 21.3435C10.123 21.7103 9.68791 22.0011 9.20891 22.1992C8.72991 22.3973 8.21649 22.4988 7.69815 
        22.4978Z`,
            fill: 'currentColor',
            stroke: 'none',
            strokeLinejoin: 'round',
            strokeMiterlimit: 10,
        },
    },
    {
        elem: 'path',
        attrs: {
            d: 'M7.5 7.5H1.5V9H7.5V7.5Z',
            fill: 'currentColor',
            stroke: 'none',
            strokeLinejoin: 'round',
            strokeMiterlimit: 10,
        },
    },
    {
        elem: 'path',
        attrs: {
            d: 'M10.5 4.5H1.5V6H10.5V4.5Z',
            fill: 'currentColor',
            stroke: 'none',
            strokeLinejoin: 'round',
            strokeMiterlimit: 10,
        },
    },
    {
        elem: 'path',
        attrs: {
            d: 'M10.5 1.5H1.5V3H10.5V1.5Z',
            fill: 'currentColor',
            stroke: 'none',
            strokeLinejoin: 'round',
            strokeMiterlimit: 10,
        },
    },
];
export const ICON_NAME = 'icon-text-link';
let WebComponentIcon = class WebComponentIcon extends BaseIcon {
    render() {
        return html `${createSvgIcon(content, attrs)}`;
    }
};
WebComponentIcon = __decorate([
    customElement(ICON_NAME)
], WebComponentIcon);
export { WebComponentIcon };
