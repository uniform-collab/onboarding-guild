import {
  ComponentProps,
  UniformSlot,
} from "@uniformdev/canvas-next-rsc/component";
import { ResolveComponentResultWithType } from "@/uniform/models";

export const Composition = ({
  component,
  context,
  slots,
}: ComponentProps<PageProps, PageSlots>) => {
  return (
    <UniformSlot context={context} data={component} slot={slots.content} />
  );
};

type PageProps = {};
type PageSlots = "content";

export const compositionMapping: ResolveComponentResultWithType = {
  type: "page",
  component: Composition,
};
