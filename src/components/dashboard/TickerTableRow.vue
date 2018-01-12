<template>
  <tr>
    <th scope="row">{{ ticker.rank }}</th>
    <td>{{ ticker.name }}</td>
    <td>{{ ticker.symbol }}</td>
    <td>{{ ticker.price_usd }}</td>
    <td>{{ ticker.market_cap_usd | billionize }}</td>
    <td>{{ ticker.available_supply | billionize }}</td>
    <td>{{ ticker.total_supply | billionize }}</td>
    <td>{{ ticker.percent_change_1h }}</td>
    <td>{{ ticker.percent_change_24h }}</td>
    <td>{{ ticker.percent_change_7d }}</td>
  </tr>
</template>

<script>
export default {
  name: 'TickerTableRow',
  props: ['ticker'],
  filters: {
    billionize: value => {
      let newValue = value;
      value = parseInt(value);
      if (value >= 1000) {
        let suffixes = ['', 'k', 'm', 'b', 't'];
        let suffixNum = Math.floor(('' + value).length / 3);
        let shortValue = '';
        for (var precision = 2; precision >= 1; precision--) {
          shortValue = parseFloat(
            (suffixNum !== 0
              ? value / Math.pow(1000, suffixNum)
              : value
            ).toPrecision(precision)
          );
          let dotLessShortValue = (shortValue + '').replace(
            /[^a-zA-Z 0-9]+/g,
            ''
          );
          if (dotLessShortValue.length <= 2) {
            break;
          }
        }
        if (shortValue % 1 !== 0) shortValue = shortValue.toFixed(1);
        newValue = shortValue + suffixes[suffixNum];
      }
      return newValue;
    }
  }
};
</script>
