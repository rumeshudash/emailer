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

interface LowStockNotificationProps {
    product: Product;
}

export const LowStockNotification = ({
    product,
}: LowStockNotificationProps) => {
    return (
        <Wrapper>
            <Section className="p-4">
                <Heading
                    as="h2"
                    className="text-3xl text-center font-normal font-sans m-0 mb-4 text-amber-600"
                >
                    Low Stock Alert
                </Heading>
                <Text>Hello Admin,</Text>
                <Text>
                    This is an automated notification to inform you that the
                    stock for <strong>{product.name}</strong> has reached the
                    low stock threshold.
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
                            <Text className="text-amber-600 font-medium text-sm my-1">
                                Status: Low Stock
                            </Text>
                            <Text className="text-muted-text text-xs my-0">
                                Product ID: #{product.id}
                            </Text>
                        </Column>
                    </Row>
                </Section>

                <Section className="mb-6">
                    <Row>
                        <Column className="w-1/2 pr-2">
                            <div className="bg-white p-3 border border-solid border-gray-100 rounded text-center">
                                <Text className="text-xs text-muted-text uppercase font-semibold m-0">
                                    Current Stock
                                </Text>
                                <Text className="text-2xl font-bold m-0 text-red-500">
                                    {product.stock_quantity ?? 'N/A'}
                                </Text>
                            </div>
                        </Column>
                        <Column className="w-1/2 pl-2">
                            <div className="bg-white p-3 border border-solid border-gray-100 rounded text-center">
                                <Text className="text-xs text-muted-text uppercase font-semibold m-0">
                                    Threshold
                                </Text>
                                <Text className="text-2xl font-bold m-0">
                                    {product.low_stock_threshold ?? 'N/A'}
                                </Text>
                            </div>
                        </Column>
                    </Row>
                </Section>

                <Text>
                    Please restock this item soon to ensure continuous
                    availability for customers.
                </Text>
                <Button
                    href={`https://bookslandnepal.com/admin/products/${product.id}`}
                    className="bg-brand text-white p-3 px-6 rounded-md font-semibold text-center block w-auto"
                >
                    View Product Details
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

LowStockNotification.PreviewProps = {
    product: {
        id: 501,
        name: 'The Alchemist',
        slug: 'the-alchemist',
        image: '/images/The%20Alchemist%20%20Paulo%20Coelho-1744375601260-1745659313356.jpeg',
        price: 800,
        selling_price: 750,
        stock_quantity: 3,
        low_stock_threshold: 5,
    },
} as LowStockNotificationProps;

export default LowStockNotification;
