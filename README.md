# Trading Fee Calculator

Trading platforms often fail to display the actual profit or loss of an open trade after accounting for the trading fee. As a result, traders may adjust their stop-loss orders to price levels they believe are breakeven or profitable, only to find they've incurred a loss due to unaccounted fees. While most exchanges show the computed trading fee on their UI, some traders still overlook them. This is a common pitfall, especially for beginners. Additionally, some exchanges might not show the trading fee until the trade is opened. 

To address this issue, I created a simple application that calculates estimated trading fees ahead of time, streamlining the trading process and eliminating the need for manual calculations. Now, I am putting this project on GitHub in hopes of helping others in their trading journeys.

## The Formula

```
Trading Fee = Total Position Size * Exchange's Rate / 100

where:
Total Position Size = Margin * Leverage
```

At the time of writing, I was trading in the _Standard Futures_ market on _BingX_, where the trading fee is 0.045%. This is the default value in the input field for the trading fee in the calculator. However, users can easily adjust this value by entering a different number in the app.
