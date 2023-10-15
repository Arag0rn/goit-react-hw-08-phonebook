import { Formik } from 'formik';
import * as Yup from 'yup';
import { FormContainer, StyledForm, ErMsg, StyledField, Styledlabel, FormBtnStyled} from './LoginForm.styled';
import { useDispatch } from 'react-redux';

import { logIn } from 'Redux/Auth/operation';


const SignupSchema = Yup.object().shape({
  email: Yup.string()
  .email('Invalid email address')
  .required('Required'),
password: Yup.string()
  .min(5, 'Too Short!')
  .max(50, 'Too Long!')
  .matches(/[a-zA-Z]/, 'Must contain at least one letter')
  .required('Required'),
});


export const LoginForm  = ( ) =>{
  const dispatch = useDispatch();
    return <>
        <FormContainer>
        <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={(values, action) => {
        action.resetForm();
        dispatch(logIn({
          email: values.email,
          password: values.password,
        }));
      }
    }
    >
      <StyledForm>
        <Styledlabel htmlFor="email">Email</Styledlabel>
        <StyledField id="email" name="email" 
        placeholder="email" 
        />
        <ErMsg component="span" name="email" />

        <Styledlabel htmlFor="password">Password</Styledlabel>
        <StyledField id="password" 
            name="password"   
            type="password"
            placeholder="password" 
            title="password number must be digits and can contain spaces, dashes, parentheses and can start with +"
         />
          <ErMsg component="span" name="password" />
        <FormBtnStyled type="submit">Submit</FormBtnStyled>
      </StyledForm>
    </Formik>
         
        </FormContainer>
       </>

  
}