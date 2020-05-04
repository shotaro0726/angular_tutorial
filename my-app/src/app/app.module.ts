import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './componets/todos/todos.component';
import { TodoItemComponent } from './componets/todo-item/todo-item.component';
import { HeaderComponent } from './componets/layout/header/header.component';
import { AddTodoComponent } from './componets/add-todo/add-todo.component';
import { AboutComponent } from './componets/pages/about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    AddTodoComponent,
    HeaderComponent,
    AboutComponent,
    TodoItemComponent,
    TodosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
