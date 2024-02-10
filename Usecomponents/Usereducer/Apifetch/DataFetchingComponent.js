import React, { useState, useEffect } from "react";

const DataFetchingComponent = ({ url }) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const result = await response.json();
        setData(result);
        setError(null);
      } catch (error) {
        setError(error.message);
        setData(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return (
    <React.Fragment>
      {isLoading && <LoadingComponent />}
      {error && <ErrorComponent error={error} />}
      {data && <DataDisplayComponent data={data} />}
    </React.Fragment>
  );
};
export default DataFetchingComponent;
