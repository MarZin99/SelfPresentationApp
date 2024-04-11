// Function to convert a hex color to RGB
function hexToRgb(hex: string) {
  // Remove '#' if present
  hex = hex.replace(/^#/, "");

  // Convert each pair of hex digits to decimal and return RGB
  return {
    r: parseInt(hex.substr(0, 2), 16),
    g: parseInt(hex.substr(2, 2), 16),
    b: parseInt(hex.substr(4, 2), 16),
  };
}

// Function to convert RGB to hex
function rgbToHex(r: any, g: any, b: any) {
  return (
    "#" +
    [r, g, b]
      .map((component) => {
        const hex = component.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
      })
      .join("")
  );
}

// Function to adjust brightness of a color
export function adjustBrightness(color: string | undefined, factor: number) {
  if (color == undefined) return color;
  const { r, g, b } = hexToRgb(color);
  return rgbToHex(
    Math.min(Math.round(r * factor), 255),
    Math.min(Math.round(g * factor), 255),
    Math.min(Math.round(b * factor), 255)
  );
}
