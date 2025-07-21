import { useState, useCallback } from 'react';
import { useAsync } from './useAsync.js';

/**
 * POST, PUT, PATCH, DELETE 요청을 위한 범용 커스텀 훅
 * @param {Function} apiFunction - 실행할 API 요청 함수 (예: createRecipient)
 * @returns {{mutate: Function, isLoading: boolean, error: Error|null, data: any}}
 */
function useMutation(apiFunction) {
  const { execute, data, loading, error } = useAsync(apiFunction, false);
  const mutate = useCallback(
    async (...args) => {
      return execute(...args);
    },
    [execute],
  );

  return { mutate, data, loading, error };
}

export default useMutation;

/* 사용예시 //
import { createRecipient } from '../api/recipients';
import useMutation from '../hooks/useMutation';

function CreateRecipientForm() {
  const { mutate, loading } = useMutation(createRecipient);

  const handleSubmit = async () => {
    await mutate({ name: '새로운 대상', backgroundColor: 'blue' });
  };
  // ...
}
  */
