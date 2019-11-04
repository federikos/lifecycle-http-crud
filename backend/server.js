const http = require('http');
const Koa = require('koa');
const Router = require('koa-router');
const cors = require('koa2-cors');
const koaBody = require('koa-body');

const app = new Koa();

app.use(cors());
app.use(koaBody({json: true}));

const notes = [
    {content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum magni soluta voluptate in eius, veniam commodi. Porro, impedit?', id: '0'},
    {content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit eos dolorum molestias quaerat, sit voluptas provident repudiandae pariatur quo!', id: '1'}
];

const router = new Router();

router.get('/notes', async (ctx, next) => {
    ctx.response.body = notes;
});

router.post('/notes', async(ctx, next) => {
    notes.push({...JSON.parse(ctx.request.body)});
    ctx.response.status = 204;
});

router.delete('/notes/:id', async(ctx, next) => {
    const noteId = ctx.params.id;
    const index = notes.findIndex(o => o.id === noteId);
    if (index !== -1) {
        notes.splice(index, 1);
    }
    ctx.response.status = 204;
});

app.use(router.routes()).use(router.allowedMethods());

const port = process.env.PORT || 7000;
const server = http.createServer(app.callback());
server.listen(port, () => console.log('server started'));