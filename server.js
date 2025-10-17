const express = require('express');
const app = express();

app.listen(3000);

const krustyKrabs = {
  name: 'The Green Byte Bistro',
//   isOpen: true,
  address: '892 Kelp Lane, Bikini Bottom, 20250',
  phone: '555-321-9876',
  staff: [
    {
      saffId: 1,
      name: 'Euegne Krabs',
      timeAtCompany: 5,
      category: 'mains',
      details: 'A vegetarian burger made with a quinoa and mushroom patty, it will take you to another realm.'
    },
    {
      saffId: 2,
      name: 'Binary Berry Cheesecake',
      timeAtCompany: 10.11,
      category: 'desserts',
      details: 'A creamy cheesecake bursting with flavor. A mix of berries in every byte.'
    },
    {
      saffId: 3,
      name: 'Recursive Rigatoni',
      timeAtCompany: 17.00,
      category: 'mains',
      details: 'A classic rigatoni pasta dish, layered with rich tomato sauce and herbs. You\'ll keep coming back for more.'
    },
    {
      saffId: 4,
      name: 'Pumpkin Pi Squared',
      timeAtCompany: 3.14,
      category: 'desserts',
      details: 'A delightful pumpkin dessert, squared and spiced to perfection.'
    },
    {
      saffId: 5,
      name: 'Fibonacci String Bean Fries',
      timeAtCompany: 11.23,
      category: 'sides',
      details: 'Crispy and lightly seasoned string bean fries, served in a pattern for a fun twist.'
    }
  ]
}


app.get('/', (req, res) => {
  res.render('home.ejs', {
    name: 'The Green Byte Bistro',
    isOpen: true,
    address: '742 Evergreen Rd, Mapleview, OS 45502',
    phone: '555-321-9876',
  })
});

app.get('/menu/item/:id', (req, res) => {
    const item = RESTAURANT.menu.filter(item => item.id === parseInt(req.params.id));
    res.render('item.ejs', {
        item: item[0]
    });
});

app.get('/menu/:category', (req, res) => {
  const category = req.params.category;
  const menuItemFiltered = RESTAURANT.menu.filter(item => item.category === category);
  const categoryName = category.charAt(0).toUpperCase() + category.slice(1);
  res.render('category.ejs', {
    menuItems: menuItemFiltered,
    categoryName: categoryName
  })
});
