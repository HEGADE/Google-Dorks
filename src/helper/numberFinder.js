
export const numberFinder = (number) => {
  if( number.length===0) return alert("Enter number to continue")
  window.location = `https://google.com?q=${number} ${number}  `;
}
