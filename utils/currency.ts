/**
 * Format a number as currency
 * @param amount The amount to format
 * @param options Formatting options
 * @returns Formatted currency string
 */
export const formatCurrency = (
    amount: number | null | undefined,
    options: {
        currency?: string;
        locale?: string;
        minimumFractionDigits?: number;
        maximumFractionDigits?: number;
    } = {},
): string => {
    const {
        currency = 'NPR',
        locale = 'en-IN',
        minimumFractionDigits = 0,
        maximumFractionDigits = 2,
    } = options;

    // For other currencies, use the default Intl formatter with currency style
    return new Intl.NumberFormat(locale, {
        style: 'currency',
        currency,
        currencyDisplay: 'narrowSymbol',
        minimumFractionDigits,
        maximumFractionDigits,
    }).format(amount ?? 0);
};
