import { onFilter } from "Redux/filterSlice";
import { StyledDiv, InputFilter } from "./Filter.styled";
import { useDispatch } from "react-redux";

export const Filter = () => {
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    const filterValue = event.target.value;
    console.log(filterValue); 
    dispatch(onFilter(filterValue));
  };

  return (
    <StyledDiv>
      <InputFilter
        type="text"
        placeholder="Search"
        onChange={handleInputChange}
      />
    </StyledDiv>
  );
};