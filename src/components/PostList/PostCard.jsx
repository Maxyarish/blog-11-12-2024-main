import { PropTypes } from 'prop-types';
import { useEffect,useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getOneUser } from '../../api';
import styles from './Posts.module.scss';

const PostCard = (props) => {
     const {post,withPic}=props;
const [author, setAuthor] = useState('');

    const navigate=useNavigate()
    const navigateToPostPage=()=>{
navigate(`/posts/${post.id}`) }

useEffect(() => {
    const loadUser=async()=>{
        try {
            const responce=await getOneUser(post.userId)
            setAuthor(`${responce.data.firstName} ${responce.data.lastName}`)
        } catch (error) {
            console.log(error);
            setAuthor('Anonim')
        }
    }
   loadUser();
}, [post.userId]);
const stopPropagation=(event)=>{
    event.stopPropagation()
}
    return (

        <article onClick={navigateToPostPage} className={styles['post-card']}>
            {withPic && (<picture>
                <source media='(min-width:960px)' srcSet='/images/600x400.png'/>
                <img src="/images/300x200.png" alt={post.title} />
            </picture>
        )}
        <div>
            {withPic ? <p>{post.tags.join(' | ')}</p> : <p> by <Link to={`/users/${post.userId}`}  onClick={stopPropagation}>{author}</Link></p>}
            <h2 className={styles['post-card_title']}>{post.title}</h2>
         {withPic && <p>{post.body.slice(0,80)}... </p>}
        </div>
        </article>
    );
}
PostCard.propTypes={
    withPic:PropTypes.bool,
   post:PropTypes.shape({
    id:PropTypes.number,
    title:PropTypes.string,
    body:PropTypes.string,
    userId:PropTypes.number,
    tags:PropTypes.array,
   })
}

export default PostCard;
