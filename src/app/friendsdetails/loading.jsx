import React from "react";
import { PropagateLoader } from "react-spinners";

const loading = () => {
    return (
        <div className="min-h-[600px] flex items-center justify-center">
            <div>
                <PropagateLoader
                    color="rgba(70, 157, 99, 1)"
                    size={10}
                />
            </div>
        </div>
    );
};

export default loading;
