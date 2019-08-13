import React from "react";
import style from "./index.module.scss";

import PublicationSections from "@molecules/ProfilePage/AccountPublication/PublicationSections";
import PhotoGallery from "@molecules/ProfilePage/AccountPublication/PhotoGallery";
import AccountStat from "@molecules/ProfilePage/AccountInfo/AccountStat"

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