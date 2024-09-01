import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <div className="flex flex-col gap-4 h-screen w-screen items-center justify-center text-center">
      <h1 className="text-d-s md:text-d-l lg:text-d-xl">Page not found</h1>
      <Link to="/" className="default-button">
        Go back home
      </Link>
    </div>
  );
}

export default NotFoundPage;
