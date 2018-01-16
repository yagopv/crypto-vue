<template>
  <div class="treemap"></div>
</template>


<script>
import * as d3 from 'd3';
export default {
  props: ['tickers'],
  mounted: function() {
    console.log(d3);
    const color = d3.scaleOrdinal().range(d3.schemeCategory20c);

    const treemap = d3.treemap().size([100, 100]);

    const div = d3.select('.treemap');

    const root = d3.hierarchy(this.tickers, d => d.children).sum(d => d.mcap);

    const tree = treemap(root);

    const node = div
      .datum(root)
      .selectAll('.node')
      .data(tree.leaves())
      .enter()
      .append('div')
      .attr('class', 'node')
      .style('left', d => d.x0 + '%')
      .style('top', d => d.y0 + '%')
      .style('width', d => Math.max(0, d.x1 - d.x0 - 1) + '%')
      .style('height', d => Math.max(0, d.y1 - d.y0 - 1) + '%')
      .style('background', d => color(d.parent.data.name))
      .text(d => d.data.name);

    d3.selectAll('input').on('change', function change() {
      const value =
        this.value === 'count'
          ? d => {
              return d.size ? 1 : 0;
            }
          : d => {
              return d.size;
            };

      const newRoot = d3.hierarchy(this.tickers, d => d.children).sum(value);

      node
        .data(treemap(newRoot).leaves())
        .transition()
        .duration(1500)
        .style('left', d => d.x0 + '')
        .style('top', d => d.y0 + '%')
        .style('width', d => Math.max(0, d.x1 - d.x0 - 1) + '%')
        .style('height', d => Math.max(0, d.y1 - d.y0 - 1) + '%');
    });
  }
};
</script>

<style lang="scss">
.treemap {
  min-height: 600px;
  position: relative;
  .node {
    font-size: 200%;
    line-height: 150%;
    overflow: hidden;
    position: absolute;
    text-indent: 1%;
    transition: background 1s;
    transition: color 0.5s;

    &:hover {
      background: grey !important;
      color: white;
    }
  }
}
</style>
