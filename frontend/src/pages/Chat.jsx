import { useState, useEffect, useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Chat.css';

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [mode, setMode] = useState('ai'); // 'ai' ou 'user'
    const [isTyping, setIsTyping] = useState(false);
    const chatBoxRef = useRef(null);

    useEffect(() => {
        // Scroll automático para a última mensagem
        if (chatBoxRef.current) {
            chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
        }
    }, [messages]);

    const sendMessage = async () => {
        if (!input.trim()) return;

        const userMessage = {
            id: Date.now(),
            text: input,
            sender: 'user',
            timestamp: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
        };

        setMessages([...messages, userMessage]);
        setInput('');

        // Simular resposta (em produção, chamar API)
        if (mode === 'ai') {
            setIsTyping(true);

            setTimeout(() => {
                const responses = [
                    'Entendo como você está se sentindo. Como posso ajudá-lo(a) hoje?',
                    'Obrigado por compartilhar isso comigo. Gostaria de conversar mais sobre o assunto?',
                    'Suas emoções são válidas. Vamos explorar isso juntos?',
                    'Estou aqui para ouvir. O que mais está em sua mente?',
                    'Isso parece importante. Quer me contar mais detalhes?'
                ];

                const randomResponse = responses[Math.floor(Math.random() * responses.length)];

                const aiMessage = {
                    id: Date.now() + 1,
                    text: randomResponse,
                    sender: 'ai',
                    timestamp: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
                };

                setMessages((prev) => [...prev, aiMessage]);
                setIsTyping(false);
            }, 1500);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    };

    const clearChat = () => {
        if (window.confirm('Deseja limpar o histórico de conversa?')) {
            setMessages([]);
        }
    }; return (
        <div>
            <Header />

            <div className="main-container">
                <div className="chat-mode-selector">
                    <button
                        className={mode === 'user' ? 'active' : ''}
                        onClick={() => setMode('user')}
                    >
                        Chat com Pessoas
                    </button>
                    <button
                        className={mode === 'ai' ? 'active' : ''}
                        onClick={() => setMode('ai')}
                    >
                        Chat com IA
                    </button>
                </div>

                <div className="chat-wrapper">
                    {mode === 'user' && (
                        <div className="contacts-list">
                            <div className="contacts-header">
                                <h3>Contatos</h3>
                                <input type="text" placeholder="Pesquisar..." />
                            </div>
                            <div className="contacts-container">
                                <div className="contact-item active">
                                    <img src="https://ui-avatars.com/api/?name=Ana&background=ec4899&color=fff" alt="Ana" />
                                    <div className="contact-info">
                                        <h4>Ana Silva</h4>
                                        <p className="online">● Online</p>
                                    </div>
                                </div>
                                <div className="contact-item">
                                    <img src="https://ui-avatars.com/api/?name=Joao&background=3b82f6&color=fff" alt="João" />
                                    <div className="contact-info">
                                        <h4>João Pedro</h4>
                                        <p className="offline">● Offline</p>
                                    </div>
                                </div>
                                <div className="contact-item">
                                    <img src="https://ui-avatars.com/api/?name=Maria&background=7c3aed&color=fff" alt="Maria" />
                                    <div className="contact-info">
                                        <h4>Maria Santos</h4>
                                        <p className="online">● Online</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    <div className="chat-container">
                        <div className="chat-header">
                            <img
                                src={mode === 'ai'
                                    ? "https://ui-avatars.com/api/?name=IA&background=6a5acd&color=fff"
                                    : "https://ui-avatars.com/api/?name=Ana&background=ec4899&color=fff"}
                                alt="Avatar"
                            />
                            <div className="header-info">
                                <span>{mode === 'ai' ? 'EmoConnect IA' : 'Ana Silva'}</span>
                                <small>
                                    {mode === 'ai' ? 'Sempre disponível para você' : 'Online agora'}
                                </small>
                            </div>
                            <button className="clear-chat" onClick={clearChat} title="Limpar conversa">
                                <i className="fas fa-trash"></i>
                            </button>
                        </div>

                        <div className="chat-box" ref={chatBoxRef}>
                            {messages.length === 0 && (
                                <div className="empty-chat">
                                    <i className="fas fa-comments"></i>
                                    <p>Comece uma conversa!</p>
                                    <small>
                                        {mode === 'ai'
                                            ? 'A IA está aqui para ouvir você'
                                            : 'Envie uma mensagem para iniciar'}
                                    </small>
                                </div>
                            )}

                            {messages.map((msg) => (
                                <div key={msg.id} className={`message ${msg.sender}`}>
                                    <div className="message-content">
                                        <p>{msg.text}</p>
                                        <span className="message-time">{msg.timestamp}</span>
                                    </div>
                                </div>
                            ))}

                            {isTyping && (
                                <div className="message ai">
                                    <div className="message-content typing">
                                        <div className="typing-indicator">
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="chat-input">
                            <button className="emoji-btn" title="Adicionar emoji">
                                😊
                            </button>
                            <input
                                type="text"
                                placeholder="Digite sua mensagem..."
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyPress={handleKeyPress}
                            />
                            <button className="send-btn" onClick={sendMessage}>
                                <i className="fas fa-paper-plane"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Chat;
