import Link from "next/link";
import React from "react";

const notFound = () => {
    return (
        <div>
            <h2>notFound</h2>
            <p>
                The page u r looking for cannot be reached at the moment, pls
                try again later.
            </p>
            <Link href="/">Return Home</Link>
        </div>
    );
};

export default notFound;
