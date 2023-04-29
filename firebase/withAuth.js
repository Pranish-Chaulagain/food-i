import { useRouter } from "next/router";
import { useAuth } from "./auth";
import Loader from "@/components/Loader";

function withAuth(Component) {
  return function WithAuth(props) {
    const router = useRouter();
    const { authUser, isLoading } = useAuth();

    if (isLoading) {
      return <Loader />;
    }

    if (!authUser) {
      router.push("/login");
      return null;
    }

    return <Component {...props} />;
  };
}

export default withAuth;
