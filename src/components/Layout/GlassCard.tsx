import { ReactNode, CSSProperties } from 'react';

interface GlassCardProps {
    children: ReactNode;
    className?: string;
    style?: CSSProperties;
}

export const GlassCard = ({ children, className = '', style }: GlassCardProps) => {
    return (
        <div
            className={`glass-card ${className}`}
            style={{
                background: 'var(--glass-bg)',
                backdropFilter: 'blur(var(--glass-blur))',
                WebkitBackdropFilter: 'blur(var(--glass-blur))',
                border: '1px solid var(--glass-border)',
                boxShadow: 'var(--glass-shadow)',
                borderRadius: 'var(--radius-md)',
                padding: 'var(--spacing-lg)',
                ...style
            }}
        >
            {children}
        </div>
    );
};
