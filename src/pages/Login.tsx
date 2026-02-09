// @ts-nocheck
import React from 'react';
import { GlassCard } from '../components/Layout/GlassCard';
import { Button } from '../components/UI/Button';
import { Input } from '../components/UI/Input';

export const Login = () => {
    return (
        <div className="flex-center" style={{ minHeight: '100vh' }}>
            <GlassCard style={{ width: '100%', maxWidth: '400px', textAlign: 'center' }}>
                <div style={{ marginBottom: '2rem' }}>
                    <h1 style={{ color: 'var(--color-accent)', marginBottom: '0.5rem' }}>LB Tasks</h1>
                    <p style={{ color: 'var(--color-text-light)' }}>Sign in to your account</p>
                </div>

                <form onSubmit={(e) => { e.preventDefault(); window.location.href = '/dashboard'; }}>
                    <div style={{ marginBottom: '1.5rem', textAlign: 'left' }}>
                        <Input
                            label="Email Address"
                            type="email"
                            placeholder="you@company.com"
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
                        <div style={{ textAlign: 'right', marginTop: '0.5rem' }}>
                            <a href="#" style={{ fontSize: '0.875rem' }}>Forgot password?</a>
                        </div>
                    </div>

                    <Button type="submit" style={{ width: '100%' }}>Sign In</Button>
                </form>

                <div style={{ marginTop: '2rem', fontSize: '0.875rem' }}>
                    <p>Don't have an account? <a href="#">Contact Admin</a></p>
                </div>
            </GlassCard>
        </div>
    );
};
