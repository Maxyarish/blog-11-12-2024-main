import { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import Icon from '@mdi/react';
import { mdiLoginVariant, mdiLogoutVariant} from '@mdi/js';
import Menu from '../Menu/Menu';
import Modal from '../Modal/Modal';
import LoginForm from '../forms/LoginForm';
import { clearError,closeUser } from '../../store/userSlice';
import Spinner from '../Spinner/Spinner';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';

const Header = () => {
  const { user, error,isPending } = useSelector((state) => state.user);
  const dispatch=useDispatch()
  const [isShowModal, setIsShowModal] = useState(false);
  const handleLogin = () => {
    setIsShowModal(true);
  };
  const closeModal = () => {
    setIsShowModal(false);
  };
  const hideErrorModal=()=>{dispatch(clearError())}
  const logoutUser=()=>{dispatch(closeUser())}
  return (
    <header className={styles.header}>
      <div className={styles['header-top']}>
      <input className={styles['header-search']} type="text" placeholder='Search' />
        {isPending ?<Spinner/>:user?(
                <p>
                  <span>Welcome, {user.username}</span>
                  <Icon size={1} path={mdiLogoutVariant} onClick={logoutUser}/>
                  </p>
              ) : (
                <Icon size={1} path={mdiLoginVariant} onClick={handleLogin} />
              )}
      </div>
      <div className={styles['header-bottom']}>
  <NavLink className={styles['header-logo']} to='/'> Logo</NavLink>
  <Menu/>
</div>
      {isShowModal && (
        <Modal closeModal={closeModal}>
          <LoginForm closeModal={closeModal} />
        </Modal>
      )}
      {error && <Modal closeModal={hideErrorModal}>{error}</Modal>}
    </header>
  );
};

export default Header;
