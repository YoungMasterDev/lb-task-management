import { TicketStatus } from '../../types';

export const StatusPill = ({ status }: { status: TicketStatus }) => {
    const styles = {
        open: { background: 'rgba(247, 106, 12, 0.1)', color: 'var(--color-accent)' },
        pending: { background: 'rgba(236, 201, 75, 0.2)', color: '#d69e2e' },
        closed: { background: 'rgba(74, 85, 104, 0.1)', color: 'var(--color-text-light)' },
    };

    return (
        <span
            style={{
                padding: '0.25rem 0.75rem',
                borderRadius: '999px',
                fontSize: '0.75rem',
                fontWeight: 600,
                textTransform: 'uppercase',
                ...styles[status]
            }}
        >
            {status}
        </span>
    );
};
