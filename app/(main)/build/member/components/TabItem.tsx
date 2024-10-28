import React from 'react';
import { HiChevronRight } from 'react-icons/hi2';

interface TabItemProps {
    label: string;
    isActive: boolean;
    onClick: () => void;
}

const TabItem: React.FC<TabItemProps> = ({ label, isActive, onClick }) => {
    return (
        <div
            className={`py-5 flex items-center cursor-pointer ${isActive ? 'font-bold text-primary' : ''}`}
            onClick={onClick}
        >
            {label}
            {isActive && <span className="ml-2 text-sm text-green-600">●</span>}
            <HiChevronRight className="ml-auto w-7 h-auto" />
        </div>
    );
};

export default TabItem;
