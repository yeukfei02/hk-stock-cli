# hk-stock-cli

get hk stock information cli

```
$ deno install --allow-net -f --name hkStock https://deno.land/x/hk_stock_cli/main.ts
```

```
hkStock

Usage
    $ hkStock --help
    $ hkStock --version
    $ hkStock --current
    $ hkStock --index-future

Options
    --help, -h, help                                                                        Show help
    --version, -v, version                                                                  Show version
    --current, -c, current [code] [startDate] [endDate]                                     Get hk stock infomation / get hk stock infomation with startDate and endDate
    --index-future, -if, index-future [indexCode] [month] [year] [startDate] [endDate]      Get hk index future infomation / get hk index future infomation with startDate and endDate

Examples
$ hkStock --current 00005
Name:  Hsbc Holdings (00005)
Description:  Stock Prices for Hsbc Holdings from the Hong Kong Stock Exchange. Currency: HKD
┌───────┬──────────────┬──────────────┬───────────┬───────────┬───────┬───────┬────────┬───────┬───────┬───────────────┬──────────────────┬───────────────┬─────────┐
│ (idx) │     Date     │ NominalPrice │ NetChange │ Change(%) │  Bid  │  Ask  │ P/E(x) │ High  │  Low  │ PreviousClose │ ShareVolume(000) │ Turnover(000) │ LotSize │
├───────┼──────────────┼──────────────┼───────────┼───────────┼───────┼───────┼────────┼───────┼───────┼───────────────┼──────────────────┼───────────────┼─────────┤
│   0   │ "2020-05-29" │    35.85     │    ""     │    ""     │ 35.85 │ 35.9  │   ""   │ 36.45 │ 35.85 │      37       │      41063       │    1482787    │   ""    │
│   1   │ "2020-05-28" │      37      │    ""     │    ""     │ 36.95 │  37   │   ""   │ 38.2  │ 36.3  │     37.35     │      56106       │    2085795    │   ""    │
│   2   │ "2020-05-27" │    37.35     │    ""     │    ""     │ 37.3  │ 37.35 │   ""   │ 37.5  │ 36.3  │     36.9      │      42822       │    1588013    │   ""    │

$ hkStock --current 00005 2019-05-01 2019-05-10
Name:  Hsbc Holdings (00005)
Description:  Stock Prices for Hsbc Holdings from the Hong Kong Stock Exchange. Currency: HKD
┌───────┬──────────────┬──────────────┬───────────┬───────────┬───────┬───────┬────────┬───────┬───────┬───────────────┬──────────────────┬───────────────┬─────────┐
│ (idx) │     Date     │ NominalPrice │ NetChange │ Change(%) │  Bid  │  Ask  │ P/E(x) │ High  │  Low  │ PreviousClose │ ShareVolume(000) │ Turnover(000) │ LotSize │
├───────┼──────────────┼──────────────┼───────────┼───────────┼───────┼───────┼────────┼───────┼───────┼───────────────┼──────────────────┼───────────────┼─────────┤
│   0   │ "2019-05-15" │     66.7     │    ""     │    ""     │ 66.65 │ 66.7  │   ""   │ 66.85 │ 66.3  │     66.3      │      16609       │    1106987    │   ""    │
│   1   │ "2019-05-14" │     66.3     │    ""     │    ""     │ 66.25 │ 66.3  │   ""   │ 66.65 │ 65.9  │     66.9      │      21149       │    1402910    │   ""    │
│   2   │ "2019-05-10" │     66.9     │    ""     │    ""     │ 66.9  │  67   │   ""   │ 67.45 │ 66.1  │     66.45     │      20761       │    1390392    │   ""    │

$ hkStock --index-future HSI jan 2019
Name:  Hang Seng Index Futures, May 2020 (HSIK2020)
Description:  Historical Hong Kong Futures Prices: Hang Seng Index Futures, May 2020 (HSIK2020).
┌───────┬──────────────┬───────┬─────┬─────┬────────────┬───────┬───────┬────────┬─────────────────────────┬───────────┬──────────────────────┐
│ (idx) │     Date     │ Open  │ Bid │ Ask │ LastTraded │ High  │  Low  │ Volume │ Prev.DaySettlementPrice │ NetChange │ Prev.DayOpenInterest │
├───────┼──────────────┼───────┼─────┼─────┼────────────┼───────┼───────┼────────┼─────────────────────────┼───────────┼──────────────────────┤
│   0   │ "2020-05-29" │  ""   │ ""  │ ""  │     ""     │  ""   │  ""   │   ""   │           ""            │    ""     │        14474         │
│   1   │ "2020-05-28" │ 23183 │ ""  │ ""  │     ""     │ 23466 │ 22966 │ 16179  │          23129          │    -76    │        24122         │
│   2   │ "2020-05-27" │ 23387 │ ""  │ ""  │     ""     │ 23509 │ 23103 │ 125391 │          23205          │   -150    │        54583         │

$ hkStock --index-future HSI jan 2019 2019-01-01 2019-01-05
Name:  Hang Seng Index Futures, May 2020 (HSIK2020)
Description:  Historical Hong Kong Futures Prices: Hang Seng Index Futures, May 2020 (HSIK2020).
┌───────┬──────────────┬───────┬─────┬─────┬────────────┬───────┬───────┬────────┬─────────────────────────┬───────────┬──────────────────────┐
│ (idx) │     Date     │ Open  │ Bid │ Ask │ LastTraded │ High  │  Low  │ Volume │ Prev.DaySettlementPrice │ NetChange │ Prev.DayOpenInterest │
├───────┼──────────────┼───────┼─────┼─────┼────────────┼───────┼───────┼────────┼─────────────────────────┼───────────┼──────────────────────┤
│   0   │ "2020-05-29" │  ""   │ ""  │ ""  │     ""     │  ""   │  ""   │   ""   │           ""            │    ""     │        14474         │
│   1   │ "2020-05-28" │ 23183 │ ""  │ ""  │     ""     │ 23466 │ 22966 │ 16179  │          23129          │    -76    │        24122         │
│   2   │ "2020-05-27" │ 23387 │ ""  │ ""  │     ""     │ 23509 │ 23103 │ 125391 │          23205          │   -150    │        54583         │
```

## Requirement:
 - install deno (1.0.2)

## Testing and run:
```
// install deps
$ deno cache main.ts

// run in local
$ deno run --allow-net main.ts --help

// allow all permission
$ deno run -A main.ts --help

// run test case
$ deno test --allow-net

// format code
$ deno fmt

// build cli
$ deno install --allow-net -f --name hkStock main.ts
```

## Related

[hk-stock-api](https://github.com/yeukfei02/hk-stock-api)