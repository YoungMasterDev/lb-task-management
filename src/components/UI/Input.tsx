import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
}

export const Input = ({ label, className = '', ...props }: InputProps) => {
    return (
        <div style={{ marginBottom: '1rem', width: '100%' }}>
            {label && (
                <label
                    style={{
                        display: 'block',
                        marginBottom: '0.5rem',
                        fontWeight: 600
                    }}
                >
                    {label}
                </label>
            )}
            <input
                className="input-field"
                style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    border: '1px solid rgba(0, 0, 0, 0.1)',
                    borderRadius: 'var(--radius-sm)',
                    background: 'rgba(255, 255, 255, 0.5)',
                    backdropFilter: 'blur(4px)',
                    fontFamily: 'var(--font-body)',
                    fontSize: '1rem',
                    transition: 'all 0.3s ease',
                    ...props.style // Allow overrides
                }}
                {...props}
            />
        </div>
    );
};
