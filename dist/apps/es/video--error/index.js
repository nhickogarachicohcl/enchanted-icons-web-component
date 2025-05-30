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
    viewBox: '0 0 16 16',
    width: 16,
    height: 16,
};
const content = [
    {
        elem: 'path',
        attrs: {
            d: `M7 13h3.5c.27 0 .52-.11.71-.29s.29-.44.29-.71V9.97l2.71 1.93c.07.05.16.08.25.09
          .09 0 .18-.01.26-.05s.15-.11.2-.18c.05-.08.07-.17.07-.26v-7c0-.09-.03-.18-.07-.26
          a.49.49 0 0 0-.46-.23c-.09 0-.18.04-.25.09L11.5 6.04V4c0-.27-.11-.52-.29-.71
          A1 1 0 0 0 10.5 3H2c-.27 0-.52.11-.71.29A1 1 0 0 0 1 4v3h1V4h8.5v3c0 .09.03.18.07.26
          a.49.49 0 0 0 .46.23c.09 0 .18-.04.25-.09l2.71-1.94v5.07L11.28 8.6a.54.54 0 0 0-.25-.09
          c-.09 0-.18.01-.26.05s-.15.11-.2.18c-.05.08-.07.17-.07.26v3H7z`,
            fill: 'currentColor',
        },
    },
    {
        elem: 'path',
        attrs: {
            d: 'm5.99 8.81-.7-.71-1.76 1.76L1.76 8.1l-.7.71 1.76 1.76-1.76 1.76.7.71 1.77-1.77 1.76 1.77.7-.71-1.76-1.76z',
            fill: 'currentColor',
        },
    },
];
export const ICON_NAME = 'icon-video-error';
let WebComponentIcon = class WebComponentIcon extends BaseIcon {
    render() {
        return html `${createSvgIcon(content, attrs)}`;
    }
};
WebComponentIcon = __decorate([
    customElement(ICON_NAME)
], WebComponentIcon);
export { WebComponentIcon };
