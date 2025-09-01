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
const applySvgAttributes = (element, attrs) => {
    for (const key in attrs) {
        if (Object.hasOwnProperty.call(attrs, key)) {
            const value = attrs[key];
            if (value !== undefined) {
                element.setAttribute(key, String(value));
            }
        }
    }
};
const createSvgIcon = (content, attrs) => {
    const svgElement = document.createElementNS(attrs.xmlns, 'svg');
    applySvgAttributes(svgElement, attrs);
    content.forEach(item => {
        const childElement = document.createElementNS(attrs.xmlns, item.elem);
        if (item.attrs) {
            for (const key in item.attrs) {
                if (Object.hasOwnProperty.call(item.attrs, key)) {
                    const value = item.attrs[key];
                    if (value !== undefined) {
                        childElement.setAttribute(key, String(value));
                    }
                }
            }
        }
        svgElement.appendChild(childElement);
    });
    return svgElement;
};
const canDefine = typeof globalThis !== 'undefined' && 'customElements' in globalThis;
export { createSvgIcon, canDefine };
