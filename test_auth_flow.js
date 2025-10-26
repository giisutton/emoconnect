const body = JSON.stringify({
    nome: 'Usuario Teste',
    email: 'teste@emoconnect.com',
    senha: 'teste123',
    avatar: '😊'
});

fetch('http://localhost:3000/api/v1/auth/cadastro', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: body
})
    .then(res => res.json())
    .then(data => {
        console.log('Resposta do cadastro:');
        console.log(JSON.stringify(data, null, 2));

        // Agora fazer login
        if (data.success) {
            console.log('\n--- Testando login com o usuário criado ---\n');
            return fetch('http://localhost:3000/api/v1/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email: 'teste@emoconnect.com', senha: 'teste123' })
            });
        }
    })
    .then(res => res ? res.json() : null)
    .then(data => {
        if (data) {
            console.log('Resposta do login:');
            console.log(JSON.stringify(data, null, 2));
        }
    })
    .catch(err => {
        console.error('Erro:', err.message);
    });
