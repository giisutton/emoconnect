import { useState, useEffect } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [searchParams] = useSearchParams();

    const { login, isAuthenticated } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        // Redirecionar se já estiver autenticado
        if (isAuthenticated) {
            navigate('/');
        }

        // Verificar se sessão expirou
        if (searchParams.get('expired') === 'true') {
            setError('Sua sessão expirou. Por favor, faça login novamente.');
        }
    }, [isAuthenticated, navigate, searchParams]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (!email || !senha) {
            setError('Por favor, preencha todos os campos');
            return;
        }

        setLoading(true);

        try {
            await login(email, senha);
            navigate('/');
        } catch (err) {
            console.error('Erro no login:', err);
            const errorMessage = err?.response?.data?.message || err?.message || 'Erro ao fazer login. Tente novamente.';
            setError(errorMessage);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="auth-page">
            <div className="auth-container">
                <div className="auth-card">
                    <div className="auth-header">
                        <h1>🌟 EmoConnect</h1>
                        <p>Conecte-se com suas emoções</p>
                    </div>

                    {error && (
                        <div className="alert alert-error">
                            <i className="fas fa-exclamation-triangle"></i>
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="auth-form">
                        <h2>Entrar</h2>

                        <div className="form-group">
                            <label htmlFor="email">
                                <i className="fas fa-envelope"></i> Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="seu@email.com"
                                required
                                autoComplete="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="senha">
                                <i className="fas fa-lock"></i> Senha
                            </label>
                            <div className="password-input">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    id="senha"
                                    name="senha"
                                    placeholder="••••••"
                                    required
                                    autoComplete="current-password"
                                    minLength="6"
                                    value={senha}
                                    onChange={(e) => setSenha(e.target.value)}
                                />
                                <button
                                    type="button"
                                    className="toggle-password"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    <i className={`fas fa-eye${showPassword ? '-slash' : ''}`}></i>
                                </button>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="btn btn-primary btn-block"
                            disabled={loading}
                        >
                            {loading ? (
                                <>
                                    <i className="fas fa-spinner fa-spin"></i> Entrando...
                                </>
                            ) : (
                                <>
                                    <i className="fas fa-sign-in-alt"></i> Entrar
                                </>
                            )}
                        </button>

                        <div className="auth-footer">
                            <p>
                                Não tem uma conta? <Link to="/cadastro">Cadastre-se</Link>
                            </p>
                        </div>
                    </form>
                </div>

                <div className="auth-illustration">
                    <div className="illustration-content">
                        <i className="fas fa-heart illustration-icon"></i>
                        <h3>Bem-vindo de volta!</h3>
                        <p>Continuemos sua jornada de autocuidado e bem-estar emocional.</p>

                        <div className="benefits">
                            <div className="benefit-item">
                                <i className="fas fa-comment-dots"></i>
                                <span>Chat com IA especializada</span>
                            </div>
                            <div className="benefit-item">
                                <i className="fas fa-chart-line"></i>
                                <span>Acompanhe seu progresso</span>
                            </div>
                            <div className="benefit-item">
                                <i className="fas fa-users"></i>
                                <span>Comunidade de apoio</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
