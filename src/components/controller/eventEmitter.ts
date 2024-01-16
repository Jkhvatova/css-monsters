interface Data {
  name: string;
}
interface Events {
  [key: string]: { (data: Data): void }[];
}

type Callback = (data: Data) => void;
export class EventEmitter {
  readonly events: Events;
  constructor(events?: Events) {
    this.events = events || {};
  }
  public on(name: string, callback: Callback) {
    (this.events[name] || (this.events[name] = [])).push(callback);
  }
  public emit(name: string, params: Data): void {
    (this.events[name] || []).forEach((fn) => fn(params));
  }
}
