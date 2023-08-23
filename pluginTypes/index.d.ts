/// <amd-module name="@scom/scom-buttons/global/utils.ts" />
declare module "@scom/scom-buttons/global/utils.ts" {
    export interface IConfig {
        linkButtons: ILinkButton[];
    }
    export interface ILinkButton {
        caption?: string;
        url?: string;
    }
}
/// <amd-module name="@scom/scom-buttons/global/index.ts" />
declare module "@scom/scom-buttons/global/index.ts" {
    export interface PageBlock {
        getData: () => any;
        setData: (data: any) => Promise<void>;
        getTag: () => any;
        setTag: (tag: any) => Promise<void>;
        validate?: () => boolean;
        defaultEdit?: boolean;
        tag?: any;
        readonly onEdit: () => Promise<void>;
        readonly onConfirm: () => Promise<void>;
        readonly onDiscard: () => Promise<void>;
        edit: () => Promise<void>;
        confirm: () => Promise<void>;
        discard: () => Promise<void>;
        config: () => Promise<void>;
    }
    export * from "@scom/scom-buttons/global/utils.ts";
}
/// <amd-module name="@scom/scom-buttons/index.css.ts" />
declare module "@scom/scom-buttons/index.css.ts" {
    export const containerStyle: string;
    export const actionButtonStyle: string;
}
/// <amd-module name="@scom/scom-buttons" />
declare module "@scom/scom-buttons" {
    import { Module, ControlElement, Container, IDataSchema, IUISchema } from '@ijstech/components';
    import { IConfig } from "@scom/scom-buttons/global/index.ts";
    interface ScomButtonsElement extends ControlElement {
        lazyLoad?: boolean;
        data: IConfig;
    }
    global {
        namespace JSX {
            interface IntrinsicElements {
                ["i-scom-buttons"]: ScomButtonsElement;
            }
        }
    }
    export default class ScomButtons extends Module {
        private pnlButtons;
        private _data;
        tag: any;
        defaultEdit: boolean;
        readonly onConfirm: () => Promise<void>;
        readonly onDiscard: () => Promise<void>;
        readonly onEdit: () => Promise<void>;
        static create(options?: ScomButtonsElement, parent?: Container): Promise<ScomButtons>;
        constructor(parent?: Container, options?: ScomButtonsElement);
        private getData;
        private setData;
        private getTag;
        private updateTag;
        private setTag;
        private setTheme;
        private getDataSchema;
        private _getActions;
        getConfigurators(): ({
            name: string;
            target: string;
            getActions: () => {
                name: string;
                icon: string;
                command: (builder: any, userInputData: any) => {
                    execute: () => Promise<void>;
                    undo: () => Promise<void>;
                    redo: () => void;
                };
                userInputDataSchema: IDataSchema;
                userInputUISchema: IUISchema;
            }[];
            getData: any;
            setData: (data: IConfig) => Promise<void>;
            getTag: any;
            setTag: any;
            getLinkParams?: undefined;
            setLinkParams?: undefined;
        } | {
            name: string;
            target: string;
            getActions: () => {
                name: string;
                icon: string;
                command: (builder: any, userInputData: any) => {
                    execute: () => Promise<void>;
                    undo: () => Promise<void>;
                    redo: () => void;
                };
                userInputDataSchema: IDataSchema;
                userInputUISchema: IUISchema;
            }[];
            getLinkParams: () => {
                data: string;
            };
            setLinkParams: (params: any) => Promise<void>;
            getData: any;
            setData: any;
            getTag: any;
            setTag: any;
        })[];
        private onUpdateBlock;
        init(): void;
        render(): any;
    }
}
