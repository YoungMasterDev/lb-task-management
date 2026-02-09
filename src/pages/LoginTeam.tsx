// @ts-nocheck
import { GlassCard } from '../components/Layout/GlassCard';
import { Button } from '../components/UI/Button';
import { Input } from '../components/UI/Input';

export const LoginTeam = () => {
    return (
        <div className="flex-center" style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #fce4ec 0%, #f1f2f6 100%)' }}>
            <GlassCard style={{ width: '100%', maxWidth: '400px', textAlign: 'center', borderTop: '5px solid #2d3436' }}>
                <div style={{ marginBottom: '2rem' }}>
                    <h1 style={{ color: '#2d3436', marginBottom: '0.5rem' }}>LB Team</h1>
                    <p style={{ color: '#636e72' }}>Operations Portal</p>
                </div>

                <form onSubmit={(e) => { e.preventDefault(); window.location.href = '/team'; }}>
                    <div style={{ marginBottom: '1.5rem', textAlign: 'left' }}>
                        <Input
                            label="Team Member Email"
                            type="email"
                            placeholder="name@leadboss.com"
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

                    <Button type="submit" style={{ width: '100%', background: '#2d3436', borderColor: '#2d3436' }}>Login to Team Portal</Button>
                </form>

                <div style={{ marginTop: '2rem', fontSize: '0.875rem' }}>
                    <p>Not part of the team? <a href="/login-client">Client Login</a></p>
                </div>
            </GlassCard>
        </div>
    );
};
