import React from "react";
import { ClipLoader } from "react-spinners";

const loading = () => {
    return (
        <div className="min-h-[400px] flex items-center max-w-[1110px] mx-auto justify-center">
            <div>
                <ClipLoader color="#14a326" />
            </div>
        </div>
    );
};

export default loading;
