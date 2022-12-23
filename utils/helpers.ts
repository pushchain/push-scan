// External Library imports
import { format, formatDistanceToNow } from 'date-fns';
import { replace } from 'lodash';
import numeral from 'numeral';

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
  start: string;
  end: string;
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
