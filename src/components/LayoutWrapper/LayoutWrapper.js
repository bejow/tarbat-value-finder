import { Card } from "@material-ui/core";
import React from "react";
import styles from "./LayoutWrapper.module.scss";
import logo from '../../assets/images/logo.png'

export const LayoutWrapper = ({ children }) => {
  return (
    <div className={styles.outer}>
      <div className={styles.middle}>
        <Card className={styles.inner}>{children}</Card>
      </div>
      <img className={styles.logoBottomRight} src={logo}/> 
      <img className={styles.logoBottomLeft} src={logo}/> 
      <img className={styles.logoTopLeft} src={logo}/> 
      <img className={styles.logoTopRight} src={logo}/> 

    </div>
  );
};
