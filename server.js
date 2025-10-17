const express = require('express');
const app = express();

app.set('view engine', 'ejs');

const extLinks = [
  { id: `ext-reddit`, 
    label: 'Reddit r/gamedev', 
    href: 'https://www.reddit.com/r/gamedev/', 
    note: 'Game Deloping Reddit' 
  },
  
  { id: `ext-gamedev`, 
    label: 'gamedeveloper.com', 
    href: 'https://www.gamedeveloper.com/', 
    note: 'GameNews' 
  },

  { id: `ext-course`, 
    label: 'UE course', 
    href: 'https://www.udemy.com/course/unrealcourse/', 
    note: 'Unreal Engine Course' 
  },

  { id: `ext-ue`, 
    label: 'Unreal Engine', 
    href: 'https://www.unrealengine.com/en-US', 
    note: 'Unreal Engine Course' 
  },

  { id: `ext-e3`, 
    label: 'E3', 
    href: 'https://e3expo.com/E3.html', 
    note: 'E3 Expo' 
  },
];



app.get('/', (req, res) => res.redirect('/links'));

app.get('/links', (req, res) => {
  res.render('links/index.ejs', { extLinks });
});

app.get('/links/:id', (req, res) => {
  const link = extLinks.find(link => link.id === req.params.id);
  res.render('links/show.ejs', { link });
});


app.listen(3000, () => {
  console.log(`listen on port 3000`)
})