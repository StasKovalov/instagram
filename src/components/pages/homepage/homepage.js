import React from 'react';
import './homepage.scss';
import Iphone from '../../organisms/homepage/iphone';
import Login from '../../organisms/homepage/login';

const HomePage = props => {
    return (
        <section className='homepage'>
            <div className='inner'>
                <main className='main-content'>
                    <Iphone />
                    <Login />
                </main>
            </div>
        </section>
    )
}

export default HomePage;