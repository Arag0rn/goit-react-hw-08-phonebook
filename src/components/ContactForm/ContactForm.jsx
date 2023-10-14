import { Formik } from 'formik';
import * as Yup from 'yup';
import { AddContContainer, StyledForm, ErMsg, StyledField, Styledlabel, FormBtnStyled} from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addFetchedContact } from 'Redux/Auth/operation'; 
import { nanoid } from 'nanoid';

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
    number: Yup.string()
    .min(5, 'Too Short!')
    .max(50, 'Too Long!')
    .matches(/^\d+$/, 'Must only contain digits') 
    .required('Required'),
});


export const ContactForm  = ( ) =>{
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.contacts);
    return <>
        <AddContContainer>
        <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={(values, action) => {
        const newContact = {
          id: nanoid(), 
          name: values.name,
          number: values.number,
        };
  
        if (contacts.some(contact => contact.name.toLowerCase() === values.name.toLowerCase())) {
          alert(`${values.name} is already in contacts`);
          return;
        } else {
        dispatch(addFetchedContact(newContact));
        action.resetForm();
      }}
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
          <ErMsg component="span" name="phone" />
        <FormBtnStyled type="submit">Submit</FormBtnStyled>
      </StyledForm>
    </Formik>
         
        </AddContContainer>
       </>

  
}