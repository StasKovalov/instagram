import React from "react";
import style from "./index.module.scss";

import PublicationSections from "../../../molecules/ProfilePage/AccountPublication/PublicationSections";
import PhotoGallery from "../../../molecules/ProfilePage/AccountPublication/PhotoGallery";

const AccountPublication = props => {
    return (
    <div className = {style.accountPublication}>
        <PublicationSections/>
        <PhotoGallery/>
    </div>
    )
}

export default AccountPublication;