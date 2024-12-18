import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ViewApplication = () => {
    const application=useLoaderData();
    console.log(application);

    return (
        <div>
            <h1>all Application {application.length}</h1>
            
            {
                application.map(job=><tr>
                    <td>{application.applican_email}</td>
                </tr>)
            }
        </div>
    );
};

export default ViewApplication;