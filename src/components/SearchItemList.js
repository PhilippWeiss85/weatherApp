import { TiDeleteOutline } from "react-icons/ti";
import { IconContext } from "react-icons";
import DeleteButton from "./DeleteButton";

function SearchItemList({ previousSearchitems, deleteSearchItem }) {
  return (
    <section className="searchitems">
      {previousSearchitems?.map((item, index) => (
        <div key={index}>
          <article className="searchitems__container">
            <IconContext.Provider
              value={{
                color: "red",
                size: "1.3em",
                className: "searchItemsIcon",
              }}
            >
              <DeleteButton deleteSearchItem={deleteSearchItem} id={item.name}>
                <TiDeleteOutline />
              </DeleteButton>
            </IconContext.Provider>
            {item.name}
          </article>
        </div>
      ))}
    </section>
  );
}

export default SearchItemList;
