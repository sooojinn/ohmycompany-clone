import BuilderProfile from "../mocule/BuilderProfile";
import FundingSummary from "../mocule/FundingSummary";
import Thumbnail from "../mocule/Thumbnail";

export default function FundingCard({
  projectName,
  communityDesc,
  builderName,
  thumbImageUrl,
  builderImageUrl,
  per,
  subscribeRate,
  investAmt,
  expenseAmt,
  dday,
  dDay,
  hideDesc,
  hideSummary,
  hideProfile,
  hideHeartBtn,
}: any) {
  return (
    <div>
      {hideProfile || (
        <BuilderProfile imageUrl={builderImageUrl}>
          {builderName}
        </BuilderProfile>
      )}
      <Thumbnail imageUrl={thumbImageUrl} hideHeartBtn={hideHeartBtn} />
      <div className="pt-3 px-2">
        <p className="min-h-[3rem] cursor-pointer">{projectName}</p>
        {hideDesc || (
          <p className="text-[13px] text-text-dday">{communityDesc}</p>
        )}
        {hideSummary || (
          <FundingSummary
            per={per || subscribeRate}
            amount={investAmt || expenseAmt}
            dday={dday || dDay}
          />
        )}
      </div>
    </div>
  );
}
