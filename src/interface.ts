import { IFont, ISpace } from "@ijstech/components";

export interface IConfig {
  linkButtons: ILinkButton[];
}

export interface ILinkButton {
  caption?: string;
  url?: string;
  buttonType?: 'filled' | 'outlined' | 'text';
  width?: number|string;
  background?: {color?: string};
  font?: IFont;
  padding?: ISpace;
}

export interface ISettings {
  light?: ILinkButtonStyle;
  dark?: ILinkButtonStyle;
  textAlign?: 'left' | 'center' | 'right';
  height?: number|string;
  font?: IFont;
  padding?: ISpace;
}

export interface ILinkButtonStyle {
}