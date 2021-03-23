export const themes = {
  light: {
    background: '#FFF',
  },
  dark: {
    background: '#202A32',
  },
};

export type ThemeName = keyof typeof themes;

export type ThemeType = typeof themes.light | typeof themes.dark;
