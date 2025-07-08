import React from 'react';

interface HighlightProps {
    children: React.ReactNode;
    className?: string;
    color?: string;
}

const Highlight: React.FC<HighlightProps> = ({
                                                 children,
                                                 className = '',
                                                 color
                                             }) => {
    const colorClass = color
        ? `text-[color:${color}]`
        : 'text-[color:var(--color-accent)]';

    return (
        <span className={`${colorClass} ${className} font-bold`}>
      {children}
    </span>
    );
};

export default Highlight;