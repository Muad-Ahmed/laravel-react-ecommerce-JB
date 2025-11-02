import { Config, Router } from 'ziggy-js';

type RouteValue =
    | string
    | number
    | boolean
    | null
    | undefined
    | Date
    | RouteValue[]
    | { [key: string]: RouteValue };
type RouteParams = Record<string, RouteValue> | Array<RouteValue>;

declare global {
    /**
     * The global route function provided by the Ziggy package.
     * Use this function to generate URLs from named Laravel routes.
     *
     * @param name The name of the route.
     * @param params Parameters to pass to the route.
     * @param absolute Whether the URL should be absolute (defaults to true).
     * @param config Ziggy configuration object.
     */
    const route: (
        name: string,
        params?: RouteParams,
        absolute?: boolean,
        config?: Config,
    ) => Router;
}
