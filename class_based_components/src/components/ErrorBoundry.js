import React, { Component } from 'react';

import classes from './ErrorBoundry.module.css';

class ErrorBoundry extends Component 
{
    constructor()
    {
        super();
        this.state={hasError: false}
    }
    componentDidCatch(error)
    {
        console.log(error);
        this.setState({hasError:true});
    }

    render()
    {
        if(this.state.hasError)
        {
            return <div className={classes.errorMessage}>
                <p>Something went wrong!. Please try later.</p>
            </div>
        }
        return this.props.children;
    }
};

export default ErrorBoundry;