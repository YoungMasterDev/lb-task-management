import React from 'react';
import { GlassCard } from '../components/Layout/GlassCard';
import { Button } from '../components/UI/Button';
import { StatusPill } from '../components/UI/StatusPill';
import { Ticket } from '../types';

const MOCK_TICKETS: Ticket[] = [
    { id: '1024', subject: 'Login issues with CRM', status: 'open', lastUpdated: '2 hours ago', customerName: 'John Doe', customerEmail: 'john@doe.com', priority: 'high' },
    { id: '1023', subject: 'Update billing information', status: 'closed', lastUpdated: 'Yesterday', customerName: 'John Doe', customerEmail: 'john@doe.com', priority: 'low' },
    { id: '1020', subject: 'Feature request: Dark mode', status: 'pending', lastUpdated: '3 days ago', customerName: 'John Doe', customerEmail: 'john@doe.com', priority: 'medium' },
];

export const UserDashboard = () => {
    return (
        <div className="container" style={{ paddingTop: '100px', paddingBottom: '2rem' }}>
            {/* Navbar Placeholder - In a real app, this would be in a Layout component */}
            <nav style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '70px', padding: '0 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', zIndex: 100, background: 'rgba(255, 255, 255, 0.8)', backdropFilter: 'blur(12px)', borderBottom: '1px solid var(--glass-border)' }}>
                <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.5rem', color: 'var(--color-accent)' }}>LB Tasks</div>
                <div className="nav-links">
                    {/* Links would use react-router Link */}
                    <span style={{ marginLeft: '2rem', fontWeight: 500, color: 'var(--color-accent)' }}>Home</span>
                    <span style={{ marginLeft: '2rem', fontWeight: 500 }}>My Tickets</span>
                    <span style={{ marginLeft: '2rem', fontWeight: 500 }}>Profile</span>
                </div>
            </nav>

            <div style={{ marginBottom: '3rem', display: 'flex', justifyContent: 'space-between', alignItems: 'end' }}>
                <div>
                    <h1 style={{ fontSize: '2.5rem' }}>Welcome back, User</h1>
                    <p style={{ color: 'var(--color-text-light)', fontSize: '1.125rem' }}>Here is an overview of your support tickets.</p>
                </div>
                <Button>+ New Ticket</Button>
            </div>

            <GlassCard style={{ padding: 0 }}>
                <div style={{ display: 'grid', gridTemplateColumns: '0.5fr 2fr 1fr 1fr 0.5fr', alignItems: 'center', padding: '1rem', background: 'rgba(0,0,0,0.02)', fontWeight: 600, borderBottom: '1px solid var(--glass-border)' }}>
                    <span>ID</span>
                    <span>Subject</span>
                    <span>Status</span>
                    <span>Last Updated</span>
                    <span>Action</span>
                </div>

                {MOCK_TICKETS.map(ticket => (
                    <div key={ticket.id} style={{ display: 'grid', gridTemplateColumns: '0.5fr 2fr 1fr 1fr 0.5fr', alignItems: 'center', padding: '1rem', borderBottom: '1px solid rgba(0,0,0,0.05)', transition: 'background 0.3s' }}>
                        <span style={{ fontFamily: 'monospace' }}>#{ticket.id}</span>
                        <span style={{ fontWeight: 500 }}>{ticket.subject}</span>
                        <span><StatusPill status={ticket.status} /></span>
                        <span style={{ color: 'var(--color-text-light)' }}>{ticket.lastUpdated}</span>
                        <Button variant="secondary" style={{ padding: '0.25rem 0.75rem', fontSize: '0.75rem' }}>View</Button>
                    </div>
                ))}
            </GlassCard>
        </div>
    );
};
