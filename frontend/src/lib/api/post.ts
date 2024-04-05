import client from './client';
import { Post } from "types/index";

// 一覧
export const getList = () => {
  return client.get('/posts');
};

// 詳細
export const getDetail = (id: Post) => {
  return client.get(`/posts/${id}`);
};

// 新規作成
export const createPost = (params: Post) => {
  return client.post('/posts', params);
};

// 更新
export const updatePost = (id: Post, params: Post) => {
  return client.patch(`/posts/${id}`, params);
};

// 削除
export const deletePost = (id: Post) => {
  return client.delete(`/posts/${id}`);
};
