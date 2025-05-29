import React from "react";
import Router from "./Router"
import Provider from "./context"

export default () => {
    return(
        <Provider>
            <Router/>
        </Provider>
    )
}