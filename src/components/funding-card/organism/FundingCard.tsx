import BuilderProfile from "../mocule/BuilderProfile";
import FundingSummary from "../mocule/FundingSummary";
import Thumbnail from "../mocule/Thumbnail";

export default function FundingCard({
  projectName,
  builderName,
  thumbImageUrl,
  builderImageUrl,
  per,
  investAmt,
  dday,
}: any) {
  return (
    <div>
      <BuilderProfile imageUrl={builderImageUrl}>{builderName}</BuilderProfile>
      <Thumbnail imageUrl={thumbImageUrl} />
      <div className="pt-3 px-2">
        <p className="min-h-[3rem] cursor-pointer">{projectName}</p>
        <FundingSummary per={per} investAmt={investAmt} dday={dday} />
      </div>
    </div>
  );
}
