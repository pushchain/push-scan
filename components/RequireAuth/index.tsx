import { useData } from "contexts/DataContext";
import { useRouter } from "next/router";
import { ROUTES } from "utils/constants";

const Validate = ({ children }: { children: any }) => {
  const { isLoggedIn } = useData();
  const router = useRouter();

  if (!isLoggedIn) {
    if (typeof window !== "undefined") {
      // if (!Boolean(sessionStorage.getItem("userLogin"))) {
      router.push(ROUTES.LOGIN);
      // } else {
      //   return children;
      // }
    }
    return <></>;
  }

  return children;
};

export default Validate;
