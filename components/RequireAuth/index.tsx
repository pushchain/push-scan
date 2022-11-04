import { useData } from "contexts/DataContext";
import { useRouter } from "next/router";
import { ROUTES } from "utils/constants";

const Validate = ({ children }: { children: any }) => {
  const { isLoggedIn } = useData();
  const router = useRouter();

  console.log("checking", isLoggedIn);

  if (!isLoggedIn) {
    if (typeof window !== "undefined") {
      router.push(ROUTES.LOGIN);
    }
    return <></>;
  }

  return children;
};

export default Validate;
