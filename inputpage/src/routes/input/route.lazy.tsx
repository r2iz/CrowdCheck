import { createLazyFileRoute } from "@tanstack/react-router";


import { InputHeader } from "./-components/InputHeader";
import { InputBody } from "./-components/Input";

export const Route = createLazyFileRoute("/input")({
    component: Input,
});

function Input() {
    return(
        <>
            <InputHeader />
            <InputBody />
        </>
    );
}