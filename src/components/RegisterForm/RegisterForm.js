import { Formik } from "formik";
import * as Yup from 'yup';
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
// import css from "./RegisterForm.module.css";
import { BtnAddContact, ErrorMsg, FormLabel, StyledField, StyledForm } from "components/ContactForm/ContactForm.styled";

const validationSchema = Yup.object().shape({
    name: Yup.string()
    .min(2, 'Name must contain at least 2 characters')
    .max(30, 'Too long name')
    .required('Name is required!'),
    email: Yup.string().email('Invalid email address')
        .required('Email is required!'),
    password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .max(20, 'Password is too long')
        .required('Password is required!'),
    
});

export const RegisterForm = () => {
    const dispatch = useDispatch();

    // const handleSubmit = e => {
    //     e.preventDefault();
    //     const form = e.currentTarget;
    //     dispatch(
    //         register({
    //             name: form.elements.name.value,
    //             email: form.elements.email.value,
    //             password: form.elements.password.value,
    //         })
    //     );
    //     form.reset();
    // };

    // return (
    //     <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
    //         <label className={css.label}>
    //             Username
    //             <input type="text" name="name" />
    //         </label>
    //         <label className={css.label}>
    //             Email
    //             <input type="email" name="email" />
    //         </label>
    //         <label className={css.label}>
    //             Password
    //             <input type="password" name="password" />
    //         </label>
    //         <button type="submit">Register</button>
    //     </form>
    // );

    return (
    <Formik
        initialValues={{
            name: '',
            email: '',
            password: '',
        }}
        
        validationSchema={validationSchema}
        
        onSubmit={(values, actions) => {
            dispatch(register(values));
            actions.resetForm();
        }}
        >
        <StyledForm>
            <FormLabel htmlFor="name">Username</FormLabel>
            <StyledField type="text" name="name" id="name" autoComplete="on" placeholder="John Smith" />
            <ErrorMsg name="name" component="div" />

            <FormLabel htmlFor="email">Email</FormLabel>
            <StyledField type="email" name="email" id="email" autoComplete="on" placeholder="" />
            <ErrorMsg name="email" component="div" />
                    
            <FormLabel htmlFor="password">Password</FormLabel>
            <StyledField type="password" name="password" id="password" autoComplete="on" placeholder="" />
            <ErrorMsg name="password" component="div" />

            <BtnAddContact type="submit">Register</BtnAddContact>
        </StyledForm>
    </Formik>
)
};
