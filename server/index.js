const app = require('./app');
const db = require('./config/db');
const PORT = 3000;

db.once('open', () => {
    console.log('db is running');
    app.listen(PORT, () => {
        console.log(`app is listening on port ${PORT}`);
    })
})