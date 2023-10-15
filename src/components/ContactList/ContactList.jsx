import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { StyledUl, NumberStyled, DeletBtn, ListContContainer, ContactCard, Name, EditIcon } from "./ContactList.styled";
import { deleteFetchedContact } from "Redux/Auth/operation";
import { filteredContacts } from "Redux/selector";
import { fetchContacts } from "Redux/Auth/operation";
import BasicModal from "./Modal";
import  Icon from "./EditIcon.png"

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(filteredContacts);
  const [open, setOpen] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);

  const openModal = (contact) => {
    setSelectedContact(contact); 
    setOpen(true);
  };

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ListContContainer>
      <BasicModal open={open} selectedContact={selectedContact} onClose={() => setOpen(false)} />
      {!open && (
        <StyledUl>
          {contacts.map(({ name, number, id }) => (
            <ContactCard key={id}>
              <Name> {name}:</Name> <NumberStyled>{number}</NumberStyled>
              <EditIcon src={Icon} alt="Edit Icon" onClick={() => openModal({ id, name, number })} />
              <DeletBtn onClick={() => dispatch(deleteFetchedContact(id))}>Delete</DeletBtn>
            </ContactCard>
          ))}
        </StyledUl>
      )}
    </ListContContainer>
  );
};