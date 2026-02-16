/**
 * Centralized Mock Data for Super Admin Panel Demo
 */
export const mockData = {
  stats: {
    totalUsers: 1250,
    totalVendors: 85,
    totalWorkers: 45,
    totalBookings: 3420,
    revenue: 125400,
    pendingBookings: 12,
    activeBookings: 8,
    completedBookings: 3400,
    pendingVendors: 5,
    pendingWithdrawals: 3,
    pendingSettlements: 7,
    pendingScraps: 4
  },

  users: [
    { _id: 'u1', name: 'John Doe', email: 'john@example.com', phone: '9876543210', isActive: true, createdAt: '2026-01-15T10:00:00Z' },
    { _id: 'u2', name: 'Jane Smith', email: 'jane@example.com', phone: '9876543211', isActive: true, createdAt: '2026-01-20T11:30:00Z' },
    { _id: 'u3', name: 'Rahul Kumar', email: 'rahul@example.com', phone: '9876543212', isActive: false, createdAt: '2026-02-01T09:15:00Z' },
    { _id: 'u4', name: 'Priya Sharma', email: 'priya@example.com', phone: '9876543213', isActive: true, createdAt: '2026-02-05T14:20:00Z' },
    { _id: 'u5', name: 'Amit Singh', email: 'amit@example.com', phone: '9876543214', isActive: true, createdAt: '2026-02-10T16:45:00Z' }
  ],

  vendors: [
    { _id: 'v1', businessName: 'Fresh Mart', ownerName: 'Sanjay Varma', email: 'freshmart@example.com', phone: '9988776655', status: 'approved', joinedAt: '2026-01-10' },
    { _id: 'v2', businessName: 'Organic Hub', ownerName: 'Anita Desai', email: 'organichub@example.com', phone: '9988776644', status: 'pending', joinedAt: '2026-02-12' },
    { _id: 'v3', businessName: 'Quick Services', ownerName: 'Vijay Mallik', email: 'quick@example.com', phone: '9988776633', status: 'approved', joinedAt: '2026-01-25' }
  ],

  workers: [
    { _id: 'w1', name: 'Ravi Teja', phone: '8877665544', email: 'ravi@example.com', status: 'active', type: 'Delivery', joinedAt: '2026-01-05' },
    { _id: 'w2', name: 'Suresh Raina', phone: '8877665533', email: 'suresh@example.com', status: 'active', type: 'Cleaning', joinedAt: '2026-01-15' },
    { _id: 'w3', name: 'Manoj Bajpai', phone: '8877665522', email: 'manoj@example.com', status: 'inactive', type: 'Maintenance', joinedAt: '2026-02-02' }
  ],

  bookings: [
    { _id: 'b1', user: { name: 'John Doe' }, service: 'Grocery Delivery', amount: 450, status: 'completed', date: '2026-02-15' },
    { _id: 'b2', user: { name: 'Jane Smith' }, service: 'Home Cleaning', amount: 1200, status: 'active', date: '2026-02-16' },
    { _id: 'b3', user: { name: 'Rahul Kumar' }, service: 'AC Repair', amount: 800, status: 'pending', date: '2026-02-16' }
  ],

  cities: [
    { _id: 'c1', name: 'Mumbai', code: 'MUM', status: 'active' },
    { _id: 'c2', name: 'Delhi', code: 'DEL', status: 'active' },
    { _id: 'c3', name: 'Bangalore', code: 'BLR', status: 'inactive' }
  ],

  plans: [
    { _id: 'p1', name: 'Silver Plan', price: 999, duration: '30 days', features: ['Priority Support', '5% Discount'] },
    { _id: 'p2', name: 'Gold Plan', price: 1999, duration: '90 days', features: ['Priority Support', '10% Discount', 'Insurance'] },
    { _id: 'p3', name: 'Platinum Plan', price: 4999, duration: '365 days', features: ['24/7 Support', '15% Discount', 'Full Insurance'] }
  ],

  reviews: [
    { _id: 'r1', user: 'John Doe', vendor: 'Fresh Mart', rating: 5, comment: 'Excellent service!', date: '2026-02-14' },
    { _id: 'r2', user: 'Jane Smith', vendor: 'Organic Hub', rating: 4, comment: 'Good quality products.', date: '2026-02-15' }
  ],

  settlements: [
    { _id: 's1', vendor: 'Fresh Mart', amount: 5000, status: 'pending', requestedAt: '2026-02-15' },
    { _id: 's2', vendor: 'Quick Services', amount: 12000, status: 'completed', requestedAt: '2026-02-10' }
  ]
};
