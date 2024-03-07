import React from 'react';
import { Helmet } from 'react-helmet';

const Home = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>My doctors house</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <h1>Home page</h1>
        </div>
    );
};

export default Home;