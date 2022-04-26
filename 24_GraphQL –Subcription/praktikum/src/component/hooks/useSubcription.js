import { useSubscription } from '@apollo/client';
import { SubcriptionPassenger } from '../../graphql/subcript';

export default function useSubscriptionPassenger() {
	const { data, loading, error } = useSubscription(SubcriptionPassenger);
  return{
    data,
    loading,
    error
  }
}
