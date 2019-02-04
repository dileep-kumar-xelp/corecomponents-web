import React from "react";
import Input from "../Input";
import styles from "./SearchBarMac.module.css";

export default function OmniBar(props) {
    return (
        <Input {...props} styleClass={styles.base} focusClass={styles.focus} />
    );
}
