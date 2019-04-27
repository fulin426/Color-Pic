// Convert Hex to RGB functions
export const hexToR = h => {
  return parseInt(cutHex(h).substring(0, 2), 16);
};

export const hexToG = h => {
  return parseInt(cutHex(h).substring(2, 4), 16);
};

export const hexToB = h => {
  return parseInt(cutHex(h).substring(4, 6), 16);
};

const cutHex = h => {
  return h.charAt(0) === "#" ? h.substring(1, 7) : h;
};

// Convert RGB to Hex functions
export const rgbToHex = (R, G, B) => {
  return "#" + toHex(R) + toHex(G) + toHex(B);
};

export const toHex = n => {
  n = parseInt(n, 10);
  if (isNaN(n)) return "00";
  n = Math.max(0, Math.min(n, 255));
  return (
    "0123456789ABCDEF".charAt((n - (n % 16)) / 16) +
    "0123456789ABCDEF".charAt(n % 16)
  );
};
