import { Formik, Form, Field, ErrorMessage } from 'formik';
import {useState} from 'react'
import { useDispatch } from 'react-redux';
import { loginUserAuth } from '../../store/userSlice';
import { PropTypes } from 'prop-types';
import styles from './LoginForm.module.scss'
import { mdiEye,mdiEyeOff  } from '@mdi/js';
import Icon from '@mdi/react';
const LoginForm = (props) => {

  const {closeModal} = props;
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const onSubmit = (values) => {
    dispatch(loginUserAuth(values));
    closeModal();
  };
    const changeShowPassword=()=>{
      setShowPassword(!showPassword)
    }
  return (
    <Formik
      initialValues={{ username: 'emilys', password: 'emilyspass' }}
      onSubmit={onSubmit}
    >
      {() => {
        return (
          <Form className={styles.form}>
            <label>
              <span>username</span>
              <Field name="username" />
              <ErrorMessage name="username" />
            </label>
            <label className={styles.password}>
              <span>password</span>
              <Field name="password" type={showPassword?'text':'password'}/>
              <span onClick={changeShowPassword} className={styles.eye} >{showPassword?<Icon size={1} path={mdiEyeOff}/>:<Icon size={1} path={mdiEye}/>}</span>
              <ErrorMessage name="password" />
            </label>
            <button type="submit">log in</button>
          </Form>
        );
      }}
    </Formik>
  );
};
LoginForm.propTypes={
closeModal:PropTypes.func,
}

export default LoginForm;
