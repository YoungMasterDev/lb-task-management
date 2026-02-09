

// @ts-nocheck
export const AdminDashboard = () => {
    return (
        <div style={{ display: 'grid', gridTemplateColumns: '250px 1fr', minHeight: '100vh' }}>
            <aside style={{ background: '#1A202C', color: 'white', padding: '1.5rem' }}>
                <div style={{ color: 'var(--color-accent)', fontSize: '1.5rem', fontWeight: 700, marginBottom: '3rem' }}>LB Admin</div>
                <nav>
                    {['Dashboard', 'User Management', 'Categories', 'System Settings'].map(item => (
                        <div key={item} style={{ color: '#cbd5e0', padding: '0.75rem 0', borderBottom: '1px solid rgba(255,255,255,0.1)', cursor: 'pointer' }}>
                            {item}
                        </div>
                    ))}
                </nav>
            </aside>

            <main style={{ padding: '2rem', background: '#f7fafc' }}>
                <h1 style={{ marginBottom: '2rem' }}>Overview</h1>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem', marginBottom: '2rem' }}>
                    {[
                        { label: 'Total Tickets', value: '1,204' },
                        { label: 'Open Now', value: '42', color: 'var(--color-accent)' },
                        { label: 'Avg Response', value: '3.5h' },
                        { label: 'Satisfaction', value: '98%' },
                    ].map((stat, i) => (
                        <div key={i} style={{ background: 'white', padding: '1.5rem', borderRadius: 'var(--radius-sm)', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
                            <div style={{ fontSize: '2rem', fontWeight: 700, color: stat.color || 'var(--color-hero-bg)' }}>{stat.value}</div>
                            <div style={{ color: '#718096', fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{stat.label}</div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};
