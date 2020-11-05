interface Todo {
  text: string
  completed: boolean
}

// can use http://json2ts.com/ to generate all of the types
// but not needed for now
interface Images {
  original: Original
}

interface Original {
  url: string
}

interface Gif {
  title: string
  url: string
  images: Images
}

type ToggleTodo = (selectedTodo: Todo) => void

type AddTodo = (text: string) => void
