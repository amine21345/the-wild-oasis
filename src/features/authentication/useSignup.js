import { useMutation } from "@tanstack/react-query";
import { signup } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useSignup() {
  const { mutate: signUp, isLoading } = useMutation({
    mutationFn: signup,
    onSuccess: () => {
      toast.success("Account successfully created");
    },
  });
  return { signUp, isLoading };
}
