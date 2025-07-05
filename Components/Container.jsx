import React from 'react';

const Container = ({children}) => {
    return (
        <div className='px-3 bg-gray-800 md:px-5 lg:px-8 xl:px-14 2xl:px-20'>
            {children}
        </div>
    );
};

export default Container;