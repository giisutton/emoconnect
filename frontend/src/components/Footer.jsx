import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="footer-content">
                <div className="footer-section">
                    <h3>EmoConnect</h3>
                    <p>Conectando você com suas emoções</p>
                </div>
                <div className="footer-section">
                    <h3>Links Rápidos</h3>
                    <ul>
                        <li><a href="/">Início</a></li>
                        <li><a href="/perfil">Perfil</a></li>
                        <li><a href="/chat">Chat</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>Siga-nos</h3>
                    <div className="social-icons">
                        <a href="#" title="Instagram"><i className="fab fa-instagram"></i></a>
                        <a href="#" title="Twitter"><i className="fab fa-twitter"></i></a>
                        <a href="#" title="Facebook"><i className="fab fa-facebook"></i></a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2025 EmoConnect. Você não está sozinho.</p>
            </div>
        </footer>
    );
};

export default Footer;
