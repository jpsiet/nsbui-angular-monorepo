import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TeacherService {
  constructor(private http: HttpClient) {}

  getTeachersByStream(stream: string): Observable<unknown[]> {
    const mockData: { [key: string]: unknown[] } = {
      Science: [
        { name: 'Albert Einstein' },
        { name: 'Marie Curie' },
        { name: 'Isaac Newton' },
        { name: 'Richard Feynman' },
        { name: 'Rosalind Franklin' }
      ],
      Arts: [
        { name: 'Leonardo da Vinci' },
        { name: 'Vincent van Gogh' },
        { name: 'Frida Kahlo' },
        { name: 'Pablo Picasso' },
        { name: 'Claude Monet' }
      ],
      Commerce: [
        { name: 'Warren Buffett' },
        { name: 'Indra Nooyi' },
        { name: 'Ratan Tata' },
        { name: 'Elon Musk' },
        { name: 'Mukesh Ambani' }
      ]
    };
    return of(mockData[stream] || []);
  }
}
