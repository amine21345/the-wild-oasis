import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useLogout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate: logOut, isLoading } = useMutation({
    mutationFn: logout,
    onSuccess: () => {
      toast.success("User successfully logged out");
      queryClient.removeQueries();
      navigate("/login", { replace: true });
    },
  });
  return { logOut, isLoading };
}
