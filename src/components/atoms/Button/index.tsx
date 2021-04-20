import React, { PropsWithChildren } from "react";
import styles from "./style.module.css";

export type Props = {
    type?: "primary" | "secondary";
};

const Component: React.FC<PropsWithChildren<Props>> = ({
    children,
    type = "primary",
}) => {
    return (
        <button
            className={`${styles.button} ${
                type === "primary" ? styles.primary : ""
            } ${type === "secondary" ? styles.secondary : ""}`}
        >
            {children}
        </button>
    );
};

export default Component;
