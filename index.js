export const DefinedAssign = (target, source) => {
  Object.keys(source).forEach((k) => {
    if(source[k]) {
      target[k] = source[k]
    }

  });

  return target;
}
