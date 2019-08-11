import React from 'react';
import style from './index.module.scss';

import Layout from "../Layout";
import Footer from "@organisms/Footer";
import AccountInfo from "@organisms/ProfilePage/AccountInfo";
import AccountPublication from "@organisms/ProfilePage/AccountPublication";

const ProfilePage = props => {
    return (
        <Layout>
            <main className={style.main}>
                <AccountInfo />
                <AccountPublication />
            </main>
            <Footer />
        </Layout> 
    )
}

export default ProfilePage;