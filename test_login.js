const body = JSON.stringify({
    email: 'admin@emoconnect.com',
    senha: 'admin123'
});

fetch('http://localhost:3000/api/v1/auth/login', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: body
})
    .then(res => res.json())
    .then(data => {
        console.log('Resposta do login:');
        console.log(JSON.stringify(data, null, 2));
    })
    .catch(err => {
        console.error('Erro ao fazer login:', err.message);
    });
