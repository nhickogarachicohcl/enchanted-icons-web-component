import { LitElement } from "lit";
export declare abstract class BaseIcon extends LitElement {
    size: number;
    color: string;
    static styles: import("lit").CSSResult;
    updated(changedProperties: Map<string | number | symbol, unknown>): void;
}
