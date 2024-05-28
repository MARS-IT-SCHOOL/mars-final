import React from "react";

const Skeleton = ({ array }) => {
    return (
        <div>
            {array.map((item, index) => (
                <div key={index} className="skeleton w-full h-5"></div>
            ))}
        </div>
    );
};

export default Skeleton