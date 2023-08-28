import React from "react";
const CustomText = (props) => {
    const {screenName} = props;
    return (
        <p>
            This is the {screenName} Screen
        </p>
    );
}

export default CustomText;