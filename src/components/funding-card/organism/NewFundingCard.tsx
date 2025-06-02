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
    <div>
      <Thumbnail imageUrl={thumbImageUrl} />
      <CardPanelLayout>
        <FundingTitle>{projectName}</FundingTitle>
      </CardPanelLayout>
    </div>
  );
}
