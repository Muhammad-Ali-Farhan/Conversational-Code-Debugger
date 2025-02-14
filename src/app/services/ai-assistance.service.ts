import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AiAssistantService {
  constructor() {}

  generateResponse(userInput: string): string {
    if (userInput.includes('error')) {
      return "It looks like you're asking about an error. Can you share the code snippet?";
    }
    return "I'm here to help! Please paste your code.";
  }
}
