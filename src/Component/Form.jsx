import { BiSearch } from "react-icons/bi";
import { HiOutlineMicrophone } from "react-icons/hi";
import "./form.scss";

function Form({ inputValue, handleChange, handleSubmit, children }) {
  return (
    <form action="" className="form_area" onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Search..."
        value={inputValue}
        onChange={handleChange}
      />
      <div className="search_icon">
        <button type="submit">
          <BiSearch size={18} />
        </button>
      </div>
      <div className="mic_icon_area">
        <button type="button">
          <HiOutlineMicrophone size={18} />
        </button>
      </div>
      {children && children}
    </form>
  );
}

export default Form;
