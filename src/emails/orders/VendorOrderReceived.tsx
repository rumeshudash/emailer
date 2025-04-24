import Wrapper from '@/src/Wrapper/wrapper';
import { Order, OrderItem, OrderStatus, PaymentMethod } from '@/types/order';
import { formatCurrency } from '@/utils/currency';
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

interface VendorOrderReceivedProps {
    order: Order;
}

export const VendorOrderReceived = ({ order }: VendorOrderReceivedProps) => {
    const total = order.items.reduce(
        (sum, item) => sum + item.unit_price * item.quantity,
        0,
    );

    return (
        <Wrapper>
            <Section className="p-4">
                <Heading
                    as="h2"
                    className="text-4xl text-center font-normal font-sans m-0 mb-2"
                >
                    New Order Received!
                </Heading>
                <Text>Hello Admin,</Text>
                <Text>
                    A new order has been received. Please check the order
                    details below.
                </Text>
                <Button
                    href={`https://bookslandnepal.com/admin/orders/details/${order.id}`}
                    className="bg-brand text-white p-2 px-4 rounded-md"
                >
                    View Order
                </Button>
            </Section>
            <Row
                className="px-4"
                style={{
                    borderBottom: '1px solid #e0e0e0',
                }}
            >
                <Column>
                    <Heading as="h3" className="text-lg mb-2">
                        Order: #{order.id}
                    </Heading>
                </Column>
                <Column>
                    <Heading as="h3" className="text-lg mb-2 text-right">
                        {format(order.created_at, 'MMMM d, yyyy')}
                    </Heading>
                </Column>
            </Row>
            <Section className="p-4 pb-0">
                {order.items.map((item: OrderItem) => (
                    <Row key={item.id} className="mb-4">
                        <Column className="w-32">
                            <div
                                className="mr-4"
                                style={{
                                    border: '1px solid #e0e0e0',
                                }}
                            >
                                <Img
                                    src={
                                        'https://api.bookslandnepal.com' +
                                        item.product.image
                                    }
                                    alt={item.product.name}
                                    className="w-32"
                                />
                            </div>
                        </Column>
                        <Column className="align-top">
                            <Text className="font-semibold my-4">
                                {item.product.name}
                            </Text>
                            <Text className="text-muted-text my-4">
                                Qty: {item.quantity}
                            </Text>
                            <Text className="font-semibold my-4">
                                Price: {formatCurrency(item.unit_price)}
                            </Text>
                        </Column>
                    </Row>
                ))}
            </Section>
            <Section
                className="p-4 pt-0 text-center"
                style={{
                    borderTop: '1px solid #e0e0e0',
                }}
            >
                <Heading as="h4" className="mb-4">
                    Shipping Address
                </Heading>
                <Text className="my-1">{order.address}</Text>
                <Text className="my-1">
                    {order.city}, {order.district}
                </Text>
                <Text className="my-1">{order.customer_phone}</Text>
                {!!order.customer_phone2 && (
                    <Text className="my-1">{order.customer_phone2}</Text>
                )}
            </Section>
            <Section
                className="p-4 pt-0 text-center"
                style={{
                    borderTop: '1px solid #e0e0e0',
                }}
            >
                <Heading as="h4" className="mb-4">
                    Order Summary
                </Heading>
                <Row className="mb-2 text-sm">
                    <Column className="text-right w-1/2 pr-2">Subtotal:</Column>
                    <Column className="text-left w-1/2 pl-2">
                        {formatCurrency(total || 0)}
                    </Column>
                </Row>
                <Row className="mb-2 text-sm">
                    <Column className="text-right w-1/2 pr-2">
                        Delivery Charge:
                    </Column>
                    <Column className="text-left w-1/2 pl-2">
                        {formatCurrency(order.delivery_charge || 0)}
                    </Column>
                </Row>
                <Row className="mb-2 text-sm">
                    <Column className="text-right w-1/2 pr-2">Discount:</Column>
                    <Column className="text-left w-1/2 pl-2">
                        {formatCurrency(-(order.discount || 0))}
                    </Column>
                </Row>
                <Row className="mb-2 text-lg font-semibold">
                    <Column className="text-right w-1/2 pr-2">Total:</Column>
                    <Column className="text-left w-1/2 pl-2">
                        {formatCurrency(order.amount || 0)}
                    </Column>
                </Row>
            </Section>
        </Wrapper>
    );
};

VendorOrderReceived.PreviewProps = {
    order: {
        id: 11000,
        tracking_id: '1234567890',
        customer_name: 'John Doe',
        customer_email: 'john.doe@example.com',
        customer_phone: '+1234567890',
        customer_city: 'Anytown',
        district: 'Anytown',
        city: 'Anytown',
        address: '123 Main St',
        amount: 100,
        status: OrderStatus.PENDING,
        created_at: new Date(),
        items: [
            {
                id: 1000,
                product: {
                    id: 1000,
                    name: 'Product 1',
                    slug: 'product-1',
                    image: 'https://api.bookslandnepal.com/images/surrounded-by-idiots-p7sb7rj9-1743534502407-1744121531476.jpg',
                    selling_price: 100,
                    price: 100,
                },
                quantity: 1,
                unit_price: 100,
            },
            {
                id: 1000,
                product: {
                    id: 1000,
                    name: 'Product 1',
                    slug: 'product-1',
                    image: 'https://api.bookslandnepal.com/images/surrounded-by-idiots-p7sb7rj9-1743534502407-1744121531476.jpg',
                    selling_price: 100,
                    price: 100,
                },
                quantity: 1,
                unit_price: 100,
            },
            {
                id: 1000,
                product: {
                    id: 1000,
                    name: 'Product 1',
                    slug: 'product-1',
                    image: 'https://api.bookslandnepal.com/images/surrounded-by-idiots-p7sb7rj9-1743534502407-1744121531476.jpg',
                    selling_price: 100,
                    price: 100,
                },
                quantity: 1,
                unit_price: 100,
            },
        ],
        payment_method: PaymentMethod.CASH_ON_DELIVERY,
    },
} as VendorOrderReceivedProps;

export default VendorOrderReceived;
