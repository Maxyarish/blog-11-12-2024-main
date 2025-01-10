import styles from './Pages.module.scss'
import UsersList from '../components/UsersList/UsersList';
import PostList from '../components/PostList/PostList';
import CONSTANTS from '../constants'
import { Link } from 'react-router-dom';
import FeaturePost from '../components/FeaturePost/FeaturePost';
const HomePage = () => {
  return (
    <>
    <section className={styles.relative}>
    <FeaturePost imgPosition='under'/>
  </section>
    <div className={styles.wrapper}> 
     <h1>home </h1>
    <section>
      <div>
        <h1>FeaturePost</h1>
        <FeaturePost imgPosition='right'/>
      </div>
       <div className={styles['section-header']}>
      <h2>All posts</h2>
      <Link to='posts'>viev all</Link>
      </div>
      <PostList limit={CONSTANTS.POSTS.at(1)}/>
      </section> 
      <section>
      <h1>home page</h1>
      <UsersList/>
      </section>
    </div>
    </>
  );
}

export default HomePage;
