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
/* auto generated file - do not edit */
import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import Icon from '@carbon/icons/es/gas-station/32';
import { toSVG } from '@carbon/icon-helpers';
import { BaseIcon } from '../../../utils/base-icon';
export const ICON_NAME = `icon-${'gas-station'.toLowerCase().replace(/-+/g, '-')}`;
let WebComponentIcon = class WebComponentIcon extends BaseIcon {
    render() {
        return html `${toSVG({ ...Icon, attrs: { ...Icon.attrs, preserveAspectRatio: 'xMidYMid' } })}`;
    }
};
WebComponentIcon = __decorate([
    customElement(ICON_NAME)
], WebComponentIcon);
export { WebComponentIcon };
