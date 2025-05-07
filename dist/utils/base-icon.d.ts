import { LitElement } from "lit";
export declare abstract class BaseIcon extends LitElement {
    size?: number;
    color?: string;
    static styles: import("lit").CSSResult;
    protected firstUpdated(changedProperties: Map<string | number | symbol, unknown>): void;
    updated(changedProperties: Map<string | number | symbol, unknown>): void;
    private _applySize;
    private _applyColor;
}
