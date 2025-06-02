import NewsCard from "@/components/funding-card/organism/NewsCard";
import HomeSection from "./HomeSection";
import useNewsPagination from "@/hooks/useNewsPagination";
import PaginationToggleButton from "../atom/PaginationToggleButton";

export default function NewsSection() {
  const { list, setPageIndex, isFirstPage, isLastPage, reset } =
    useNewsPagination();

  return (
    <div>
      <HomeSection title="새로운 소식이 도착했어요" col={2}>
        {list?.map(({ newsSeq, ...card }: any) => (
          <NewsCard key={newsSeq} {...card} />
        ))}
      </HomeSection>
      {isLastPage || (
        <div className="text-center mt-[30px]">
          <PaginationToggleButton
            onClick={() => setPageIndex((prev) => prev + 1)}
          >
            더보기 +
          </PaginationToggleButton>
        </div>
      )}
      {isFirstPage || (
        <div className="text-end mt-[30px]">
          <PaginationToggleButton onClick={reset}>접기</PaginationToggleButton>
        </div>
      )}
    </div>
  );
}
