const express = require('express');

const app = express();

app.get('/api/customers', (req, res) => {
  const customers = [
    {id: 1, firstName: 'John', lastName: 'Doe'},
    {id: 2, firstName: 'Brad', lastName: 'Traversy'},
    {id: 3, firstName: 'Mary', lastName: 'Swanson'},
  ];

  res.json(customers);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT,"0.0.0.0", () => {
    console.log(`Our app is running on port ${ PORT }`);
});
