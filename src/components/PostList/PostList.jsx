import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from '../Spinner/Spinner';
import { getAllPostsAsync } from '../../store/postsSlice';
import { useEffect } from 'react';
import PostCard from './PostCard';

const PostList = (props) => {
    const {withPic,limit,skip=0}=props
    //console.log(withPic);
    const dispatch=useDispatch();;
    const {posts,error,isPending}=useSelector((state)=>state.posts);
    useEffect(() => {
        dispatch(getAllPostsAsync({limit,skip}))
    }, [dispatch,limit,skip]);
    const showPost=(post)=><PostCard key={post.id} post={post} withPic={withPic}/>
    if (error) {return <p>{error}</p>};
    if (isPending) {return <Spinner/>};
    if (error) {return <p>{error}</p>};
    
    return posts.length===0 ?<p>poosts list is empty</p>: <section>{posts.map(showPost)}</section>
};


PostList.propTypes = {
withPic:PropTypes.bool,
limit:PropTypes.number,
skip:PropTypes.number,
}



export default PostList;
