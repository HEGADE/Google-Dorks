export const google = (search, exclude, sites,fileType) => {
  if (search.trim()?.length <= 0)
    return alert("Fill the field");
  let fileTypeString = makeFileTypeString(fileType);
  let excludedString = makeExcludeString(exclude);
  let site = sites ? `site: ${sites}` : "";
  let url=`https://google.com/search?q=${search}`;
  if(excludedString)
  url +=` ${excludedString}`
  if(sites)
  url+=` ${site}`;
  console.log(fileTypeString);
  if(fileTypeString)
  url+= ` ${fileTypeString}`

  console.log(url);
  window.location = url;
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
const makeFileTypeString = (fileType) => {
 
  return fileType.trim().length<=0?null:`filetype:${fileType}`;
};
