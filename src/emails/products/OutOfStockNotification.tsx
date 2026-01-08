import Wrapper from '@/src/Wrapper/wrapper';
import { Product } from '@/types/order';
import {
    Button,
    Column,
    Heading,
    Img,
    Row,
    Section,
    Text,
} from '@react-email/components';

interface OutOfStockNotificationProps {
    product: Product;
}

export const OutOfStockNotification = ({
    product,
}: OutOfStockNotificationProps) => {
    return (
        <Wrapper>
            <Section className="p-4">
                <Heading
                    as="h2"
                    className="text-3xl text-center font-normal font-sans m-0 mb-4 text-red-600"
                >
                    Out of Stock Alert
                </Heading>
                <Text>Hello Admin,</Text>
                <Text>
                    This is an automated notification to inform you that the
                    product <strong>{product.name}</strong> is now{' '}
                    <strong className="text-red-600">Out of Stock</strong>.
                </Text>
                <Section className="my-6 p-4 border border-solid border-gray-200 rounded-lg bg-gray-50">
                    <Row>
                        <Column className="w-24">
                            <Img
                                src={
                                    'https://api.bookslandnepal.com' +
                                    product.image +
                                    '?size=thumb'
                                }
                                alt={product.name}
                                className="w-24 h-auto rounded-md"
                            />
                        </Column>
                        <Column className="pl-4 align-top">
                            <Text className="font-semibold text-lg my-0">
                                {product.name}
                            </Text>
                            <Text className="text-red-600 font-medium text-sm my-1">
                                Status: Out of Stock
                            </Text>
                            <Text className="text-muted-text text-xs my-0">
                                Product ID: #{product.id}
                            </Text>
                        </Column>
                    </Row>
                </Section>

                <Section className="mb-6">
                    <div className="bg-white p-4 border border-solid border-gray-100 rounded text-center">
                        <Text className="text-xs text-muted-text uppercase font-semibold m-0">
                            Current Stock
                        </Text>
                        <Text className="text-3xl font-bold m-0 text-red-600">
                            0
                        </Text>
                    </div>
                </Section>

                <Text>
                    This item is no longer available for purchase. Please
                    restock it immediately to resume sales.
                </Text>
                <Button
                    href={`https://bookslandnepal.com/admin/products/${product.id}`}
                    className="bg-brand text-white p-3 px-6 rounded-md font-semibold text-center block w-auto"
                >
                    Manage Product
                </Button>
            </Section>

            <Section className="p-4 pt-0 text-center border-t border-solid border-gray-200">
                <Text className="text-muted-text text-sm">
                    This is a system-generated notification for Books Land
                    Nepal.
                </Text>
            </Section>
        </Wrapper>
    );
};

OutOfStockNotification.PreviewProps = {
    product: {
        id: 501,
        name: 'The Alchemist',
        slug: 'the-alchemist',
        image: '/images/The%20Alchemist%20%20Paulo%20Coelho-1744375601260-1745659313356.jpeg',
        price: 800,
        selling_price: 750,
        stock_quantity: 0,
        low_stock_threshold: 5,
    },
} as OutOfStockNotificationProps;

export default OutOfStockNotification;
