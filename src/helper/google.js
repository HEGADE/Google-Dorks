export const google = (search, exclude, sites) => {
  if (search.trim().length <= 0 || exclude.trim().length <= 0)
    return alert("Fill the field");
  let excludedString = makeExcludeString(exclude);
  let site = sites ? "site:" : "";
  window.location = `https://google.com?q=${site}${sites} ${search} ${excludedString} `;
};
const makeExcludeString = (exclude) => {
  let excludedString = "";

  if (exclude.indexOf(",")) {
    let excluded = exclude.split(",");
    for (let iterator of excluded) {
      excludedString += ` -"${iterator}"`;
    }
  }
  return (exclude = excludedString || exclude);
};
