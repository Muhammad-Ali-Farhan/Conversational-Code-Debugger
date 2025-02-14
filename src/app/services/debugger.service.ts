import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DebuggerService {
  constructor() {}

  analyzeCode(code: string): string {
    if (code.includes('console.log')) {
      return "Consider removing console logs in production code.";
    }
    if (!code.includes(';')) {
      return "You might be missing semicolons.";
    }
    return "No obvious issues detected.";
  }
}
