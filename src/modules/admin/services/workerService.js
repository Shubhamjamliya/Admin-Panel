import { mockData } from '../../../utils/mockData';

export const getAllWorkers = async (params = {}) => ({
  success: true,
  data: mockData.workers,
  pagination: { total: mockData.workers.length, pages: 1, page: 1, limit: 10 }
});

export const getWorkerDetails = async (id) => ({ success: true, data: mockData.workers[0] });
export const approveWorker = async (id) => ({ success: true });
export const rejectWorker = async (id, reason = '') => ({ success: true });
export const suspendWorker = async (id) => ({ success: true });
export const getWorkerJobs = async (id, params = {}) => ({ success: true, data: mockData.bookings });
export const getWorkerEarnings = async (id, params = {}) => ({ success: true, data: [] });
export const payWorker = async (id, data) => ({ success: true });

export default {
  getAllWorkers,
  getWorkerDetails,
  approveWorker,
  rejectWorker,
  suspendWorker,
  getWorkerJobs,
  getWorkerEarnings,
  payWorker
};

