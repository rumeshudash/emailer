import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Returns a merged string of class names using the tailwindcss `tw` function.
 *
 * @param {ClassValue[]} inputs - An array of class names to be merged.
 */
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}
