declare module 'str-utils' {
    // export const ...
    // export function ...
    type exportFuncion = (value: string) => string;

  export const strReverse: exportFuncion;
  export const strToLower: exportFuncion;
  export const strToUpper: exportFuncion;
  export const strRandomize: exportFuncion;
  export const strInvertCase: exportFuncion;
}
