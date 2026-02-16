import { mockData } from '../../../utils/mockData';

export const cityService = {
  // Get all cities (Mocked)
  getAll: async () => ({
    success: true,
    data: mockData.cities
  }),

  // Get active cities (Mocked)
  getActive: async () => ({
    success: true,
    data: mockData.cities.filter(c => c.status === 'active')
  }),

  getById: async (id) => ({
    success: true,
    data: mockData.cities.find(c => c._id === id) || mockData.cities[0]
  }),

  create: async (data) => ({ success: true, data }),
  update: async (id, data) => ({ success: true, data: { ...data, _id: id } }),
  delete: async (id) => ({ success: true }),
  toggleStatus: async (id) => ({ success: true })
};


