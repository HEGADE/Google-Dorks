export const google = (search = "", exclude, sites, fileType, exactSearch) => {
  if (search.trim()?.length <= 0 && exactSearch.trim()?.length <= 0)
    return alert("Fill in the required field (Search query / exact query)");
  let fileTypeString = makeFileTypeString(fileType);
  let excludedString = makeExcludeString(exclude);
  exactSearch = exactSearch ? `"${exactSearch}"` : "";
  let site = sites ? `site:${sites}` : "";
  let url = `https://google.com/search?q=${search}`;
  if (sites) url += ` ${site}`;
  if (excludedString) url += ` ${excludedString}`;
  if (exactSearch) url += ` ${exactSearch}`;
  if (fileTypeString) url += ` ${fileTypeString}`;

  window.location = url;
};
const makeExcludeString = (exclude) => {
  let excludedString = "";
  if (exclude) {
    if (exclude.indexOf(",")) {
      let excluded = exclude.split(",");
      for (let iterator of excluded) {
        excludedString += ` -${iterator.trim()}`;
      }
    }
    return excludedString;
  }
  return null;
};
const makeFileTypeString = (fileType) => {
  let fileTypesString = "(";
  if (fileType) {
    if (fileType.indexOf(",")) {

      let types = fileType.split(",");
      for (let [i, v] of types.entries()) {
        if (i === 0) fileTypesString += ` filetype:${v.trim()}`;
        else fileTypesString += ` OR filetype:${v.trim()}`;
      }
      fileTypesString += " )";

    }
  }
  return fileType.trim().length <= 0 ? null : fileTypesString;
};
