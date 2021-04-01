const faker = require('faker');

/* The same must be in Front-end */
const FEATURE_FLAGS_NAMES = {
  contentOptions: 'Content options',
  search: 'Search',
  youWillAlsoLove: 'YouWillAlsoLove',
  editItemInCart: 'Edit Item button'
};

const featureFlags = {
  [FEATURE_FLAGS_NAMES.contentOptions]: {
    id: faker.random.uuid(),
    description: "Options like 'language', 'currency', ... in Header",
    active: false
  },
  [FEATURE_FLAGS_NAMES.search]: {
    id: faker.random.uuid(),
    description: 'Opportunity to search for products by symbols...',
    active: false
  },
  [FEATURE_FLAGS_NAMES.youWillAlsoLove]: {
    id: faker.random.uuid(),
    description: 'Enables YouWillAlsoLove component functionality',
    active: false
  },
  [FEATURE_FLAGS_NAMES.editItemInCart]: {
    id: faker.random.uuid(),
    description: 'Enables Edit button for product in CartPage component',
    active: false
  }
};

module.exports = featureFlags;
