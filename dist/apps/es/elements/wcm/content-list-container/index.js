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
import { createSvgIcon } from '../../../../../utils';
import { BaseIcon } from '../../../../../utils/base-icon';
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
            d: `M21,12 C21.8284271,12 22.5,12.6715729 22.5,13.5 L22.5,21 C22.5,21.8284271 21.8284271,22.5 21,22.5 L13.5,22.5 C12.6715729,22.5 12,21.8284271 12,21 L12,13.5 C12,12.6715729 
          12.6715729,12 13.5,12 L21,12 Z M19.5,1.5 C20.3284271,1.5 21,2.17157288 21,3 L21,10.5 L19.5,10.5 L19.5,3 L3,3 L3,19.5 L10.5,19.5 L10.5,21 L3,21 C2.17157288,21 1.5,20.3284271 
            1.5,19.5 L1.5,3 C1.5,2.17157288 2.17157288,1.5 3,1.5 L19.5,1.5 Z M21,19.5 L13.5,19.5 L13.5,21 L21,21 L21,19.5 Z M21,16.5 L13.5,16.5 L13.5,18 L21,18 L21,16.5 Z M21,13.5 
              L13.5,13.5 L13.5,15 L21,15 L21,13.5 Z`,
            fill: 'currentColor',
            stroke: 'none',
            strokeLinejoin: 'round',
            strokeMiterlimit: 10,
        },
    },
];
export const ICON_NAME = 'icon-content-list-container';
let WebComponentIcon = class WebComponentIcon extends BaseIcon {
    render() {
        return html `${createSvgIcon(content, attrs)}`;
    }
};
WebComponentIcon = __decorate([
    customElement(ICON_NAME)
], WebComponentIcon);
export { WebComponentIcon };
