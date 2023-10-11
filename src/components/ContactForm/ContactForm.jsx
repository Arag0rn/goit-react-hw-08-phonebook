import { Formik } from 'formik';
import * as Yup from 'yup';
import { StyledForm, ErMsg, StyledField, Styledlabel, FormBtnStyled} from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContscts } from 'Api';


const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
    phone: Yup.string()
    .min(5, 'Too Short!')
    .max(50, 'Too Long!')
    .matches(/^\d+$/, 'Must only contain digits') 
    .required('Required'),
});


export const ContactForm  = ( ) =>{
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.contacts);
    return <>
        <div>
        <Formik
      initialValues={{
        name: '',
        phone: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={(values, action) => {
        if (contacts.some(contact => contact.name.toLowerCase() === values.name.toLowerCase())) {
          alert(`${values.name} is already in contacts`);
          return;
        } else {
        dispatch(addContscts(values));
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

        <Styledlabel htmlFor="phone">Number</Styledlabel>
        <StyledField id="phone" 
            name="phone"   
            type="tel"
            placeholder="555-55-55"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
         />
          <ErMsg component="span" name="phone" />
        <FormBtnStyled type="submit">Submit</FormBtnStyled>
      </StyledForm>
    </Formik>
         
        </div>
       </>

  
}