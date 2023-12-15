// import { GlobalStyle } from 'styles';
// import { Toaster } from 'react-hot-toast';
// import { ContactForm } from '../ContactForm/ContactForm';
// import { ContactList } from '../ContactList/ContactList';
// import { Filter } from '../Filter/Filter';
// import { AppContainer, ContactsTitle, MainTitle } from './App.styled';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectIsLoading } from 'redux/contacts/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';
// import { Loader } from 'components/Loader/Loader';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])
  

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={ <HomePage/>} />
        <Route path='/register' element={<RegisterPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/contacts' element={<ContactsPage/>}/>
      </Route>
    </Routes>
    // <>
    //   {isLoading && !error && <Loader/>}
    //   <AppContainer>
        
    //     <MainTitle>Phonebook</MainTitle>
    //     <ContactForm />
    //     <ContactsTitle>Contacts</ContactsTitle>
    //     <Filter />
    //     <ContactList />
        
    //     <Toaster position='top-center'/>
    //     <GlobalStyle />
        
    //   </AppContainer>
    // </>
    );

}



