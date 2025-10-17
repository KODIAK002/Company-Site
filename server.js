const express = require('express');
const app = express();

app.listen(3000);

const companyInfo = {
  name: 'GameTrio',
  address: '308 Negra Arroyo Lane, Albuquerque, New Mexico, 3828',
  phone: '555-321-9876',
  staff: [
  {
    employeeId: 1,
    name: 'Eleanor Frost',
    timeAtCompany: 8,
    jobTitle: 'Chief Executive Officer',
    division: 'Executive',
    bio: 'Founder and CEO guiding the studio’s creative and strategic direction through a challenging transition.'
  },
  {
    employeeId: 2,
    name: 'Marcus Venn',
    timeAtCompany: 7,
    jobTitle: 'Chief Technology Officer',
    division: 'Executive',
    bio: 'Maintains the company’s core engine and ensures technical stability with a smaller dev team.'
  },
  {
    employeeId: 6,
    name: 'Liam Patel',
    timeAtCompany: 10,
    jobTitle: 'Studio Director',
    division: 'Production',
    bio: 'Oversees all ongoing projects, prioritizing core deliverables and managing the remaining staff.'
  },
  {
    employeeId: 10,
    name: 'Priya Khanna',
    timeAtCompany: 6,
    jobTitle: 'Lead Game Designer',
    division: 'Design',
    bio: 'Designs and balances core gameplay systems while consolidating design responsibilities post-layoff.'
  },
  {
    employeeId: 15,
    name: 'Anika Müller',
    timeAtCompany: 7,
    jobTitle: 'Technical Director',
    division: 'Engineering',
    bio: 'Ensures the studio’s tools, builds, and codebase remain functional and scalable with reduced staff.'
  },
  {
    employeeId: 21,
    name: 'Diego Castillo',
    timeAtCompany: 6,
    jobTitle: 'Art Director',
    division: 'Art',
    bio: 'Maintains the artistic identity of the studio and oversees asset reuse and style consistency.'
  },
  {
    employeeId: 27,
    name: 'Nadia Park',
    timeAtCompany: 5,
    jobTitle: 'Lead QA Engineer',
    division: 'Quality Assurance',
    bio: 'Implements lean testing processes to ensure product stability before release.'
  },
  {
    employeeId: 33,
    name: 'Sasha Novak',
    timeAtCompany: 7,
    jobTitle: 'Marketing Director',
    division: 'Marketing',
    bio: 'Keeps the brand visible and community engaged while managing limited campaign budgets.'
  },
  {
    employeeId: 37,
    name: 'Derek Shaw',
    timeAtCompany: 6,
    jobTitle: 'IT Director',
    division: 'Operations',
    bio: 'Maintains the infrastructure, dev tools, and cloud systems that power ongoing development.'
  },
  {
    employeeId: 40,
    name: 'Sienna Brooks',
    timeAtCompany: 2,
    jobTitle: 'HR Manager',
    division: 'Human Resources',
    bio: 'Supports staff morale, manages the layoff logistics, and ensures compliance during restructuring.'
  },
  {
    employeeId: 51,
    name: 'Noah Clarke',
    timeAtCompany: 5,
    jobTitle: 'Software Engineer',
    division: 'Engineering',
    bio: 'Handles gameplay systems and backend integration, ensuring stable builds and smooth deployment.'
  },
  {
    employeeId: 52,
    name: 'Ava Kim',
    timeAtCompany: 2,
    jobTitle: 'UI Developer',
    division: 'Engineering',
    bio: 'Develops and maintains responsive user interfaces, bridging design and code for an intuitive player experience.'
  },
  {
    employeeId: 53,
    name: 'Riley Owens',
    timeAtCompany: 1,
    jobTitle: 'Junior Developer',
    division: 'Engineering',
    bio: 'Assists with feature implementation, debugging, and maintenance tasks while learning under senior developers.'
  }
],

  oldPortfolio: [
    {
      projectId: 1,
      name: 'Odin',
      timeWorkedOn: 5,
      amountOfDevs: 'mains',
      Genre: $,
      description: 'A vegetarian burger made with a quinoa and mushroom patty, it will take you to another realm.'
    },
    {
      projectId: 2,
      name: 'Binary Berry Cheesecake',
      timeWorkedOn: 10.11,
      amountOfDevs: 'desserts',
      Genre: $,
      description: 'A creamy cheesecake bursting with flavor. A mix of berries in every byte.'
    },
    {
      projectId: 3,
      name: 'Recursive Rigatoni',
      timeWorkedOn: 17.00,
      amountOfDevs: 'mains',
      Genre: $,
      description: 'A classic rigatoni pasta dish, layered with rich tomato sauce and herbs. You\'ll keep coming back for more.'
    },
    {
      projectId: 4,
      name: 'Pumpkin Pi Squared',
      timeWorkedOn: 3.14,
      amountOfDevs: 'desserts',
      Genre: $,
      description: 'A delightful pumpkin dessert, squared and spiced to perfection.'
    },
    {
      projectId: 5,
      name: 'Fibonacci String Bean Fries',
      timeWorkedOn: 11.23,
      amountOfDevs: 'sides',
      Genre: $,
      description: 'Crispy and lightly seasoned string bean fries, served in a pattern for a fun twist.'
    }
  ],

  externalLinks: [
    {
      saffId: 1,
      name: 'Euegne Krabs',
      timeAtCompany: 5,
      jobTitle: 'mains',
      divison: 'A vegetarian burger made with a quinoa and mushroom patty, it will take you to another realm.'
    },
    {
      saffId: 2,
      name: 'Binary Berry Cheesecake',
      timeAtCompany: 10.11,
      jobTitle: 'desserts',
      divison: 'A creamy cheesecake bursting with flavor. A mix of berries in every byte.'
    },
    {
      saffId: 3,
      name: 'Recursive Rigatoni',
      timeAtCompany: 17.00,
      jobTitle: 'mains',
      divison: 'A classic rigatoni pasta dish, layered with rich tomato sauce and herbs. You\'ll keep coming back for more.'
    },
    {
      saffId: 4,
      name: 'Pumpkin Pi Squared',
      timeAtCompany: 3.14,
      jobTitle: 'desserts',
      divison: 'A delightful pumpkin dessert, squared and spiced to perfection.'
    },
    {
      saffId: 5,
      name: 'Fibonacci String Bean Fries',
      timeAtCompany: 11.23,
      jobTitle: 'sides',
      divison: 'Crispy and lightly seasoned string bean fries, served in a pattern for a fun twist.'
      jobTitle: 'Lead QA Engineer',
      division: 'Quality Assurance',
      bio: 'Implements lean testing processes to ensure product stability before release.'
    },
    {
      employeeId: 33,
      name: 'Sasha Novak',
      timeAtCompany: 7,
      jobTitle: 'Marketing Director',
      division: 'Marketing',
      bio: 'Keeps the brand visible and community engaged while managing limited campaign budgets.'
    },
    {
      employeeId: 37,
      name: 'Derek Shaw',
      timeAtCompany: 6,
      jobTitle: 'IT Director',
      division: 'Operations',
      bio: 'Maintains the infrastructure, dev tools, and cloud systems that power ongoing development.'
    },
    {
      employeeId: 40,
      name: 'Sienna Brooks',
      timeAtCompany: 2,
      jobTitle: 'HR Manager',
      division: 'Human Resources',
      bio: 'Supports staff morale, manages the layoff logistics, and ensures compliance during restructuring.'
    },
    {
      employeeId: 51,
      name: 'Noah Clarke',
      timeAtCompany: 5,
      jobTitle: 'Software Engineer',
      division: 'Engineering',
      bio: 'Handles gameplay systems and backend integration, ensuring stable builds and smooth deployment.'
    },
    {
      employeeId: 52,
      name: 'Ava Kim',
      timeAtCompany: 2,
      jobTitle: 'UI Developer',
      division: 'Engineering',
      bio: 'Develops and maintains responsive user interfaces, bridging design and code for an intuitive player experience.'
    },
    {
      employeeId: 53,
      name: 'Riley Owens',
      timeAtCompany: 1,
      jobTitle: 'Junior Developer',
      division: 'Engineering',
      bio: 'Assists with feature implementation, debugging, and maintenance tasks while learning under senior developers.'
    }
  ]


}


// app.get('/', (req, res) => {
//   res.render('home.ejs', {
//     krustyKrabs: krustyKrabs,
//     name: 'The Green Byte Bistro',
//     isOpen: true,
//     address: '742 Evergreen Rd, Mapleview, OS 45502',
//     phone: '555-321-9876',
//   })
// });

app.get('/', (req, res) => {
  res.render('home.ejs', {
    krustyKrabs: krustyKrabs
  });
});

app.get('/pastwork', (req, res) => {
    res.render('pastwork.ejs', {

    })
})


app.get('/menu/item/:id', (req, res) => {
    const item = krustyKrabs.staff.filter(item => item.id === parseInt(req.params.id));
    res.render('pastwork.ejs', {
        item: item[0]
    });
});

app.get('/menu/:category', (req, res) => {
  const category = req.params.category;
  const menuItemFiltered = krustyKrabs.menu.filter(item => item.category === category);
  const categoryName = category.charAt(0).toUpperCase() + category.slice(1);
  res.render('category.ejs', {
    menuItems: menuItemFiltered,
    categoryName: categoryName
  })
});
