import React from 'react';
import './homepage.scss';

import Login from '../../organisms/homepage/login';
import Footer from '../../organisms/homepage/footer';
import IphonePic from '../../../assets/iphone-img.png'



const HomePage = props => {
    return (
        <section className='homepage'>
            <div className='inner'>
                <main className='main-content'>
                    <div className= 'iphone-img'>
                        <img alt = 'iphone-img' src={IphonePic}/>
                    </div>
                    <Login />
                </main>
                <Footer />
            </div>
        </section>
    )
}

export default HomePage;