import NewsCard from "@/components/funding-card/organism/NewsCard";
import useNewsPagination from "@/hooks/useNewsPagination";
import PaginationToggleButton from "../atom/PaginationToggleButton";
import HomeSectionTitle from "../molecule/HomeSectionTitle";

export default function NewsSection() {
  const { list, setPageIndex, isFirstPage, isLastPage, reset } =
    useNewsPagination();

  return (
    <div>
      <HomeSectionTitle>새로운 소식이 도착했어요</HomeSectionTitle>
      <div className="w-full flex flex-col gap-3 lg:grid lg:gap-6 lg:grid-cols-2">
        {list?.map(({ newsSeq, ...card }: any) => (
          <NewsCard key={newsSeq} {...card} />
        ))}
      </div>
      {isLastPage || (
        <div className="text-center mt-7.5">
          <PaginationToggleButton
            onClick={() => setPageIndex((prev) => prev + 1)}
          >
            더보기 +
          </PaginationToggleButton>
        </div>
      )}
      {isFirstPage || (
        <div className="text-end mt-7.5">
          <PaginationToggleButton onClick={reset}>접기</PaginationToggleButton>
        </div>
      )}
    </div>
  );
}
