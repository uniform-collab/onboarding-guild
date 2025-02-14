import {
  ComponentProps,
  UniformText,
} from "@uniformdev/canvas-next-rsc/component";
import { ResolveComponentResultWithType } from "@/uniform/models";

export const HeroComponent = ({
  title,
  description,
  component,
  context,
}: ComponentProps<HeroProps>) => {
  return (
    <>
      {/* <h1 className="title">{title}</h1>
      <div className="description">{description}</div> */}
      <UniformText
        component={component}
        context={context}
        parameterId="title"
        as="h1"
        className="title"
        placeholder="Enter hero title"
      />
      <UniformText
        component={component}
        context={context}
        parameterId="description"
        className="description"
        placeholder="Enter hero description"
      />
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
