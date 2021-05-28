import React, { useContext } from "react";
import { storeStore } from "../../state/Store";
export const Phone = ({setHeight}) => {
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
      <form >

        <p>Enter the name to search</p>

        <input aria-required
        placeholder="ninja"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <p>Enter some thing ,that my be in user's bio</p>

        <input aria-required
                placeholder="singer"

          type="text"
          value={exclude}
          onChange={(e) => setExclude(e.target.value)}
        />
        <p>location Or place</p>

        <input aria-required
                        placeholder="usa"

          type="text"
          value={sites}
          onChange={(e) => setSites(e.target.value)}
        />
      </form>
      </div>
    </>
  );
};
