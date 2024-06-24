import type { MetaFunction } from "@remix-run/node";
import { Landing } from "~/components/Landing";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return <Landing />;
}
