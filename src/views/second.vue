<template>
  <div class="second page">
    <div class="resizable">
      Resize from any edge or corner
    </div>
  </div>
</template>

<script>
import interact from 'interactjs'
export default {
  name: 'second',
  data () {
    return {}
  },
  computed: {},
  methods: {
    dragSize () {
      interact('.resizable')
        .draggable({
          onmove: function (event) {
            const target = event.target
            const dataX = target.getAttribute('data-x')
            const dataY = target.getAttribute('data-y')
            const initialX = parseFloat(dataX) || 0
            const initialY = parseFloat(dataY) || 0
            const deltaX = event.dx
            const deltaY = event.dy
            const newX = initialX + deltaX
            const newY = initialY + deltaY
            target.style.transform = `translate(${newX}px, ${newY}px)`
            target.setAttribute('data-x', newX)
            target.setAttribute('data-y', newY)
          },
          modifiers: [
            interact.modifiers.restrictRect({
              restriction: 'parent',
              endOnly: true
            })
          ]
        })
      interact('.resizable')
        .resizable({
          // resize from all edges and corners
          edges: { left: true, right: true, bottom: true, top: true },

          listeners: {
            move (event) {
              var target = event.target
              var x = (parseFloat(target.getAttribute('data-x')) || 0)
              var y = (parseFloat(target.getAttribute('data-y')) || 0)

              // update the element's style
              target.style.width = event.rect.width + 'px'
              target.style.height = event.rect.height + 'px'

              // translate when resizing from top or left edges
              x += event.deltaRect.left
              y += event.deltaRect.top
              target.style.webkitTransform = target.style.transform =
                'translate(' + x + 'px,' + y + 'px)'

              target.setAttribute('data-x', x)
              target.setAttribute('data-y', y)
              target.textContent = Math.round(event.rect.width) + '\u00D7' + Math.round(event.rect.height)
            }
          },
          modifiers: [
            // keep the edges inside the parent
            interact.modifiers.restrictEdges({
              outer: 'parent'
            }),
            // minimum size
            interact.modifiers.restrictSize({
              min: { width: 100, height: 50 }
            })
          ],
          inertia: true
        })
    }
  },
  created () {
    this.dragSize()
  },
  components: {}
}
</script>
<style lang='scss' scoped>
.second {
  background-color: #ccc;
  .resizable {
    background-color: #29e;
    color: white;
    font-size: 20px;
    font-family: sans-serif;
    border-radius: 8px;
    padding: 20px;
    touch-action: none;
    width: 120px;
    /* This makes things *much* easier */
    box-sizing: border-box;
  }
}
</style>
