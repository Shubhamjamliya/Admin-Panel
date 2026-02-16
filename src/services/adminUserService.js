import { mockData } from '../utils/mockData';

export const adminUserService = {
  // Get all users with pagination and filtering (Mocked)
  getAllUsers: async (params) => {
    return {
      success: true,
      data: mockData.users,
      pagination: {
        total: mockData.users.length,
        pages: 1,
        page: 1,
        limit: 10
      }
    };
  },

  getAllUserBookings: async (params) => ({ success: true, data: mockData.bookings }),
  getUserDetails: async (id) => ({ success: true, data: mockData.users[0] }),
  toggleUserStatus: async (id, isActive) => ({ success: true, message: `User status updated successfully` }),
  deleteUser: async (id) => ({ success: true, message: 'User deleted successfully' }),
  getUserBookings: async (id, params) => ({ success: true, data: mockData.bookings }),
  getUserWalletTransactions: async (id) => ({ success: true, data: [] })
};

