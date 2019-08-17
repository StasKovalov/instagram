import React from "react";
import style from "./index.module.scss";

import Text from "@common/Text";

const LINKS = [
  "О НАС",
  "ПОДДЕРЖКА",
  "ПРЕССА",
  "API",
  "ВАКАНСИИ",
  "КОНФИДЕНЦИАЛЬНОСТЬ",
  "УСЛОВИЯ",
  "ДИРЕКТОРИЯ",
  "ПРОФИЛИ",
  "ХЭШТЕГИ",
  "ЯЗЫК"
];

const Footer = () => (
  <div className={style.footer}>
    <div className={style.infoBlock}>
      {LINKS.map(link => (
        <Text links key={link}>{link}</Text>
      ))}
    </div>
    <span className={style.inst}>© 2019 INSTAGRAM</span>
  </div>
);

export default Footer;
