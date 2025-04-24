export interface Order {
    id: number;
    tracking_id: string;
    customer_name: string;
    customer_email: string;
    customer_phone: string;
    customer_phone2?: string;
    district: string;
    city: string;
    address: string;
    delivery_charge?: number;
    payment_method?: PaymentMethod;
    status?: OrderStatus;
    discount?: number;
    amount: number;
    notes?: string;
    attributes?: Record<string, any>;
    created_at: Date;
    items: OrderItem[];
}

export interface OrderItem {
    id: number;
    product: Product;
    comboProduct?: ComboProduct;
    quantity: number;
    unit_price: number;
    discount?: number;
}

export interface Product {
    id: number;
    name: string;
    slug: string;
    description?: string;
    selling_price?: number;
    price: number;
    image?: string;
    publisher?: string;
    isbn?: string;
    metadata?: Record<string, any>;
    authors?: Author[];
    categories?: Category[];
}

export interface ComboProduct {
    id: number;
    name: string;
    price: number;
    quantity: number;
}

export interface Author {
    id: number;
    name: string;
    slug: string;
    biography?: string;
    image?: string;
}

export interface Category {
    id: number;
    name: string;
    slug: string;
    image?: string;
}

export enum PaymentMethod {
    CASH = 'CASH',
    BANK_TRANSFER = 'BANK_TRANSFER',
    ONLINE_PAYMENT = 'ONLINE_PAYMENT',
    CASH_ON_DELIVERY = 'CASH_ON_DELIVERY',
}

export enum OrderStatus {
    PENDING = 'PENDING',
    PENDING_PAYMENT = 'PENDING_PAYMENT',
    PROCESSING = 'PROCESSING',
    SHIPPED = 'SHIPPED',
    ON_HOLD = 'ON_HOLD',
    COMPLETED = 'COMPLETED',
    CANCELLED = 'CANCELLED',
    RETURNED = 'RETURNED',
    REFUNDED = 'REFUNDED',
}
