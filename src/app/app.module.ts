import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';  
import { FormsModule } from '@angular/forms';    
import { AppComponent } from './app.component';
import { CodeEditorComponent } from './components/code-editor/code-editor.component';
import { ChatWindowComponent } from './components/chat-window/chat-window.component';
import { MonacoEditorModule } from 'ngx-monaco-editor'; 

@NgModule({
  declarations: [
    AppComponent,
    CodeEditorComponent,
    ChatWindowComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,           
    FormsModule,            
    MonacoEditorModule   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
