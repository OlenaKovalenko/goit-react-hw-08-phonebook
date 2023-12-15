import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import { AppContainer, ContactsTitle, MainTitle } from "components/App/App.styled";
import { ContactForm } from "components/ContactForm/ContactForm";
import { ContactList } from "components/ContactList/ContactList";
import { Filter } from "components/Filter/Filter";
import { Loader } from "components/Loader/Loader";
import { fetchContacts } from "redux/contacts/operations";
import { selectError, selectIsLoading } from "redux/contacts/selectors";

const Contacts = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);

    useEffect(() => {
        dispatch(fetchContacts())
    }, [dispatch]);

    return (
        <>
            {isLoading && !error && <Loader />}
            <Helmet>
                <title>Your tasks</title>
            </Helmet>
            <AppContainer>
        
                <MainTitle>Phonebook</MainTitle>
                <ContactForm />
                <ContactsTitle>Contacts</ContactsTitle>
                <Filter />
                <ContactList />
        
            </AppContainer>
        </>
    )
};

export default Contacts;
