import api from './api';

const TOKEN_KEY = 'emoconnect_token';
const USER_KEY = 'emoconnect_user';

export const authService = {
    // Normaliza mensagens de erro recebidas do servidor/axios
    _formatServerError(error) {
        const resp = error?.response?.data;
        if (!resp) return error?.message || 'Erro de rede';
        if (typeof resp === 'string') return resp;
        if (typeof resp.error === 'string') return resp.error;
        if (typeof resp.message === 'string') return resp.message;
        try {
            // Tenta extrair valores úteis de um objeto
            if (typeof resp === 'object') {
                const values = Object.values(resp).flat();
                return values.join(' | ');
            }
            return JSON.stringify(resp);
        } catch (e) {
            return 'Erro no servidor';
        }
    },

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
            const msg = this._formatServerError(error) || 'Erro ao cadastrar';
            throw new Error(msg);
        }
    },

    // Login
    async login(email, senha) {
        try {
            const response = await api.post('/v1/auth/login', { email, senha });
            const { token, user } = response.data.data;

            this.saveToken(token);
            this.saveUser(user);

            return { token, user };
        } catch (error) {
            const msg = this._formatServerError(error) || 'Erro ao fazer login';
            throw new Error(msg);
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
            const msg = this._formatServerError(error) || 'Erro ao atualizar perfil';
            throw new Error(msg);
        }
    },

    // Alterar senha
    async changePassword(senhaAtual, novaSenha) {
        try {
            const response = await api.put('/auth/senha', { senhaAtual, novaSenha });
            return response.data;
        } catch (error) {
            const msg = this._formatServerError(error) || 'Erro ao alterar senha';
            throw new Error(msg);
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
            const msg = this._formatServerError(error) || 'Erro ao obter dados do usuário';
            throw new Error(msg);
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
