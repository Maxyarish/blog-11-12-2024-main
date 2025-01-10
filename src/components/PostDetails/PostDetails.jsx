import React from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getOnePostAsync } from '../../store/postsSlice';

const PostDetails = () => {
    const dispatch=useDispatch();
    const {postId}=useParams();
    const {selectedPost,error,isPending}=useSelector((state)=>state.posts)
    useEffect(() => {
        dispatch(getOnePostAsync(postId));
        }, [dispatch,postId]);
        if (error){return <p>error</p>}
        if (isPending){return <p>loading</p>}
        if (!selectedPost){return <p>not posts availabel</p>}
    return (
       <>
       </> 
    );
}

export default PostDetails;
