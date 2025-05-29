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

  get data() {
    return this.model.data;
  }

  set data(value: IConfig) {
    this.model.data = value;
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
      font: fontConfig,
      padding: paddingConfig,
      border: borderConfig,
      margin,
      background
    } = this.model.tag || {};
    const {
      linkButtons = []
    } = this.model.data;

    this.pnlButtons.clearInnerHTML();
    if (margin) {
      this.margin = margin;
    }

    const buttons = linkButtons?.filter(link => link.caption || link.url || link.icon);

    if (buttons?.length) {
      const horizontalAlignment = textAlign == 'right' ? 'end' : textAlign == 'left' ? 'start' : textAlign;
      let buttonPanel = (
        <i-hstack
          verticalAlignment='center'
          horizontalAlignment={horizontalAlignment}
          gap="0.5rem"
          height="100%"
          wrap='wrap'
        ></i-hstack>
      )
      buttons.forEach((link, i) => {
        const buttonOptions: Record<string, any> = {};
        const buttonType = link.buttonType || 'filled';
        const bgColor = link.background?.color || background?.color || Theme.colors.primary.main;
        const font = link.font || {color: Theme.colors.primary.contrastText, ...(fontConfig || {})};
        const padding = link.padding || paddingConfig || {left: '1rem', right: '1rem', top: '0.5rem', bottom: '0.5rem'};
        const border = link.border || borderConfig || {};

        if (buttonType === 'outlined') {
          buttonOptions.border = { width: 1, style: 'solid', color: bgColor, ...border };
        } else if (buttonType === 'filled') {
          buttonOptions.border = border;
        }

        buttonPanel.append(
          <i-button
            caption={link.caption || ""}
            padding={padding}
            icon={link.icon ? {...link.icon, stack: {shrink: '0'}} : undefined}
            rightIcon={link.rightIcon ? {...link.rightIcon, stack: {shrink: '0'}} : undefined}
            onClick={(target, event) => link.url ? this.onClickBtn(link.url) : link.onClick ? link.onClick(target, event) : {}}
            font={font}
            background={{ color: buttonType === 'filled' ? bgColor : 'transparent' }}
            height="100%"
            width={link.width || 'auto'}
            maxWidth={link.maxWidth || 'auto'}
            tooltip={link.tooltip || undefined}
            stack={{grow: '0'}}
            boxShadow='none'
            tag={link.tag}
            class={`${actionButtonStyle} ${link.class || ''}`}
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
    // const currentDomain = window.location.hostname;
    const parentSite = this.closest('i-decom-site');

    // Check link type
    // if (href.startsWith('/') || href.startsWith(currentDomain) || href.startsWith(`http://${currentDomain}`) || href.startsWith(`https://${currentDomain}`)) {
    //   // Internal link
    //   if (parentSite) {
    //     window.history.pushState('', '', `${href}`);
    //     window.dispatchEvent(new Event('popstate'));
    //   }
    //   else {
    //     window.location.href = href;
    //   }
    // }

    if (href.startsWith('mailto:')) {
      // protocols like "mailto:"
      window.location.href = href;
    }
    else if (href.startsWith('http://') || href.startsWith('https://')) {
      // External link
      window.open(href);
    }
    else {
      // Other cases
      if (parentSite) {
        window.history.pushState('', '', `${href}`);
        window.dispatchEvent(new Event('popstate'));
      }
      else {
        window.location.href = href;
      }
    }
  }

  private updateStyle(name: string, value: any) {
    value ? this.style.setProperty(name, value) : this.style.removeProperty(name);
  }

  private onUpdateTheme() {
    this.updateStyle('--typography-font_size', this.model.tag?.font?.size);
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

    const background = this.getAttribute('background', true);

    const tag = this.getAttribute('tag', true);
    if (tag) {
      tag.background = background;
      this.model.setTag(tag);
    } else {
      this.model.setTag({background});
    }

    this.background = {"color": "transparent"};
  }

  render() {
    return (
      <i-panel id="pnlButtons" minHeight={25} />
    )
  }
}