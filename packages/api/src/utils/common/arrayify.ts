export const arrayify = <T>(array: T | T[]): T[] => {
  if (Array.isArray(array)) {
    return array;
  }
  return [array];
};
