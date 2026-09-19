import React from 'react';
import Counter from '../component/Counter';
;

const dashboardPage = () => {

    console.log("Dashboard page render")
    return (
        <div>
            <h2 className='text-4xl font-bold mb-4'>Dashboard</h2>
            <Counter></Counter>
            <ul>
                <li>Dashboard page 1</li>
                <li>Dashboard page 2</li>
                <li>Dashboard page 3</li>
            </ul>
        </div>
    );
};

export default dashboardPage;