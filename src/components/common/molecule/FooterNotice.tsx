import Link from "next/link";
import { useEffect, useState } from "react";

export default function FooterNotice() {
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    fetch("/api/notices")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="flex gap-5 h-6 mb-6.25 overflow-hidden max-md:text-sm">
      <Link
        href="https://www.ohmycompany.com/community/notice"
        className="font-semibold break-keep"
      >
        공지사항
      </Link>
      <ul className="animate-floating">
        {data?.list?.map(({ title, noticeSeq }: any) => (
          <li key={noticeSeq}>
            <Link
              href={`https://www.ohmycompany.com/community/notice/${noticeSeq}`}
              className="line-clamp-1"
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
