import { Link } from 'react-router';

function NotFoundPage() {
  return (
    <>
      <h3>This is a 404 page — the requested link cannot be found</h3>
      <Link className="linkButton" to="/">
        Home Page
      </Link>
    </>
  );
}
export default NotFoundPage;