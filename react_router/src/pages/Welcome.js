import React from 'react';
import { Route } from 'react-router-dom';

const Welcome = () => {
    return (
        <section>
            <h1>Hello, Welcome to this Page</h1>
            <Route path='/welcome/new-user'>
                <h3>New User</h3>
                <p>We are glad that you visited our site</p>
            </Route>
        </section>
    )
}

export default Welcome
