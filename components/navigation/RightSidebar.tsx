import ROUTES from "@/constants/routes";
import Image from "next/image";
import Link from "next/link";
import TagCard from "../cards/TagCard";

const hotQuestions = [
  { _id: "1", title: "What is React?" },
  { _id: "2", title: "What is Next.js?" },
  { _id: "3", title: "What is TypeScript?" },
  { _id: "4", title: "What is JavaScript?" },
  { _id: "5", title: "What is Node.js?" },
  { _id: "6", title: "What is Express.js?" },
];

const popularTags = [
  { _id: "1", name: "JavaScript", questions: 1234 },
  { _id: "2", name: "TypeScript", questions: 567 },
  { _id: "3", name: "React", questions: 890 },
  { _id: "4", name: "Next.js", questions: 234 },
  { _id: "5", name: "Node.js", questions: 456 },
  { _id: "6", name: "Express.js", questions: 789 },
];

const RightSidebar = () => {
  return (
    <section className="pt-24 custom-scrollbar background-light900_dark200 light-border sticky right-0 top-0 flex h-screen w-[350px] flex-col gap-6 overflow-y-auto border-l p-6 shadow-light-300 dark:shadow-none max-xl:hidden">
      <div>
        <h3 className="h3-bold text-dark200_light900">Top Questions</h3>
        <div className="mt-7 flex w-full flex-col gap-[30px]">
          {hotQuestions.map(({ _id, title }) => (
            <Link
              key={_id}
              href={ROUTES.PROFILE(_id)}
              className="flex cursor-pointer items-center justify-between gap-7"
            >
              <p className="body-medium text-dark500_light700 line-clamp-2">
                {title}
              </p>
              <Image
                src="/icons/chevron-right.svg"
                alt="Chevron Right"
                width={20}
                height={20}
                className="invert-colors"
              />
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-16">
        <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>
        <div className="mt-7 flex flex-col gap-4">
          {popularTags.map(({ _id, name, questions }) => (
            <TagCard
              key={_id}
              _id={_id}
              name={name}
              questions={questions}
              showCount
              compact
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default RightSidebar;
