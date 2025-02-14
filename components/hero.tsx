import { ComponentProps } from "@uniformdev/canvas-next-rsc/component";
import { ResolveComponentResultWithType } from "@/uniform/models";

export const HeroComponent = ({
  title,
  description,
}: ComponentProps<HeroProps>) => {
  return (
    <>
      <h1 className="title">{title}</h1>
      <div className="description">{description}</div>
    </>
  );
};

export type HeroProps = {
  title: string;
  description: string;
};

export const heroMapping: ResolveComponentResultWithType = {
  type: "hero",
  component: HeroComponent,
};
