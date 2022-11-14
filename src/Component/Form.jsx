import { BiSearch } from "react-icons/bi"; 
import  './form.scss'

function Form({inputValue,handleChange,handleSubmit,children}) {
  return (
    <form action="" className="form_area" onSubmit={handleSubmit}>
    <input type="search" value={inputValue} onChange={handleChange}  />
    <div className="search_icon">
      <button type="submit">
        <BiSearch />
      </button>
    </div>
  {children && children}
  </form>
  )
}

export default Form