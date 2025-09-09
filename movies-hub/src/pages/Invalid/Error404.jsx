import { AlertTriangle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../routes/routeConstants";
import { Button } from "../../components/ui/Button";

const Error404 = () => {
  const navigate = useNavigate();

  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white px-6">
      <AlertTriangle className="text-yellow-400 mb-6" size={80} />
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
      <p className="text-gray-400 text-center max-w-md mb-6">
        Oops! The page you’re looking for doesn’t exist or has been moved.
      </p>
      <Button
        label={"Go Back Home"}
        variant="warning"
        onClick={() => navigate(ROUTES.MOVIES)}
      />
    </section>
  );
};

export default Error404;
