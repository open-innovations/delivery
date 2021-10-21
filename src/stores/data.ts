import { writable } from 'svelte/store';

function parseCsv(data: string): string[][] {
  return data
    .split('\n')
    .filter(x => Boolean(x))
    .map(x => x.split(','))
}

const getParser = (key: string) => {
  const identity = (field: string) => field;
  const parseDate = (date: string) => new Date(date)
  const parseNumber = (number: string) => parseFloat(number);
  const parsers = {
    due_by: parseDate,
    value: parseNumber,
  };
  return key in parsers ? parsers[key] : identity;
}

function csvToJson(data: string[][]): any[] {
  const [header, ...rows] = data;
  return rows
    .map(row => header.reduce(
      (acc, key, idx) => ({
        ...acc,
        [key]: getParser(key)(row[idx]),
      }),
      {}
    ))
}

async function getData() {
  const res = await fetch('data/projects.csv');
  const text = await res.text();
  return csvToJson(parseCsv(text));
}

function createDataStore() {
  const { subscribe, set } = writable([]);

  const refresh = async () => set(await getData());
  refresh();

  return {
    subscribe,
    refresh,
  };
}

export const projects = createDataStore();