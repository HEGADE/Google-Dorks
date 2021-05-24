import React, { useContext } from "react";
import { storeStore } from "../../state/Store";
export const Phone = () => {
  const { search, setSearch } = useContext(storeStore);
  return (
    <>
      <div className="phone">
        <p>Enter the phone number to search</p>

        <input
          type="number"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </>
  );
};
export const Insta = () => {
  const { search, setSearch,exclude,setExclude,sites,setSites } = useContext(storeStore);
  return (
    <>
      <div className="phone">
        <p>Enter the name to search</p>

        <input
          type="text"
          value={search}
          onChange={(e) => setExclude(e.target.value)}
        />
        <p>Enter some thing ,that my be there user's bio</p>

        <input
          type="text"
          value={exclude}
          onChange={(e) => setSearch(e.target.value)}
        />
        <p>Enter some thing ,that my be there user's bio</p>

        <input
          type="text"
          value={sites}
          onChange={(e) => setSites(e.target.value)}
        />
      </div>
    </>
  );
};
