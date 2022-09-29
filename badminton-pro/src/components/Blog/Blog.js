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
                    <div className="blog">
                        <h1 className="blog_title">2. Difference between props and state in react</h1>
                        <div className="blog_image">
                            <img src={props} alt="" />
                        </div>
                        <p className="blog_text mt-4">Props are used to pass data, whereas state is for managing data. Data from props is read-only, and cannot be modified by a component that is receiving it from outside. State data can be modified by its own component, but is private (cannot be accessed from outside). React allows us to pass information to a Component using something called props (stands for properties). Props are objects which can be used inside a component. We will learn about these in detail in this article. Passing and Accessing props. We can pass props to any component as we declare attributes for any HTML tag. The state is a built-in React object that is used to contain data or information about the component. A component's state can change over time; whenever it changes, the component re-renders.
                        </p>
                    </div>
                    <div className="blog">
                        <h1 className="blog_title">3. what does useeffect do rather than loading data with api</h1>
                        <div className="blog_image">
                            <img src={useeffect} alt="" />
                        </div>
                        <p className="blog_text mt-4">
                        By using this Hook, you tell React that your component needs to do something after render. React will remember the function you passed (we'll refer to it as our “effect”), and call it later after performing the DOM updates. In this effect, we set the document title, but we could also perform data fetching or call some other imperative API. Placing useEffect inside the component lets us access the count state variable (or any props) right from the effect. We don’t need a special API to read it — it’s already in the function scope. Hooks embrace JavaScript closures and avoid introducing React-specific APIs where JavaScript already provides a solution.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;