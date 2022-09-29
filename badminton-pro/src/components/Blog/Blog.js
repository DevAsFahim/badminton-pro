import React, { useEffect } from 'react';
import react from '../../image/react.png'
import props from '../../image/props.png'
import useeffect from '../../image/useEffect.png'
import './Blog.css'

const Blog = () => {
    return (
        <div className="blog_container">
            <div className="container">
            <div className="box-container">
                <div className="blog">
                    <h1 className="blog_title">1. How react js work</h1>
                    <div className="blog_image">
                        <img src={react} alt="" />
                    </div>
                    <p className="blog_text mt-4">React is a declarative, efficient, and flexible JavaScript library for building user interfaces. ‘V’ denotes the view in MVC. ReactJS is an open-source, component-based front end library responsible only for the view layer of the application. It is maintained by Facebook. React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes. The declarative view makes your code more predictable and easier to debug.
                    </p>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Blog;