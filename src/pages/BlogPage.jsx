import PostList from '../components/PostList/PostList';
import PropTypes from 'prop-types';
import Pagination from '../components/Pagination/Pagination';
import { useState } from 'react';
import CONSTANTS from '../constants';
import FeaturePost from '../components/FeaturePost/FeaturePost';


const BlogPage = () => {
    const [page,setPage]=useState(1);
    const limitPosts=CONSTANTS.POSTS.at(2);
    const skip=(page -1)*5;
    return (
        <>
        <section>
            <FeaturePost/>
        </section>
              <h1>Blog</h1>
              <PostList withPic limit={limitPosts} skip={skip}/>
              <Pagination page={page} setPage={setPage}/>
        </>
    );
};


BlogPage.propTypes = {

};


export default BlogPage;
