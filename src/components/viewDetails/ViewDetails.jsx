import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ViewDetails = () => {
    const data = useLoaderData()
    console.log(data)
    return (
        <div>
            <h1>this is view details page</h1>
        </div>
    );
};

export default ViewDetails;