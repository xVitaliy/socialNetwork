import React from "react";
import Preloader from "../components/common/Preloader/Preloader";

//HOC for Suspense
export const withSuspense = (Component) => {
    return (props) => {
        return <React.Suspense fallback={<Preloader />}>
            <Component {...props} />
        </React.Suspense>

    }
}

