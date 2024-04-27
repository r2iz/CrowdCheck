const MIN_SECONDS = -62135596800;
const MS_TO_NANOS = 1e6;

export class Timestamp {
  constructor(
    readonly seconds: number,
    readonly nanoseconds: number
  ) {
    if (nanoseconds < 0 || nanoseconds >= 1e9) {
      throw new Error(
        `Timestamp nanoseconds be in the range [0, 1e9), but was: ${nanoseconds}`
      );
    }
    if (seconds < MIN_SECONDS) {
      throw new Error(
        `Timestamp seconds must be at least ${MIN_SECONDS} but was: ${seconds}`
      );
    }
  }

  toMillis(): number {
    return this.seconds * 1000 + this.nanoseconds / MS_TO_NANOS;
  }

  toDate(): Date {
    return new Date(this.toMillis());
  }
}
