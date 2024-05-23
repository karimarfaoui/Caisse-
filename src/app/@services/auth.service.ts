import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // This ensures that the service is available application-wide
})
export class AuthService {
  isAuthenticated(): boolean {
    const token = localStorage.getItem('user');
    return !!token; // Ensure this logic correctly reflects your auth state
  }
}
