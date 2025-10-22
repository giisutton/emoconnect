import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useState } from 'react';
import './Header.css';

const Header = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

    const handleLogout = async () => {
        if (window.confirm('Deseja realmente sair?')) {
            await logout();
            navigate('/login');
        }
    };

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        document.body.classList.toggle('dark-theme');
    };

    return (
        <header>
            <div className="container">
                <h1>🌟 EmoConnect</h1>
                <p className="slogan">Conecte-se com suas emoções. Compartilhe. Inspire.</p>
                <nav>
                    <ul>
                        <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Início</Link></li>
                        <li><Link to="/perfil" className={location.pathname === '/perfil' ? 'active' : ''}>Perfil</Link></li>
                        <li><Link to="/chat" className={location.pathname === '/chat' ? 'active' : ''}>Chat</Link></li>
                        <li>
                            <a href="#" onClick={handleLogout} style={{ color: '#ff4757' }}>
                                <i className="fas fa-sign-out-alt"></i> Sair
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            <button
                id="toggle-theme"
                className="theme-toggle"
                title="Alternar tema"
                onClick={toggleTheme}
            >
                {theme === 'light' ? '🌙' : '☀️'}
            </button>
        </header>
    );
};

export default Header;