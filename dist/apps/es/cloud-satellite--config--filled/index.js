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
            d: `M18.0156 7.59707C17.9675 7.50382 17.8949 7.42721 17.8066 7.37643L10.8388 3.08611C10.7527 3.02661 10.6513 2.99664 10.5485 3.0003C10.4458 2.99817 10.3449 3.02802 10.2582 3.08611L3.29042
        7.37643C3.20208 7.42721 3.1295 7.50382 3.08139 7.59707C3.02636 7.68858 2.99809 7.79516 3.0001 7.90352V16.4842C2.99809 16.5925 3.02636 16.6991 3.08139 16.7906C3.1295 16.8839 3.20208 16.9605
        3.29042 17.0113L10.2582 21.3016C10.3449 21.3597 10.4458 21.3895 10.5485 21.3874C10.6513 21.391 10.7527 21.3611 10.8388 21.3016L12.4694 20.3043C12.168 19.6072 12 18.8324 12 18.0161C12 14.9697
        14.3397 12.5 17.2258 12.5C17.5226 12.5 17.8136 12.5261 18.0969 12.5763V7.90352C18.0989 7.79516 18.0706 7.68858 18.0156 7.59707ZM6.48397 15.8713C6.25429 15.8713 6.02977 15.7994 5.83879
        15.6647C5.64782 15.53 5.49897 15.3385 5.41108 15.1146C5.32318 14.8906 5.30019 14.6441 5.34499 14.4063C5.3898 14.1685 5.50041 13.9501 5.66282 13.7787C5.82522 13.6073 6.03215 13.4905 6.25741
        13.4432C6.48268 13.3959 6.71618 13.4202 6.92838 13.513C7.14058 13.6057 7.32194 13.7629 7.44955 13.9644C7.57715 14.166 7.64526 14.403 7.64526 14.6455C7.64526 14.9706 7.52291 15.2824 7.30513
        15.5122C7.08734 15.7421 6.79196 15.8713 6.48397 15.8713ZM12.1859 13.9222C11.7523 14.3826 11.1635 14.6427 10.5485 14.6455C10.147 14.6462 9.75214 14.5371 9.4025 14.3288C9.05285 14.1205 8.76034
        13.82 8.5535 13.4568C8.34667 13.0935 8.23258 12.6799 8.22236 12.2562C8.21215 11.8325 8.30616 11.4133 8.49522 11.0394C8.68428 10.6655 8.96194 10.3498 9.3011 10.1229C9.64025 9.89611 10.0293
        9.76596 10.4303 9.74519C10.8314 9.72441 11.2306 9.81373 11.5892 10.0044C11.9478 10.1951 12.2534 10.4807 12.4762 10.8332C12.7324 11.2356 12.8698 11.7091 12.8711 12.1938C12.8685 12.843 12.6221
        13.4646 12.1859 13.9222ZM14.613 10.968C14.3833 10.968 14.1588 10.8961 13.9678 10.7615C13.7769 10.6268 13.628 10.4353 13.5401 10.2113C13.4522 9.98734 13.4292 9.74087 13.474 9.50309C13.5188
        9.26531 13.6294 9.04689 13.7918 8.87546C13.9543 8.70403 14.1612 8.58728 14.3864 8.53998C14.6117 8.49268 14.8452 8.51696 15.0574 8.60974C15.2696 8.70251 15.451 8.85963 15.5786 9.06121C15.7062
        9.2628 15.7743 9.49979 15.7743 9.74223C15.7743 10.0673 15.6519 10.3791 15.4342 10.609C15.2164 10.8389 14.921 10.968 14.613 10.968Z`,
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
            d: `M19.78 17.0968H21V18.3226H19.78C19.7051 18.7062 19.5608 19.0711 19.355 19.397L20.2201 20.3102L19.3991 21.1769L18.5339 20.2636C18.2252 20.4809 17.8796 20.6332 17.5161
        20.7122V22H16.3548V20.7122C15.9914 20.6332 15.6458 20.4809 15.337 20.2636L14.4718 21.1768L13.6508 20.3102L14.5159 19.3969C14.3101 19.071 14.1658 18.7062 14.091
        18.3226H12.871V17.0968H14.091C14.1658 16.7131 14.3102 16.3483 14.516 16.0224L13.6508 15.1091L14.4719 14.2425L15.337 15.1557C15.6458 14.9385 15.9914 14.7862 16.3548
        14.7071V13.4194H17.5161V14.7071C17.8796 14.7862 18.2252 14.9385 18.534 15.1558L19.3992 14.2425L20.2202 15.1092L19.355 16.0224C19.5608 16.3483 19.7051 16.7131 19.78 17.0968ZM15.9677
        19.2385C16.2542 19.4405 16.591 19.5484 16.9355 19.5484C17.3973 19.5479 17.8401 19.354 18.1667 19.0093C18.4932 18.6645 18.6769 18.1972 18.6774 17.7097C18.6774 17.346 18.5753 16.9905 18.3839
        16.6881C18.1924 16.3858 17.9204 16.1501 17.6021 16.0109C17.2838 15.8718 16.9336 15.8354 16.5956 15.9063C16.2577 15.9772 15.9474 16.1524 15.7037 16.4095C15.4601 16.6667 15.2942 16.9943 15.227
        17.351C15.1598 17.7076 15.1943 18.0773 15.3261 18.4133C15.458 18.7493 15.6813 19.0365 15.9677 19.2385Z`,
            fill: 'currentColor',
            stroke: 'none',
            strokeLinejoin: 'round',
            strokeMiterlimit: 10,
            fillRule: 'evenodd',
            clipRule: 'evenodd',
        },
    },
];
export const ICON_NAME = 'icon-cloud-satellite-config-filled';
let WebComponentIcon = class WebComponentIcon extends BaseIcon {
    render() {
        return html `${createSvgIcon(content, attrs)}`;
    }
};
WebComponentIcon = __decorate([
    customElement(ICON_NAME)
], WebComponentIcon);
export { WebComponentIcon };
