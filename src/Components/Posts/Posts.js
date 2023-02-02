import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Aside from './Aside';
import PostCard from './PostCard';
import Tabls from './Tabls';

const Posts = () => {
    const [news, setNews] = useState([])


    useEffect(() => {
        fetch(`news.json`)
            .then(res => res.json())
            .then(data => setNews(data))
    }, [])



    return (
        <div className='container mx-auto'>
            <Tabls />

            <article className='flex justify-between'>
                <section>
                    {
                        news?.map((news, i) => {
                            return (

                                <PostCard news={news} key={i} />
                            )
                        })
                    }
                </section>


                <aside>
                    <Aside />
                </aside>
            </article>
        </div>
    );
};

export default Posts;