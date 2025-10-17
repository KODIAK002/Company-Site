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

const staff = [
  { id: 'john',  
    name: 'John Doe',  
    position: 'game designer',            
    email: 'john@company.com',  
    phone: '555-111-2222',  
  },

  { id: 'jane',
    name: 'Jane doe',
    position: 'system designer',            
    email: 'amy@company.com',  
    phone: '555-333-4444', 
    bio: 'Leads engineering and R&D.' 
  },

  { id: 'jake', 
    name: 'jake q', 
    position: 'level designer',
    email: 'mike@company.com', 
    phone: '555-555-6666', 
    bio: 'Keeps projects on time.' 
  },

  { id: 'emma', 
    name: 'emma brown', 
    position: 'graphics programmer',
    email: 'mike@company.com', 
    phone: '555-555-6666', 
    bio: 'Keeps projects on time.' 
  },

  { id: 'rich', 
    name: 'richard jones', 
    position: 'audio programmer',
    email: 'mike@company.com', 
    phone: '555-555-6666', 
    bio: 'Keeps projects on time.' 
  }
];


app.get('/staff', (req, res) => {
  res.render('staff/index', { staff });
});


app.get('/staff/:id', (req, res) => {
  const employee = staff.find(employee => employee.id === req.params.id);
  res.render('staff/show', { employee });
});



app.get('/', (req, res) => res.redirect('/links'));

app.get('/links', (req, res) => {
  res.render('links/index', { extLinks });
});

app.get('/links/:id', (req, res) => {
  const link = extLinks.find(link => link.id === req.params.id);
  res.render('links/show', { link });
});



app.listen(3000, () => {
  console.log('listen on port 3000');
});
