// @ts-nocheck
import { GlassCard } from '../components/Layout/GlassCard';
import { Button } from '../components/UI/Button';
import { Input } from '../components/UI/Input';

export const LoginAdmin = () => {
    return (
        <div className="flex-center" style={{ minHeight: '100vh', background: '#1A202C' }}>
            <GlassCard style={{ width: '100%', maxWidth: '400px', textAlign: 'center', background: 'rgba(255, 255, 255, 0.95)' }}>
                <div style={{ marginBottom: '2rem' }}>
                    <h1 style={{ color: '#1A202C', marginBottom: '0.5rem' }}>LB Admin</h1>
                    <p style={{ color: '#4A5568' }}>Superuser Control Center</p>
                </div>

                <form onSubmit={(e) => { e.preventDefault(); window.location.href = '/admin'; }}>
                    <div style={{ marginBottom: '1.5rem', textAlign: 'left' }}>
                        <Input
                            label="Admin Credentials"
                            type="email"
                            placeholder="admin@leadboss.com"
                            required
                        />
                    </div>

                    <div style={{ marginBottom: '2rem', textAlign: 'left' }}>
                        <Input
                            label="Secure Key"
                            type="password"
                            placeholder="••••••••"
                            required
                        />
                    </div>

                    <Button type="submit" style={{ width: '100%', background: '#1A202C', borderColor: '#1A202C' }}>System Authenticate</Button>
                </form>

                <div style={{ marginTop: '2rem', fontSize: '0.875rem' }}>
                    <p><a href="/login-client">Back to Main Portal</a></p>
                </div>
            </GlassCard>
        </div>
    );
};
