const express = require('express');
const app = express();

<<<<<<< HEAD
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
=======
const companyInfo = {
  name: 'GameTrio',
  address: '308 Negra Arroyo Lane, Albuquerque, New Mexico, 3828',
  phone: '555-321-9876',

  history: [
      "Frostbyte Interactive was founded in 2015 by Eleanor Frost, a former creative director at a major AAA publisher. Disillusioned by corporate red tape and formulaic design, she set out to build a studio where creativity could thrive without compromise. What began as a five-person team in a converted warehouse quickly gained attention after releasing several innovative prototypes that blended emotional storytelling with experimental gameplay mechanics.",
      "The studio's first commercial success came in 2017 with Echoes of Tomorrow, a time-bending adventure that garnered critical acclaim for its narrative depth and visual artistry. The game's success allowed Frostbyte to expand rapidly, hiring top-tier talent in engineering, design, and art. Under the technical guidance of Marcus Venn, the team developed a proprietary engine that became the backbone of all future titles. This breakthrough marked Frostbyte's rise from an indie passion project to a recognized name in the gaming industry.",
      "Between 2018 and 2022, Frostbyte Interactive released multiple award-winning titles, each exploring new genres and storytelling techniques. With over 150 employees at its peak, the studio opened satellite offices in Montreal and Tokyo, focusing on localization and cross-platform optimization. Its games became known for their cinematic quality, detailed worldbuilding, and emotionally resonant soundtracks — solidifying Frostbyte's reputation as a studio that treated games as an art form.",
      "By 2024, the company faced mounting challenges: development costs soared, competition intensified, and shifting market demands strained internal resources. Several ambitious projects were delayed or canceled, leading to financial setbacks. In early 2025, Frostbyte underwent a difficult restructuring phase, laying off much of its staff to preserve the studio's core creative and technical teams. The transition was painful but necessary, allowing the studio to refocus on sustainable innovation.",
      "Today, Frostbyte Interactive operates with a lean, multidisciplinary team of veterans and rising talent. The studio continues to champion originality and emotional storytelling while adopting more agile production methods. Under Eleanor Frost's leadership, Frostbyte remains committed to its founding vision: to craft worlds that inspire, challenge, and connect players on a deeply human level. The next chapter may be smaller in scale — but it's bolder in heart."
  ],

  staff: [
  { id: 1,
    name: 'John Doe',
    position: 'game designer',
    email: 'john@company.com',
    phone: '555-111-2222',
    bio: 'thinks cod is better than halo'
  },

  { id: 2,
    name: 'Jane doe',
    position: 'system designer',
    email: 'amy@company.com',
    phone: '555-333-4444',
    bio: 'Leads engineering and R&D.'
  },

  { id: 3,
    name: 'jake q',
    position: 'level designer',
    email: 'mike@company.com',
    phone: '555-555-6666',
    bio: 'makes designs about levels'
  },

  { id: 4,
    name: 'emma brown',
    position: 'graphics programmer',
    email: 'mike@company.com',
    phone: '555-555-6666',
    bio: 'wants everyone to know john is a poop head'
  },

  { id: 5,
    name: 'richard jones',
    position: 'audio programmer',
    email: 'mike@company.com',
    phone: '555-555-6666',
    bio: 'likes making beats in spare time'
  }
],

  oldPortfolio: [
    {
      projectId: 1,
      name: 'Odin',
      timeWorkedOn: 5,
      amountOfDevs: '7',
      Genre: 'action',
      description: 'A vegetarian burger made with a quinoa and mushroom patty, it will take you to another realm.'
    },
    {
      projectId: 2,
      name: 'Wild Hunt',
      timeWorkedOn: 3,
      amountOfDevs: '15',
      Genre: 'adventure',
      description: 'A creamy cheesecake bursting with flavor. A mix of berries in every byte.'
    },
    {
      projectId: 3,
      name: 'Conquest Of The Solar Segmentum ',
      timeWorkedOn: 7,
      amountOfDevs: '12',
      Genre: 'strategy',
      description: 'A classic rigatoni pasta dish, layered with rich tomato sauce and herbs. You\'ll keep coming back for more.'
    },
    {
      projectId: 4,
      name: 'Horse Derby Ultimate',
      timeWorkedOn: 4,
      amountOfDevs: '5',
      Genre: 'sports',
      description: 'A delightful pumpkin dessert, squared and spiced to perfection.'
    },
    {
      projectId: 5,
      name: 'Age Of Strife',
      timeWorkedOn: 10,
      amountOfDevs: '17',
      Genre: 'strategy',
      description: 'Crispy and lightly seasoned string bean fries, served in a pattern for a fun twist.'
    }
  ],

  extLinks: [
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
  ]
}
app.use(express.static('public'));

// app.get('/', (req, res) => {
//   res.render('home.ejs', {
//     krustyKrabs: krustyKrabs,
//     name: 'The Green Byte Bistro',
//     isOpen: true,
//     address: '742 Evergreen Rd, Mapleview, OS 45502',
//     phone: '555-321-9876',
//   })
// });



//HOME PAGE
app.get('/', (req, res) => {
    res.render('home.ejs', {
        companyInfo: companyInfo
    });
});

//COMPANY HISTORY
app.get('/company', (req,res) => {
  res.render('companyhist.ejs', {
    history: companyInfo.history
  })
})

//CONTACT US
app.get('/contact-us', (req, res) => {
    res.render('contact-us.ejs', {
        name: companyInfo.name
    });
});
app.post('/contact-us-submit', (req, res) => {
    // Handle form submission here
    res.send('Form submitted successfully');
});

//STAFF
app.get('/staff', (req, res) => {
  res.render('indexstaff.ejs', {
    employee: companyInfo.staff
  });
});


app.get('/staff/search/:id', (req, res) => {
  const employee = companyInfo.staff.filter(item => item.id === parseInt(req.params.id));
  res.render('showstaff.ejs', {
    employee: employee[0]
  });
  console.log(employee)
});

//GAMES
app.get('/pastwork/genre/:id', (req, res) => {
    const game = companyInfo.oldPortfolio.filter(item => item.projectId === parseInt(req.params.id));
    res.render('gamegenreid.ejs', {
      companyInfo: companyInfo,
      oldwork: game[0]
    });
});

app.get('/pastwork/:genre', (req, res) => {
    const game = companyInfo.oldPortfolio.filter(item => item.Genre === req.params.genre);
    res.render('sortbygenre.ejs', {
      companyInfo: companyInfo,
      genreGroup: game
    });
});

app.get('/pastwork', (req, res) => {
    res.render('pastwork.ejs', {
        companyInfo: companyInfo,
        gameList: companyInfo.oldPortfolio
    })
})

app.get('/pastwork/:genre', (req, res) => {
  const category = req.params.category;
  const menuItemFiltered = companyInfo.oldPortfolio.filter(item => item.category === category);
  const categoryName = category.charAt(0).toUpperCase() + category.slice(1);
  res.render('category.ejs', {
    menuItems: menuItemFiltered,
    categoryName: categoryName
  })
});


//LINKS
app.get('/links', (req, res) => {
  res.render('index.ejs', {
    extlinks: companyInfo.extLinks });
>>>>>>> main
});

app.get('/links/:id', (req, res) => {
  const link = extLinks.find(link => link.id === req.params.id);
<<<<<<< HEAD
  res.render('links/show', { link });
});



app.listen(3000, () => {
  console.log('listen on port 3000');
});
=======
  res.render('show.ejs', { link });
});

app.listen(3000, () => {
  console.log(`listen on port 3000`)
})
>>>>>>> main
