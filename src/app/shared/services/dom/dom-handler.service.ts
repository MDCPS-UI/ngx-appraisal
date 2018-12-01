import { Injectable } from '@angular/core';

// access the native window object
declare const window: any;

/**
 * @author: Sai Nagulapally
 */
@Injectable()
export class DomHandler {
    /**
     * @public
     * @return: string
     * @description: a helper function that returns the user agent of
     * the current browser.
     */
    public getUserAgent(): string {
        return window.navigator.userAgent;
    }

    /**
     * @public
     * @return: boolean
     * @description: true -> if the current browser is an IE browser.
     * for masking.
     */
    public isIE(): boolean {
        const ua = this.getUserAgent();

        const msie = ua.indexOf('MSIE ');
        if (msie > 0) {
            // IE 10 or older => return version number
            return true;
        }

        const trident = ua.indexOf('Trident/');
        if (trident > 0) {
            // IE 11 => return version number
            let rv = ua.indexOf('rv:');
            return true;
        }

        const edge = ua.indexOf('Edge/');
        if (edge > 0) {
            // Edge (IE 12+) => return version number
            return true;
        }
        // other browser
        return false;
    }

    /**
     * @public
     * @return: any
     * @description: resolves user agent, returns the browser and browser version.
     */
    public resolveUserAgent(): any {
        const ua = navigator.userAgent.toLowerCase();
        const match = /(chrome)[ \/]([\w.]+)/.exec(ua)
            || /(webkit)[ \/]([\w.]+)/.exec(ua)
            || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(ua)
            || /(msie) ([\w.]+)/.exec(ua)
            || ua.indexOf('compatible') < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua)
            || [];

        return {
            browser: match[1] || '',
            version: match[2] || '0'
        };
    }

    /**
     * @public
     * @return: boolean
     * @description: true -> if the current browser is a chrome browser.
     */
    public isChrome(): boolean {
        return !!window.chrome;
    }

    /**
     * @public
     * @return: boolean
     * @description: true -> if the current device is android.
     */
    public isAndroid(): boolean {
        const ua: string = this.getUserAgent().toLowerCase();
        return ua.indexOf('android') > -1;
    }
}
