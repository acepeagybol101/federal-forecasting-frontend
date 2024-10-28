import React from 'react';

const Loading: React.FC = () => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
            <div className="loader border-8 border-orange-500 border-t-transparent rounded-full w-16 h-16 animate-spin"></div>
        </div>
    );
};

export default Loading;
