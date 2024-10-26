import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { New } from '@core/models';
import { NewsService } from '@core/services';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-news-landing',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './news-landing.component.html',
    styleUrl: './news-landing.component.scss',
})
export class NewsLandingComponent implements OnInit {
    currentNews$ = this.newsService.currentNewsSubject$;

    currentUrl: string = this.router.url;

    constructor(
        private router: Router,
        private newsService: NewsService
    ) {}

    ngOnInit(): void {}

    getTheProperNews(newToCheck: New) {
        let displayNew = false;

        if (this.currentUrl === '/archived' && newToCheck.archivedDate) {
            displayNew = true;
        }

        if (this.currentUrl === '/' && !newToCheck.archivedDate) {
            displayNew = true;
        }

        return displayNew;
    }

    formatDate(newDate: Date | string | undefined): string | undefined {
        if (!newDate) return;
        newDate = new Date(newDate);
        return (
            newDate.getDate() +
            '/' +
            newDate.getMonth() +
            '/' +
            newDate.getFullYear()
        );
    }

    archiveNew(newToArchive: New) {
        this.newsService.archiveNew(newToArchive);
    }

    deleteNew(newToDelete: New) {
        this.newsService.deleteNew(newToDelete._id);
    }
}
