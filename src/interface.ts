import { Control, IBorder, IconName, IFont, ISpace } from "@ijstech/components";

export interface IConfig {
  linkButtons: ILinkButton[];
}

interface IIcon {
  name?: IconName;
  fill?: string;
  width?: number | string;
  height?: number | string;
  image?: {
    url: string;
    width?: number | string;
    height?: number | string;
    display?: any;
  }
}

export interface ILinkButton {
  caption?: string;
  url?: string;
  onClick?: (target: Control, event: Event) => void;
  icon?: IIcon;
  rightIcon?: IIcon;
  tag?: any;
  buttonType?: 'filled' | 'outlined' | 'text';
  width?: number|string;
  maxWidth?: number|string;
  background?: {color?: string};
  font?: IFont;
  padding?: ISpace;
  border?: IBorder;
  class?: string;
  tooltip?: {content: string, placement?: any};
}

export interface ISettings {
  light?: ILinkButtonStyle;
  dark?: ILinkButtonStyle;
  textAlign?: 'left' | 'center' | 'right';
  height?: number|string;
  font?: IFont;
  padding?: ISpace;
  margin?: ISpace;
  border?: IBorder;
  background?: {color?: string};
}

export interface ILinkButtonStyle {
}