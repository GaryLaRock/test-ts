import {plural} from 'pluralize';

export function getMessage(str: any) : string {
    return 'hello ' + str;
}

export function getPlural(str: any) : string {
    return plural(str);
}
