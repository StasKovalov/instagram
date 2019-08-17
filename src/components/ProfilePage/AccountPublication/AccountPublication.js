import React from "react";
import style from "./index.module.scss";

import PublicationSections from "./PublicationSections";
import PhotoGallery from "./PhotoGallery";
import AccountStat from '@share/AccountStat';

const AccountPublication = ({ user }) => {
    const { counts, publications } = user;
    return (
        <div className={style.accountPublication}>
            <AccountStat counts={counts} tablet />
            <PublicationSections />
            <PhotoGallery publications={publications} />
        </div>
    )
}

export default AccountPublication;