import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NewsService } from '@core/services';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, HttpClientModule, CommonModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
    title = 'news';

    urlParts: string[] = [];
    routerSub: Subscription | undefined;

    constructor(
        private modalService: NgbModal,
        private router: Router,
        private newsService: NewsService
    ) {}

    public open(modal: unknown): void {
        this.modalService.open(modal);
    }

    ngOnInit(): void {
        this.getUrl();
        // Get the news from DB
        this.newsService.getNews();
    }

    private getUrl() {
        this.routerSub = this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                const url = event.urlAfterRedirects;
                this.urlParts = url.split('/');
            }
        });
    }
}
