import { Button, Html } from "@react-email/components";
import * as React from "react";

export default function Welcome({ link }: any) {
    return (
        <Html>
            <Button
                href={link}
                style={{
                    background: "#000",
                    color: "#fff",
                    padding: "12px 20px",
                }}
            >
                Click me
            </Button>
        </Html>
    );
}

Welcome.PreviewProps = {
    link: "https://example.com",
};
