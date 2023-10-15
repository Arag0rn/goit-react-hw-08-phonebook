import { Formik } from 'formik';
import * as Yup from 'yup';
import { StyledForm, ErMsg, StyledField, Styledlabel, FormBtnStyled, RegContContainer} from './RegistrForm.styled';
import { useDispatch } from 'react-redux';
import { register } from 'Redux/Auth/operation';


const SignupSchema = Yup.object().shape({
  name: Yup.string()
  .min(3, 'Too Short!')
  .max(50, 'Too Long!')
  .required('Required'),
email: Yup.string()
  .email('Invalid email address')
  .required('Required'),
password: Yup.string()
  .min(5, 'Too Short!')
  .max(50, 'Too Long!')
  .matches(/[a-zA-Z]/, 'Must contain at least one letter')
  .required('Required'),
});


export const RegForm  = ( ) =>{
  const dispatch = useDispatch();
    return <>
        <RegContContainer>
        <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={(values, action) => {
        action.resetForm();
        dispatch(register({
          name: values.name,
          email: values.email,
          password: values.password,
        }));
        
      }
    }
    >
      <StyledForm>
        <Styledlabel htmlFor="name">Name</Styledlabel>
        <StyledField id="name" name="name" 
        placeholder="Jane" 
        />
        <ErMsg component="span" name="name" />

        <Styledlabel htmlFor="email">Email</Styledlabel>
        <StyledField id="email" name="email" 
        placeholder="email" 
        />
        <ErMsg component="span" name="name" />

        <Styledlabel htmlFor="password">Password</Styledlabel>
        <StyledField id="password" 
            name="password"   
            type="password"
            placeholder="password"
            title="password number must be digits and can contain spaces, dashes, parentheses and can start with +"
         />
          <ErMsg component="span" name="phone" />
        <FormBtnStyled type="submit">Submit</FormBtnStyled>
      </StyledForm>
    </Formik>
         
        </RegContContainer>
       </>

  
}