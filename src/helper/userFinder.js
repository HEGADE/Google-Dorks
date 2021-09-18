export const userFinder = (username, bio, extra) => {
  if (username.trim()?.length < 3)
    return alert("username must be three character long");
  if (bio.trim()?.length === 0) return alert("fill up the bio filed");
  if (extra.trim()?.length === 0) return alert("fill up the extra filed filed");
  window.location = `https://google.com/search?q=site:instagram.com (intext:${username} | intext:${bio}) ${extra}`;
};
