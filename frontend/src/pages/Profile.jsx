import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Profile.css';

const Profile = () => {
    const { user } = useAuth();
    const [activeTab, setActiveTab] = useState('sobre');
    const [selectedMood, setSelectedMood] = useState(null);
    const [moodNote, setMoodNote] = useState('');
    const [postText, setPostText] = useState('');
    const [posts, setPosts] = useState([]);

    const handleMoodSelect = (mood) => {
        setSelectedMood(mood);
    };

    const handleSaveMood = () => {
        if (!selectedMood) {
            alert('Por favor, selecione um humor primeiro!');
            return;
        }
        alert(`Humor "${selectedMood}" registrado com sucesso!`);
        setSelectedMood(null);
        setMoodNote('');
    };

    const handlePostSubmit = (e) => {
        e.preventDefault();
        if (!postText.trim()) return;

        const newPost = {
            id: Date.now(),
            text: postText,
            date: new Date().toLocaleDateString('pt-BR'),
            time: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
        };

        setPosts([newPost, ...posts]);
        setPostText('');
    };

    return (
        <div>
            <Header />

            <main className="profile-layout">
                <aside className="profile-sidebar">
                    <div className="profile-banner">
                        <p>"Hoje é um bom dia para cuidar de você."</p>
                    </div>

                    <img
                        src={`https://ui-avatars.com/api/?name=${user?.nome}&background=6a5acd&color=fff&size=200&bold=true`}
                        alt="Foto de perfil"
                        className="profile-pic"
                    />

                    <h2>{user?.nome || 'Usuário'}</h2>
                    <p className="bio">"Aqui para compartilhar emoções e experiências."</p>

                    <button className="edit-profile-btn">
                        <i className="fas fa-edit"></i> Editar Perfil
                    </button>
                </aside>

                <section className="profile-main">
                    <div className="tabs">
                        <button
                            className={`tab ${activeTab === 'sobre' ? 'active' : ''}`}
                            onClick={() => setActiveTab('sobre')}
                        >
                            Sobre Mim
                        </button>
                        <button
                            className={`tab ${activeTab === 'posts' ? 'active' : ''}`}
                            onClick={() => setActiveTab('posts')}
                        >
                            Posts
                        </button>
                        <button
                            className={`tab ${activeTab === 'humor' ? 'active' : ''}`}
                            onClick={() => setActiveTab('humor')}
                        >
                            Humor Diário
                        </button>
                        <button
                            className={`tab ${activeTab === 'config' ? 'active' : ''}`}
                            onClick={() => setActiveTab('config')}
                        >
                            Configurações
                        </button>
                    </div>

                    {activeTab === 'sobre' && (
                        <div className="tab-content">
                            <p><strong>Email:</strong> {user?.email}</p>
                            <p><strong>Membro desde:</strong> {new Date().toLocaleDateString('pt-BR')}</p>
                            <p><strong>Interesses:</strong> Bem-estar, Saúde Mental</p>
                        </div>
                    )}

                    {activeTab === 'posts' && (
                        <div className="tab-content">
                            <form className="post-form" onSubmit={handlePostSubmit}>
                                <textarea
                                    placeholder="Escreva algo..."
                                    rows="3"
                                    value={postText}
                                    onChange={(e) => setPostText(e.target.value)}
                                ></textarea>
                                <button type="submit">
                                    <i className="fas fa-paper-plane"></i> Publicar
                                </button>
                            </form>
                            <div className="post-list">
                                {posts.length === 0 ? (
                                    <p style={{ textAlign: 'center', color: '#666', marginTop: '40px' }}>
                                        Nenhum post ainda. Compartilhe algo!
                                    </p>
                                ) : (
                                    posts.map(post => (
                                        <div key={post.id} className="post-item">
                                            <div className="post-header">
                                                <img
                                                    src={`https://ui-avatars.com/api/?name=${user?.nome}&background=6a5acd&color=fff&size=40`}
                                                    alt={user?.nome}
                                                />
                                                <div>
                                                    <strong>{user?.nome}</strong>
                                                    <small>{post.date} às {post.time}</small>
                                                </div>
                                            </div>
                                            <p className="post-text">{post.text}</p>
                                        </div>
                                    ))
                                )}
                            </div>
                        </div>
                    )}

                    {activeTab === 'humor' && (
                        <div className="tab-content">
                            <h3>Registro de Humor Diário</h3>
                            <div className="mood-buttons">
                                <button
                                    className={`mood-btn ${selectedMood === 'Excelente' ? 'selected' : ''}`}
                                    onClick={() => handleMoodSelect('Excelente')}
                                >
                                    😁 Excelente
                                </button>
                                <button
                                    className={`mood-btn ${selectedMood === 'Bem' ? 'selected' : ''}`}
                                    onClick={() => handleMoodSelect('Bem')}
                                >
                                    🙂 Bem
                                </button>
                                <button
                                    className={`mood-btn ${selectedMood === 'Neutro' ? 'selected' : ''}`}
                                    onClick={() => handleMoodSelect('Neutro')}
                                >
                                    😐 Neutro
                                </button>
                                <button
                                    className={`mood-btn ${selectedMood === 'Mal' ? 'selected' : ''}`}
                                    onClick={() => handleMoodSelect('Mal')}
                                >
                                    🙁 Mal
                                </button>
                                <button
                                    className={`mood-btn ${selectedMood === 'Péssimo' ? 'selected' : ''}`}
                                    onClick={() => handleMoodSelect('Péssimo')}
                                >
                                    😞 Péssimo
                                </button>
                            </div>
                            <textarea
                                placeholder="Anote aqui o que influenciou seu humor hoje..."
                                rows="4"
                                value={moodNote}
                                onChange={(e) => setMoodNote(e.target.value)}
                            ></textarea>
                            <button className="save-btn" onClick={handleSaveMood}>
                                <i className="fas fa-save"></i> Salvar registro
                            </button>
                        </div>
                    )}

                    {activeTab === 'config' && (
                        <div className="tab-content">
                            <h3>Preferências</h3>
                            <div className="config-item">
                                <label>
                                    <input type="checkbox" defaultChecked />
                                    Receber notificações
                                </label>
                            </div>
                            <div className="config-item">
                                <label>
                                    <input type="checkbox" defaultChecked />
                                    Permitir mensagens privadas
                                </label>
                            </div>
                            <div className="config-item">
                                <label>Idioma:</label>
                                <select>
                                    <option value="pt-br">Português (Brasil)</option>
                                    <option value="en">English</option>
                                    <option value="es">Español</option>
                                </select>
                            </div>
                            <button className="save-btn">Salvar preferências</button>
                        </div>
                    )}
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default Profile;
