/**
 * Creates a gradient CSS string in the form
 * linear-gradient(${degrees}deg, rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}) x%, ...)
 * There is a rgba value for each # of section and for each section i, x is calculated
 * By the applying the `mapper` function on `1 * i / numSections`
 * @param degrees
 * @param rgb
 * @param numSections
 * @param mapper
 */
export const generateGradient: (
  degrees: number,
  rgb: [number, number, number],
  numSection: number,
  sectionMapper: (section: number) => number
) => string = (degrees, rgb, numSections, mapper) => {
  const sections: number[] = [];
  for (let i = 0; i < numSections; i++) {
    sections.push((1 * i) / numSections);
  }
  const gradient = sections.map(section => {
    const rgba = Math.round(mapper(section) * 100) / 100;
    const percent = Math.round(section * 100);
    return `rgba(${rgb[0]},${rgb[1]},${rgb[2]},${rgba}) ${percent}%`;
  });

  return `linear-gradient(${degrees}deg,${gradient.join(',')})`;
};
