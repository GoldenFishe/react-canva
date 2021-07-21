import {Events} from "./Types";

export function getEventHandlersFromProps<T>(props: T): Events {
    const events: Events = {};
    const eventPrefix = "on";
    for (const propName in props) {
        if (propName.slice(0, 2) === eventPrefix) {
            // @ts-ignore
            events[propName] = props[propName];
        }
    }
    return events;
}