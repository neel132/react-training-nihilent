import React from "react";
import {customTextStyles as styles} from "./custom-text.style";
const CustomText = (props) => {
    const {screenName} = props;
    return (
        <p style={styles.screenNameText}>
            This is the {screenName} Screen
        </p>
    );
}

export default CustomText;