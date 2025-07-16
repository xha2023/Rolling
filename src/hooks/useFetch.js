import { useCallback } from 'react';
import { useAsync } from './useAsync.js';

/**
 * GET 요청을 위한 범용 커스텀 훅
 * @param {Function} apiFunction - 실행할 API 요청 함수 (예: getRecipients)
 * @param {Array} args - apiFunction에 전달할 인자 배열
 * @returns {{data: any, isLoading: boolean, error: Error|null, refetch: Function}}
 */
export function useFetch(apiFunction, args = [], immediate = true) {
  const fetchData = useCallback(async () => {
    return await apiFunction(...args);
  }, [apiFunction, JSON.stringify(args)]); // args 배열이 바뀌면 fetchData 재생성

  const { execute, data, loading, error } = useAsync(fetchData, immediate);

  return { data, loading, error, refetch: execute };
}

/* 사용 에시
import { getRecipients } from '../api/recipients';
import { useFetch } from '../hooks/useFetch'; 

function RecipientList() {
    const { data: recipients, loading, error, refetch } = useFetch(getRecipients, [{ limit: 8 }]);
*/
