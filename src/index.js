import express from 'express'
import path from 'path'
import { I18n } from 'i18n'

import { fileURLToPath } from 'url';
import { db_notifications } from './db.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const i18n = new I18n({
    defaultLocale: 'en',
    locales: ['en', 'pt-br'],
    directory: path.join(__dirname, 'locales')
})

const app = express()

app.use(i18n.init)

app.get('/', (req, res) => {
    return res.status(200).json({success: true})
})

app.get('/notifications', (req, res) => {
    console.log(req.headers['accept-language'])

    const notifications = db_notifications.getAll()
    
    const formated_messages = notifications.map(n => {
        console.log(n.type, n.sender)
        return res.__(n.type, { name: n.sender })
    })
    
    return res.status(200).json({success: true, result: formated_messages})
})

const PORT = 9000
app.listen(PORT, () => {
    console.log(`app running on port ${PORT}`)
})