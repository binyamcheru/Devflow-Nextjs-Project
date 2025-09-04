"use client";

import { Input } from "@/components/ui/input";
import { formUrlQuery, removeKeysFormUrlQuery } from "@/lib/urls";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

interface LocalSearchProps {
  route: string;
  imgSrc: string;
  placeholder: string;
  otherClasses?: string;
}

const LocalSearch = ({
  route,
  imgSrc,
  placeholder,
  otherClasses,
}: LocalSearchProps) => {
  const pathname = usePathname();
  console.log(pathname);
  const router = useRouter(); // common mistake useRouter comes from next/navigation not from next/router
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";
  console.log(searchParams.toString());

  const [searchQuery, setSearchQuery] = useState(query);

  useEffect(() => {
    const debounceFn = setTimeout(() => {
      if (searchQuery) {
        const newUrl = formUrlQuery({
          params: searchParams.toString(),
          key: "query",
          value: searchQuery,
        });
        router.push(newUrl, { scroll: false });
      } else {
        if (pathname === route) {
          const newUrl = removeKeysFormUrlQuery({
            params: searchParams.toString(),
            keysToRemove: ["query"],
          });
          router.push(newUrl, { scroll: false });
        }
      }
    }, 300);

    return () => clearTimeout(debounceFn);
  }, [searchQuery, router, searchParams, route, pathname]);

  return (
    <div
      className={`background-light800_darkgradient flex min-h-[56px] items-center gap-4 rounded-[10px] px-4 grow ${otherClasses} `}
    >
      <Image
        src={imgSrc}
        width={24}
        height={24}
        alt="Search"
        className="cursor-pointer"
      />
      <Input
        type="text"
        placeholder={placeholder}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="paragraph-regular no-focus placeholder text-dark400_light700 border-none shadow-none outline-none"
      />
    </div>
  );
};
export default LocalSearch;
