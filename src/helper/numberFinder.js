
export const numberFinder = (number) => {
  if( number.length===0) return alert("Fill the field")
  window.location = `https://google.com/search?q=url: ${number} | intext:${number}`;
}
