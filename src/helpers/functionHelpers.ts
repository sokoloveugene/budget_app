export const checkValue = (value: number): string => {
  switch (true) {
    case value > 9e12:
    case value < -9e12:
      return "really?";

    case value >= 1e9:
    case value < -1e9:
      return `${(value / 1e9).toFixed(1)} B`;

    case value >= 1e6:
    case value < -1e6:
      return `${(value / 1e6).toFixed(1)} M`;

    case value >= 1e3:
    case value < -1e3:
      return `${(value / 1e3).toFixed(1)} K`;

    default:
      return value.toString();
  }
};
