import api from './api';

const TOKEN_KEY = 'emoconnect_token';
const USER_KEY = 'emoconnect_user';

export const authService = {
    // Salvar token
    saveToken(token) {
        localStorage.setItem(TOKEN_KEY, token);
    },

    // Obter token
    getToken() {
        return localStorage.getItem(TOKEN_KEY);
    },

    // Remover token
    removeToken() {
        localStorage.removeItem(TOKEN_KEY);
    },

    // Salvar usuário
    saveUser(user) {
        localStorage.setItem(USER_KEY, JSON.stringify(user));
    },

    // Obter usuário
    getUser() {
        const userStr = localStorage.getItem(USER_KEY);
        return userStr ? JSON.parse(userStr) : null;
    },

    // Remover usuário
    removeUser() {
        localStorage.removeItem(USER_KEY);
    },

    // Verificar se está autenticado
    isAuthenticated() {
        const token = this.getToken();
        if (!token) return false;

        try {
            const payload = JSON.parse(atob(token.split('.')[1]));
            const now = Math.floor(Date.now() / 1000);
            const isValid = payload.exp > now;

            // Se o token estiver expirado, limpar localStorage
            if (!isValid) {
                this.removeToken();
                this.removeUser();
            }

            return isValid;
        } catch (error) {
            console.error('Token inválido:', error);
            // Se houver erro ao decodificar, limpar localStorage
            this.removeToken();
            this.removeUser();
            return false;
        }
    },    // Cadastro
    async register(nome, email, senha, avatar = '😊') {
        try {
            const response = await api.post('/auth/cadastro', { nome, email, senha, avatar });
            const { token, user } = response.data.data;

            this.saveToken(token);
            this.saveUser(user);

            return { token, user };
        } catch (error) {
            throw new Error(error.response?.data?.error || 'Erro ao cadastrar');
        }
    },

    // Login
    async login(email, senha) {
        try {
            const response = await api.post('/auth/login', { email, senha });
            const { token, user } = response.data.data;

            this.saveToken(token);
            this.saveUser(user);

            return { token, user };
        } catch (error) {
            throw new Error(error.response?.data?.error || 'Erro ao fazer login');
        }
    },

    // Logout
    async logout() {
        try {
            await api.post('/auth/logout');
        } catch (error) {
            console.error('Erro ao fazer logout:', error);
        } finally {
            this.removeToken();
            this.removeUser();
        }
    },

    // Atualizar perfil
    async updateProfile(nome) {
        try {
            const response = await api.put('/auth/perfil', { nome });
            const user = response.data.data;
            this.saveUser(user);
            return user;
        } catch (error) {
            throw new Error(error.response?.data?.error || 'Erro ao atualizar perfil');
        }
    },

    // Alterar senha
    async changePassword(senhaAtual, novaSenha) {
        try {
            const response = await api.put('/auth/senha', { senhaAtual, novaSenha });
            return response.data;
        } catch (error) {
            throw new Error(error.response?.data?.error || 'Erro ao alterar senha');
        }
    },

    // Obter dados do usuário
    async getUserData() {
        try {
            const response = await api.get('/auth/me');
            const user = response.data.data;
            this.saveUser(user);
            return user;
        } catch (error) {
            throw new Error(error.response?.data?.error || 'Erro ao obter dados do usuário');
        }
    },

    // Verificar email
    async checkEmail(email) {
        try {
            const response = await api.get(`/auth/verificar-email/${encodeURIComponent(email)}`);
            return response.data.exists;
        } catch (error) {
            console.error('Erro ao verificar email:', error);
            return false;
        }
    },

    // Helpers
    getUserId() {
        const user = this.getUser();
        return user?.id || null;
    },

    getUserName() {
        const user = this.getUser();
        return user?.nome || 'Usuário';
    },

    getUserEmail() {
        const user = this.getUser();
        return user?.email || '';
    },

    getUserRole() {
        const user = this.getUser();
        return user?.role || 'user';
    },

    isAdmin() {
        return this.getUserRole() === 'admin';
    },

    isModerator() {
        return this.getUserRole() === 'moderator';
    },

    isModeratorOrAdmin() {
        const role = this.getUserRole();
        return role === 'moderator' || role === 'admin';
    },
};
