
export const google = (search = "", exclude, sites, fileType, exactSearch) => {
  if (search.trim()?.length <= 0 && exactSearch.trim()?.length <= 0 )
    return alert("Fill in the required field (Search query / exact query)");
  let fileTypeString = makeFileTypeString(fileType);
  let excludedString = makeExcludeString(exclude);
  exactSearch = exactSearch?`"${exactSearch}"`:"";
  let site = sites ? `site: ${sites}` : "";
  let url = `https://google.com/search?q=${search}`;
  if (excludedString) url += ` ${excludedString}`;
  if (sites) url += ` ${site}`;
  if (fileTypeString) url += ` ${fileTypeString}`;

  if (exactSearch) url += ` ${exactSearch}`;
  if (excludedString) url += ` ${excludedString}`;
  if (sites) url += ` ${site}`;
  console.log(fileTypeString);
  if (fileTypeString) url += ` ${fileTypeString}`;
  window.location = url;
};
const makeExcludeString = (exclude) => {
  let excludedString = "";
  if(exclude){
  if (exclude.indexOf(",")) {
    let excluded = exclude.split(",");
    for (let iterator of excluded) {
      excludedString += ` -"${iterator}"`;
    }
  }
  return excludedString
}
  return null;
};
const makeFileTypeString = (fileType) => { 
  
  return fileType.trim().length <= 0 ? null : `filetype:${fileType}`
 


};
