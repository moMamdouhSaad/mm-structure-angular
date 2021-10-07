import { isNull } from '@angular/compiler/src/output/output_ast';
import { QueryParamsHandling } from '@angular/router';

/**
 * In the return we will attach the '?' if the user provides a query params
 * and if the user provides a null we do not need to map the array to
 * anything, we just simply returns ''.
 * if there qp dose has some keys an values
 * e.g
 * const z = {userId: 1, name: 'rowad'} then
 * this method will return ["userId=1", "name=rowad"]
 */
export function correctFormatForQueryUrl(qp: QueryParams): string {
  if (isNull(qp as any)) {
    return '';
  }
  const qpAsStr = mapQueryParamsToUrl(qp);
  return qpAsStr.length === 0 ? '' : `?${qpAsStr.join('&')}`;
}

/**
 * e.g :
 * const z = {userId: 1, name: 'rowad'} then
 * this method will return ["userId=1", "name=rowad"]
 */
export function mapQueryParamsToUrl(qp: QueryParams): Array<string> {
  return Object.keys(qp).map((key: string) => {
    return `${key}=${qp[key]}`;
  });
}
