import NavBar from "@/app/components/NavBar";
import GetInTouchSimple from "@/app/components/GetInTouchSimple";
import {MantineProvider} from "@mantine/core";

export default function Support() {
    return (

        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 h-full w-full from-neutral-700 bg-gradient-to-t">
            <NavBar />
            <MantineProvider>
                <GetInTouchSimple />
            </MantineProvider>
        </div>
    );
}
