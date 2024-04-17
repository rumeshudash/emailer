import { isObject } from "./is-object";

/**
 * Merges the properties of two objects deeply.
 *
 * @template TTarget - The type of the target object.
 * @param {TTarget} target - The target object to merge.
 * @param {any} source - The source object to merge.
 * @return {TTarget} - The merged object.
 */
export function deepMerge<TTarget extends object>(
    target: TTarget,
    source: any
): TTarget {
    const result: Record<string, any> = { ...target };
    const _source: Record<string, any> = source;

    if (isObject(target) && isObject(source)) {
        Object.keys(source).forEach((key) => {
            if (isObject(_source[key])) {
                if (!(key in target)) {
                    result[key] = _source[key];
                } else {
                    result[key] = deepMerge(result[key], _source[key]);
                }
            } else {
                result[key] = _source[key];
            }
        });
    }

    return result as TTarget;
}
