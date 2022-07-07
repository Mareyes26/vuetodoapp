<template>
  <div class='todo-element' :class="{ completed: todoElement.completed, selected: todoElement.selected}" @dblclick="toggleSelect">
    <div class='completed-icon' @click="toggleCompleted">
      <p v-if='todo.completed'>
        <font-awesome-icon icon="fa-solid fa-circle-check" />
      </p>
      <p v-else>
        <font-awesome-icon icon="fa-regular fa-circle-check"/>
      </p>
    </div>
    <div class='title'>
      <p>{{ todo.title }}</p>
    </div>
    <div class='button'>
      <p><button @click="sendToEdit">Editar</button></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TodoElement',
  props: {
    todo: Object
  },
  emits: ['onselected'],
  data() {
    return {
      todoElement: this.todo
    }
  },
  methods: {
    toggleSelect(e) {
      this.todoElement.selected = !this.todoElement.selected;
      e.preventDefault()
    },
    toggleCompleted() {
      this.todoElement.completed = !this.todoElement.completed
    },
    sendToEdit() {
      this.$emit('onselected', this.todo)
    }
  }
}
</script>

<style scoped>
.todo-element {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
  border-top: 1px solid rgba(120, 120, 120, 0.2);
  cursor: default;
}

.todo-element:nth-child(n+1) {
  border-bottom: 1px solid rgba(120, 120, 120, 0.2);
  margin-top: -1px;
}

.completed {
  color: #BBC5CF;
}

.completed-icon {
  flex: 0 0 10%;
  padding-left: 1rem;
}

.title {
  flex: 0 0 80%;
  text-align: left;
}

.button {
  flex: 0 0 10%;
}

.selected {
  background: #91CCA1FF;
  color: #fff;
}
</style>
