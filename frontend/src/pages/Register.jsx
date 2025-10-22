import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { authService } from '../services/authService';
import './Register.css';

const Register = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
    const [avatar, setAvatar] = useState('😊');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [error, setError] = useState('');
    const [emailFeedback, setEmailFeedback] = useState('');
    const [confirmFeedback, setConfirmFeedback] = useState('');
    const [passwordStrength, setPasswordStrength] = useState({ percent: 0, level: 'weak', text: 'Digite uma senha' });
    const [loading, setLoading] = useState(false);

    const { register, isAuthenticated } = useAuth();
    const navigate = useNavigate();

    const avatars = ['😊', '😎', '🥰', '🌟', '🦋', '🌈', '💜', '🌸'];

    useEffect(() => {
        // Redirecionar se já estiver autenticado
        if (isAuthenticated) {
            navigate('/');
        }
    }, [isAuthenticated, navigate]);

    useEffect(() => {
        // Verificar força da senha
        if (senha.length === 0) {
            setPasswordStrength({ percent: 0, level: 'weak', text: 'Digite uma senha' });
            return;
        }
        if (senha.length < 6) {
            setPasswordStrength({ percent: 25, level: 'weak', text: 'Muito fraca' });
            return;
        }

        let score = 0;
        if (senha.length >= 8) score += 25;
        if (senha.length >= 10) score += 25;
        if (/[a-z]/.test(senha) && /[A-Z]/.test(senha)) score += 25;
        if (/\d/.test(senha)) score += 15;
        if (/[^a-zA-Z0-9]/.test(senha)) score += 10;

        if (score < 40) setPasswordStrength({ percent: 40, level: 'weak', text: 'Fraca' });
        else if (score < 60) setPasswordStrength({ percent: 60, level: 'medium', text: 'Média' });
        else if (score < 80) setPasswordStrength({ percent: 80, level: 'strong', text: 'Forte' });
        else setPasswordStrength({ percent: 100, level: 'strong', text: 'Muito forte' });
    }, [senha]);

    useEffect(() => {
        // Verificar email
        const checkEmail = async () => {
            if (!email || !email.includes('@')) {
                setEmailFeedback('');
                return;
            }

            const exists = await authService.checkEmail(email);
            if (exists) {
                setEmailFeedback('⚠️ Este email já está cadastrado');
            } else {
                setEmailFeedback('✓ Email disponível');
            }
        };

        const timeoutId = setTimeout(checkEmail, 500);
        return () => clearTimeout(timeoutId);
    }, [email]);

    useEffect(() => {
        // Verificar se senhas coincidem
        if (confirmarSenha.length === 0) {
            setConfirmFeedback('');
        } else if (senha === confirmarSenha) {
            setConfirmFeedback('✓ Senhas coincidem');
        } else {
            setConfirmFeedback('⚠️ Senhas não coincidem');
        }
    }, [senha, confirmarSenha]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (!nome || !email || !senha || !confirmarSenha) {
            setError('Por favor, preencha todos os campos');
            return;
        }

        if (nome.length < 3) {
            setError('Nome deve ter no mínimo 3 caracteres');
            return;
        }

        if (senha.length < 6) {
            setError('Senha deve ter no mínimo 6 caracteres');
            return;
        }

        if (senha !== confirmarSenha) {
            setError('As senhas não coincidem');
            return;
        }

        setLoading(true);

        try {
            await register(nome, email, senha, avatar);
            navigate('/');
        } catch (err) {
            setError(err.message || 'Erro ao criar conta. Tente novamente.');
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
                        <p>Comece sua jornada de autocuidado</p>
                    </div>

                    <form onSubmit={handleSubmit} className="auth-form">
                        <h2>Criar Conta</h2>

                        <div className="form-group">
                            <label htmlFor="nome">
                                <i className="fas fa-user"></i> Nome Completo
                            </label>
                            <input
                                type="text"
                                id="nome"
                                name="nome"
                                placeholder="Seu nome"
                                required
                                autoComplete="name"
                                minLength="3"
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                            />
                        </div>

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
                            {emailFeedback && (
                                <small className={`form-feedback ${emailFeedback.includes('✓') ? 'success' : 'error'}`}>
                                    {emailFeedback}
                                </small>
                            )}
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
                                    placeholder="Mínimo 6 caracteres"
                                    required
                                    autoComplete="new-password"
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
                            <div className="password-strength">
                                <div className="strength-bar">
                                    <div
                                        className={`strength-bar-fill strength-${passwordStrength.level}`}
                                        style={{ width: `${passwordStrength.percent}%` }}
                                    ></div>
                                </div>
                                <small>{passwordStrength.text}</small>
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="confirmar-senha">
                                <i className="fas fa-lock"></i> Confirmar Senha
                            </label>
                            <div className="password-input">
                                <input
                                    type={showConfirmPassword ? 'text' : 'password'}
                                    id="confirmar-senha"
                                    name="confirmar-senha"
                                    placeholder="Digite a senha novamente"
                                    required
                                    autoComplete="new-password"
                                    minLength="6"
                                    value={confirmarSenha}
                                    onChange={(e) => setConfirmarSenha(e.target.value)}
                                />
                                <button
                                    type="button"
                                    className="toggle-password"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                >
                                    <i className={`fas fa-eye${showConfirmPassword ? '-slash' : ''}`}></i>
                                </button>
                            </div>
                            {confirmFeedback && (
                                <small className={`form-feedback ${confirmFeedback.includes('✓') ? 'success' : 'error'}`}>
                                    {confirmFeedback}
                                </small>
                            )}
                        </div>

                        <div className="form-group">
                            <label>
                                <i className="fas fa-smile"></i> Escolha seu Avatar
                            </label>
                            <div className="avatar-selector">
                                {avatars.map((av) => (
                                    <button
                                        key={av}
                                        type="button"
                                        className={`avatar-option ${avatar === av ? 'selected' : ''}`}
                                        onClick={() => setAvatar(av)}
                                    >
                                        {av}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {error && (
                            <div className="alert alert-error">
                                {error}
                            </div>
                        )}

                        <button
                            type="submit"
                            className="btn btn-primary btn-block"
                            disabled={loading}
                        >
                            {loading ? (
                                <>
                                    <i className="fas fa-spinner fa-spin"></i> Criando conta...
                                </>
                            ) : (
                                <>
                                    <i className="fas fa-user-plus"></i> Criar Conta
                                </>
                            )}
                        </button>

                        <div className="auth-footer">
                            <p>
                                Já tem uma conta? <Link to="/login">Faça login</Link>
                            </p>
                        </div>
                    </form>
                </div>

                <div className="auth-illustration">
                    <div className="illustration-content">
                        <i className="fas fa-heart illustration-icon"></i>
                        <h3>Junte-se a nós!</h3>
                        <p>Cuide da sua saúde mental de forma simples e eficaz.</p>

                        <div className="benefits">
                            <div className="benefit-item">
                                <i className="fas fa-shield-alt"></i>
                                <span>100% seguro e privado</span>
                            </div>
                            <div className="benefit-item">
                                <i className="fas fa-robot"></i>
                                <span>IA especializada em emoções</span>
                            </div>
                            <div className="benefit-item">
                                <i className="fas fa-mobile-alt"></i>
                                <span>Acesse de qualquer lugar</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
