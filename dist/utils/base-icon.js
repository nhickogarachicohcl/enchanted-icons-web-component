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
import { css, LitElement, unsafeCSS } from "lit";
import { property } from "lit/decorators.js";
import { DEFAULT_ICON_COLOR, DEFAULT_ICON_SIZE } from "../constants";
export class BaseIcon extends LitElement {
    firstUpdated(changedProperties) {
        super.firstUpdated(changedProperties);
        if (this.size !== undefined) {
            this._applySize();
        }
        if (this.color !== undefined) {
            this._applyColor();
        }
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has('size')) {
            this._applySize();
        }
        if (changedProperties.has('color')) {
            this._applyColor();
        }
    }
    _applySize() {
        if (this.size != null && !isNaN(this.size) && this.size > 0) {
            this.style.setProperty('--_icon-instance-size', `${this.size}px`);
        }
        else {
            this.style.removeProperty('--_icon-instance-size');
        }
    }
    _applyColor() {
        if (this.color && this.color.trim() !== "") {
            this.style.setProperty('--_icon-instance-color', this.color);
        }
        else {
            this.style.removeProperty('--_icon-instance-color');
        }
    }
}
BaseIcon.styles = css `
    :host {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      color: var(--_icon-instance-color, var(--icon-theme-color, ${unsafeCSS(DEFAULT_ICON_COLOR)}));
    }

    svg {
      width: var(--_icon-instance-size, var(--icon-theme-size, ${DEFAULT_ICON_SIZE}px));
      height: var(--_icon-instance-size, var(--icon-theme-size, ${DEFAULT_ICON_SIZE}px));
      display: block;
    }
  `;
__decorate([
    property({ type: Number, reflect: true })
], BaseIcon.prototype, "size", void 0);
__decorate([
    property({ type: String, reflect: true })
], BaseIcon.prototype, "color", void 0);
