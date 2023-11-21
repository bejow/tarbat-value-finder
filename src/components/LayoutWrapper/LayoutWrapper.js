import { Card } from "@material-ui/core";
import React from "react";
import styles from "./LayoutWrapper.module.scss";
import logo from '../../assets/images/wbs.png'

export const LayoutWrapper = ({ children }) => {
  return (
    <div className={styles.outer}>
      <div className={styles.middle}>
        <Card className={styles.inner}>{children}</Card>
      </div>
      <img alt="logo" className={styles.logoTopLeft} src={logo}/> 
      <img alt="logo" className={styles.logoTopRight} src={logo}/> 

    </div>
  );
};
