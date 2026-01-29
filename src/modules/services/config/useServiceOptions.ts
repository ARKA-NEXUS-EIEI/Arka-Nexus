import { useServiceRegistry } from "../../../core/hooks/useServiceRegistry";

export const useServiceOptions = () => {
  const { services, loading } = useServiceRegistry();

  const options = services.map((service) => service.title);

  return {
    loading,
    options: [...options, "Others"],
  };
};
