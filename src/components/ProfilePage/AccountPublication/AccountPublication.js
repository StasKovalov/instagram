import React from "react";
import style from "./index.module.scss";

import PublicationSections from "./PublicationSections";
import PhotoGallery from "./PhotoGallery";
import AccountStat from '@share/AccountStat';

const AccountPublication = ({ user, authUser }) => {
    const { counts, publications, username, profile_picture } = user;
    return (
        <div className={style.accountPublication}>
            <AccountStat counts={counts} tablet />
            <PublicationSections authUser={authUser} username={username} />
            <PhotoGallery profile_picture={profile_picture} username={username} publications={publications} />
        </div>
    )
}

export default AccountPublication;