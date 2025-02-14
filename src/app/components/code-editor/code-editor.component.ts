import { Component } from '@angular/core';

@Component({
  selector: 'app-code-editor',
  templateUrl: './code-editor.component.html',
  styleUrls: ['./code-editor.component.css']
})
export class CodeEditorComponent {
  code: string = '';
  language: string = 'typescript';

  onCodeChange(value: string) {
    this.code = value;
  }
}
