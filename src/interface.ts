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
  height?: number|string;
  fontSize?: string;
}

export interface ILinkButtonStyle {
  color?: string;
  backgroundColor?: string;
}