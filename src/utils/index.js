// @flow
export function removeUndefined(obj: any): any {
  Object.keys(obj).forEach((key) => obj[key] === undefined && delete obj[key]);
  return obj;
}

export function definedNonEmptyString(str?: string): boolean {
  return typeof str !== "undefined" && str !== "";
}
