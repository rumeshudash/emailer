import Wrapper from '@/src/Wrapper/wrapper';
import { Order, Product, OrderStatus } from '@/types/order';
import {
    Button,
    Column,
    Heading,
    Img,
    Row,
    Section,
    Text,
} from '@react-email/components';
import { format } from 'date-fns';

interface BackorderNotificationProps {
    order: Order;
    product: Product;
}

export const BackorderNotification = ({
    order,
    product,
}: BackorderNotificationProps) => {
    return (
        <Wrapper>
            <Section className="p-4">
                <Heading
                    as="h2"
                    className="text-3xl text-center font-normal font-sans m-0 mb-4 text-red-600"
                >
                    Backorder Alert
                </Heading>
                <Text>Hello Admin,</Text>
                <Text>
                    This is an automated notification to inform you that a
                    product in <strong>Order #{order.id}</strong> has been
                    marked as backordered.
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
                            <Text className="text-red-500 font-medium text-sm my-1">
                                Status: Backordered
                            </Text>
                            <Text className="text-muted-text text-xs my-0">
                                Product ID: #{product.id}
                            </Text>
                        </Column>
                    </Row>
                </Section>
                <Text>
                    <strong>Customer:</strong> {order.customer_name} <br />
                    <strong>Tracking ID:</strong> {order.tracking_id}
                </Text>
                <Text>
                    Please review this order and update the inventory or contact
                    the supplier to fulfill this backorder as soon as possible.
                </Text>
                <Button
                    href={`https://bookslandnepal.com/admin/orders/details/${order.id}`}
                    className="bg-brand text-white p-3 px-6 rounded-md font-semibold text-center block w-auto"
                >
                    Manage Order
                </Button>
            </Section>

            <Section className="p-4 border-t border-solid border-gray-200">
                <Row>
                    <Column>
                        <Text className="font-semibold text-sm text-muted-text uppercase">
                            Order Number
                        </Text>
                        <Text className="font-bold">#{order.id}</Text>
                    </Column>
                    <Column className="text-right">
                        <Text className="font-semibold text-sm text-muted-text uppercase">
                            Order Date
                        </Text>
                        <Text className="font-bold">
                            {format(order.created_at, 'MMMM d, yyyy')}
                        </Text>
                    </Column>
                </Row>
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

BackorderNotification.PreviewProps = {
    order: {
        id: 11234,
        tracking_id: 'BLN-ORD-789',
        customer_name: 'Jane Smith',
        customer_email: 'jane.smith@example.com',
        customer_phone: '+977-9800000000',
        district: 'Kathmandu',
        city: 'Kathmandu',
        address: 'New Baneshwor',
        amount: 1500,
        status: OrderStatus.PENDING,
        created_at: new Date(),
        items: [],
    },
    product: {
        id: 501,
        name: 'The Alchemist',
        slug: 'the-alchemist',
        image: '/images/The%20Alchemist%20%20Paulo%20Coelho-1744375601260-1745659313356.jpeg',
        price: 800,
        selling_price: 750,
    },
} as BackorderNotificationProps;

export default BackorderNotification;
