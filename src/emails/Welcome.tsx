import Wrapper from '@/src/Wrapper/wrapper';
import { Button, Heading, Section, Text } from '@react-email/components';

export function Welcome({ name }: any) {
    return (
        <Wrapper>
            <Section className="p-4">
                <Heading className="text-center">Welcome!</Heading>
                <Text>Hello {name},</Text>
                <Text>
                    Welcome to Books Land Nepal! We&apos;re thrilled to have you
                    join our community of book lovers.
                </Text>
                <Text>
                    At Books Land Nepal, you&apos;ll discover a vast collection
                    of books, from timeless classics to contemporary
                    bestsellers, all at your fingertips. As a member,
                    you&apos;ll enjoy:
                </Text>
                <Text className="ml-4">
                    • Exclusive access to new arrivals • Special discounts and
                    promotions • Personalized book recommendations • Seamless
                    online shopping experience
                </Text>
                <Text className="mt-4">
                    Start exploring our collection today!
                </Text>
                <Button
                    className="mt-4 bg-brand text-white px-4 py-2 rounded"
                    href="https://bookslandnepal.com"
                >
                    Visit Books Land Nepal
                </Button>
                <Text className="mt-4">Happy reading!</Text>
                <Text className="text-sm text-gray-600">
                    The Books Land Nepal Team
                </Text>
            </Section>
        </Wrapper>
    );
}

Welcome.PreviewProps = {
    name: 'John Doe',
};

export default Welcome;
