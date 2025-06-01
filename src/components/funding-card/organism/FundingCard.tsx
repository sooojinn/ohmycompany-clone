import CardPanelLayout from "../atom/CardPanelLayout";
import FundingDesc from "../atom/FundingDesc";
import FundingTitle from "../atom/FundingTitle";
import BuilderProfile from "../mocule/BuilderProfile";
import FundingSummary from "../mocule/FundingSummary";
import Thumbnail from "../mocule/Thumbnail";

export default function FundingCard({
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
    <div>
      <BuilderProfile imageUrl={builderImageUrl || memberImageUrl}>
        {builderName || memberName}
      </BuilderProfile>
      <Thumbnail imageUrl={thumbImageUrl} />
      <CardPanelLayout>
        <FundingTitle>{projectName}</FundingTitle>
        {hideDesc || <FundingDesc>{communityDesc}</FundingDesc>}
        <FundingSummary
          per={per || subscribeRate}
          amount={investAmt || expenseAmt}
          dday={dday || dDay}
        />
      </CardPanelLayout>
    </div>
  );
}
