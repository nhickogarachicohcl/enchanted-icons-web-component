var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
import { css, LitElement } from "lit";
import { property } from "lit/decorators.js";
import { DEFAULT_ICON_COLOR, DEFAULT_ICON_SIZE } from "../constants";
export class BaseIcon extends LitElement {
    constructor() {
        super(...arguments);
        this.size = DEFAULT_ICON_SIZE;
        this.color = DEFAULT_ICON_COLOR;
    }
    updated(changedProperties) {
        const svgElement = this.shadowRoot?.querySelector('svg');
        if (changedProperties.has('size')) {
            if (svgElement) {
                svgElement.setAttribute('width', this.size.toString());
                svgElement.setAttribute('height', this.size.toString());
            }
        }
        if (changedProperties.has('color')) {
            if (svgElement) {
                svgElement.style.fill = this.color;
                svgElement.style.color = this.color;
            }
        }
    }
}
BaseIcon.styles = css `
    :host {
      color: inherit;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `;
__decorate([
    property({ type: Number, reflect: true })
], BaseIcon.prototype, "size", void 0);
__decorate([
    property({ type: String, reflect: true })
], BaseIcon.prototype, "color", void 0);
