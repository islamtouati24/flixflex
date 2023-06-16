import NavBar from "pages/home/components/navbar";
import { useNavigate } from "react-router-dom";

export default function NotFoundPage() {
  const navigate = useNavigate();
  return (
    <>
      <NavBar />
      <div className="flex h-screen flex-col items-center justify-center space-y-5 py-5">
        <h1 className="text-6xl font-bold text-red-700">404</h1>
        <p className="text-xl text-white">Page not found</p>
        <button
          className="rounded-lg bg-red-700 px-5 py-2 text-white"
          onClick={(_) => navigate("/")}
        >
          Go Home
        </button>
      </div>
    </>
  );
}
