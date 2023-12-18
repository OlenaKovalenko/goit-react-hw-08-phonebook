import { Formik } from "formik";
import * as Yup from 'yup';
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import { BtnAddContact, ErrorMsg, FormLabel, StyledField, StyledForm } from "components/ContactForm/ContactForm.styled";

const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email address')
        .required('Email is required!'),
    password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .max(20, 'Password is too long')
        .required('Password is required!'),
    
});

export const LoginForm = () => {
    const dispatch = useDispatch();

    return (
        <Formik
            initialValues={{
                name: '',
                email: '',
                password: '',
            }}
        
            validationSchema={validationSchema}
        
            onSubmit={(values, actions) => {
                dispatch(logIn(values));
                actions.resetForm();
            }}
        >
            <StyledForm>
                <FormLabel htmlFor="email">Email</FormLabel>
                <StyledField type="email" name="email" id="email" autoComplete="on" placeholder="" />
                <ErrorMsg name="email" component="div" />
                    
                <FormLabel htmlFor="password">Password</FormLabel>
                <StyledField type="password" name="password" id="password" autoComplete="on" placeholder="" />
                <ErrorMsg name="password" component="div" />

                <BtnAddContact type="submit">Register</BtnAddContact>
            </StyledForm>
        </Formik>
    );
};