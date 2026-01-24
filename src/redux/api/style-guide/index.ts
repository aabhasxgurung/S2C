export interface ColorSwatch {
  name: string;
  hexColor: string;
  description?: string;
}

export interface ColorSection {
  title:
    | "Primary Colours"
    | "Secondary & Accent Colours"
    | "UI Component Colours"
    | "Utility & Form Colours"
    | "Status & Feedback Colours";
  swatches: ColorSwatch[];
}
export interface ColorStyle {
  name: string;
  hex: string;
}
export interface TypographyStyle {
  name: string;
  fontFamily: string;
  fontSize: string;
  fontWeight: string;
  fontStyle: string;
  letterSpacing?: string;
  description?: string;
}

export interface TypographySection {
  title: string;
  styles: TypographyStyle[];
}
export interface StyleGuide {
  theme: string;
  description: string;
  colorSections: [
    ColorSection,
    ColorSection,
    ColorSection,
    ColorSection,
    ColorSection,
  ];
  typographySections: [TypographySection, TypographySection, TypographySection];
}
