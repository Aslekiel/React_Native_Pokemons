import type {AxiosResponse} from 'axios';
import {instance} from '.';
import type {PaginationOptionsType, PaginationType} from '../types';

const getPagination = async (
  options: PaginationOptionsType,
): Promise<AxiosResponse<PaginationType>> => {
  const data = await instance.get(
    `pokemon/?offset=${options.offset}&limit=${options.limit}`,
  );

  return data;
};

export const paginationApi = {getPagination};
