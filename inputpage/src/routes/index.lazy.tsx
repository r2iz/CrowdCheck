import { createLazyFileRoute, useNavigate } from "@tanstack/react-router";
import { Header } from "./-components/Header";

export const Route = createLazyFileRoute("/")({
    component: Index,
});

function Index() {
    const navigate = useNavigate();

    const onclick = () => {
        navigate({
            to: "/select",
        });
    };

    return (
        <>
            <Header />
            <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                <div className="w-full space-y-8">
                    <h3 className='flex items-center justify-center text-xl'>入力サイト</h3>
                    <div className="flex justify-center">
                        <button onClick={onclick} className="group relative w-28 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                            入力する
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
