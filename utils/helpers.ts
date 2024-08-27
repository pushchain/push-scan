// External Library imports
import { format, formatDistanceToNow } from 'date-fns';
import { replace } from 'lodash';
import numeral from 'numeral';
import { Signer } from '../types/block'

export function fDate(date) {
  return format(new Date(date), 'dd MMMM yyyy');
}

export function fDateTime(date) {
  return format(new Date(date), 'dd MMM yyyy HH:mm');
}

export function fDateTimeSuffix(date) {
  return format(new Date(date), 'dd/MM/yyyy hh:mm p');
}

export function fToNow(date) {
  return formatDistanceToNow(new Date(date), {
    addSuffix: true,
  });
}

export function fCurrency(number) {
  return numeral(number).format(Number.isInteger(number) ? '$0,0' : '$0,0.00');
}

export function fPercent(number) {
  return numeral(number / 100).format('0.0%');
}

export function fNumber(number) {
  return numeral(number).format();
}

export function fShortenNumber(number) {
  return replace(numeral(number).format('0.00a'), '.00', '');
}

export function fData(number) {
  return numeral(number).format('0.0 b');
}

export default function getDatesArray({
  start,
  end,
  interval,
}: {
  start: Date | string;
  end: Date | string;
  interval: number;
}) {
  for (
    var dateArray: Date[] = [], dt = new Date(start);
    dt <= new Date(end);
    dt.setDate(dt.getDate() + interval)
  ) {
    dateArray.push(new Date(dt));
  }

  const date = dateArray[dateArray.length - 1];
  if (new Date(date).getDate() !== new Date(end).getDate()) {
    dateArray.push(new Date(end));
  }

  return dateArray;
}

export function isErrorWithMessage(error: unknown): error is { message: string } {
  return typeof error === 'object' && error !== null && 'message' in error;
}

export function getValidatorNode(signers: Signer[] | undefined) {
  const signer = signers?.find(signer => signer.role === 1);
  return signer?.node
}

export function centerMaskString(str) {
  // Check if the string length is more than 2 to mask characters
  if (str.length > 14) {
    const start = str.substring(0, 10);
    const end = str.substring(str.length - 7);
    return start + '...' + end;
  }
  // If the string is too short, return it as is
  return str;
}

export function rightMaskString(str) {
  // Check if the string length is more than 15 to mask the remaining characters
  if (str.length > 15) {
      const visiblePart = str.substring(0, 15);
      const maskedPart = '...';
      return visiblePart + maskedPart;
  }
  // If the string is too short to mask after 15 characters, return it as is
  return str;
}

export function capitalizeStr(string) {
  if (!string) return '';
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}