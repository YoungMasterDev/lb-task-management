// @ts-nocheck
import { GlassCard } from '../components/Layout/GlassCard';
import { Button } from '../components/UI/Button';

export const AgentDashboard = () => {
    return (
        <div style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
            {/* Sidebar */}
            <aside style={{ width: '250px', height: '100vh', background: 'rgba(255, 255, 255, 0.9)', backdropFilter: 'blur(12px)', borderRight: '1px solid var(--glass-border)', display: 'flex', flexDirection: 'column', padding: '1.5rem' }}>
                <div style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-accent)', marginBottom: '2rem' }}>LB Agent</div>
                <nav>
                    <div style={{ padding: '0.75rem 1rem', marginBottom: '0.5rem', borderRadius: 'var(--radius-sm)', background: 'rgba(247, 106, 12, 0.1)', color: 'var(--color-accent)', display: 'flex', alignItems: 'center' }}>
                        All Tickets <span style={{ marginLeft: 'auto', fontSize: '0.75rem', background: '#eee', padding: '2px 6px', borderRadius: '4px' }}>12</span>
                    </div>
                    <div style={{ padding: '0.75rem 1rem', marginBottom: '0.5rem', borderRadius: 'var(--radius-sm)', color: 'var(--color-text-main)', display: 'flex', alignItems: 'center' }}>
                        Open <span style={{ marginLeft: 'auto', fontSize: '0.75rem', background: '#eee', padding: '2px 6px', borderRadius: '4px' }}>5</span>
                    </div>
                </nav>
            </aside>

            {/* Main Content */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', background: '#f8fafc' }}>
                <header style={{ height: '60px', borderBottom: '1px solid rgba(0,0,0,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 1.5rem', background: 'rgba(255, 255, 255, 0.8)' }}>
                    <h2 style={{ fontSize: '1.125rem' }}>Dashboard</h2>
                    {/* Search Placeholder */}
                </header>

                <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
                    {/* List Panel */}
                    <div style={{ width: '350px', borderRight: '1px solid rgba(0,0,0,0.05)', overflowY: 'auto', background: 'white' }}>
                        <div style={{ padding: '1rem', borderBottom: '1px solid #eee', cursor: 'pointer', background: '#ebf8ff', borderLeft: '3px solid var(--color-accent)' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                                <strong>Login issues with CRM</strong>
                                <span style={{ fontSize: '0.75rem', color: '#718096' }}>2h</span>
                            </div>
                            <p style={{ fontSize: '0.875rem', color: '#4a5568' }}>User: john@doe.com</p>
                        </div>
                        <div style={{ padding: '1rem', borderBottom: '1px solid #eee', cursor: 'pointer' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                                <strong>Feature request: Dark mode</strong>
                                <span style={{ fontSize: '0.75rem', color: '#718096' }}>1d</span>
                            </div>
                            <p style={{ fontSize: '0.875rem', color: '#4a5568' }}>User: jane@smith.com</p>
                        </div>
                    </div>

                    {/* Detail Panel */}
                    <div style={{ flex: 1, padding: '1.5rem', overflowY: 'auto', display: 'flex', flexDirection: 'column' }}>
                        <GlassCard style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                            <div style={{ borderBottom: '1px solid #e2e8f0', paddingBottom: '1rem', marginBottom: '1rem' }}>
                                <h2 style={{ fontSize: '1.5rem' }}>#1024 - Login issues with CRM</h2>
                                <div style={{ display: 'flex', gap: '1rem', fontSize: '0.875rem', color: '#718096' }}>
                                    <span>Status: <strong style={{ color: '#c53030' }}>Open</strong></span>
                                    <span>Created: Oct 24, 2023</span>
                                </div>
                            </div>

                            <div style={{ flex: 1, overflowY: 'auto' }}>
                                <div style={{ maxWidth: '80%', padding: '1rem', borderRadius: 'var(--radius-md)', marginBottom: '1rem', alignSelf: 'flex-start', background: 'white', border: '1px solid #e2e8f0' }}>
                                    <strong>John Doe</strong>
                                    <p>I cannot log in to the CRM. The password reset link is not working either.</p>
                                </div>
                                <div style={{ maxWidth: '80%', padding: '1rem', borderRadius: 'var(--radius-md)', marginBottom: '1rem', alignSelf: 'flex-end', background: '#ebf8ff', color: 'var(--color-text-main)', border: '1px solid #bee3f8', marginLeft: 'auto' }}>
                                    <strong>Support Agent</strong>
                                    <p>Hello John, I'm looking into this. Can you confirm if you are seeing any specific error message?</p>
                                </div>
                            </div>

                            <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: '1rem', display: 'flex', gap: '1rem' }}>
                                <textarea className="input-field" placeholder="Type your reply..." style={{ flex: 1, height: '80px', resize: 'none' }}></textarea>
                                <Button style={{ alignSelf: 'flex-end' }}>Send</Button>
                            </div>
                        </GlassCard>
                    </div>
                </div>
            </div>
        </div>
    );
};
