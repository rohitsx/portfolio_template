import { ReactNode, HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
import SectionHeading from "./sectionHeading";

type SectionProps = {
  children?: ReactNode;
  title: string;
  icon?: ReactNode;
} & HTMLAttributes<HTMLElement>;

export const Container = ({ children, icon, title, className, ...props }: SectionProps) => {
  return (
    <section
      className={twMerge(
        "space-y-4 md:space-y-5 border-b pb-8 border-neutral-200 text-neutral-600",
        className
      )}
      {...props}
    >
      <SectionHeading title={title} icon={icon} />
      {children}
    </section>
  );
};

