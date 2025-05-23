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
            d: 'M18.75 5.94727C19.1642 5.94727 19.5 5.61148 19.5 5.19727C19.5 4.78305 19.1642 4.44727 18.75 4.44727C18.3358 4.44727 18 4.78305 18 5.19727C18 5.61148 18.3358 5.94727 18.75 5.94727Z',
            fill: 'currentColor',
            stroke: 'none',
            strokeLinejoin: 'round',
            strokeMiterlimit: 10,
        },
    },
    {
        elem: 'path',
        attrs: {
            d: `M12 12H15.3075L18.3375 8.97725C19.0912 9.06065 19.8525 8.91359 20.521 8.55546C21.1894 8.19733 21.7335 7.64497 22.0816 6.97125C22.4296 6.29754 22.5653 5.53412 22.4706 4.78174C22.3759
        4.02936 22.0553 3.32336 21.5512 2.7569C21.047 2.19044 20.383 1.79013 19.6467 1.6088C18.9104 1.42746 18.1363 1.47362 17.4268 1.74118C16.7172 2.00874 16.1055 2.48513 15.6722 3.10749C15.239
        3.72986 15.0046 4.46895 15 5.22725C14.9927 5.36466 14.9927 5.50235 15 5.63975L12 8.6925V12ZM14.6925 10.5H13.5V9.3075L16.6575 6.10475L16.56 5.69975C16.5229 5.53474 16.5028 5.36636 16.5
        5.19725C16.5 4.75224 16.632 4.31723 16.8792 3.94722C17.1264 3.57721 17.4778 3.28882 17.889 3.11852C18.3001 2.94823 18.7525 2.90367 19.189 2.99049C19.6254 3.0773 20.0263 3.29159 20.341
        3.60626C20.6557 3.92093 20.87 4.32184 20.9568 4.7583C21.0436 5.19475 20.9991 5.64716 20.8288 6.05829C20.6585 6.46942 20.37 6.82083 20 7.06806C19.63 7.31529 19.195 7.44725 18.75
        7.44725C18.5809 7.44447 18.4125 7.42437 18.2475 7.38725L17.8425 7.28975L14.6925 10.5Z`,
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
            d: `M4.66661 6.63199C5.28329 6.21993 6.00832 6 6.75 6C7.74456 6 8.69839 6.3951 9.40165 7.09836C10.1049 7.80162 10.5 8.75544 10.5 9.75C10.5 10.4917 10.2801 11.2167 9.86801 11.8334C9.45596
        12.4501 8.87028 12.9307 8.18506 13.2145C7.49984 13.4984 6.74584 13.5726 6.01841 13.4279C5.29099 13.2833 4.62279 12.9261 4.09835 12.4016C3.5739 11.8772 3.21675 11.209 3.07206 10.4816C2.92736
        9.75417 3.00162 9.00016 3.28545 8.31493C3.56928 7.62971 4.04992 7.04404 4.66661 6.63199ZM8.00003 7.87919C7.63002 7.63196 7.19501 7.5 6.75 7.5C6.15326 7.5 5.58097 7.73706 5.15901
        8.15902C4.73705 8.58098 4.5 9.15326 4.5 9.75C4.5 10.195 4.63196 10.63 4.87919 11C5.12643 11.37 5.47783 11.6584 5.88896 11.8287C6.3001 11.999 6.7525 12.0436 7.18896 11.9568C7.62541
        11.8699 8.02633 11.6556 8.34099 11.341C8.65566 11.0263 8.86995 10.6254 8.95676 10.1889C9.04358 9.75249 8.99903 9.3001 8.82873 8.88897C8.65843 8.47784 8.37004 8.12642 8.00003 7.87919Z`,
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
            d: `M10.5 22.5H12V18.75C12 17.7554 11.6049 16.8016 10.9017 16.0984C10.1984 15.3951 9.24456 15 8.25 15H5.25C4.25544 15 3.30161 15.3951 2.59835 16.0984C1.89509 16.8016 1.5 17.7554 1.5
        18.75V22.5H3V18.75C3 18.1533 3.23705 17.581 3.65901 17.159C4.08097 16.7371 4.65326 16.5 5.25 16.5H8.25C8.84674 16.5 9.41904 16.7371 9.84099 17.159C10.2629 17.581 10.5 18.1533 10.5
        18.75V22.5Z`,
            fill: 'currentColor',
            stroke: 'none',
            strokeLinejoin: 'round',
            strokeMiterlimit: 10,
        },
    },
];
export const ICON_NAME = 'icon-user-password';
let WebComponentIcon = class WebComponentIcon extends BaseIcon {
    render() {
        return html `${createSvgIcon(content, attrs)}`;
    }
};
WebComponentIcon = __decorate([
    customElement(ICON_NAME)
], WebComponentIcon);
export { WebComponentIcon };
