import {
  getHKStockByCode,
  getHKIndexFutureByIndexCodeAndDate,
} from "../deps.ts";

export async function getCurrent(
  code: string,
  startDate: string,
  endDate: string,
) {
  const response = await getHKStockByCode(code, startDate, endDate);
  const result = await getResult(response);
  return result;
}

export async function getCurrentIndexFuture(
  indexCode: string,
  startDate: string,
  endDate: string,
) {
  const response = await getHKIndexFutureByIndexCodeAndDate(
    indexCode,
    startDate,
    endDate,
  );
  const result = await getResult(response);
  return result;
}

async function getResult(response: any) {
  let result: any = {};
  let resultList: any[] = [];

  if (response && response.dataset) {
    const name = response.dataset.name;
    const description = response.dataset.description;
    const columnNames = response.dataset.column_names;
    const data = response.dataset.data;

    let formattedColumnNames: any[] = [];
    if (columnNames) {
      formattedColumnNames = columnNames.map((item: any, i: number) => {
        if (item) {
          item = item.replace(/\s/g, "");
        }
        return item;
      });
    }

    let formattedData: any[] = [];
    if (data) {
      data.forEach((item: any, i: number) => {
        if (item) {
          let list: any[] = [];
          item.forEach((value: any, i: number) => {
            if (value === null) {
              value = "";
            }
            list.push(value);
          });
          formattedData.push(list);
        }
      });
    }

    if (formattedData) {
      formattedData.forEach((item: any, a: number) => {
        if (item) {
          let obj: any = {};

          item.forEach((value: any, b: number) => {
            const key = formattedColumnNames[b];
            obj[key] = value;

            if (!resultList.includes(obj)) {
              resultList.push(obj);
            }
          });
        }
      });
    }

    result.name = name;
    result.description = description;
    result.resultList = resultList;
  }

  return result;
}
