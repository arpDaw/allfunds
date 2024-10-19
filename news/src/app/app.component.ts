import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, RouterModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
    title = 'news';

    urlParts: string[] = [];
    routerSub: Subscription | undefined;

    constructor(
        private modalService: NgbModal,
        private router: Router
    ) {}

    public open(modal: unknown): void {
        this.modalService.open(modal);
    }

    ngOnInit(): void {
        this.getUrl();
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
