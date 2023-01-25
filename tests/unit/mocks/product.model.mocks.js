const products = [
  {
    id: 1,
    name: 'Martelo de Thor'
  },
  {
    id: 2,
    name: 'Traje de encolhimento'
  },
  {
    id: 3,
    name: 'Escudo do Capitão América'
  }
]

const productsFromDB = [
  [
    {
      id: 1,
      name: 'Martelo de Thor'
    },
    {
      id: 2,
      name: 'Traje de encolhimento'
    },
    {
      id: 3,
      name: 'Escudo do Capitão América'
    }
  ],
  [
    {},
    {}
  ]
]

const productFromDB = [
  {
    id: 1,
    name: 'Martelo de Thor'
  },
  [
    {},
    {}
  ]
]

const product = {
  id: 1,
  name: 'Martelo de Thor'
}

module.exports = {
  products,
  productsFromDB,
  product,
  productFromDB,
};