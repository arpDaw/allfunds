import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { New } from '@core/models';

@Injectable({
    providedIn: 'root',
})
export class NewsService {
    newsApiUrl = 'http://localhost:9909';

    constructor(private http: HttpClient) {}

    getNews(): Observable<New[]> {
        return this.http.get<New[]>(`${this.newsApiUrl}/news`);
    }

    archiveNew(newToArchive: New) {
        newToArchive.archivedDate = new Date().toDateString();
        const id = newToArchive._id;
        delete newToArchive._id;
        return this.http
            .put(`${this.newsApiUrl}/news/${id}`, newToArchive)
            .subscribe({});
    }

    deleteNew(newToDeleteId: string | undefined) {
        return this.http
            .delete(`${this.newsApiUrl}/news/${newToDeleteId}`)
            .subscribe({});
    }
}
