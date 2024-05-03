import config from "@/tailwind.config";
import { cn } from "@/utils/ui.utils";
import { Body, Container, Head, Html, Preview } from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";
import React from "react";

const Wrapper = ({
    previewText,
    className,
    children,
}: {
    previewText: string;
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <Html>
            <Head />
            <Preview>{previewText}</Preview>
            <Tailwind config={config}>
                <Body className="bg-white my-auto mx-auto font-sans px-2">
                    <Container
                        className={cn(
                            "border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] max-w-[465px]",
                            className
                        )}
                    >
                        {children}
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
};

export default Wrapper;
