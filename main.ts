import { getCurrent, getCurrentIndexFuture } from "./src/lib.ts";

async function hkStock() {
  const argsList = Deno.args;

  if (argsList) {
    const item = argsList[0];

    if (item) {
      if (
        item === "--help" || item === "-h" ||
        item === "help"
      ) {
        const helpText = getHelpText();
        console.log(helpText);
      }

      if (item === "--version" || item === "-v" || item === "version") {
        console.log("v0.1.1");
      }

      if (item === "--current" || item === "-c" || item === "current") {
        const code = argsList[1];
        const startDate = argsList[2];
        const endDate = argsList[3];
        const result = await getCurrent(code, startDate, endDate);
        if (result && result.name && result.description && result.resultList) {
          console.log("Name: ", result.name);
          console.log("Description: ", result.description);
          console.table(result.resultList);
        }
      }

      if (
        item === "--index-future" || item === "-if" || item === "index-future"
      ) {
        const indexCode = argsList[1];
        const month = argsList[2];
        const year = argsList[3];
        const startDate = argsList[4];
        const endDate = argsList[5];
        const result = await getCurrentIndexFuture(
          indexCode,
          month,
          year,
          startDate,
          endDate,
        );
        if (result && result.name && result.description && result.resultList) {
          console.log("Name: ", result.name);
          console.log("Description: ", result.description);
          console.table(result.resultList);
        }
      }
    } else {
      const helpText = getHelpText();
      console.log(helpText);
    }
  }
}

function getHelpText() {
  return `
hkStock
Usage
    $ hkStock --help
    $ hkStock --version
    $ hkStock --current
    $ hkStock --index-future
Options
    --help, -h, help                                                        Show help
    --version, -v, version                                                  Show version
    --current, -c, current [code] [startDate] [endDate]                     Get hk stock infomation / get hk stock infomation with startDate and endDate
    --index-future, -if, index-future [indexCode] [startDate] [endDate]     Get hk index future infomation / get hk index future infomation with startDate and endDate
Examples
$ hkStock --current 00005

$ hkStock --current 00005 2019-05-01 2019-05-10

$ hkStock --index-future HSI jan 2019

$ hkStock --index-future HSI jan 2019 2019-01-01 2019-01-05

    `;
}

hkStock();
