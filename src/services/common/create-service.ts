import { apiClient } from "@/libs/api/client";
import { Id } from "@/models/common";

function createService<T, R = undefined>(path: string) {
  const searchAll = async (params?: R) => {
    const { data } = await apiClient.get<T[]>(path, { params });
    return data;
  };

  const search = async (id?: Id) => {
    if (id) {
      const { data } = await apiClient.get<T>(`${path}/${id}`);
      return data;
    }
    return undefined;
  };

  const create = async (item: T) => {
    await apiClient.post(path, item);
  };

  const update = async (item: T, id?: Id) => {
    if (id) {
      await apiClient.put(`${path}/${id}`, item);
    }
  };

  const remove = async (id?: Id) => {
    if (id) {
      await apiClient.delete(`${path}/${id}`);
    }
  };

  return {
    searchAll,
    search,
    create,
    update,
    remove,
  };
}

export { createService };

