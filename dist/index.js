var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
define("@scom/scom-buttons/global/utils.ts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("@scom/scom-buttons/global/index.ts", ["require", "exports", "@scom/scom-buttons/global/utils.ts"], function (require, exports, utils_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(utils_1, exports);
});
define("@scom/scom-buttons/index.css.ts", ["require", "exports", "@ijstech/components"], function (require, exports, components_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.actionButtonStyle = exports.containerStyle = void 0;
    exports.containerStyle = components_1.Styles.style({
        width: 'var(--layout-container-width)',
        maxWidth: 'var(--layout-container-max_width)',
        // overflow: 'var(--layout-container-overflow)',
        overflow: 'hidden',
        textAlign: 'var(--layout-container-text_align)',
        margin: '0 auto',
    });
    exports.actionButtonStyle = components_1.Styles.style({
        boxShadow: 'none',
        $nest: {
            '&:hover': {
                filter: 'brightness(0.85)'
            },
            '> i-icon:hover': {
                fill: '#fff !important'
            }
        }
    });
});
define("@scom/scom-buttons", ["require", "exports", "@ijstech/components", "@scom/scom-buttons/index.css.ts"], function (require, exports, components_2, index_css_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const Theme = components_2.Styles.Theme.ThemeVars;
    const propertiesUISchema = {
        type: "VerticalLayout",
        elements: [
            {
                type: "HorizontalLayout",
                elements: [
                    {
                        type: "Categorization",
                        elements: [
                            {
                                type: "Category",
                                label: "General settings",
                                elements: [
                                    {
                                        type: "VerticalLayout",
                                        elements: [
                                            {
                                                type: "HorizontalLayout",
                                                elements: [
                                                    {
                                                        type: "Control",
                                                        scope: "#/properties/linkButtons",
                                                        options: {
                                                            elementLabelProp: "caption",
                                                            detail: {
                                                                type: "HorizontalLayout",
                                                                elements: [
                                                                    {
                                                                        type: "HorizontalLayout",
                                                                        elements: [
                                                                            {
                                                                                type: "Control",
                                                                                scope: "#/properties/caption"
                                                                            },
                                                                            {
                                                                                type: "Control",
                                                                                scope: "#/properties/url"
                                                                            }
                                                                        ]
                                                                    }
                                                                ]
                                                            }
                                                        }
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                type: "Category",
                                label: "Theme settings",
                                elements: [
                                    {
                                        type: "VerticalLayout",
                                        elements: [
                                            {
                                                type: "HorizontalLayout",
                                                elements: [
                                                    {
                                                        type: "Control",
                                                        scope: "#/properties/textAlign"
                                                    }
                                                ]
                                            },
                                            {
                                                type: "HorizontalLayout",
                                                elements: [
                                                    {
                                                        type: "Control",
                                                        scope: "#/properties/height"
                                                    }
                                                ]
                                            },
                                            {
                                                type: "HorizontalLayout",
                                                elements: [
                                                    {
                                                        type: "Group",
                                                        label: "Dark mode",
                                                        elements: [
                                                            {
                                                                type: "Control",
                                                                scope: "#/properties/dark/properties/linkButtonStyle",
                                                                options: {
                                                                    elementLabelProp: "caption",
                                                                    detail: {
                                                                        type: "HorizontalLayout",
                                                                        elements: [
                                                                            {
                                                                                type: "HorizontalLayout",
                                                                                elements: [
                                                                                    {
                                                                                        type: "Control",
                                                                                        scope: "#/properties/captionColor"
                                                                                    },
                                                                                    {
                                                                                        type: "Control",
                                                                                        scope: "#/properties/color"
                                                                                    },
                                                                                    {
                                                                                        type: "Control",
                                                                                        scope: "#/properties/buttonType"
                                                                                    }
                                                                                ]
                                                                            }
                                                                        ]
                                                                    }
                                                                }
                                                            }
                                                        ]
                                                    },
                                                ]
                                            },
                                            {
                                                type: "HorizontalLayout",
                                                elements: [
                                                    {
                                                        type: "Group",
                                                        label: "Light mode",
                                                        elements: [
                                                            {
                                                                type: "Control",
                                                                scope: "#/properties/light/properties/linkButtonStyle",
                                                                options: {
                                                                    elementLabelProp: "caption",
                                                                    detail: {
                                                                        type: "HorizontalLayout",
                                                                        elements: [
                                                                            {
                                                                                type: "HorizontalLayout",
                                                                                elements: [
                                                                                    {
                                                                                        type: "Control",
                                                                                        scope: "#/properties/captionColor"
                                                                                    },
                                                                                    {
                                                                                        type: "Control",
                                                                                        scope: "#/properties/color"
                                                                                    },
                                                                                    {
                                                                                        type: "Control",
                                                                                        scope: "#/properties/buttonType"
                                                                                    }
                                                                                ]
                                                                            }
                                                                        ]
                                                                    }
                                                                }
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    };
    const defaultColors = {
        titleFontColor: '#565656',
        descriptionFontColor: '#565656'
    };
    let ScomButtons = class ScomButtons extends components_2.Module {
        static async create(options, parent) {
            let self = new this(parent, options);
            await self.ready();
            return self;
        }
        constructor(parent, options) {
            super(parent, options);
            this._data = { linkButtons: [] };
            this.tag = {};
            this.defaultEdit = true;
        }
        getData() {
            return this._data;
        }
        async setData(data) {
            this._data = data;
            this.onUpdateBlock(this.tag);
        }
        getTag() {
            return this.tag;
        }
        updateTag(type, value) {
            var _a;
            this.tag[type] = (_a = this.tag[type]) !== null && _a !== void 0 ? _a : {};
            for (let prop in value) {
                if (value.hasOwnProperty(prop))
                    this.tag[type][prop] = value[prop];
            }
        }
        async setTag(value) {
            const newValue = value || {};
            if (newValue.light)
                this.updateTag('light', newValue.light);
            if (newValue.dark)
                this.updateTag('dark', newValue.dark);
            if (newValue.hasOwnProperty('height'))
                this.tag.height = newValue.height;
            if (newValue.hasOwnProperty('textAlign'))
                this.tag.textAlign = newValue.textAlign;
            this.onUpdateBlock(value);
        }
        setTheme(value) {
            this.onUpdateBlock(this.tag);
        }
        getDataSchema(readOnly = false) {
            const schema = {
                type: "object",
                properties: {
                    linkButtons: {
                        type: "array",
                        items: {
                            type: "object",
                            properties: {
                                caption: {
                                    type: "string"
                                },
                                url: {
                                    type: "string"
                                }
                            }
                        }
                    },
                    dark: {
                        type: 'object',
                        properties: {
                            linkButtonStyle: {
                                type: 'array',
                                items: {
                                    type: 'object',
                                    properties: {
                                        captionColor: {
                                            title: "Text color",
                                            type: 'string',
                                            format: 'color'
                                        },
                                        color: {
                                            title: "Background color",
                                            type: 'string',
                                            format: 'color'
                                        },
                                        buttonType: {
                                            type: 'string',
                                            enum: [
                                                'filled',
                                                'outlined',
                                                'text'
                                            ]
                                        }
                                    }
                                }
                            }
                        }
                    },
                    light: {
                        type: 'object',
                        properties: {
                            linkButtonStyle: {
                                type: 'array',
                                items: {
                                    type: 'object',
                                    properties: {
                                        captionColor: {
                                            title: "Text color",
                                            type: 'string',
                                            format: 'color'
                                        },
                                        color: {
                                            title: "Background color",
                                            type: 'string',
                                            format: 'color'
                                        },
                                        buttonType: {
                                            type: 'string',
                                            enum: [
                                                'filled',
                                                'outlined',
                                                'text'
                                            ]
                                        }
                                    }
                                }
                            }
                        }
                    },
                    textAlign: {
                        type: 'string',
                        enum: [
                            'left',
                            'center',
                            'right'
                        ],
                        readOnly
                    },
                    height: {
                        type: 'number'
                    }
                }
            };
            return schema;
        }
        _getActions(dataSchema) {
            const actions = [
                {
                    name: 'Edit',
                    icon: 'edit',
                    command: (builder, userInputData) => {
                        let oldData = {};
                        let oldTag = {};
                        return {
                            execute: async () => {
                                oldData = JSON.parse(JSON.stringify(this._data));
                                const { linkButtons } = userInputData, themeSettings = __rest(userInputData, ["linkButtons"]);
                                const generalSettings = {
                                    linkButtons: linkButtons
                                };
                                if (builder === null || builder === void 0 ? void 0 : builder.setData)
                                    builder.setData(generalSettings);
                                this.setData(generalSettings);
                                oldTag = JSON.parse(JSON.stringify(this.tag));
                                if (builder)
                                    builder.setTag(themeSettings);
                                else
                                    this.setTag(themeSettings);
                            },
                            undo: async () => {
                                this._data = JSON.parse(JSON.stringify(oldData));
                                this.onUpdateBlock(this.tag);
                                if (builder === null || builder === void 0 ? void 0 : builder.setData)
                                    builder.setData(this._data);
                                if (builder)
                                    builder.setTag(oldTag);
                                else
                                    this.setTag(oldTag);
                            },
                            redo: () => { }
                        };
                    },
                    userInputDataSchema: dataSchema,
                    userInputUISchema: propertiesUISchema
                }
                // {
                //   name: 'Theme Settings',
                //   icon: 'palette',
                //   command: (builder: any, userInputData: any) => {
                //     let oldTag = {};
                //     return {
                //       execute: async () => {
                //         if (!userInputData) return;
                //         oldTag = JSON.parse(JSON.stringify(this.tag));
                //         if (builder) builder.setTag(userInputData);
                //         else this.setTag(userInputData);
                //       },
                //       undo: () => {
                //         if (!userInputData) return;
                //         if (builder) builder.setTag(oldTag);
                //         else this.setTag(oldTag);
                //       },
                //       redo: () => { }
                //     }
                //   },
                //   userInputDataSchema: themeSchema
                // }
            ];
            return actions;
        }
        getConfigurators() {
            const self = this;
            return [
                {
                    name: 'Builder Configurator',
                    target: 'Builders',
                    getActions: () => {
                        const schema = this.getDataSchema();
                        return this._getActions(schema);
                    },
                    getData: this.getData.bind(this),
                    setData: async (data) => {
                        // const defaultData = dataJson.defaultBuilderData as any;
                        // await this.setData({...defaultData, ...data})
                        await this.setData(data);
                    },
                    getTag: this.getTag.bind(this),
                    setTag: this.setTag.bind(this)
                },
                {
                    name: 'Emdedder Configurator',
                    target: 'Embedders',
                    getActions: () => {
                        const schema = this.getDataSchema(true);
                        return this._getActions(schema);
                    },
                    getLinkParams: () => {
                        const data = this._data || {};
                        return {
                            data: window.btoa(JSON.stringify(data))
                        };
                    },
                    setLinkParams: async (params) => {
                        if (params.data) {
                            const utf8String = decodeURIComponent(params.data);
                            const decodedString = window.atob(utf8String);
                            const newData = JSON.parse(decodedString);
                            let resultingData = Object.assign(Object.assign({}, self._data), newData);
                            await this.setData(resultingData);
                        }
                    },
                    getData: this.getData.bind(this),
                    setData: this.setData.bind(this),
                    getTag: this.getTag.bind(this),
                    setTag: this.setTag.bind(this)
                }
            ];
        }
        onUpdateBlock(config) {
            var _a;
            const themeVar = document.body.style.getPropertyValue('--theme') || 'dark';
            const { linkButtonStyle = [] } = config[themeVar] || {};
            const { textAlign = 'left', height = 'auto' } = config || {};
            this.pnlButtons.clearInnerHTML();
            const buttons = (_a = this._data.linkButtons) === null || _a === void 0 ? void 0 : _a.filter(link => link.caption || link.url);
            if (buttons && buttons.length) {
                const horizontalAlignment = textAlign == 'right' ? 'end' : textAlign == 'left' ? 'start' : textAlign;
                let buttonPanel = (this.$render("i-hstack", { verticalAlignment: 'center', horizontalAlignment: horizontalAlignment, gap: "0.5rem", height: "100%" }));
                buttons.forEach((link, i) => {
                    const buttonOptions = {};
                    const { captionColor = Theme.colors.primary.contrastText, color = Theme.colors.primary.main, buttonType = 'filled' } = linkButtonStyle[i] || {};
                    if (buttonType === 'outlined') {
                        buttonOptions.border = { width: 1, style: 'solid', color: color };
                    }
                    buttonPanel.append(this.$render("i-button", Object.assign({ caption: link.caption || "", padding: { left: '1rem', right: '1rem', top: '0.5rem', bottom: '0.5rem' }, onClick: () => link.url ? window.location.href = link.url : {}, font: { color: captionColor }, background: { color: buttonType === 'filled' ? color : 'transparent' }, class: index_css_1.actionButtonStyle }, buttonOptions)));
                });
                this.pnlButtons.append(buttonPanel);
            }
            this.pnlButtons.style.textAlign = textAlign || 'left';
            this.pnlButtons.height = height;
        }
        init() {
            super.init();
            const lazyLoad = this.getAttribute('lazyLoad', true, false);
            if (!lazyLoad) {
                const data = this.getAttribute('data', true);
                data && this.setData(data);
            }
            this.setTag({
                light: Object.assign({}, defaultColors),
                dark: Object.assign({}, defaultColors)
            });
        }
        render() {
            return (this.$render("i-panel", { id: "pnlButtons", minHeight: 48 }));
        }
    };
    ScomButtons = __decorate([
        components_2.customModule,
        (0, components_2.customElements)('i-scom-buttons')
    ], ScomButtons);
    exports.default = ScomButtons;
});
