import { useEffect } from 'react';
import { useUTMContext } from '../context/UtmContext';

export default function useUTMParams() {
  const { dispatch } = useUTMContext();

  useEffect(() => {
    const parseUTMParams = () => {
      const queryString = window.location.search.substring(1);
      const queryParams = new URLSearchParams(queryString);
      return {
        utm_source: queryParams.get('utm_source') || '',
        utm_medium: queryParams.get('utm_medium') || '',
        utm_campaign: queryParams.get('utm_campaign') || '',
        utm_term: queryParams.get('utm_term') || '',
        utm_content: queryParams.get('utm_content') || '',
      };
    };

    const queryParams = parseUTMParams();
    if (
      queryParams.utm_source ||
      queryParams.utm_medium ||
      queryParams.utm_campaign ||
      queryParams.utm_term ||
      queryParams.utm_content
    ) {
      dispatch({ type: 'SET_UTM_PARAMS', payload: queryParams });
    }
  }, [dispatch]);

  return useUTMContext();
}
