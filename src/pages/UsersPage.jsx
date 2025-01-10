import styles from './Pages.module.scss'
import UsersList from "../components/UsersList/UsersList";
import { useState } from 'react';
import Limit from '../components/Limit/Limit';
import CONSTANTS from '../constants';
import Pagination from '../components/Pagination/Pagination';

const UsersPage = () => {
  const limits=CONSTANTS.LIMITS;
  const [page, setPage] = useState(1);
  const [userslimit, setUserslimit] = useState(limits.at(0));
  const changeUsersLimit=(event)=>{
     setUserslimit(Number(event.target.value))
     setPage(1)
  }
  const skip=(page - 1) * userslimit
    return (
        <div className={styles.wrapper}>
          <h1>Authors</h1>  
        <Limit limit={userslimit} changeLimit={changeUsersLimit}/>
          <UsersList limit={userslimit} skip={skip}/>
          <Pagination page={page} setPage={setPage}/>
          </div>
    );
}

export default UsersPage;
