import { useSelector, useDispatch } from "react-redux";
import { StyledUl, NumberStyled, DeletBtn } from "./ContactList.styled";
import { deleteContact } from "Api"; 
import {  filteredContacts} from "Redux/selector";
import { useEffect } from "react";
import { fetchContacts } from "Api";

export const ContactList = () => {
  
  const dispatch = useDispatch();
  const contacts = useSelector(filteredContacts);
  
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch])
  
  


  return (
    <StyledUl>
      {contacts.map(({ name, phone, id }) => (
        <li key={id}>
          {name}: <NumberStyled>{phone}</NumberStyled>
          <DeletBtn onClick={() => dispatch(deleteContact(id))}>Delete</DeletBtn>
        </li>
      ))}
    </StyledUl>
  );
};
