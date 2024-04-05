import { useState } from "react";
import client from "lib/api/client"

export const Post: React.FC = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await client.post('/posts', { title, body });
      console.log(response.data);
      // 投稿後の処理（例：投稿成功メッセージの表示やページ遷移など）
    } catch (error) {
      console.error(error);
      // エラーハンドリング
    }
  };

  return (
    <>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">タイトル</label>
        <input
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="body">本文</label>
        <textarea
          id="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
      </div>
      <button type="submit">投稿</button>
    </form>
    </>
  )
}