import { Suspense } from 'react';
import { BrowserRouter ,Navigate,NavLink, Route, Routes } from 'react-router-dom'

import { 
    FormikAbstractation,
    FormikBasicPage,
    FormikComponents,
    FormikYupPage,
    RegisterPage,
    RegisterFormikPage,
    DynamicForm
} from '../03-forms/pages/index';

import logo from '../logo.svg';

// import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload/pages';
import { routes } from './routes';

const Navigation = () => {
  return (
<Suspense fallback={null}>
    <BrowserRouter>
    <div className='main-layout'>    
    {/* Rutas dinámicas */}
        <nav>
            <img src={ logo } alt="React Logo" />
          <ul>
            
            <li>
                <NavLink to='/register' >Register Page</NavLink>
            </li>
            <li>
                <NavLink to='/formik-basic' >Formik Basic Page</NavLink>
            </li>
            <li>
                <NavLink to='/formik-yup' >Formik Yup Page</NavLink>
            </li>
            <li>
                <NavLink to='/formik-components' >Formik Components</NavLink>
            </li>
            <li>
                <NavLink to='/formik-abstractation' >Formik Abstractation</NavLink>
            </li>
            <li>
                <NavLink to='/register-formik' >Register Formik Page</NavLink>
            </li>
            <li>
                <NavLink to='/dynamic-form' >Dynamic Form</NavLink>
            </li>
              {
                  routes.map((route) => (
                      <li key={route.name}>
                        <NavLink to={route.to} className={({isActive}) => isActive? 'nav-active' : ''}>{route.name}</NavLink>
                      </li>
                  ))
              }
          </ul>
        </nav>
        {/* Rutas dinámicas */}

    <Routes>
        <Route 
        path='/register'
        element={
            <RegisterPage />
        }
        />
        <Route 
        path='/formik-basic'
        element={
            <FormikBasicPage />
        }
        />
         <Route 
        path='/formik-components'
        element={
            <FormikComponents />
        }
        />
        <Route 
        path='/formik-yup'
        element={
            <FormikYupPage />
        }
        />
        <Route 
        path='/formik-abstractation'
        element={
            <FormikAbstractation />
        }
        />
         <Route 
        path='/register-formik'
        element={
            <RegisterFormikPage />
        }
        />
         <Route 
        path='/dynamic-form'
        element={
            <DynamicForm />
        }
        />

        {
            routes.map(({name, path, Component}) => (
                <Route key={name} path={path} element={<Component />} />
            ))
        }
        <Route path='/*' element={<Navigate to={routes[0].to    }   />}/>
    </Routes>

    </div>
    </BrowserRouter>
</Suspense>
  )
}

export default Navigation