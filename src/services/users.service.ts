import {api} from './api';

export type IUser = {
  id: string;
  name: string;
  imageUrl: string;
}

export const getForums = async () => {
  const { data } = await api.get("/users");
  return data as IUser[];
};
