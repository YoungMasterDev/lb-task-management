import { ButtonHTMLAttributes, ReactNode, CSSProperties } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'ghost';
    children: ReactNode;
}

export const Button = ({ variant = 'primary', className = '', children, ...props }: ButtonProps) => {
    const baseStyles: CSSProperties = {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0.75rem 1.5rem',
        borderRadius: 'var(--radius-sm)',
        fontFamily: 'var(--font-heading)',
        fontWeight: 600,
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        border: 'none',
        fontSize: '1rem',
    };

    const variants = {
        primary: {
            backgroundColor: 'var(--color-accent)',
            color: 'white',
            boxShadow: '0 4px 6px rgba(247, 106, 12, 0.3)',
        },
        secondary: {
            background: 'transparent',
            border: '2px solid var(--color-accent)',
            color: 'var(--color-accent)',
        },
        ghost: {
            background: 'transparent',
            color: 'var(--color-text-main)',
            padding: '0.5rem',
        }
    };

    // Merge styles (simplified for this example, normally would use CSS modules or classes)
    const combinedStyle = { ...baseStyles, ...variants[variant] };

    return (
        <button style={combinedStyle} className={className} {...props}>
            {children}
        </button>
    );
};
