/**
 * @interface
 * @author: Shoukath Mohammed
 */
export interface AjaxRequest {
    body?: any;
    id?: string;
    url?: string;
    headers?: any;
    method?: string;
    options?: any;
}