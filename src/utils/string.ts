export const splitLastOccurrence = (str: string, substring: string) => {
  const lastIndex = str.lastIndexOf(substring);
  const before = str.slice(0, lastIndex);
  const after = str.slice(lastIndex + 1);

  return [before, after];
};
