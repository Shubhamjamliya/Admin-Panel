// import api from './api';

export const categoryService = {
  getAll: async () => ({
    success: true,
    data: [
      { _id: 'cat1', name: 'Groceries', slug: 'groceries', status: 'active', icon: '🍎' },
      { _id: 'cat2', name: 'Cleaning', slug: 'cleaning', status: 'active', icon: '🧹' },
      { _id: 'cat3', name: 'Plumbing', slug: 'plumbing', status: 'active', icon: '🔧' }
    ]
  }),
  getById: async (id) => ({ success: true, data: { _id: id, name: 'Sample Category' } }),
  create: async (data) => ({ success: true, data }),
  update: async (id, data) => ({ success: true, data }),
  delete: async (id) => ({ success: true }),
  updateOrder: async (id, homeOrder) => ({ success: true })
};

export const serviceService = {
  getAll: async () => ({
    success: true,
    data: [
      { _id: 's1', name: 'AC Repair', category: 'Plumbing', price: 500, status: 'active' },
      { _id: 's2', name: 'Home Cleaning', category: 'Cleaning', price: 1200, status: 'active' },
      { _id: 's3', name: 'Express Delivery', category: 'Groceries', price: 50, status: 'active' }
    ]
  }),
  getById: async (id) => ({ success: true, data: { _id: id, name: 'Sample Service' } }),
  create: async (data) => ({ success: true, data }),
  update: async (id, data) => ({ success: true, data }),
  delete: async (id) => ({ success: true }),
  updatePage: async (id, page) => ({ success: true }),
  uploadImage: async (file) => ({ success: true, imageUrl: 'https://via.placeholder.com/150' })
};

export const homeContentService = {
  get: async () => ({ success: true, data: { banners: [], sections: [] } }),
  update: async (data) => ({ success: true, data })
};

export const publicCatalogService = {
  getCategories: async () => ({ success: true, data: [] }),
  getServices: async () => ({ success: true, data: [] }),
  getServiceBySlug: async () => ({ success: true, data: {} }),
  getHomeContent: async () => ({ success: true, data: {} }),
  invalidateCache: () => { }
};


