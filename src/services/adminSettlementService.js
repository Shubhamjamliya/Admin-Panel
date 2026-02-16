import { mockData } from '../utils/mockData';

const adminSettlementService = {
  getDashboard: async () => ({
    success: true,
    data: {
      totalPending: 50000,
      totalSettled: 1200000,
      vendorCount: 85
    }
  }),
  getVendorBalances: async () => ({ success: true, data: [] }),
  getPendingSettlements: async () => ({
    success: true,
    data: mockData.settlements,
    pagination: { total: mockData.settlements.length, pages: 1, page: 1, limit: 10 }
  }),
  getSettlementHistory: async () => ({ success: true, data: [] }),
  approveSettlement: async () => ({ success: true }),
  rejectSettlement: async () => ({ success: true }),
  getWithdrawalRequests: async () => ({ success: true, data: [] }),
  approveWithdrawal: async () => ({ success: true }),
  rejectWithdrawal: async () => ({ success: true })
};

export default adminSettlementService;

