import React from 'react';
import TabItem from './TabItem';

interface TabsProps {
    tabs: string[];
    activeTab: string;
    onTabChange: (tab: string) => void;
}

const Tabs: React.FC<TabsProps> = ({ tabs, activeTab, onTabChange }) => {
    return (
        <div className="p-6 text-sm">
            {tabs.map(tab => (
                <TabItem
                    key={tab}
                    label={tab}
                    isActive={tab === activeTab}
                    onClick={() => onTabChange(tab)}
                />
            ))}
        </div>
    );
};

export default Tabs;
