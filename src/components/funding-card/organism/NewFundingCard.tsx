import CardPanelLayout from "../atom/CardPanelLayout";
import FundingTitle from "../atom/FundingTitle";
import Thumbnail from "../molecule/Thumbnail";

export default function NewFundingCard({
  thumbImageUrl,
  projectName,
}: {
  thumbImageUrl: string;
  projectName: string;
}) {
  return (
    <div className="max-lg:shrink-0 lg:flex-1 max-sm:w-2/5 w-54 md:w-72">
      <Thumbnail imageUrl={thumbImageUrl} />
      <CardPanelLayout>
        <FundingTitle>{projectName}</FundingTitle>
      </CardPanelLayout>
    </div>
  );
}
