import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <>
      <h1>お探しのページは見つかりませんでした。</h1>
      <Link to="/">ホームに戻る</Link>
    </>
  )
}

export default NotFound;
