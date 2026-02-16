import { mockData } from '../utils/mockData';

export const adminBookingService = {
  // Get all bookings (Mocked)
  getAllBookings: async (params) => ({
    success: true,
    data: mockData.bookings,
    pagination: { total: mockData.bookings.length, pages: 1, page: 1, limit: 10 }
  }),
  getBookingById: async (id) => ({ success: true, data: mockData.bookings[0] }),
  getAnalytics: async () => ({ success: true, data: {} }),
  cancelBooking: async (id, reason) => ({ success: true })
};

