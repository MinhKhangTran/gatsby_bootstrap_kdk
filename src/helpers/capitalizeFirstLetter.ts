export const captitalizeFirstLetter = (title: string): string => {
  const titleArray = title.split(" ").map((wort) => {
    return wort.at(0)?.toLocaleUpperCase() + wort.slice(1);
  });

  return titleArray.join(" ");
};
