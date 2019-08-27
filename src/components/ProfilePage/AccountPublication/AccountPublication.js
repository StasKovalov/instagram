import React from "react";
import style from "./index.module.scss";

import PublicationSections from "./PublicationSections";
import PhotoGallery from "./PhotoGallery";
import AccountStat from '@share/AccountStat';

const AccountPublication = ({ user, authUser }) => {
    const { counts, publications, username } = user;
    return (
        <div className={style.accountPublication}>
            <AccountStat counts={counts} tablet />
            <PublicationSections authUser={authUser} username={username} />
            <PhotoGallery publications={publications} />
        </div>
    )
}

export default AccountPublication;