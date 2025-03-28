import {
  Module,
  customModule,
  Styles,
  Panel,
  ControlElement,
  customElements,
  Container
} from '@ijstech/components';
import { IConfig } from './interface';
import { actionButtonStyle } from './index.css';
import { Model } from './model/index';

const Theme = Styles.Theme.ThemeVars;

interface ScomPageButtonElement extends ControlElement {
  lazyLoad?: boolean;
  data?: IConfig;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ["i-page-button"]: ScomPageButtonElement;
    }
  }
}

@customModule
@customElements('i-page-button', {
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
      data: {
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
    }
  }
})
export default class ScomPageButton extends Module {
  private pnlButtons: Panel;

  private model: Model;

  static async create(options?: ScomPageButtonElement, parent?: Container) {
    let self = new this(parent, options);
    await self.ready();
    return self;
  }

  constructor(parent?: Container, options?: ScomPageButtonElement) {
    super(parent, options);
  }

  private async setData(data: IConfig) {
    this.model.setData(data);
  }

  getConfigurators() {
    return this.model.getConfigurators();
  }

  private onUpdateBlock() {
    const {
      textAlign = 'left',
      height = 'auto',
      buttonType = 'filled'
    } = this.model.tag || {};
    const {
      linkButtons = []
    } = this.model.data;

    this.pnlButtons.clearInnerHTML();
    const buttons = linkButtons?.filter(link => link.caption || link.url);
    if (buttons?.length) {
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

        if (buttonType === 'outlined') {
          buttonOptions.border = { width: 1, style: 'solid', color: Theme.colors.primary.main };
        }

        buttonPanel.append(
          <i-button
            caption={link.caption || ""}
            padding={{ left: '1rem', right: '1rem', top: '0.5rem', bottom: '0.5rem' }}
            onClick={() => link.url ? this.onClickBtn(link.url) : {}}
            font={{ color: Theme.colors.primary.contrastText }}
            background={{ color: buttonType === 'filled' ? Theme.colors.primary.main : 'transparent' }}
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

  private onClickBtn(href: string) {
    if (this._designMode) return
    const currentDomain = window.location.hostname;

    // Check link type
    if (href.startsWith('/') || href.startsWith(currentDomain) || href.startsWith(`http://${currentDomain}`) || href.startsWith(`https://${currentDomain}`)) {
      // Internal link
      window.location.href = href;
    } else if (href.startsWith('http://') || href.startsWith('https://')) {
      // External link
      window.open(href);
    } else {
      // Other cases, such as anchor links or protocols like "mailto:"
      window.location.href = href;
    }
  }

  private updateStyle(name: string, value: any) {
    value ? this.style.setProperty(name, value) : this.style.removeProperty(name);
  }

  private onUpdateTheme() {
    const themeVar = document.body.style.getPropertyValue('--theme') || 'dark';
    this.updateStyle('--colors-primary-main', this.model.tag[themeVar]?.backgroundColor);
    this.updateStyle('--colors-primary-contrast_text', this.model.tag[themeVar]?.color);
    this.updateStyle('--typography-font_size', this.model.tag?.fontSize);
  }

  init() {
    super.init();
    this.model = new Model({
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
    return (
      <i-panel id="pnlButtons" minHeight={25} />
    )
  }
}