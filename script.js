/* 
A simple calculator app for computing trading fees.
Copyright (C) 2024 Rafael Red Angelo M. Hizon

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program. If not, see <http://www.gnu.org/licenses/>.
*/

var script = document.createElement("script");
script.src =
  "https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js";
document.getElementById("mainForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Obtain values from the input fields.
  const margin = parseFloat(document.getElementById("marginField").value);
  const leverage = parseFloat(document.getElementById("leverageField").value);
  const rate = parseFloat(document.getElementById("rateField").value) / 100; // trading fee (%)

  // Calculate total fee by computing the total position size first.
  // Mutiply the rate of the exchange to your total position size to get the trading fee.
  const totalPositionSize = margin * leverage;
  const tradingFee = totalPositionSize * rate;

  // Display results
  const resultElement = document.getElementById("result");
  resultElement.innerHTML = `
        Fee = $${tradingFee.toFixed(4)}<br>
    `;
});
