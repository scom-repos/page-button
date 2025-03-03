/// <reference path="@ijstech/components/index.d.ts" />
/// <amd-module name="@scom/page-button/interface.ts" />
declare module "@scom/page-button/interface.ts" {
    export interface IConfig {
        linkButtons: ILinkButton[];
    }
    export interface ILinkButton {
        caption?: string;
        url?: string;
    }
    export interface ISettings {
        light?: ILinkButtonStyle;
        dark?: ILinkButtonStyle;
        buttonType?: 'filled' | 'outlined' | 'text';
        textAlign?: 'left' | 'center' | 'right';
        height?: number | string;
    }
    export interface ILinkButtonStyle {
        color?: string;
        backgroundColor?: string;
    }
}
/// <amd-module name="@scom/page-button/index.css.ts" />
declare module "@scom/page-button/index.css.ts" {
    export const containerStyle: string;
    export const actionButtonStyle: string;
}
/// <amd-module name="@scom/page-button/model/formSchema.ts" />
declare module "@scom/page-button/model/formSchema.ts" {
    import { IDataSchema, IUISchema } from "@ijstech/components";
    const propertiesUISchema: IUISchema;
    function getDataSchema(readOnly?: boolean): IDataSchema;
    export { propertiesUISchema, getDataSchema };
}
/// <amd-module name="@scom/page-button/model/index.ts" />
declare module "@scom/page-button/model/index.ts" {
    import { IDataSchema } from '@ijstech/components';
    import { IConfig, ISettings } from "@scom/page-button/interface.ts";
    interface IOptions {
        onUpdateBlock: () => void;
        onUpdateTheme: () => void;
    }
    export class Model {
        private _data;
        private _tag;
        private _options;
        constructor(options: IOptions);
        get data(): IConfig;
        set data(value: IConfig);
        get tag(): ISettings;
        set tag(value: ISettings);
        private getData;
        setData(data: IConfig): void;
        private getTag;
        private setTag;
        private updateTag;
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
                userInputUISchema: import("@ijstech/components").IUISchema;
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
                userInputUISchema: import("@ijstech/components").IUISchema;
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
    }
}
/// <amd-module name="@scom/page-button" />
declare module "@scom/page-button" {
    import { Module, ControlElement, Container } from '@ijstech/components';
    import { IConfig } from "@scom/page-button/interface.ts";
    interface ScomPageButtonElement extends ControlElement {
        lazyLoad?: boolean;
        data: IConfig;
    }
    global {
        namespace JSX {
            interface IntrinsicElements {
                ["i-scom-page-button"]: ScomPageButtonElement;
            }
        }
    }
    export default class ScomPageButton extends Module {
        private pnlButtons;
        private model;
        static create(options?: ScomPageButtonElement, parent?: Container): Promise<ScomPageButton>;
        constructor(parent?: Container, options?: ScomPageButtonElement);
        private setData;
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
                userInputDataSchema: import("@ijstech/components").IDataSchema;
                userInputUISchema: import("@ijstech/components").IUISchema;
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
                userInputDataSchema: import("@ijstech/components").IDataSchema;
                userInputUISchema: import("@ijstech/components").IUISchema;
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
        private onClickBtn;
        private updateStyle;
        private onUpdateTheme;
        init(): void;
        render(): any;
    }
}
