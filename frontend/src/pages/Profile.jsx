import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Profile.css';

const Profile = () => {
    const { user, updateProfile } = useAuth();
    const [activeTab, setActiveTab] = useState('sobre');
    const [selectedMood, setSelectedMood] = useState(null);
    const [moodNote, setMoodNote] = useState('');
    const [postText, setPostText] = useState('');
    const [posts, setPosts] = useState([]);
    const [notifications, setNotifications] = useState(true);
    const [privateMessages, setPrivateMessages] = useState(true);
    const [language, setLanguage] = useState('pt-br');

    // Estados do modal de edição
    const [showEditModal, setShowEditModal] = useState(false);
    const [editedName, setEditedName] = useState(user?.nome || '');
    const [editedBio, setEditedBio] = useState('Aqui para compartilhar emoções e experiências.');
    const [editedInterests, setEditedInterests] = useState('Bem-estar, Saúde Mental, Meditação');

    const handleMoodSelect = (mood) => {
        setSelectedMood(mood);
    };

    const handleSaveMood = () => {
        if (!selectedMood) {
            alert('Por favor, selecione um humor primeiro!');
            return;
        }

        const moodData = {
            mood: selectedMood,
            note: moodNote,
            date: new Date().toLocaleDateString('pt-BR'),
            time: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
        };

        console.log('Humor salvo:', moodData);
        alert(`✅ Humor "${selectedMood}" registrado com sucesso!`);
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

    const handleSavePreferences = () => {
        const preferences = {
            notifications,
            privateMessages,
            language
        };
        console.log('Preferências salvas:', preferences);
        alert('✅ Preferências salvas com sucesso!');
    };

    const handleDeletePost = (postId) => {
        if (window.confirm('Deseja realmente excluir este post?')) {
            setPosts(posts.filter(post => post.id !== postId));
        }
    };

    const handleOpenEditModal = () => {
        setEditedName(user?.nome || '');
        setShowEditModal(true);
    };

    const handleCloseEditModal = () => {
        setShowEditModal(false);
    };

    const handleSaveProfile = () => {
        if (!editedName.trim()) {
            alert('Por favor, preencha o nome!');
            return;
        }

        // Aqui você pode chamar a API para atualizar o perfil
        const updatedData = {
            nome: editedName,
            bio: editedBio,
            interests: editedInterests
        };

        console.log('Perfil atualizado:', updatedData);

        // Se você tiver uma função updateProfile no AuthContext, use aqui
        if (updateProfile) {
            updateProfile({ ...user, nome: editedName });
        }

        alert('✅ Perfil atualizado com sucesso!');
        setShowEditModal(false);
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
                    <p className="bio">"{editedBio}"</p>

                    <button className="edit-profile-btn" onClick={handleOpenEditModal}>
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
                            <h3>Informações Pessoais</h3>
                            <div className="info-card">
                                <div className="info-item">
                                    <i className="fas fa-envelope"></i>
                                    <div>
                                        <strong>Email</strong>
                                        <p>{user?.email || 'não informado'}</p>
                                    </div>
                                </div>
                                <div className="info-item">
                                    <i className="fas fa-calendar-alt"></i>
                                    <div>
                                        <strong>Membro desde</strong>
                                        <p>{new Date().toLocaleDateString('pt-BR', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
                                    </div>
                                </div>
                                <div className="info-item">
                                    <i className="fas fa-heart"></i>
                                    <div>
                                        <strong>Interesses</strong>
                                        <p>{editedInterests}</p>
                                    </div>
                                </div>
                                <div className="info-item">
                                    <i className="fas fa-users"></i>
                                    <div>
                                        <strong>Conexões</strong>
                                        <p>15 amigos conectados</p>
                                    </div>
                                </div>
                            </div>
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
                                                <div className="post-header-info">
                                                    <strong>{user?.nome}</strong>
                                                    <small>{post.date} às {post.time}</small>
                                                </div>
                                                <button
                                                    className="delete-post-btn"
                                                    onClick={() => handleDeletePost(post.id)}
                                                    title="Excluir post"
                                                >
                                                    <i className="fas fa-trash"></i>
                                                </button>
                                            </div>
                                            <p className="post-text">{post.text}</p>
                                            <div className="post-actions">
                                                <button className="action-btn">
                                                    <i className="far fa-heart"></i> Curtir
                                                </button>
                                                <button className="action-btn">
                                                    <i className="far fa-comment"></i> Comentar
                                                </button>
                                            </div>
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
                            <div className="config-section">
                                <h4><i className="fas fa-bell"></i> Notificações</h4>
                                <div className="config-item">
                                    <label className="switch-label">
                                        <input
                                            type="checkbox"
                                            checked={notifications}
                                            onChange={(e) => setNotifications(e.target.checked)}
                                        />
                                        <span className="switch-text">Receber notificações</span>
                                    </label>
                                </div>
                                <div className="config-item">
                                    <label className="switch-label">
                                        <input
                                            type="checkbox"
                                            checked={privateMessages}
                                            onChange={(e) => setPrivateMessages(e.target.checked)}
                                        />
                                        <span className="switch-text">Permitir mensagens privadas</span>
                                    </label>
                                </div>
                            </div>

                            <div className="config-section">
                                <h4><i className="fas fa-globe"></i> Idioma e Região</h4>
                                <div className="config-item">
                                    <label className="select-label">Idioma:</label>
                                    <select
                                        value={language}
                                        onChange={(e) => setLanguage(e.target.value)}
                                    >
                                        <option value="pt-br">Português (Brasil)</option>
                                        <option value="en">English</option>
                                        <option value="es">Español</option>
                                    </select>
                                </div>
                            </div>

                            <div className="config-section">
                                <h4><i className="fas fa-lock"></i> Privacidade</h4>
                                <div className="config-item">
                                    <label className="switch-label">
                                        <input type="checkbox" defaultChecked />
                                        <span className="switch-text">Perfil público</span>
                                    </label>
                                </div>
                                <div className="config-item">
                                    <label className="switch-label">
                                        <input type="checkbox" />
                                        <span className="switch-text">Mostrar status online</span>
                                    </label>
                                </div>
                            </div>

                            <button className="save-btn" onClick={handleSavePreferences}>
                                <i className="fas fa-check"></i> Salvar preferências
                            </button>
                        </div>
                    )}
                </section>
            </main>

            {/* Modal de Edição de Perfil */}
            {showEditModal && (
                <div className="modal-overlay" onClick={handleCloseEditModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <div className="modal-header">
                            <h2><i className="fas fa-user-edit"></i> Editar Perfil</h2>
                            <button className="close-modal-btn" onClick={handleCloseEditModal}>
                                <i className="fas fa-times"></i>
                            </button>
                        </div>

                        <div className="modal-body">
                            <div className="form-group">
                                <label htmlFor="name">
                                    <i className="fas fa-user"></i> Nome
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    value={editedName}
                                    onChange={(e) => setEditedName(e.target.value)}
                                    placeholder="Seu nome completo"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="bio">
                                    <i className="fas fa-quote-left"></i> Bio
                                </label>
                                <textarea
                                    id="bio"
                                    value={editedBio}
                                    onChange={(e) => setEditedBio(e.target.value)}
                                    placeholder="Uma breve descrição sobre você..."
                                    rows="3"
                                ></textarea>
                            </div>

                            <div className="form-group">
                                <label htmlFor="interests">
                                    <i className="fas fa-heart"></i> Interesses
                                </label>
                                <input
                                    type="text"
                                    id="interests"
                                    value={editedInterests}
                                    onChange={(e) => setEditedInterests(e.target.value)}
                                    placeholder="Ex: Bem-estar, Saúde Mental"
                                />
                            </div>

                            <div className="form-group">
                                <label>
                                    <i className="fas fa-image"></i> Foto de Perfil
                                </label>
                                <div className="avatar-preview">
                                    <img
                                        src={`https://ui-avatars.com/api/?name=${editedName}&background=6a5acd&color=fff&size=100&bold=true`}
                                        alt="Preview"
                                    />
                                    <p className="avatar-info">
                                        <i className="fas fa-info-circle"></i> A foto é gerada automaticamente com base no seu nome
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="modal-footer">
                            <button className="cancel-btn" onClick={handleCloseEditModal}>
                                <i className="fas fa-times"></i> Cancelar
                            </button>
                            <button className="save-profile-btn" onClick={handleSaveProfile}>
                                <i className="fas fa-check"></i> Salvar Alterações
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <Footer />
        </div>
    );
};

export default Profile;
