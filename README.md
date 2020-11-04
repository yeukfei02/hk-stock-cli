# hk-stock-cli

Get hk stock information cli

```ts
// pick 1 to import
$ deno install --allow-net -f --name hkStock https://deno.land/x/hk_stock_cli/main.ts
$ deno install --allow-net -f --name hkStock https://x.nest.land/hk-stock-cli/main.ts
```

```
hkStock
Get hk stock information cli

Usage
    hkStock [options]

Options
    --help, -h, help                                                                    Show help
    --version, -v, version                                                              Show version
    --current, -c, current <code> <startDate> <endDate>                                 Get hk stock infomation / get hk stock infomation with startDate and endDate
    --index-future, -if, index-future <indexCode> <month> <year> <startDate> <endDate>  Get hk index future infomation / get hk index future infomation with startDate and endDate

Examples
$ hkStock --current 00005
Name:  Hsbc Holdings (00005)
Description:  Stock Prices for Hsbc Holdings from the Hong Kong Stock Exchange. Currency: HKD
┌───────┬──────────────┬──────────────┬───────────┬───────────┬───────┬───────┬────────┬───────┬───────┬───────────────┬──────────────────┬───────────────┬─────────┐
│ (idx) │     Date     │ NominalPrice │ NetChange │ Change(%) │  Bid  │  Ask  │ P/E(x) │ High  │  Low  │ PreviousClose │ ShareVolume(000) │ Turnover(000) │ LotSize │
├───────┼──────────────┼──────────────┼───────────┼───────────┼───────┼───────┼────────┼───────┼───────┼───────────────┼──────────────────┼───────────────┼─────────┤
│   0   │ "2020-05-29" │    35.85     │    ""     │    ""     │ 35.85 │ 35.9  │   ""   │ 36.45 │ 35.85 │      37       │      41063       │    1482787    │   ""    │
│   1   │ "2020-05-28" │      37      │    ""     │    ""     │ 36.95 │  37   │   ""   │ 38.2  │ 36.3  │     37.35     │      56106       │    2085795    │   ""    │

$ hkStock --current 00005 2020-05-01 2020-05-05
Name:  Hsbc Holdings (00005)
Description:  Stock Prices for Hsbc Holdings from the Hong Kong Stock Exchange. Currency: HKD
┌───────┬──────────────┬──────────────┬───────────┬───────────┬──────┬───────┬────────┬──────┬──────┬───────────────┬──────────────────┬───────────────┬─────────┐
│ (idx) │     Date     │ NominalPrice │ NetChange │ Change(%) │ Bid  │  Ask  │ P/E(x) │ High │ Low  │ PreviousClose │ ShareVolume(000) │ Turnover(000) │ LotSize │
├───────┼──────────────┼──────────────┼───────────┼───────────┼──────┼───────┼────────┼──────┼──────┼───────────────┼──────────────────┼───────────────┼─────────┤
│   0   │ "2020-05-05" │      39      │    ""     │    ""     │  39  │ 39.05 │   ""   │ 39.2 │ 38.3 │     38.6      │      24187       │    938710     │   ""    │
│   1   │ "2020-05-04" │     38.6     │    ""     │    ""     │ 38.6 │ 38.65 │   ""   │  39  │ 38.6 │     40.25     │      53885       │    2087785    │   ""    │
└───────┴──────────────┴──────────────┴───────────┴───────────┴──────┴───────┴────────┴──────┴──────┴───────────────┴──────────────────┴───────────────┴─────────┘

$ hkStock --index-future HSI may 2020
Name:  Hang Seng Index Futures, May 2020 (HSIK2020)
Description:  Historical Hong Kong Futures Prices: Hang Seng Index Futures, May 2020 (HSIK2020).
┌───────┬──────────────┬───────┬─────┬─────┬────────────┬───────┬───────┬────────┬─────────────────────────┬───────────┬──────────────────────┐
│ (idx) │     Date     │ Open  │ Bid │ Ask │ LastTraded │ High  │  Low  │ Volume │ Prev.DaySettlementPrice │ NetChange │ Prev.DayOpenInterest │
├───────┼──────────────┼───────┼─────┼─────┼────────────┼───────┼───────┼────────┼─────────────────────────┼───────────┼──────────────────────┤
│   0   │ "2020-05-29" │  ""   │ ""  │ ""  │     ""     │  ""   │  ""   │   ""   │           ""            │    ""     │        14474         │
│   1   │ "2020-05-28" │ 23183 │ ""  │ ""  │     ""     │ 23466 │ 22966 │ 16179  │          23129          │    -76    │        24122         │


$ hkStock --index-future HSI may 2020 2020-05-01 2020-05-05
Name:  Hang Seng Index Futures, May 2020 (HSIK2020)
Description:  Historical Hong Kong Futures Prices: Hang Seng Index Futures, May 2020 (HSIK2020).
┌───────┬──────────────┬───────┬─────┬─────┬────────────┬───────┬───────┬────────┬─────────────────────────┬───────────┬──────────────────────┐
│ (idx) │     Date     │ Open  │ Bid │ Ask │ LastTraded │ High  │  Low  │ Volume │ Prev.DaySettlementPrice │ NetChange │ Prev.DayOpenInterest │
├───────┼──────────────┼───────┼─────┼─────┼────────────┼───────┼───────┼────────┼─────────────────────────┼───────────┼──────────────────────┤
│   0   │ "2020-05-05" │ 23600 │ ""  │ ""  │     ""     │ 23800 │ 23525 │ 77546  │          23759          │    386    │        105008        │
│   1   │ "2020-05-04" │ 23688 │ ""  │ ""  │     ""     │ 23730 │ 23305 │ 117922 │          23373          │   -1129   │        98117         │
└───────┴──────────────┴───────┴─────┴─────┴────────────┴───────┴───────┴────────┴─────────────────────────┴───────────┴──────────────────────┘
```

### indexCode

| INDEX NAME                                   | INDEX CODE |
| -------------------------------------------- | :--------: |
| CES China 120 Index Futures                  |    CHH     |
| Hang Seng Index Futures (Night Session)      |    HSIN    |
| Hang Seng Index Futures                      |    HSI     |
| HSCEI Dividend Futures                       |    DHH     |
| HSI Dividend Futures                         |    DHS     |
| HSI Volatility Index Futures                 |    VHS     |
| Mini-Hang Seng Index Futures (Night Session) |    MHIN    |
| Mini-Hang Seng Index Futures                 |    MHI     |
| US Dollar vs Renminbi (Hong Kong) (USD/CNH)  |    CUS     |

## Requirement:

- install deno

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
