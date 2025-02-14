// IMPORTANT This is SSR-enabled page handler. If you are looking for the SSG-enabled page handler, please use `./page.tsx.ssg-disabled` instead.
import {
  UniformComposition,
  PageParameters,
  retrieveRoute,
} from "@uniformdev/canvas-next-rsc";
import { resolveComponent } from "@/uniform/resolve";
import { HeaderComponent } from "@/components/header";
import { FooterComponent } from "@/components/footer";

export default async function HomePage(props: PageParameters) {
  const route = await retrieveRoute(props);
  return (
    <>
      <HeaderComponent />
      <UniformComposition
        {...props}
        route={route}
        resolveComponent={resolveComponent}
        mode="server"
      />
      <FooterComponent />
    </>
  );
}
