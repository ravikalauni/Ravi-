import express from 'express';
import Database from 'better-sqlite3';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 5000;

app.use(express.json());

// Initialize Database
const db = new Database('database.db');

// Create tables
db.exec(`
  CREATE TABLE IF NOT EXISTS documents (
    id TEXT PRIMARY KEY,
    title TEXT,
    subtitle TEXT,
    content TEXT,
    likes INTEGER DEFAULT 0,
    shares INTEGER DEFAULT 0,
    date TEXT
  );

  CREATE TABLE IF NOT EXISTS comments (
    id TEXT PRIMARY KEY,
    docId TEXT,
    user TEXT,
    text TEXT,
    date TEXT,
    FOREIGN KEY (docId) REFERENCES documents (id)
  );

  CREATE TABLE IF NOT EXISTS messages (
    id TEXT PRIMARY KEY,
    name TEXT,
    email TEXT,
    message TEXT,
    date TEXT,
    read INTEGER DEFAULT 0
  );

  CREATE TABLE IF NOT EXISTS settings (
    key TEXT PRIMARY KEY,
    value TEXT
  );
`);

// API Endpoints for Documents
app.get('/api/documents', (req, res) => {
    const docs = db.prepare('SELECT * FROM documents ORDER BY date DESC').all();
    const docsWithComments = docs.map(doc => {
        const comments = db.prepare('SELECT * FROM comments WHERE docId = ?').all(doc.id);
        return { ...doc, comments };
    });
    res.json(docsWithComments);
});

app.post('/api/documents', (req, res) => {
    const { id, title, subtitle, content, date } = req.body;
    const insert = db.prepare('INSERT INTO documents (id, title, subtitle, content, date) VALUES (?, ?, ?, ?, ?)');
    insert.run(id, title, subtitle, content, date);
    res.status(201).json({ success: true });
});

app.delete('/api/documents/:id', (req, res) => {
    const { id } = req.params;
    db.prepare('DELETE FROM documents WHERE id = ?').run(id);
    db.prepare('DELETE FROM comments WHERE docId = ?').run(id);
    res.json({ success: true });
});

// API Endpoints for Messages
app.get('/api/messages', (req, res) => {
    const messages = db.prepare('SELECT * FROM messages ORDER BY date DESC').all();
    res.json(messages.map(m => ({ ...m, read: !!m.read })));
});

app.post('/api/messages', (req, res) => {
    const { id, name, email, message, date } = req.body;
    const insert = db.prepare('INSERT INTO messages (id, name, email, message, date, read) VALUES (?, ?, ?, ?, ?, 0)');
    insert.run(id, name, email, message, date);
    res.status(201).json({ success: true });
});

app.patch('/api/messages/mark-read', (req, res) => {
    db.prepare('UPDATE messages SET read = 1').run();
    res.json({ success: true });
});

app.delete('/api/messages/:id', (req, res) => {
    const { id } = req.params;
    db.prepare('DELETE FROM messages WHERE id = ?').run(id);
    res.json({ success: true });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
