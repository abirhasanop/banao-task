import React from 'react';
import PostCard from './PostCard';
import Tabls from './Tabls';

const Posts = () => {
    return (
        <div className='container mx-auto'>
            <Tabls />

            {
                [...Array(4)].map((a, i) => {
                    return (

                        <PostCard key={i} />
                    )
                })
            }
        </div>
    );
};

export default Posts;