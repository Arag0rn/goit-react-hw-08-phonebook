import { Formik } from 'formik';
import * as Yup from 'yup';
import { StyledForm, ErMsg, StyledField, Styledlabel, FormBtnStyled} from './LoginForm.styled';
import { useDispatch } from 'react-redux';

import { logIn } from 'Redux/Auth/operation';


// const SignupSchema = Yup.object().shape({
//   name: Yup.string()
//     .min(3, 'Too Short!')
//     .max(50, 'Too Long!')
//     .required('Required'),
//     phone: Yup.string()
//     .min(5, 'Too Short!')
//     .max(50, 'Too Long!')
//     .matches(/^\d+$/, 'Must only contain digits') 
//     .required('Required'),
// });


export const LoginForm  = ( ) =>{
  const dispatch = useDispatch();
    return <>
        <div>
        <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
      }}
      // validationSchema={SignupSchema}
      onSubmit={(values, action) => {
        action.resetForm();
        dispatch(logIn({
          name: values.name,
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
         
        </div>
       </>

  
}