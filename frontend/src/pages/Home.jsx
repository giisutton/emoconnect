import { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Home.css';

const Home = () => {
    const { user } = useAuth();
    const navigate = useNavigate();
    const [currentDate, setCurrentDate] = useState('');
    const [selectedMood, setSelectedMood] = useState('');
    const [showBreathing, setShowBreathing] = useState(false);
    const [showActivities, setShowActivities] = useState(false);
    const [breathPhase, setBreathPhase] = useState('Inspire...');
    const [motivationalQuote, setMotivationalQuote] = useState('');

    useEffect(() => {
        const date = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        setCurrentDate(date.toLocaleDateString('pt-BR', options));
    }, []);

    const moods = [
        { emoji: '😊', name: 'Feliz' },
        { emoji: '😢', name: 'Triste' },
        { emoji: '😴', name: 'Cansado' },
        { emoji: '😤', name: 'Estressado' },
        { emoji: '😬', name: 'Ansioso' },
        { emoji: '🧘', name: 'Calmo' },
        { emoji: '😄', name: 'Empolgado' },
        { emoji: '🤔', name: 'Confuso' },
    ];

    const motivationalQuotes = [
        "Você é mais forte do que imagina! 💪",
        "Cada dia é uma nova oportunidade. ✨",
        "Acredite em si mesmo(a)! 🌟",
        "Pequenos passos levam a grandes conquistas. 🚀",
        "Você está fazendo o seu melhor e isso é suficiente. 💚",
        "A mudança começa de dentro para fora. 🌱",
        "Seja gentil consigo mesmo(a). 🤗",
        "Você é capaz de superar qualquer desafio. 🏆"
    ];

    const handleMoodClick = (mood) => {
        setSelectedMood(mood);
        // Aqui você pode salvar no backend
    };

    const handleBreathingExercise = () => {
        setShowBreathing(true);
        let phase = 0;
        const phases = ['Inspire...', 'Segure...', 'Expire...', 'Descanse...'];

        const interval = setInterval(() => {
            phase = (phase + 1) % phases.length;
            setBreathPhase(phases[phase]);
        }, 4000);

        // Limpar após 1 minuto
        setTimeout(() => {
            clearInterval(interval);
            setShowBreathing(false);
        }, 60000);
    };

    const handleActivities = () => {
        setShowActivities(true);
    };

    const handleProgress = () => {
        // Scroll para a seção de progresso ou navegar
        const progressSection = document.getElementById('secao-progresso');
        if (progressSection) {
            progressSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleDesabafar = () => {
        navigate('/chat');
    };

    const handleRelaxar = () => {
        window.open('https://www.youtube.com/results?search_query=musica+relaxante', '_blank');
    };

    const handleMotivacional = () => {
        const randomQuote = motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];
        setMotivationalQuote(randomQuote);
        setTimeout(() => setMotivationalQuote(''), 5000);
    }; return (
        <div>
            <Header />

            <main>
                <div className="welcome-banner">
                    <h2>Olá, <span>{user?.nome || 'Amigo'}</span>!</h2>
                    <p>Hoje é <span>{currentDate}</span></p>
                </div>

                <section className="feelings">
                    <h2>Como você está se sentindo hoje?</h2>
                    <div className="moods-grid">
                        {moods.map((mood) => (
                            <button
                                key={mood.name}
                                className={`mood-card ${selectedMood === mood.name ? 'selected' : ''}`}
                                onClick={() => handleMoodClick(mood.name)}
                            >
                                {mood.emoji} <span>{mood.name}</span>
                            </button>
                        ))}
                    </div>
                    {selectedMood && <p id="mood-message">Você está se sentindo {selectedMood}!</p>}
                </section>

                <div className="cards-row">
                    <button className="action-card" onClick={handleBreathingExercise}>
                        <i className="fas fa-lungs"></i> Respirar
                    </button>
                    <button className="action-card" onClick={handleActivities}>
                        <i className="fas fa-list-check"></i> Atividades
                    </button>
                    <button className="action-card" onClick={handleProgress}>
                        <i className="fas fa-chart-line"></i> Ver Progresso
                    </button>
                </div>

                {motivationalQuote && (
                    <div className="motivational-popup">
                        <div className="motivational-content">
                            <p>{motivationalQuote}</p>
                        </div>
                    </div>
                )}

                <section className="actions">
                    <h2>O que deseja fazer agora?</h2>
                    <div className="cards">
                        <button className="action-card" onClick={handleDesabafar}>
                            <i className="fas fa-comment-dots"></i> Desabafar
                        </button>
                        <button className="action-card" onClick={handleRelaxar}>
                            <i className="fas fa-music"></i> Relaxar
                        </button>
                        <button className="action-card" onClick={handleMotivacional}>
                            <i className="fas fa-lightbulb"></i> Frase Motivacional
                        </button>
                    </div>
                </section>                <section className="bem-estar-dicas">
                    <h2><i className="fas fa-seedling"></i> Dicas de Bem-estar</h2>
                    <div className="dicas-container">
                        <div className="dica-card">
                            <div className="dica-icon"><i className="fas fa-droplet"></i></div>
                            <h3>Hidratação</h3>
                            <p>Beber água regularmente ajuda a manter o equilíbrio físico e mental.</p>
                        </div>
                        <div className="dica-card">
                            <div className="dica-icon"><i className="fas fa-bed"></i></div>
                            <h3>Sono</h3>
                            <p>Dormir 7-8 horas por noite melhora seu humor e sua capacidade cognitiva.</p>
                        </div>
                        <div className="dica-card">
                            <div className="dica-icon"><i className="fas fa-person-walking"></i></div>
                            <h3>Movimento</h3>
                            <p>Apenas 30 minutos de atividade física diária pode reduzir a ansiedade.</p>
                        </div>
                        <div className="dica-card">
                            <div className="dica-icon"><i className="fas fa-book"></i></div>
                            <h3>Leitura</h3>
                            <p>Ler por 20 minutos reduz os níveis de estresse em até 68%.</p>
                        </div>
                    </div>
                </section>

                <section className="comunidade">
                    <h2><i className="fas fa-users"></i> Conecte-se</h2>
                    <p>Pessoas que podem estar passando por experiências semelhantes:</p>

                    <div className="comunidade-cards">
                        <div className="comunidade-card">
                            <img
                                src="https://ui-avatars.com/api/?name=Maria+S&background=7c3aed&color=fff&size=200&bold=true"
                                alt="Perfil"
                                className="comunidade-img"
                            />
                            <h3>Maria S.</h3>
                            <p>Interesses: Fotografia, Viagens</p>
                            <button className="connect-btn">Conectar</button>
                        </div>

                        <div className="comunidade-card">
                            <img
                                src="https://ui-avatars.com/api/?name=Joao+P&background=3b82f6&color=fff&size=200&bold=true"
                                alt="Perfil"
                                className="comunidade-img"
                            />
                            <h3>João P.</h3>
                            <p>Interesses: Música, Cinema</p>
                            <button className="connect-btn">Conectar</button>
                        </div>

                        <div className="comunidade-card">
                            <img
                                src="https://ui-avatars.com/api/?name=Ana+R&background=ec4899&color=fff&size=200&bold=true"
                                alt="Perfil"
                                className="comunidade-img"
                            />
                            <h3>Ana R.</h3>
                            <p>Interesses: Livros, Café</p>
                            <button className="connect-btn">Conectar</button>
                        </div>
                    </div>
                </section>
            </main>

            {/* Overlay de Respiração */}
            {showBreathing && (
                <div className="breathing-overlay">
                    <div className="breathing-circle"></div>
                    <p className="breath-phase">{breathPhase}</p>
                    <button className="close-breathing" onClick={() => setShowBreathing(false)}>
                        Fechar
                    </button>
                </div>
            )}

            {/* Overlay de Atividades */}
            {showActivities && (
                <div className="activities-overlay">
                    <div className="activities-container">
                        <h2>Atividades de Bem-estar</h2>
                        <div className="activities-list">
                            <div className="activity-item">
                                <input type="checkbox" id="atividade1" />
                                <label htmlFor="atividade1">Beber 2 litros de água</label>
                            </div>
                            <div className="activity-item">
                                <input type="checkbox" id="atividade2" />
                                <label htmlFor="atividade2">Praticar 10 minutos de meditação</label>
                            </div>
                            <div className="activity-item">
                                <input type="checkbox" id="atividade3" />
                                <label htmlFor="atividade3">Alongar-se por 5 minutos</label>
                            </div>
                            <div className="activity-item">
                                <input type="checkbox" id="atividade4" />
                                <label htmlFor="atividade4">Dar uma pausa da tela</label>
                            </div>
                            <div className="activity-item">
                                <input type="checkbox" id="atividade5" />
                                <label htmlFor="atividade5">Anotar 3 coisas positivas do dia</label>
                            </div>
                        </div>
                        <button className="close-activities" onClick={() => setShowActivities(false)}>
                            Fechar
                        </button>
                    </div>
                </div>
            )}

            <Footer />
        </div>
    );
};

export default Home;