import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { New } from '@core/models';

@Injectable({
    providedIn: 'root',
})
export class NewsService {
    newsApiUrl = 'http://localhost:9909';

    currentNewsSubject$ = new BehaviorSubject<New[]>([]);

    constructor(private http: HttpClient) {}

    getNews() {
        return this.http.get<New[]>(`${this.newsApiUrl}/news`).subscribe({
            next: (news) => this.currentNewsSubject$.next(news),
            error: (err) => console.error(err),
        });
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
            .delete<{
                message: string;
                news: New[];
            }>(`${this.newsApiUrl}/news/${newToDeleteId}`)
            .subscribe({
                next: (result) => this.currentNewsSubject$.next(result.news),
                error: (err) => console.error(err),
            });
    }
}
