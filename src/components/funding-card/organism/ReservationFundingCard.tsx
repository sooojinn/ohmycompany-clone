import CardPanelLayout from "../atom/CardPanelLayout";
import FundingTitle from "../atom/FundingTitle";
import BuilderProfile from "../molecule/BuilderProfile";
import Thumbnail from "../molecule/Thumbnail";
import BellIcon from "@/assets/icons/BellIcon";

export default function ReservationFundingCard({
  memberImageUrl,
  memberName,
  thumbImageUrl,
  projectName,
  applyCnt,
}: {
  memberImageUrl: string;
  memberName: string;
  thumbImageUrl: string;
  projectName: string;
  applyCnt: number;
}) {
  return (
    <div className="max-lg:shrink-0 lg:flex-1 max-sm:w-2/5 w-54 md:w-72">
      <BuilderProfile imageUrl={memberImageUrl}>{memberName}</BuilderProfile>
      <Thumbnail imageUrl={thumbImageUrl} hideHeartBtn />
      <CardPanelLayout>
        <FundingTitle>{projectName}</FundingTitle>
        <div className="flex justify-between items-center mt-2">
          <span className="text-xs text-primary bg-bg-primary rounded-full px-4 py-2">
            {applyCnt}명 신청
          </span>
          <div className="max-xs:w-8.75 max-xs:h-8.75 w-10 h-10 lg:w-11 lg:h-11 rounded-full border border-gray-300 flex justify-center items-center cursor-pointer">
            <BellIcon />
          </div>
        </div>
      </CardPanelLayout>
    </div>
  );
}
