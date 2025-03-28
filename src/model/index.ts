import { IDataSchema } from '@ijstech/components';
import { IConfig, ISettings } from '../interface';
import { getDataSchema, propertiesUISchema } from './formSchema';

interface IOptions {
  onUpdateBlock: () => void;
  onUpdateTheme: () => void;
}

export class Model {
  private _data: IConfig = { linkButtons: [] };
  private _tag: ISettings = {
    light: {},
    dark: {}
  };
  private _options: IOptions;

  constructor(options: IOptions) {
    this._options = options;
  }

  get data() {
    return this._data;
  }

  set data(value: IConfig) {
    this._data = value;
  }

  get tag() {
    return this._tag;
  }

  set tag(value: ISettings) {
    this._tag = value;
  }

  private getData() {
    return this._data
  }

  setData(data: IConfig) {
    this._data = data
    this._options?.onUpdateBlock()
  }

  private getTag() {
    return this._tag
  }

  setTag(value: ISettings) {
    const newValue = value || {};
    for (let prop in newValue) {
      if (newValue.hasOwnProperty(prop)) {
        if (prop === 'light' || prop === 'dark') this.updateTag(prop, newValue[prop]);
        else this._tag[prop] = newValue[prop];
      }
    }

    this._options?.onUpdateTheme();
    this._options?.onUpdateBlock();
  }

  private updateTag(type: 'light' | 'dark', value: any) {
    this._tag[type] = this._tag[type] || {};
    for (let prop in value) {
      if (value.hasOwnProperty(prop)) this._tag[type][prop] = value[prop];
    }
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
              this._options?.onUpdateBlock();
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
          const schema = getDataSchema();
          return this._getActions(schema);
        },
        getData: this.getData.bind(this),
        setData: async (data: IConfig) => {
          await this.setData({ ...data })
        },
        getTag: this.getTag.bind(this),
        setTag: this.setTag.bind(this)
      },
      {
        name: 'Emdedder Configurator',
        target: 'Embedders',
        getActions: () => {
          const schema = getDataSchema(true);
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
}