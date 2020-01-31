import React, { Component,Fragment } from 'react'
import {
  TodoHeader,
  TodoInput,
  TodoList
} from './components'

export default class App extends Component{
  render(){
    return (
      <Fragment>
        <TodoHeader 
          desc="daydayup"
        >
          待办事项列表
        </TodoHeader>
        <TodoInput btnText="ADD" />
        <TodoList />
      </Fragment>
    )
  }
}