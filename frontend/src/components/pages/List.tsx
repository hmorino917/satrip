import { useEffect, useState } from 'react';
import { getList } from 'lib/api/post';
import { useNavigate, Link } from 'react-router-dom';

const List = () => {
  const [dataList, setDataList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    handleGetList();
  }, []);

  const handleGetList = async () => {
    try {
      const res = await getList();
      console.log(res.data);
      setDataList(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <h1>一覧ページ</h1>
      <button>新規作成</button>
      <table>
        <thead>
          <tr>
            <th>タイトル</th>
            <th>内容</th>
            <th>サウナ</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        {dataList.map((item, index) => (
          <tbody key={index}>
            <tr>
              <td>{item.tripTitle}</td>
              <td>{item.tripContent}</td>
              <td>{item.saunaContent}</td>
              <td>
                <Link to={`/edit/${item.id}`}>更新</Link>
              </td>
              <td>
                <Link to={`/post/${item.id}`}>詳細へ</Link>
              </td>
              <td>
                <button>削除</button>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </>
  );
};
export default List;

