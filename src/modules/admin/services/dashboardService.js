import { mockData } from '../../../utils/mockData';

/**
 * Admin Dashboard & Reports Service (Mocked for Demo)
 */
const dashboardService = {
  /**
   * Get dashboard summary stats
   */
  getStats: async () => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    return {
      success: true,
      data: mockData.stats
    };
  },

  /**
   * Get revenue analytics
   */
  getRevenue: async (params = {}) => {
    await new Promise(resolve => setTimeout(resolve, 500));
    return {
      success: true,
      data: [
        { date: '2026-02-10', amount: 4500 },
        { date: '2026-02-11', amount: 5200 },
        { date: '2026-02-12', amount: 4800 },
        { date: '2026-02-13', amount: 6100 },
        { date: '2026-02-14', amount: 5900 },
        { date: '2026-02-15', amount: 7200 },
        { date: '2026-02-16', amount: 6800 }
      ]
    };
  },

  /**
   * Get booking trends
   */
  getBookingTrends: async (params = {}) => {
    await new Promise(resolve => setTimeout(resolve, 500));
    return {
      success: true,
      data: [
        { date: '2026-02-10', count: 45 },
        { date: '2026-02-11', count: 52 },
        { date: '2026-02-12', count: 48 },
        { date: '2026-02-13', count: 61 },
        { date: '2026-02-14', count: 59 },
        { date: '2026-02-15', count: 72 },
        { date: '2026-02-16', count: 68 }
      ]
    };
  },

  /**
   * Get user and vendor growth metrics
   */
  getGrowthMetrics: async (params = {}) => {
    await new Promise(resolve => setTimeout(resolve, 500));
    return {
      success: true,
      data: {
        userGrowth: 15,
        vendorGrowth: 5,
        workerGrowth: 2
      }
    };
  }
};

export default dashboardService;


