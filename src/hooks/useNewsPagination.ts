import { useEffect, useMemo, useState } from "react";

const PAGE_UNIT = 6;

export default function useNewsPagination() {
  const [data, setData] = useState<any>(null);
  const [pageIndex, setPageIndex] = useState(1);

  useEffect(() => {
    fetch(`/api/main/news?pageIndex=${pageIndex}&pageUnit=${PAGE_UNIT}`)
      .then((res) => res.json())
      .then((newData) => {
        if (pageIndex === 1 || !data) {
          setData(newData);
        } else {
          setData((prev: any) => {
            return {
              ...newData,
              list: [...prev.list, ...newData.list],
            };
          });
        }
      });
  }, [pageIndex]);

  const { currentPageNo, firstPageNo, lastPageNo } = useMemo(() => {
    return (
      data?.paginationInfo ?? {
        currentPageNo: 0,
        firstPageNo: 0,
        lastPageNo: 0,
      }
    );
  }, [data]);

  const isFirstPage = currentPageNo === firstPageNo;
  const isLastPage = currentPageNo === lastPageNo;

  return {
    list: data?.list ?? [],
    setPageIndex,
    isFirstPage,
    isLastPage,
    reset: () => {
      setPageIndex(1);
    },
  };
}
