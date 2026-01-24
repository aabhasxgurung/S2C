import { StyleGuide } from "@/redux/api/style-guide";

export const mockStyleGuide: StyleGuide = {
  theme: "Modern Minimalist",
  description:
    "A clean, modern design system with a focus on readability and accessibility.",
  colorSections: [
    {
      title: "Primary Colours",
      swatches: [
        {
          name: "Primary Blue",
          hexColor: "#3B82F6",
          description: "Main brand color, used for primary actions and links.",
        },
        {
          name: "Primary Dark",
          hexColor: "#1D4ED8",
          description:
            "Darker shade for hover states and heavy weight elements.",
        },
        {
          name: "Primary Light",
          hexColor: "#93C5FD",
          description: "Lighter shade for backgrounds and subtle accents.",
        },
      ],
    },
    {
      title: "Secondary & Accent Colours",
      swatches: [
        {
          name: "Accent Teal",
          hexColor: "#14B8A6",
          description: "Used for success states and refreshing accents.",
        },
        {
          name: "Accent Purple",
          hexColor: "#8B5CF6",
          description: "Used for creative highlights and creative elements.",
        },
      ],
    },
    {
      title: "UI Component Colours",
      swatches: [
        {
          name: "Card Background",
          hexColor: "#FFFFFF",
          description: "Default background for cards and surfaces.",
        },
        {
          name: "Card Border",
          hexColor: "#E5E7EB",
          description: "Subtle border for defining component boundaries.",
        },
      ],
    },
    {
      title: "Utility & Form Colours",
      swatches: [
        {
          name: "Text Primary",
          hexColor: "#111827",
          description: "High contrast text for main content.",
        },
        {
          name: "Text Secondary",
          hexColor: "#6B7280",
          description: "Lower contrast text for supporting information.",
        },
        {
          name: "Input Border",
          hexColor: "#D1D5DB",
          description: "Default border for form inputs.",
        },
      ],
    },
    {
      title: "Status & Feedback Colours",
      swatches: [
        {
          name: "Success",
          hexColor: "#10B981",
          description: "Indicates successful completion of an action.",
        },
        {
          name: "Error",
          hexColor: "#EF4444",
          description: "Indicates errors or destructive actions.",
        },
        {
          name: "Warning",
          hexColor: "#F59E0B",
          description: "Indicates warnings or required attention.",
        },
        {
          name: "Info",
          hexColor: "#3B82F6",
          description: "Indicates informational messages.",
        },
      ],
    },
  ],
  typographySections: [
    {
      title: "Headings",
      styles: [
        {
          name: "H1 - Display",
          fontFamily: "Inter, sans-serif",
          fontSize: "2.25rem",
          fontWeight: "700",
          fontStyle: "normal",
          // @ts-ignore
          lineHeight: "1.2",
          letterSpacing: "-0.025em",
          description: "Main page titles and hero sections.",
        },
        {
          name: "H2 - Section Title",
          fontFamily: "Inter, sans-serif",
          fontSize: "1.875rem",
          fontWeight: "600",
          fontStyle: "normal",
          // @ts-ignore
          lineHeight: "1.3",
          letterSpacing: "-0.015em",
          description: "Major section headings.",
        },
        {
          name: "H3 - Subsection Title",
          fontFamily: "Inter, sans-serif",
          fontSize: "1.5rem",
          fontWeight: "600",
          fontStyle: "normal",
          // @ts-ignore
          lineHeight: "1.4",
          description: "Card titles and subsection headings.",
        },
      ],
    },
    {
      title: "Body Text",
      styles: [
        {
          name: "Body Large",
          fontFamily: "Inter, sans-serif",
          fontSize: "1.125rem",
          fontWeight: "400",
          fontStyle: "normal",
          // @ts-ignore
          lineHeight: "1.6",
          description: "Lead paragraphs and important text.",
        },
        {
          name: "Body Regular",
          fontFamily: "Inter, sans-serif",
          fontSize: "1rem",
          fontWeight: "400",
          fontStyle: "normal",
          // @ts-ignore
          lineHeight: "1.5",
          description: "Default body copy for most content.",
        },
        {
          name: "Body Small",
          fontFamily: "Inter, sans-serif",
          fontSize: "0.875rem",
          fontWeight: "400",
          fontStyle: "normal",
          // @ts-ignore
          lineHeight: "1.5",
          description: "Secondary text, captions, and helpers.",
        },
      ],
    },
    {
      title: "Utility & UI",
      styles: [
        {
          name: "Button Text",
          fontFamily: "Inter, sans-serif",
          fontSize: "0.875rem",
          fontWeight: "500",
          fontStyle: "normal",
          // @ts-ignore
          lineHeight: "1.25",
          letterSpacing: "0.025em",
          description: "Text inside buttons and actionable elements.",
        },
        {
          name: "Caption",
          fontFamily: "Inter, sans-serif",
          fontSize: "0.75rem",
          fontWeight: "400",
          fontStyle: "normal",
          // @ts-ignore
          lineHeight: "1.4",
          description: "Small captions and metadata.",
        },
        {
          name: "Code",
          fontFamily: "Fira Code, monospace",
          fontSize: "0.875rem",
          fontWeight: "400",
          fontStyle: "normal",
          // @ts-ignore
          lineHeight: "1.5",
          description: "Code snippets and technical data.",
        },
      ],
    },
  ],
};
