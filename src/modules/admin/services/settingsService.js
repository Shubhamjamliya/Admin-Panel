// import api from '../../../services/api';

export const getSettings = async () => ({
  success: true,
  data: {
    siteName: 'Apna Sabjiwala Super Admin',
    contactEmail: 'support@apnasabjiwala.com',
    maintenanceMode: false,
    minWithdrawalAmount: 500
  }
});

export const updateSettings = async (settingsData) => ({ success: true, data: settingsData });
export const updateAdminProfile = async (profileData) => ({ success: true, data: profileData });
export const getAdminProfile = async () => ({ success: true, data: { name: 'Super Admin', email: 'admin@admin.com', role: 'super_admin' } });
export const getAllAdmins = async () => ({ success: true, data: [{ _id: 'a1', name: 'Admin 1', email: 'admin1@test.com', role: 'admin' }] });
export const createAdmin = async (adminData) => ({ success: true, data: adminData });
export const deleteAdmin = async (id) => ({ success: true });
export const updateAdminDetails = async (id, data) => ({ success: true, data });
export const toggleAdminStatus = async (id) => ({ success: true });

export default {
  getSettings,
  updateSettings,
  updateAdminProfile,
  getAdminProfile,
  getAllAdmins,
  createAdmin,
  deleteAdmin,
  updateAdminDetails,
  toggleAdminStatus
};

