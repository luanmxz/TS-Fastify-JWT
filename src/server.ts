import fastify from "fastify";

const app = fastify();

app.get('/user', (req, res) => {
    return 'Rota de usuário'
});

app.post('/user', (req, res) => {
    return 'Novo usuário'
});

app.put('/user/:id', (req, res) => {
    return 'Usuário atualizado'
});

app.delete('/user/:id', (req, res) => {
    return 'Usuário deletado'
});

app.listen({
    host: '0.0.0.0',
    port: 5000
}).then(() => {
    console.log('Server running');
});

