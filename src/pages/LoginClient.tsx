// @ts-nocheck
import { GlassCard } from '../components/Layout/GlassCard';
import { Button } from '../components/UI/Button';
import { Input } from '../components/UI/Input';

export const LoginClient = () => {
    return (
        <div className="flex-center" style={{ minHeight: '100vh' }}>
            <GlassCard style={{ width: '100%', maxWidth: '400px', textAlign: 'center' }}>
                <div style={{ marginBottom: '2rem' }}>
                    <h1 style={{ color: 'var(--color-accent)', marginBottom: '0.5rem' }}>LB Client</h1>
                    <p style={{ color: 'var(--color-text-light)' }}>Client Portal Login</p>
                </div>

                <form onSubmit={(e) => { e.preventDefault(); window.location.href = '/dashboard'; }}>
                    <div style={{ marginBottom: '1.5rem', textAlign: 'left' }}>
                        <Input
                            label="Client Email"
                            type="email"
                            placeholder="client@company.com"
                            required
                        />
                    </div>

                    <div style={{ marginBottom: '2rem', textAlign: 'left' }}>
                        <Input
                            label="Password"
                            type="password"
                            placeholder="••••••••"
                            required
                        />
                    </div>

                    <Button type="submit" style={{ width: '100%' }}>Sign In</Button>
                </form>

                <div style={{ marginTop: '2rem', fontSize: '0.875rem' }}>
                    <p>Are you part of the team? <a href="/login-team">Team Login</a></p>
                </div>
            </GlassCard>
        </div>
    );
};
