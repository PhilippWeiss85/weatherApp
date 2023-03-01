import { IconContext } from "react-icons";
import { BiSearch } from "react-icons/bi";

function Form({ handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="city">Enter your City</label>
      <fieldset>
        <input name="city" id="city" type="text" />
        <button type="submit" id="sumbit">
          <IconContext.Provider
            value={{
              color: "grey",
              size: "1.5rem",
              className: "global-class-name",
            }}
          >
            <BiSearch />
          </IconContext.Provider>
        </button>
      </fieldset>
    </form>
  );
}

export default Form;
