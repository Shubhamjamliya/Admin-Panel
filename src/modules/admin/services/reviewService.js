import { mockData } from '../../../utils/mockData';

const reviewService = {
  getAllReviews: async (params = {}) => ({
    success: true,
    data: mockData.reviews,
    pagination: { total: mockData.reviews.length, pages: 1, page: 1, limit: 10 }
  }),
  updateReviewStatus: async (reviewId, status) => ({ success: true }),
  getReviewStats: async () => ({
    success: true,
    data: {
      averageRating: 4.5,
      totalReviews: mockData.reviews.length,
      ratingCounts: { 5: 10, 4: 5, 3: 2, 2: 0, 1: 0 }
    }
  })
};

export default reviewService;

