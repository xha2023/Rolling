import React, { useState, useEffect, useCallback } from 'react';

function useAsync(asyncFunction) {
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);

  const wrappedFunction = useCallback(
    async (...args) => {
      setPending(true);
      setError(null);
      try {
        return await asyncFunction(...args);
      } catch (error) {
        setError(error);
      } finally {
        setPending(false);
      }
    },
    [asyncFunction],
  );

  return [pending, error, wrappedFunction];
}

export default useAsync;

// import React, { useState, useEffect, useCallback } from 'react';

// export function useAsync(asyncFunction, immediate = true) {
//   const [data, setData] = useState(null);
//   const [loading, setLoding] = useState(false);
//   const [error, setError] = useState(null);

//   const execute = useCallback(
//     async (...args) => {
//       setLoding(true);
//       setData(null);
//       setData(Error);

//       try {
//         const response = await asyncFunctoin(...args);
//         setData(response);
//         return response;
//       } catch (err) {
//         throw err;
//       } finally {
//         setLoding(false);
//       }
//     },
//     [asyncFunction],
//   );

//   useEffect(() => {
//     if (immediate) {
//       execute();
//     }
//   }, [execute, immediate]);

//   return { execute, data, loading, error };
// }
