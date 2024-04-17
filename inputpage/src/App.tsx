import { RouterProvider, createRouter } from "@tanstack/react-router";
import { RecoilRoot } from "recoil";
import { routeTree } from "./routeTree.gen";

const router = createRouter({ routeTree: routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

function App() {
    return (
        <RecoilRoot>
            <RouterProvider router={router} />
        </RecoilRoot>
    );
}

export default App;