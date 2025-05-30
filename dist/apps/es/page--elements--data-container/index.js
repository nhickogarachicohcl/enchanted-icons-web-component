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
            d: 'M21 2.99994C21 2.17151 20.3284 1.49994 19.5 1.49994H3C2.17157 1.49994 1.5 2.17151 1.5 2.99994V19.4999C1.5 20.3284 2.17157 20.9999 3 20.9999H10.5V19.4999H3V2.99994H19.5V10.4999H21V2.99994Z',
            fill: 'currentColor',
            stroke: 'none',
            strokeLinejoin: 'round',
            strokeMiterlimit: 10,
        },
    },
    {
        elem: 'path',
        attrs: {
            d: `M9.75 13.4999C9.75 12.6715 9.07843 11.9999 8.25 11.9999H6C5.17157 11.9999 4.5 12.6715 4.5 13.4999V15.7499C4.5 16.5784 5.17157 17.2499 6 17.2499H8.25C9.07843 17.2499 9.75 16.5784 9.75
        15.7499V13.4999ZM6 13.4999H8.25V15.7499H6V13.4999Z`,
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
            d: `M18 6.74994C18 5.92151 17.3284 5.24994 16.5 5.24994H6C5.17157 5.24994 4.5 5.92151 4.5 6.74994V8.99994C4.5 9.82837 5.17157 10.4999 6 10.4999H16.5C17.3284 10.4999 18 9.82837 18
        8.99994V6.74994ZM6 6.74994H16.5V8.99994H6V6.74994Z`,
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
            d: 'M20.9553 19.5012C20.9702 19.5005 20.9851 19.5001 21 19.4999H20.895C20.9152 19.4999 20.9353 19.5003 20.9553 19.5012Z',
            fill: 'currentColor',
            stroke: 'none',
            strokeLinejoin: 'round',
            strokeMiterlimit: 10,
        },
    },
    {
        elem: 'path',
        attrs: {
            d: `M20.6175 19.5524C20.728 19.5231 20.8412 19.5059 20.9553 19.5012C21.2309 19.5122 21.4984 19.5991 21.7284 19.7527C21.975 19.9176 22.1673 20.1518 22.2808 20.4259C22.3943 20.7 22.4241
        21.0016 22.3662 21.2926C22.3083 21.5835 22.1654 21.8508 21.9557 22.0606C21.7459 22.2704 21.4786 22.4132 21.1876 22.4711C20.8967 22.529 20.5951 22.4993 20.321 22.3858C20.0469 22.2722
        19.8126 22.08 19.6478 21.8333C19.483 21.5866 19.395 21.2966 19.395 20.9999C19.3967 20.8708 19.4143 20.7423 19.4475 20.6174L18.6975 19.8224C18.2452 20.0965 17.7264 20.2414 17.1975
        20.2414C16.6686 20.2414 16.1498 20.0965 15.6975 19.8224L14.9475 20.6174C14.9807 20.7423 14.9983 20.8708 15 20.9999C15 21.2966 14.912 21.5866 14.7472 21.8333C14.5824 22.08 14.3481 22.2722
        14.074 22.3858C13.7999 22.4993 13.4983 22.529 13.2074 22.4711C12.9164 22.4132 12.6491 22.2704 12.4393 22.0606C12.2296 21.8508 12.0867 21.5835 12.0288 21.2926C11.9709 21.0016 12.0007 20.7
        12.1142 20.4259C12.2277 20.1518 12.42 19.9176 12.6666 19.7527C12.9133 19.5879 13.2033 19.4999 13.5 19.4999C13.6286 19.4967 13.757 19.5093 13.8825 19.5374L14.6775 18.7499C14.4035 18.2976
        14.2586 17.7788 14.2586 17.2499C14.2586 16.7211 14.4035 16.2023 14.6775 15.7499L13.8825 14.9474C13.7577 14.9806 13.6292 14.9983 13.5 14.9999C13.2033 14.9999 12.9133 14.912 12.6666
        14.7471C12.42 14.5823 12.2277 14.3481 12.1142 14.074C12.0007 13.7999 11.9709 13.4983 12.0288 13.2073C12.0867 12.9163 12.2296 12.6491 12.4393 12.4393C12.6491 12.2295 12.9164 12.0866 13.2074
        12.0288C13.4983 11.9709 13.7999 12.0006 14.074 12.1141C14.3481 12.2277 14.5824 12.4199 14.7472 12.6666C14.912 12.9133 15 13.2033 15 13.4999C15.0344 13.6296 15.0521 13.7632 15.0525
        13.8974L15.8025 14.6924C16.2548 14.4184 16.7736 14.2735 17.3025 14.2735C17.8314 14.2735 18.3502 14.4184 18.8025 14.6924L19.5525 13.8974C19.5193 13.7726 19.5017 13.6441 19.5 13.5149C19.5
        13.2183 19.588 12.9283 19.7528 12.6816C19.9176 12.4349 20.1519 12.2427 20.426 12.1291C20.7001 12.0156 21.0017 11.9859 21.2926 12.0438C21.5836 12.1017 21.8509 12.2445 22.0607 12.4543C22.2704
        12.6641 22.4133 12.9313 22.4712 13.2223C22.5291 13.5133 22.4993 13.8149 22.3858 14.089C22.2723 14.3631 22.08 14.5973 21.8334 14.7622C21.5867 14.927 21.2967 15.0149 21 15.0149C20.8708
        15.0133 20.7423 14.9956 20.6175 14.9625L19.8225 15.7499C20.0965 16.2023 20.2414 16.7211 20.2414 17.2499C20.2414 17.7788 20.0965 18.2976 19.8225 18.7499L20.6175 19.5524ZM16.0028
        16.4166C15.838 16.6633 15.75 16.9533 15.75 17.2499C15.75 17.6478 15.908 18.0293 16.1893 18.3106C16.4706 18.5919 16.8522 18.7499 17.25 18.7499C17.5467 18.7499 17.8367 18.662 18.0834
        18.4971C18.33 18.3323 18.5223 18.0981 18.6358 17.824C18.7493 17.5499 18.7791 17.2483 18.7212 16.9573C18.6633 16.6663 18.5204 16.3991 18.3107 16.1893C18.1009 15.9795 17.8336 15.8366 17.5426
        15.7788C17.2517 15.7209 16.9501 15.7506 16.676 15.8641C16.4019 15.9777 16.1676 16.1699 16.0028 16.4166Z`,
            fill: 'currentColor',
            stroke: 'none',
            strokeLinejoin: 'round',
            strokeMiterlimit: 10,
            fillRule: 'evenodd',
            clipRule: 'evenodd',
        },
    },
];
export const ICON_NAME = 'icon-page-elements-data-container';
let WebComponentIcon = class WebComponentIcon extends BaseIcon {
    render() {
        return html `${createSvgIcon(content, attrs)}`;
    }
};
WebComponentIcon = __decorate([
    customElement(ICON_NAME)
], WebComponentIcon);
export { WebComponentIcon };
