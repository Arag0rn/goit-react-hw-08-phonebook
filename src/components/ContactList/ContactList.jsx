import { useSelector, useDispatch } from "react-redux";
import { StyledUl, NumberStyled, DeletBtn, ListContContainer, ContactCard, Name } from "./ContactList.styled";
import { deleteFetchedContact } from "Redux/Auth/operation"; 
import {  filteredContacts} from "Redux/selector";
import { useEffect } from "react";
import { fetchContacts } from "Redux/Auth/operation"; 

export const ContactList = () => {
  
  const dispatch = useDispatch();
  const contacts = useSelector(filteredContacts);
  
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch])
  
  


  return (
    <ListContContainer>
    <StyledUl>
      {contacts.map(({ name, number, id }) => (
        <ContactCard key={id}>
         <Name> {name}:</Name> <NumberStyled>{number}</NumberStyled>
          <DeletBtn onClick={() => dispatch(deleteFetchedContact(id))}>Delete</DeletBtn>
        </ContactCard>
      ))}
    </StyledUl>
    </ListContContainer>
  );
};
