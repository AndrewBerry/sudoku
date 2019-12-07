export function className(classNames) {
  return Object.entries(classNames)
    .reduce(
      (classNames, [className, enabled]) => {
        if (!enabled) {
          return classNames;
        }

        return [
          ...classNames,
          className
        ];
      }, 
      []
    )
    .join(" ");
}
