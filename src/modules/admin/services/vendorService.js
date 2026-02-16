import { mockData } from '../../../utils/mockData';

export const getAllVendors = async (params = {}) => ({
  success: true,
  data: mockData.vendors,
  pagination: { total: mockData.vendors.length, pages: 1, page: 1, limit: 10 }
});

export const getVendorDetails = async (id) => ({ success: true, data: mockData.vendors[0] });
export const approveVendor = async (id) => ({ success: true });
export const rejectVendor = async (id, reason = '') => ({ success: true });
export const suspendVendor = async (id) => ({ success: true });
export const getVendorBookings = async (id, params = {}) => ({ success: true, data: mockData.bookings });
export const getVendorEarnings = async (id, params = {}) => ({ success: true, data: [] });

export default {
  getAllVendors,
  getVendorDetails,
  approveVendor,
  rejectVendor,
  suspendVendor,
  getVendorBookings,
  getVendorEarnings
};


