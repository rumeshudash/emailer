import config from '@/tailwind.config';
import { cn } from '@/utils/ui.utils';
import {
    Body,
    Container,
    Head,
    Html,
    Img,
    Link,
    Preview,
    Section,
    Text,
} from '@react-email/components';
import { Tailwind } from '@react-email/tailwind';
import React from 'react';

const Wrapper = ({
    previewText,
    className,
    children,
}: {
    previewText?: string;
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <Html>
            <Head />
            {!!previewText && <Preview>{previewText}</Preview>}
            <Tailwind config={config}>
                <Body className="bg-brand/5 my-auto mx-auto font-sans px-2">
                    <Container
                        className={cn('py-[20px] max-w-[600px]', className)}
                    >
                        <Section width="auto" className="float-left">
                            <Img
                                src="https://bookslandnepal.com/logo.png"
                                alt="Books Land Nepal"
                                className="w-[50px] mb-4"
                            />
                        </Section>
                        <Section width="auto" className="float-left">
                            <Text className="my-0 font-bold">Books Land</Text>
                            <Text className="my-0 text-xs">Nepal</Text>
                        </Section>
                        <div className="bg-white rounded-lg overflow-hidden w-full shadow-sm">
                            {children}
                            {/* <Section className="bg-brand text-white px-4 py-6">
                                <Section
                                    className="float-left text-left"
                                    width="auto"
                                >
                                    <Link
                                        href="https://bookslandnepal.com"
                                        className="inline-block"
                                    >
                                        <Img
                                            src="https://bookslandnepal.com/white-logo.png"
                                            alt="Logo"
                                            className="w-[50px]"
                                        />
                                    </Link>
                                    <Heading
                                        as="h3"
                                        className="text-white my-0 mt-1"
                                    >
                                        Books Land Nepal
                                    </Heading>
                                </Section>
                                <Section
                                    className="float-right text-right"
                                    width="auto"
                                >
                                    <div className="mt-1">
                                        <Link
                                            href="https://facebook.com/bookslandnepal"
                                            className="inline-block rounded-full bg-white p-2 size-4 text-brand ml-2"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 512 512"
                                                fill="currentColor"
                                            >
                                                <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" />
                                            </svg>
                                        </Link>
                                        <Link
                                            href="https://instagram.com/bookslandnepal"
                                            className="inline-block rounded-full bg-white p-2 size-4 text-brand ml-2"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <rect
                                                    width="20"
                                                    height="20"
                                                    x="2"
                                                    y="2"
                                                    rx="5"
                                                    ry="5"
                                                />
                                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                                <line
                                                    x1="17.5"
                                                    x2="17.51"
                                                    y1="6.5"
                                                    y2="6.5"
                                                />
                                            </svg>
                                        </Link>
                                    </div>
                                    <div className="mt-6">
                                        <Link
                                            href="https://bookslandnepal.com/policy"
                                            className="text-white"
                                        >
                                            Privacy Policy
                                        </Link>
                                        <span className="mx-2 text-white">
                                            •
                                        </span>
                                        <Link
                                            href="https://bookslandnepal.com/terms"
                                            className="text-white"
                                        >
                                            Terms of Service
                                        </Link>
                                    </div>
                                </Section>
                            </Section> */}
                        </div>
                        <div className="p-4 pt-0">
                            <Text className="text-xs text-muted-text text-center">
                                If you have any questions, please contact us at{' '}
                                <Link href="mailto:support@bookslandnepal.com">
                                    support@bookslandnepal.com
                                </Link>{' '}
                                <br />
                                or call us at{' '}
                                <Link href="tel:+9779802029090">
                                    +977 9802029090
                                </Link>
                            </Text>
                            <Text className="my-1 text-muted-text text-center">
                                <Link
                                    href="https://facebook.com/bookslandnepal"
                                    className="inline-block text-muted-text mx-2"
                                >
                                    <Img
                                        src="https://img.icons8.com/?size=100&id=LtK9OaHTp1cv&format=png&color=959595"
                                        alt="Facebook"
                                        className="w-[20px] inline-block"
                                    />
                                </Link>
                                <Link
                                    href="https://instagram.com/bookslandnepal"
                                    className="inline-block text-muted-text mx-2"
                                >
                                    <Img
                                        src="https://img.icons8.com/?size=100&id=32309&format=png&color=959595"
                                        alt="Instagram"
                                        className="w-[20px] inline-block"
                                    />
                                </Link>
                            </Text>
                            <Text className="text-xs my-1 text-muted-text text-center">
                                <Link
                                    href="https://bookslandnepal.com/policy"
                                    className="text-muted-text"
                                >
                                    Privacy Policy
                                </Link>
                                <span className="mx-2">|</span>
                                <Link
                                    href="https://bookslandnepal.com/terms"
                                    className="text-muted-text"
                                >
                                    Terms of Service
                                </Link>
                            </Text>
                            <Text className="text-xs my-1 text-muted-text text-center">
                                &copy; {new Date().getFullYear()} Books Land
                                Nepal. All rights reserved.
                            </Text>
                        </div>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
};

export default Wrapper;
