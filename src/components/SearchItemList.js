import { TiDeleteOutline } from "react-icons/ti";
import { IconContext } from "react-icons";
import DeleteButton from "./DeleteButton";
import SetValueButton from "./SetValueButton";

function SearchItemList({ previousSearchitems, deleteSearchItem, setValue }) {
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
              <DeleteButton deleteSearchItem={deleteSearchItem} id={index}>
                <TiDeleteOutline />
              </DeleteButton>
            </IconContext.Provider>
            <SetValueButton setValue={setValue}>{item.name}</SetValueButton>
          </article>
        </div>
      ))}
    </section>
  );
}

export default SearchItemList;
