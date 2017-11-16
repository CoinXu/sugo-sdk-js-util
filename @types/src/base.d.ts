import { UniversalityFunction, UniversalityObject, UniversalityConstructor, InheritConstructor, Throttled } from './interfaces';
declare const _: {
    trim: (str: string) => string;
    noop: (...args: any[]) => void;
    tryCatch: (fn: UniversalityFunction) => UniversalityFunction;
    identity: <T>(value: T) => T;
    bind: (func: UniversalityFunction, context: any) => UniversalityFunction;
    bind_instance_methods: (obj: {
        [key: string]: UniversalityFunction;
    }) => void;
    has: (obj: UniversalityObject, key: string) => boolean;
    escapeHTML: (s: string) => string;
    formatDate: (d: Date) => string;
    encodeDates: (obj: any) => any;
    extend: (obj: UniversalityObject, ...sources: UniversalityObject[]) => UniversalityObject;
    include: (obj: any, target: any) => any;
    includes: (str: string, needle: string) => boolean;
    each: (obj: any, iterator: UniversalityFunction, context?: any) => void;
    toArray: (iterable: any) => any[];
    values: (obj: any) => any[];
    inherit: (subclass: InheritConstructor, superclass: InheritConstructor) => InheritConstructor;
    safewrap: (f: UniversalityFunction) => UniversalityFunction;
    safewrap_class: (klass: UniversalityConstructor, functions: string[]) => void;
    safewrap_instance_methods: (obj: UniversalityObject) => void;
    strip_empty_properties: (p: any) => UniversalityObject;
    truncate: (obj: any, length: number) => any;
    PlainEncode: (mixed_val: string, _dimensions: any[], serverDimensions: any[], ConfigDimensions: any[]) => string;
    isBlockedUA: (ua: string) => boolean;
    HTTPBuildQuery: (formdata: any, arg_separator?: string) => string;
    getQueryParam: (url: string, param: string) => string;
    getHashParam: (hash: string, param: string) => string;
    timestamp: () => number;
    throttle: (fn: UniversalityFunction, wait?: number) => Throttled;
    filter: (arr: any[], iterator: UniversalityFunction) => any[];
    indexOf: (arr: any[], fount: any) => number;
    keys: (object: UniversalityObject) => string[];
    pick: (object: UniversalityObject, keyOrKeys: string | string[]) => UniversalityObject;
    omit: (object: UniversalityObject, keyOrKeys: string | string[]) => UniversalityObject;
    uniq: (arr: any[]) => any[];
    clone: (obj: UniversalityObject) => any;
    map: (arr: any[], iterator: UniversalityFunction) => any[];
    find: (arr: any[], iterator: UniversalityFunction) => any;
    similar: (path: string) => string;
    is_nth_child_selector: (selector: string) => boolean;
};
export default _;
