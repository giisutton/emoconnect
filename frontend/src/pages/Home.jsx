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
        {
            emoji: '😊',
            name: 'Feliz',
            advice: 'Continue espalhando essa energia positiva! Compartilhe sua alegria com quem você ama hoje. 🌟',
            color: '#FFD700'
        },
        {
            emoji: '😢',
            name: 'Triste',
            advice: 'Está tudo bem sentir tristeza. Permita-se chorar, conversar com alguém ou escrever sobre seus sentimentos. Você não está sozinho(a). 💙',
            color: '#4A90E2'
        },
        {
            emoji: '😴',
            name: 'Cansado',
            advice: 'Seu corpo está pedindo descanso. Tire um tempo para relaxar, durma bem e não se cobre tanto. Você merece recuperar suas energias. 💤',
            color: '#9B59B6'
        },
        {
            emoji: '😤',
            name: 'Estressado',
            advice: 'Respire fundo. Faça uma pausa, alongue-se ou caminhe um pouco. O estresse passa, mas sua saúde é prioridade. 🌿',
            color: '#E74C3C'
        },
        {
            emoji: '😬',
            name: 'Ansioso',
            advice: 'Foque no presente. Tente exercícios de respiração, meditação ou anote seus pensamentos. Um passo de cada vez. 🧘',
            color: '#F39C12'
        },
        {
            emoji: '🧘',
            name: 'Calmo',
            advice: 'Que paz maravilhosa! Aproveite esse momento de tranquilidade e gratidão. Você está em harmonia. ☮️',
            color: '#2ECC71'
        },
        {
            emoji: '😄',
            name: 'Empolgado',
            advice: 'Sua energia está incrível! Canalize esse entusiasmo para algo produtivo e divirta-se. O mundo precisa dessa vibração! 🚀',
            color: '#FF6B6B'
        },
        {
            emoji: '🤔',
            name: 'Confuso',
            advice: 'Tudo bem não ter todas as respostas agora. Escreva suas dúvidas, converse com alguém de confiança. A clareza virá. 💭',
            color: '#95A5A6'
        },
        {
            emoji: '😰',
            name: 'Preocupado',
            advice: 'Preocupar-se mostra que você se importa. Mas lembre-se: nem tudo está sob seu controle. Faça o que puder e confie no processo. 🌈',
            color: '#FF8C00'
        },
        {
            emoji: '😡',
            name: 'Com Raiva',
            advice: 'A raiva é válida, mas não deixe que ela te controle. Dê um tempo, respire, pratique exercício físico ou escreva sobre o que te irrita. 🔥',
            color: '#C0392B'
        },
        {
            emoji: '🥺',
            name: 'Vulnerável',
            advice: 'Vulnerabilidade é coragem, não fraqueza. Permita-se ser humano(a) e procure apoio quando precisar. Você é forte. 💪',
            color: '#E91E63'
        },
        {
            emoji: '😌',
            name: 'Grato',
            advice: 'A gratidão transforma dias comuns em momentos especiais. Continue cultivando essa sensação e compartilhe seu apreço com outros. 🙏',
            color: '#00BCD4'
        },
        {
            emoji: '😔',
            name: 'Desanimado',
            advice: 'Dias difíceis acontecem. Seja gentil consigo mesmo(a), faça algo pequeno que te traga alegria e lembre-se de que isso é temporário. 🌤️',
            color: '#607D8B'
        },
        {
            emoji: '🤗',
            name: 'Amoroso',
            advice: 'Seu coração está transbordando amor! Expresse seus sentimentos, abrace quem você ama e celebre os laços que você tem. ❤️',
            color: '#FF1744'
        },
        {
            emoji: '😳',
            name: 'Sobrecarregado',
            advice: 'Quando tudo parece demais, divida as tarefas em partes menores. Priorize o essencial e peça ajuda. Você não precisa fazer tudo sozinho(a). 🛟',
            color: '#9C27B0'
        },
        {
            emoji: '😎',
            name: 'Confiante',
            advice: 'Você está no controle! Continue acreditando em si mesmo(a) e persiga seus objetivos com determinação. O sucesso te espera! 🏆',
            color: '#00E676'
        },
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

    const handleMoodClick = (moodObj) => {
        setSelectedMood(moodObj);
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

    const [showProgress, setShowProgress] = useState(false);
    const [connectedUsers, setConnectedUsers] = useState([]);

    const handleProgress = () => {
        setShowProgress(true);
    };

    const handleConnect = (userName) => {
        if (connectedUsers.includes(userName)) {
            // Já conectado - desconectar
            setConnectedUsers(connectedUsers.filter(name => name !== userName));
            alert(`Você se desconectou de ${userName} 😢`);
        } else {
            // Conectar
            setConnectedUsers([...connectedUsers, userName]);
            alert(`🎉 Você se conectou com ${userName}! Agora vocês podem conversar no chat.`);
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
                                className={`mood-card ${selectedMood?.name === mood.name ? 'selected' : ''}`}
                                onClick={() => handleMoodClick(mood)}
                                style={{
                                    '--mood-color': mood.color
                                }}
                            >
                                <span className="mood-emoji">{mood.emoji}</span>
                                <span className="mood-name">{mood.name}</span>
                            </button>
                        ))}
                    </div>
                    {selectedMood && (
                        <div className="mood-advice-card">
                            <div className="advice-icon">
                                <i className="fas fa-lightbulb"></i>
                            </div>
                            <div className="advice-content">
                                <h3>Você está se sentindo {selectedMood.name}</h3>
                                <p>{selectedMood.advice}</p>
                            </div>
                        </div>
                    )}
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
                            <button
                                className={`connect-btn ${connectedUsers.includes('Maria S.') ? 'connected' : ''}`}
                                onClick={() => handleConnect('Maria S.')}
                            >
                                {connectedUsers.includes('Maria S.') ? (
                                    <>
                                        <i className="fas fa-check"></i> Conectado
                                    </>
                                ) : (
                                    <>
                                        <i className="fas fa-user-plus"></i> Conectar
                                    </>
                                )}
                            </button>
                        </div>

                        <div className="comunidade-card">
                            <img
                                src="https://ui-avatars.com/api/?name=Joao+P&background=3b82f6&color=fff&size=200&bold=true"
                                alt="Perfil"
                                className="comunidade-img"
                            />
                            <h3>João P.</h3>
                            <p>Interesses: Música, Cinema</p>
                            <button
                                className={`connect-btn ${connectedUsers.includes('João P.') ? 'connected' : ''}`}
                                onClick={() => handleConnect('João P.')}
                            >
                                {connectedUsers.includes('João P.') ? (
                                    <>
                                        <i className="fas fa-check"></i> Conectado
                                    </>
                                ) : (
                                    <>
                                        <i className="fas fa-user-plus"></i> Conectar
                                    </>
                                )}
                            </button>
                        </div>

                        <div className="comunidade-card">
                            <img
                                src="https://ui-avatars.com/api/?name=Ana+R&background=ec4899&color=fff&size=200&bold=true"
                                alt="Perfil"
                                className="comunidade-img"
                            />
                            <h3>Ana R.</h3>
                            <p>Interesses: Livros, Café</p>
                            <button
                                className={`connect-btn ${connectedUsers.includes('Ana R.') ? 'connected' : ''}`}
                                onClick={() => handleConnect('Ana R.')}
                            >
                                {connectedUsers.includes('Ana R.') ? (
                                    <>
                                        <i className="fas fa-check"></i> Conectado
                                    </>
                                ) : (
                                    <>
                                        <i className="fas fa-user-plus"></i> Conectar
                                    </>
                                )}
                            </button>
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

            {/* Overlay de Progresso */}
            {showProgress && (
                <div className="progress-overlay">
                    <div className="progress-container">
                        <div className="progress-header">
                            <h2><i className="fas fa-chart-line"></i> Seu Progresso</h2>
                            <button className="close-progress" onClick={() => setShowProgress(false)}>
                                <i className="fas fa-times"></i>
                            </button>
                        </div>

                        <div className="progress-content">
                            <div className="stats-grid">
                                <div className="stat-card">
                                    <div className="stat-icon" style={{ background: 'linear-gradient(135deg, #667eea, #764ba2)' }}>
                                        <i className="fas fa-calendar-check"></i>
                                    </div>
                                    <div className="stat-info">
                                        <h3>15</h3>
                                        <p>Dias de Uso</p>
                                    </div>
                                </div>

                                <div className="stat-card">
                                    <div className="stat-icon" style={{ background: 'linear-gradient(135deg, #f093fb, #f5576c)' }}>
                                        <i className="fas fa-smile"></i>
                                    </div>
                                    <div className="stat-info">
                                        <h3>42</h3>
                                        <p>Registros de Humor</p>
                                    </div>
                                </div>

                                <div className="stat-card">
                                    <div className="stat-icon" style={{ background: 'linear-gradient(135deg, #4facfe, #00f2fe)' }}>
                                        <i className="fas fa-comments"></i>
                                    </div>
                                    <div className="stat-info">
                                        <h3>28</h3>
                                        <p>Conversas com IA</p>
                                    </div>
                                </div>

                                <div className="stat-card">
                                    <div className="stat-icon" style={{ background: 'linear-gradient(135deg, #43e97b, #38f9d7)' }}>
                                        <i className="fas fa-check-circle"></i>
                                    </div>
                                    <div className="stat-info">
                                        <h3>35</h3>
                                        <p>Atividades Concluídas</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mood-chart">
                                <h3><i className="fas fa-chart-bar"></i> Humor nos Últimos 7 Dias</h3>
                                <div className="chart-bars">
                                    <div className="bar-item">
                                        <div className="bar" style={{ height: '80%', background: '#667eea' }}></div>
                                        <span>Seg</span>
                                    </div>
                                    <div className="bar-item">
                                        <div className="bar" style={{ height: '60%', background: '#764ba2' }}></div>
                                        <span>Ter</span>
                                    </div>
                                    <div className="bar-item">
                                        <div className="bar" style={{ height: '90%', background: '#667eea' }}></div>
                                        <span>Qua</span>
                                    </div>
                                    <div className="bar-item">
                                        <div className="bar" style={{ height: '70%', background: '#764ba2' }}></div>
                                        <span>Qui</span>
                                    </div>
                                    <div className="bar-item">
                                        <div className="bar" style={{ height: '85%', background: '#667eea' }}></div>
                                        <span>Sex</span>
                                    </div>
                                    <div className="bar-item">
                                        <div className="bar" style={{ height: '75%', background: '#764ba2' }}></div>
                                        <span>Sáb</span>
                                    </div>
                                    <div className="bar-item">
                                        <div className="bar" style={{ height: '95%', background: '#667eea' }}></div>
                                        <span>Dom</span>
                                    </div>
                                </div>
                            </div>

                            <div className="achievements">
                                <h3><i className="fas fa-trophy"></i> Conquistas</h3>
                                <div className="achievements-grid">
                                    <div className="achievement-badge earned">
                                        <i className="fas fa-star"></i>
                                        <p>Primeira Semana</p>
                                    </div>
                                    <div className="achievement-badge earned">
                                        <i className="fas fa-fire"></i>
                                        <p>3 Dias Seguidos</p>
                                    </div>
                                    <div className="achievement-badge earned">
                                        <i className="fas fa-heart"></i>
                                        <p>10 Humores</p>
                                    </div>
                                    <div className="achievement-badge locked">
                                        <i className="fas fa-lock"></i>
                                        <p>30 Dias</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <Footer />
        </div>
    );
};

export default Home;