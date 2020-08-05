export const formAggregateMatcher = (
  aggregateFunc: 'and' | 'or' | 'nor',
  opt: Record<string, any>
) => {
  const matchers: Record<string, any>[] = [];
  const aggregateFunKey = `$${aggregateFunc}`;
  Object.entries(opt).forEach(([k, v]) => {
    if (k === 'id') {
      matchers.push({
        _id: v
      });
    } else {
      matchers.push({
        [k]: opt[k]
      });
    }
  });
  if (matchers.length > 0) {
    return { [aggregateFunKey]: matchers };
  }
  return {};
};
