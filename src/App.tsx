import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { LoginClient } from './pages/LoginClient';
import { LoginTeam } from './pages/LoginTeam';
import { LoginAdmin } from './pages/LoginAdmin';
import { ClientDashboard } from './pages/ClientDashboard';
import { TeamDashboard } from './pages/TeamDashboard';
import { AdminDashboard } from './pages/AdminDashboard';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/login-client" replace />} />
                <Route path="/login" element={<Navigate to="/login-client" replace />} />
                <Route path="/login-client" element={<LoginClient />} />
                <Route path="/login-team" element={<LoginTeam />} />
                <Route path="/login-admin" element={<LoginAdmin />} />
                <Route path="/dashboard" element={<ClientDashboard />} />
                <Route path="/team" element={<TeamDashboard />} />
                <Route path="/admin" element={<AdminDashboard />} />
            </Routes>
        </Router>
    );
}

export default App;
