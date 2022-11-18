import {api} from './api';

export type IForum = {
  id: string;
  name: string;
  imageUrl: string;
  members: number;
}

export const getForums = async () => {
  const { data } = await api("/forums");
  return data as IForum[];
};
