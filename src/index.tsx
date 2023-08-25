import {
  Module,
  customModule,
  Styles,
  Panel,
  ControlElement,
  customElements,
  Container,
  IDataSchema,
  IUISchema
} from '@ijstech/components';
import { IConfig } from './global/index';
import { actionButtonStyle } from './index.css';
import dataJson from './data.json'
const Theme = Styles.Theme.ThemeVars;

const propertiesUISchema: IUISchema = {
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

interface ScomButtonsElement extends ControlElement {
  lazyLoad?: boolean;
  data: IConfig;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ["i-scom-buttons"]: ScomButtonsElement;
    }
  }
}

@customModule
@customElements('i-scom-buttons')
export default class ScomButtons extends Module {
  private pnlButtons: Panel;

  private _data: IConfig = {linkButtons: []};
  tag: any = {};

  static async create(options?: ScomButtonsElement, parent?: Container) {
    let self = new this(parent, options);
    await self.ready();
    return self;
  }

  constructor(parent?: Container, options?: ScomButtonsElement) {
    super(parent, options);
  }

  private getData() {
    return this._data
  }

  private async setData(data: IConfig) {
    this._data = data
    this.onUpdateBlock(this.tag)
  }

  private getTag() {
    return this.tag
  }

  private updateTag(type: 'light'|'dark', value: any) {
    this.tag[type] = this.tag[type] ?? {};
    for (let prop in value) {
      if (value.hasOwnProperty(prop))
        this.tag[type][prop] = value[prop];
    }
  }

  private async setTag(value: any) {
    const newValue = value || {};
    if (newValue.light) this.updateTag('light', newValue.light);
    if (newValue.dark) this.updateTag('dark', newValue.dark);
    if (newValue.hasOwnProperty('height')) this.tag.height = newValue.height;
    if (newValue.hasOwnProperty('textAlign')) this.tag.textAlign = newValue.textAlign;
    this.onUpdateBlock(value);
  }

  private setTheme(value: string) {
    this.onUpdateBlock(this.tag);
  }

  private getDataSchema(readOnly = false) {
    const schema: IDataSchema = {
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

  private _getActions(dataSchema: IDataSchema) {
    const actions = [
      {
        name: 'Edit',
        icon: 'edit',
        command: (builder: any, userInputData: any) => {
          let oldData = {};
          let oldTag = {};
          return {
            execute: async () => {
              oldData = JSON.parse(JSON.stringify(this._data))
              const {
                linkButtons,
                ...themeSettings
              } = userInputData;
              const generalSettings = {
                linkButtons: linkButtons
              };
              if (builder?.setData) builder.setData(generalSettings);
              this.setData(generalSettings);
              oldTag = JSON.parse(JSON.stringify(this.tag));
              if (builder) builder.setTag(themeSettings);
              else this.setTag(themeSettings);

            },
            undo: async () => {
              this._data = JSON.parse(JSON.stringify(oldData))
              this.onUpdateBlock(this.tag);
              if (builder?.setData) builder.setData(this._data);
              if (builder) builder.setTag(oldTag);
              else this.setTag(oldTag);
            },
            redo: () => { }
          }
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
    ]
    return actions
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
        setData: async (data: IConfig) => {
          const defaultData = dataJson.defaultBuilderData as any;
          await this.setData({...defaultData, ...data})
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
          }
        },
        setLinkParams: async (params: any) => {
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
    ]
  }

  private onUpdateBlock(config: any) {
    const themeVar = document.body.style.getPropertyValue('--theme') || 'dark';
    const {
      linkButtonStyle = []
    } = config[themeVar] || {};
    const {
      textAlign = 'left',
      height = 'auto'
    } = config || {};
    this.pnlButtons.clearInnerHTML();
    const buttons = this._data.linkButtons?.filter(link => link.caption || link.url);
    if (buttons && buttons.length) {
      const horizontalAlignment = textAlign == 'right' ? 'end' : textAlign == 'left' ? 'start' : textAlign;
      let buttonPanel = (
        <i-hstack
          verticalAlignment='center'
          horizontalAlignment={horizontalAlignment}
          gap="0.5rem"
          height="100%"
        ></i-hstack>
      )
      buttons.forEach((link, i) => {
        const buttonOptions: any = {};
        const {
          captionColor = Theme.colors.primary.contrastText,
          color = Theme.colors.primary.main,
          buttonType = 'filled'
        } = linkButtonStyle[i] || {}; 
        if (buttonType === 'outlined') {
          buttonOptions.border = { width: 1, style: 'solid', color: color };
        }
        buttonPanel.append(
          <i-button
            caption={link.caption || ""}
            padding={{ left: '1rem', right: '1rem', top: '0.5rem', bottom: '0.5rem' }}
            onClick={() => link.url ? window.location.href = link.url : {}}
            font={{ color: captionColor }}
            background={{ color: buttonType === 'filled' ? color : 'transparent' }}
            class={actionButtonStyle}
            {...buttonOptions}
          />
        )
      })
      this.pnlButtons.append(buttonPanel)
    }
    this.pnlButtons.style.textAlign = textAlign || 'left';
    this.pnlButtons.height = height
  }

  init() {
    super.init();
    const lazyLoad = this.getAttribute('lazyLoad', true, false);
    if (!lazyLoad) {
      const data = this.getAttribute('data', true);
      data && this.setData(data);
    }
  }

  render() {
    return (
      <i-panel id="pnlButtons" minHeight={25} />
    )
  }
}