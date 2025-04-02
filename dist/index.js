var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define("@scom/page-button/interface.ts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("@scom/page-button/index.css.ts", ["require", "exports", "@ijstech/components"], function (require, exports, components_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.actionButtonStyle = exports.containerStyle = void 0;
    const Theme = components_1.Styles.Theme.ThemeVars;
    exports.containerStyle = components_1.Styles.style({
        width: 'var(--layout-container-width)',
        maxWidth: 'var(--layout-container-max_width)',
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
                fill: `${Theme.colors.primary.contrastText} !important`
            }
        }
    });
});
define("@scom/page-button/model/formSchema.ts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getDataSchema = exports.propertiesUISchema = void 0;
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
                                                        type: "Control",
                                                        scope: "#/properties/buttonType"
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
                                                                scope: "#/properties/dark",
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
                                                                                        scope: "#/properties/color"
                                                                                    },
                                                                                    {
                                                                                        type: "Control",
                                                                                        scope: "#/properties/backgroundColor"
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
                                                                scope: "#/properties/light",
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
                                                                                        scope: "#/properties/color"
                                                                                    },
                                                                                    {
                                                                                        type: "Control",
                                                                                        scope: "#/properties/backgroundColor"
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
    exports.propertiesUISchema = propertiesUISchema;
    function getDataSchema(readOnly = false) {
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
                        color: {
                            type: 'string',
                            format: 'color'
                        },
                        backgroundColor: {
                            type: 'string',
                            format: 'color'
                        }
                    }
                },
                light: {
                    type: 'object',
                    properties: {
                        color: {
                            type: 'string',
                            format: 'color'
                        },
                        backgroundColor: {
                            type: 'string',
                            format: 'color'
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
        };
        return schema;
    }
    exports.getDataSchema = getDataSchema;
});
define("@scom/page-button/model/index.ts", ["require", "exports", "@scom/page-button/model/formSchema.ts"], function (require, exports, formSchema_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Model = void 0;
    class Model {
        constructor(options) {
            this._data = { linkButtons: [] };
            this._tag = {
                light: {},
                dark: {}
            };
            this._options = options;
        }
        get data() {
            return this._data;
        }
        set data(value) {
            this._data = value;
        }
        get tag() {
            return this._tag;
        }
        set tag(value) {
            this._tag = value;
        }
        getData() {
            return this._data;
        }
        setData(data) {
            this._data = data;
            this._options?.onUpdateBlock();
        }
        getTag() {
            return this._tag;
        }
        setTag(value) {
            const newValue = value || {};
            for (let prop in newValue) {
                if (newValue.hasOwnProperty(prop)) {
                    if (prop === 'light' || prop === 'dark')
                        this.updateTag(prop, newValue[prop]);
                    else
                        this._tag[prop] = newValue[prop];
                }
            }
            this._options?.onUpdateTheme();
            this._options?.onUpdateBlock();
        }
        updateTag(type, value) {
            this._tag[type] = this._tag[type] || {};
            for (let prop in value) {
                if (value.hasOwnProperty(prop))
                    this._tag[type][prop] = value[prop];
            }
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
                                const { linkButtons, ...themeSettings } = userInputData;
                                const generalSettings = {
                                    linkButtons: linkButtons
                                };
                                if (builder?.setData)
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
                                this._options?.onUpdateBlock();
                                if (builder?.setData)
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
                    userInputUISchema: formSchema_1.propertiesUISchema
                }
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
                        const schema = (0, formSchema_1.getDataSchema)();
                        return this._getActions(schema);
                    },
                    getData: this.getData.bind(this),
                    setData: async (data) => {
                        await this.setData({ ...data });
                    },
                    getTag: this.getTag.bind(this),
                    setTag: this.setTag.bind(this)
                },
                {
                    name: 'Emdedder Configurator',
                    target: 'Embedders',
                    getActions: () => {
                        const schema = (0, formSchema_1.getDataSchema)(true);
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
                            let resultingData = {
                                ...self._data,
                                ...newData
                            };
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
    }
    exports.Model = Model;
});
define("@scom/page-button", ["require", "exports", "@ijstech/components", "@scom/page-button/index.css.ts", "@scom/page-button/model/index.ts"], function (require, exports, components_2, index_css_1, index_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const Theme = components_2.Styles.Theme.ThemeVars;
    let ScomPageButton = class ScomPageButton extends components_2.Module {
        static async create(options, parent) {
            let self = new this(parent, options);
            await self.ready();
            return self;
        }
        constructor(parent, options) {
            super(parent, options);
        }
        get data() {
            return this.model.data;
        }
        set data(value) {
            this.model.data = value;
        }
        async setData(data) {
            this.model.setData(data);
        }
        getConfigurators() {
            return this.model.getConfigurators();
        }
        onUpdateBlock() {
            const { textAlign = 'left', height = 'auto', buttonType = 'filled' } = this.model.tag || {};
            const { linkButtons = [] } = this.model.data;
            this.pnlButtons.clearInnerHTML();
            const buttons = linkButtons?.filter(link => link.caption || link.url);
            if (buttons?.length) {
                const horizontalAlignment = textAlign == 'right' ? 'end' : textAlign == 'left' ? 'start' : textAlign;
                let buttonPanel = (this.$render("i-hstack", { verticalAlignment: 'center', horizontalAlignment: horizontalAlignment, gap: "0.5rem", height: "100%" }));
                buttons.forEach((link, i) => {
                    const buttonOptions = {};
                    if (buttonType === 'outlined') {
                        buttonOptions.border = { width: 1, style: 'solid', color: Theme.colors.primary.main };
                    }
                    buttonPanel.append(this.$render("i-button", { caption: link.caption || "", padding: { left: '1rem', right: '1rem', top: '0.5rem', bottom: '0.5rem' }, onClick: () => link.url ? this.onClickBtn(link.url) : {}, font: { color: Theme.colors.primary.contrastText }, background: { color: buttonType === 'filled' ? Theme.colors.primary.main : 'transparent' }, class: index_css_1.actionButtonStyle, ...buttonOptions }));
                });
                this.pnlButtons.append(buttonPanel);
            }
            this.pnlButtons.style.textAlign = textAlign || 'left';
            this.pnlButtons.height = height;
        }
        onClickBtn(href) {
            if (this._designMode)
                return;
            const currentDomain = window.location.hostname;
            // Check link type
            if (href.startsWith('/') || href.startsWith(currentDomain) || href.startsWith(`http://${currentDomain}`) || href.startsWith(`https://${currentDomain}`)) {
                // Internal link
                window.location.href = href;
            }
            else if (href.startsWith('http://') || href.startsWith('https://')) {
                // External link
                window.open(href);
            }
            else {
                // Other cases, such as anchor links or protocols like "mailto:"
                window.location.href = href;
            }
        }
        updateStyle(name, value) {
            value ? this.style.setProperty(name, value) : this.style.removeProperty(name);
        }
        onUpdateTheme() {
            // const themeVar = document.body.style.getPropertyValue('--theme') || 'dark';
            this.updateStyle('--colors-primary-main', this.model.tag?.background?.color);
            this.updateStyle('--colors-primary-contrast_text', this.model.tag?.font?.color);
            this.updateStyle('--typography-font_size', this.model.tag?.font?.size);
        }
        init() {
            super.init();
            this.model = new index_1.Model({
                onUpdateBlock: this.onUpdateBlock.bind(this),
                onUpdateTheme: this.onUpdateTheme.bind(this)
            });
            const lazyLoad = this.getAttribute('lazyLoad', true, false);
            if (!lazyLoad) {
                const data = this.getAttribute('data', true);
                data && this.setData(data);
            }
            const tag = this.getAttribute('tag', true);
            tag && this.model.setTag(tag);
        }
        render() {
            return (this.$render("i-panel", { id: "pnlButtons", minHeight: 25 }));
        }
    };
    ScomPageButton = __decorate([
        components_2.customModule,
        (0, components_2.customElements)('i-page-button', {
            icon: 'stop',
            props: {
                data: {
                    type: 'object',
                    default: {}
                }
            },
            className: 'ScomPageButton',
            events: {},
            dataSchema: {
                type: 'object',
                properties: {
                    linkButtons: {
                        type: 'array',
                        items: {
                            type: 'object',
                            properties: {
                                caption: {
                                    type: 'string'
                                },
                                url: {
                                    type: 'string'
                                }
                            }
                        },
                    }
                }
            }
        })
    ], ScomPageButton);
    exports.default = ScomPageButton;
});
