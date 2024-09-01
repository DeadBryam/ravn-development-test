import { Button } from '@/components';

function ErrorPage() {
  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <div className="flex flex-col gap-4 h-screen w-screen items-center justify-center text-center">
      <h1 className="text-d-s md:text-d-l lg:text-d-xl">An error occurred, please try again</h1>
      <Button onClick={reloadPage}>Reload the page</Button>
    </div>
  );
}

export default ErrorPage;
