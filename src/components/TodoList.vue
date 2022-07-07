<template>
  <div class='container'>

    <section class='form-todo'>
      <div class='row'>
        <label for='title'>Title: </label>
        <input type='text' name='title' v-model="todo.title">
      </div>
      <div class='row'>
        <label for='description'>Description: </label>
        <textarea name='description' rows="3" v-model="todo.description"></textarea>
      </div>
      <div>
      </div>
      <div class='flex-row'>
        <button @click="editTodo" v-if="isEditing">&#9998; Edit</button>
        <button @click="addTodo" v-else>+ Add</button>
      </div>
    </section>
    <section class='list-todo'>
      <div v-for='t in todos' :key='t.id'>
        <TodoElement :todo='t' @dblclick="addTodoToSelected(t)" @onselected="setTodoToEdit"/>
      </div>
    </section>
    <section>
      <div class='flex-row'>
        <button @click="completeTodosSelected">&#10003; Complete</button>
        <button @click="removeTodo" class="danger">- Remove</button>
      </div>
    </section>
  </div>
</template>

<script>
import TodoElement from './TodoElement.vue'

export default {
  name: 'App',
  components: {TodoElement},
  data() {
    return {
      todos: [
        {
          title: 'Aprender desde javacript',
          description: 'Por la industria 4.0',
          completed: false
        }, {
          title: 'Aprender desde Html',
          description: 'Por la maestría de Mar',
          completed: false
        }, {
          title: 'Aprender desde VueJS o ReactJS o Angular y te comes el mundo',
          description: 'Por el doctorado de Mar',
          completed: true
        },

      ],
      todosSelected: [],
      todo: {
        title: '',
        description: '',
        completed: false
      },
      isEditing: false
    }
  },
  methods: {
    addTodo(e) {
      this.todos.push(this.todo)
      this.cleanTodo()
      e.preventDefault()
    },
    removeTodo(e) {
      this.todos = this.todos.filter((t) => !this.todosSelected.includes(t))
      this.todosSelected = []
      e.preventDefault()
    },
    addTodoToSelected(t) {
      let index = this.todosSelected.indexOf(t)
      console.log('Index: ' + index)
      if (index > -1) {
        console.log('Removiendo todo')
        this.todosSelected.splice(index, 1)
      } else {
        console.log('Agregando todo')
        this.todosSelected.push(t)
      }
      console.log(this.todosSelected)
    },
    completeTodosSelected() {
      this.todosSelected.forEach((todo) => {
        if (!todo.completed) {
          todo.completed = true;
          this.todosSelected = []
        }
        todo.selected = false;
      })
    },
    setTodoToEdit(todoToEdit) {
      this.todoToEdit = todoToEdit
      this.todo = {...todoToEdit}
      this.isEditing = true
    },
    editTodo() {
      let indexTodo = this.todos.indexOf(this.todoToEdit)
      console.log(indexTodo)
      if (indexTodo > -1) {
        this.todos[indexTodo] = this.todo
      }
      this.isEditing = false
      this.cleanTodo()
    },
    cleanTodo() {
      this.todo = {title: '', description: '', completed: false}
    }
  }
}
</script>

<style scoped>
.container {
  margin: auto;
  width: 70%;
  box-shadow: 0px 0px 5px 1px rgba(206, 212, 218, 0.5);
  padding: 1.5rem 1rem;
}

.container section {
  margin-top: 1rem;
}

.container section:nth-child(n+1) {
  margin-top: 1.5rem;
}

.row {
  display: flex;
  flex-direction: column;
  margin-top: 1rem
}

.flex-row {
  display: flex;
  flex-direction: row-reverse;
  margin-top: 1rem
}

.form-todo {
  padding: 0 2.8rem;

}

.form-todo .row label {
  text-align: left;
}

input, textarea {
  width: 100%;
  border: 1px solid #ced4da;
  border-radius: .25rem;
  padding: .575rem .75rem
}

button {
  margin-left: 0.5rem;
  padding: .375rem 2rem;
  color: white;
  font-size: 1.1rem;
  background-color: rgb(0, 194, 150);
  font-weight: 550;
  border: 1px solid transparent;
  border-radius: 0.25rem;
}

button:hover {
  background-color: rgb(3, 165, 128);
}

button.danger {
  background-color: rgb(225, 35, 35);
}
</style>