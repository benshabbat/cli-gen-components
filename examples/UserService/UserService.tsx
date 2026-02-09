interface ApiResponse<T> {
  data: T;
  message?: string;
}

interface ApiError {
  message: string;
  status?: number;
}

const UserService = {
  /**
   * Get all items
   */
  getAll: async <T>(): Promise<T[]> => {
    try {
      const response = await fetch('/api/endpoint');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const result: ApiResponse<T[]> = await response.json();
      return result.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error as ApiError;
    }
  },

  /**
   * Get item by ID
   */
  getById: async <T>(id: string | number): Promise<T> => {
    try {
      const response = await fetch(`/api/endpoint/${id}`);
      if (!response.ok) {
        throw new Error(`Failed to fetch item with id: ${id}`);
      }
      const result: ApiResponse<T> = await response.json();
      return result.data;
    } catch (error) {
      console.error(`Error fetching item ${id}:`, error);
      throw error as ApiError;
    }
  },

  /**
   * Create new item
   */
  create: async <T>(data: Partial<T>): Promise<T> => {
    try {
      const response = await fetch('/api/endpoint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error('Failed to create item');
      }
      const result: ApiResponse<T> = await response.json();
      return result.data;
    } catch (error) {
      console.error('Error creating item:', error);
      throw error as ApiError;
    }
  },

  /**
   * Update existing item
   */
  update: async <T>(id: string | number, data: Partial<T>): Promise<T> => {
    try {
      const response = await fetch(`/api/endpoint/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error(`Failed to update item with id: ${id}`);
      }
      const result: ApiResponse<T> = await response.json();
      return result.data;
    } catch (error) {
      console.error(`Error updating item ${id}:`, error);
      throw error as ApiError;
    }
  },

  /**
   * Delete item
   */
  delete: async (id: string | number): Promise<void> => {
    try {
      const response = await fetch(`/api/endpoint/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error(`Failed to delete item with id: ${id}`);
      }
    } catch (error) {
      console.error(`Error deleting item ${id}:`, error);
      throw error as ApiError;
    }
  },
};

export default UserService;
