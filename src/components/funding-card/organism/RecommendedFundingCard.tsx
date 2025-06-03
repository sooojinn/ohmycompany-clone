import BuilderName from "../atom/BuilderName";
import CardPanelLayout from "../atom/CardPanelLayout";
import FundingDesc from "../atom/FundingDesc";
import FundingTitle from "../atom/FundingTitle";
import BuilderProfile from "../molecule/BuilderProfile";
import FundingSummary from "../molecule/FundingSummary";
import Thumbnail from "../molecule/Thumbnail";

export default function RecommendedFundingCard({
  projectName,
  communityDesc,
  builderName,
  memberName,
  thumbImageUrl,
  builderImageUrl,
  memberImageUrl,
  per,
  subscribeRate,
  investAmt,
  expenseAmt,
  dday,
  dDay,
  hideDesc,
}: any) {
  return (
    <div className="flex-1 max-lg:flex max-lg:items-center max-lg:gap-4">
      <BuilderProfile
        imageUrl={builderImageUrl || memberImageUrl}
        className="max-lg:hidden"
      >
        {builderName || memberName}
      </BuilderProfile>
      <Thumbnail imageUrl={thumbImageUrl} className="max-lg:w-32" />
      <CardPanelLayout className="max-lg:pt-0 max-lg:flex-grow pr-2 pl-1.25 ">
        <BuilderName className="text-gray-500 lg:hidden">
          {builderName || memberName}
        </BuilderName>
        <FundingTitle className="max-lg:min-h-0">{projectName}</FundingTitle>
        {hideDesc || <FundingDesc>{communityDesc}</FundingDesc>}
        <FundingSummary
          per={per || subscribeRate}
          amount={investAmt || expenseAmt}
          dday={dday || dDay}
          className="max-lg:mt-2"
        />
      </CardPanelLayout>
    </div>
  );
}
