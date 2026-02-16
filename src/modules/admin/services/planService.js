import { mockData } from '../../../utils/mockData';

export const getPlans = async () => ({ success: true, data: mockData.plans });
export const createPlan = async (planData) => ({ success: true, data: planData });
export const updatePlan = async (id, planData) => ({ success: true, data: { ...mockData.plans[0], ...planData } });
export const deletePlan = async (id) => ({ success: true });

export default {
  getPlans,
  createPlan,
  updatePlan,
  deletePlan
};

