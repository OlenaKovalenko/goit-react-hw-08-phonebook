import { Route, Routes } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import { Layout } from 'components/Layout/Layout';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks';
import { refreshUser } from '../../redux/auth/operations';
import { RestrictedRoute } from '../../components/RestrictedRoute';
import { PrivateRoute } from '../../components/PrivateRoute';

const HomePage = lazy(() => import('../../pages/Home'));
const RegisterPage = lazy(() => import('../../pages/Register'));
const LoginPage = lazy(() => import('../../pages/Login'));
const ContactsPage = lazy(() => import('../../pages/Contacts'));
const NotFoundPage = lazy(() => import('../../pages/NotFoundPage'));


export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  

  return isRefreshing ? (<b>Refreshing user...</b>) : (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={ <HomePage/>} />
        <Route path='/register' element={<RestrictedRoute redirectTo='/contacts' component={<RegisterPage/>}/>}/>
        <Route path='/login' element={<RestrictedRoute redirectTo='/contacts' component={<LoginPage/>}/>}/>
        <Route path='/contacts' element={<PrivateRoute redirectTo='/login' component={<ContactsPage/>}/>}/>
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
    );
}



