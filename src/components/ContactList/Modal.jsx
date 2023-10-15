import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { ErMsg, FormBtnStyled, StyledField, StyledForm, Styledlabel } from 'components/ContactForm/ContactForm.styled';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { editContact } from 'Redux/Auth/operation';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  p: 4,
};

export default function BasicModal({ open, selectedContact, onClose }) {
;
  const dispatch = useDispatch(); 
  
  useEffect(() => {
    dispatch(editContact());
  }, [dispatch])
  return (
    <div>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {selectedContact ? (
            <div>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Editing Contact
              </Typography>
      
              <Formik
      initialValues={{
        name: `${selectedContact.name}`,
        number: `${selectedContact.number}`,
      }}

      onSubmit={(values, action) => {
        const newContact = {
          id: selectedContact.id,
          name: values.name,
          number: values.number,
        };
        
        dispatch(editContact(newContact));
        action.resetForm();
        onClose();
      }
    }
    >
      <StyledForm>
        <Styledlabel htmlFor="name">Name</Styledlabel>
        <StyledField id="name" name="name" 
        placeholder="Jane" 
        />
        <ErMsg component="span" name="name" />

        <Styledlabel htmlFor="number">Number</Styledlabel>
        <StyledField id="number" 
            name="number"   
            type="tel"
            placeholder="555-55-55"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
         />
          <ErMsg component="span" name="number" />
        <FormBtnStyled type="submit">Submit</FormBtnStyled>
      </StyledForm>
    </Formik>
            </div>
          ) : (
            <Typography id="modal-modal-title" variant="h6" component="h2">
              No contact selected
            </Typography>
          )}
        </Box>
      </Modal>
    </div>
  );
}