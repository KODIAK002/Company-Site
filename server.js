const express = require('express');
const app = express();

app.set('view engine', 'ejs');

const extLinks = [
  { id: 0, label: 'Reddit r/gamedev', href: 'https://www.reddit.com/r/gamedev/', note: 'Game Deloping Reddit' },
  { id: 1, label: 'gamedeveloper.com', href: 'https://www.gamedeveloper.com/', note: 'GameNews' },
  { id: 2, label: 'UE course', href: 'https://www.udemy.com/course/unrealcourse/', note: 'Unreal Engine Course' },
  { id: 3, label: 'Unreal Engine', href: 'https://www.unrealengine.com/en-US', note: 'Unreal Engine Course' },
  { id: 4, label: 'E3', href: 'https://e3expo.com/E3.html', note: 'E3 Expo' },
];

app.get('/', (req, res) => res.redirect('/links'));

app.get('/links', (req, res) => {
  res.render('links/index.ejs', { extLinks });
});

app.get('/links/:id', (req, res) => {
  const link = extLinks.find(l => l.id === Number(req.params.id));
  if (!link) return res.status(404).send('Link not found');
  res.render('links/show.ejs', { link });
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
