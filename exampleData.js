const exampleData = {
  Number: 14999,
  Issued: Date.parse('2020-10-12') / 1000,
  Due: Date.parse('2020-11-12') / 1000,
  Matter: '0001-NP',

  Invoicer: {
    Name: 'Thunderous Applause',
    Street1: '812 Automated Rd',
    Street2: null,
    City: 'New York',
    State: 'NY',
    Zip: '10003',
    Email: 'applause@thunder.com',
    Phone: '+1-800-111-1111',
    Website: 'applause.com',
  },

  Client: {
    Name: 'Monkeys Juggling',
    Street1: '100 Banana St',
    City: 'Bananaberg',
    State: 'NJ',
    Zip: '07048',
  },

  Items: [
    {
      Date: Date.parse('2020-10-12') / 1000,
      Service: 'Flat Fee',
      Description: 'Wolf Whistle',
      Rate: 35,
      Qty: 3,
      Total: 105,
    },
    {
      Date: Date.parse('2020-10-12') / 1000,
      Service: 'Flat Fee',
      Description: 'Bravo',
      Rate: 30,
      Qty: 17,
      Total: 510,
    },
  ],

  Subtotal: 615,
  Deduction: null,
  Taxes: null,
  Total: 615,
};
