import { TiDeleteOutline } from "react-icons/ti";
import { IconContext } from "react-icons";

function SearchItemList({ previousSearchitems }) {
  return (
    <section className="searchitems">
      {previousSearchitems?.map((item) => (
        <>
          <article className="searchitems__container" key={item}>
            <IconContext.Provider
              value={{
                color: "red",
                size: "1.3em",
                className: "searchItemsIcon",
              }}
            >
              <TiDeleteOutline />
            </IconContext.Provider>
            {item}
          </article>
        </>
      ))}
    </section>
  );
}

export default SearchItemList;
