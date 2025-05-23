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
            d: 'M5.30682 16.1818H3L6.51491 6H9.28906L12.799 16.1818H10.4922L7.94176 8.3267H7.86221L5.30682 16.1818ZM5.16264 12.1797H10.6115V13.8601H5.16264V12.1797Z',
            fill: 'currentColor',
            stroke: 'none',
            strokeLinejoin: 'round',
            strokeMiterlimit: 10,
        },
    },
    {
        elem: 'path',
        attrs: {
            d: `M17.0696 19.2045C16.3835 19.2045 15.7952 19.11 15.3047 18.9211C14.8175 18.7355 14.4297 18.482 14.1413 18.1605C13.853 17.839 13.6657 17.4777 13.5796 17.0767L15.5384 16.8132C15.598 16.9656
        15.6925 17.1082 15.8217 17.2407C15.951 17.3733 16.1217 17.4794 16.3338 17.5589C16.5493 17.6418 16.8111 17.6832 17.1193 17.6832C17.58 17.6832 17.9595 17.5705 18.2578 17.3451C18.5594 17.1231
        18.7102 16.7502 18.7102 16.2265V14.8296H18.6207C18.5279 15.0417 18.3887 15.2421 18.2031 15.4311C18.0175 15.62 17.7789 15.7741 17.4872 15.8934C17.1956 16.0127 16.8475 16.0724 16.4432
        16.0724C15.8698 16.0724 15.3478 15.9398 14.8771 15.6747C14.4098 15.4062 14.0369 14.9969 13.7585 14.4467C13.4834 13.8932 13.3459 13.1939 13.3459 12.3487C13.3459 11.4837 13.4868 10.7611
        13.7685 10.1811C14.0502 9.60109 14.4247 9.1669 14.8921 8.87855C15.3627 8.5902 15.8781 8.44602 16.4382 8.44602C16.8658 8.44602 17.2237 8.51894 17.5121 8.66477C17.8004 8.80729 18.0324 8.98627
        18.2081 9.2017C18.3871 9.41383 18.5246 9.62263 18.6207 9.82812H18.7003V8.54545H20.8033V16.2564C20.8033 16.906 20.6442 17.4495 20.326 17.887C20.0078 18.3245 19.567 18.6527 19.0036
        18.8714C18.4434 19.0935 17.7988 19.2045 17.0696 19.2045ZM17.1144 14.4815C17.4557 14.4815 17.7441 14.397 17.9794 14.228C18.218 14.0556 18.4003 13.8104 18.5263 13.4922C18.6555 13.1707 18.7202
        12.7862 18.7202 12.3388C18.7202 11.8913 18.6572 11.5036 18.5313 11.1754C18.4053 10.844 18.223 10.5871 17.9844 10.4048C17.7457 10.2225 17.4557 10.1314 17.1144 10.1314C16.7663 10.1314 16.473
        10.2259 16.2344 10.4148C15.9957 10.6004 15.8151 10.8589 15.6925 11.1903C15.5698 11.5218 15.5085 11.9046 15.5085 12.3388C15.5085 12.7796 15.5698 13.1608 15.6925 13.4822C15.8184 13.8004
        15.9991 14.0474 16.2344 14.223C16.473 14.3954 16.7663 14.4815 17.1144 14.4815Z`,
            fill: 'currentColor',
            stroke: 'none',
            strokeLinejoin: 'round',
            strokeMiterlimit: 10,
        },
    },
];
export const ICON_NAME = 'icon-data-text';
let WebComponentIcon = class WebComponentIcon extends BaseIcon {
    render() {
        return html `${createSvgIcon(content, attrs)}`;
    }
};
WebComponentIcon = __decorate([
    customElement(ICON_NAME)
], WebComponentIcon);
export { WebComponentIcon };
