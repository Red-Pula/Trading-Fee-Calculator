# Trading Fee Calculator

Trading platforms often fail to display the actual profit or loss of an open trade after accounting for trading fees. As a result, traders may adjust their stop-loss orders to price levels they believe are breakeven or profitable, only to find they've incurred a loss due to unaccounted fees. This is a common pitfall, especially for beginners. I originally created this simple application just to streamline my trading process, eliminating the need to manually calculate trading fees with a calculator. Now, I am putting this on _Github_ in hopes of helping others in their trading journeys with this humble project.

## The Formula

```
Trading Fee = Total Position Size * Exchange's Rate / 100

where:
Total Position Size = Margin * Leverage
```

At the time of writing, I was trading in the _Standard Futures_ market on _BingX_, where the trading fee is 0.045%. This is the default value in the input field for the trading fee in the calculator. However, users can easily adjust this value by entering a different number in the app.
