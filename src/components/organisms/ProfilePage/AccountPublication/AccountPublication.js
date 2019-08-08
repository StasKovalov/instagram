import React from "react";
import style from "./index.module.scss";

import PublicationSections from "@molecules/ProfilePage/AccountPublication/PublicationSections";
import PhotoGallery from "@molecules/ProfilePage/AccountPublication/PhotoGallery";
import AccountStat from "@molecules/ProfilePage/AccountInfo/AccountStat"

const AccountPublication = props => {
    return (
    <div className = {style.accountPublication}>
        <AccountStat tablet/>
        <PublicationSections/>
        <PhotoGallery/>
    </div>
    )
}

export default AccountPublication;