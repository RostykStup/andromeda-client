import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {NotificationService} from '../../../service/notification/notification.service';
import {PaginationRequest} from '../../../entity/pagination-request';
import {NotificationResponse} from '../../../entity/notification/notification-response';
import {ActivatedRoute, Params} from '@angular/router';
import {NavigationService} from '../../../common/navigation.service';

@Component({
  selector: 'app-notification-page',
  templateUrl: './notification-page.component.html',
  styleUrls: ['./notification-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NotificationPageComponent implements OnInit {

  constructor(private notificationService: NotificationService,
              private activatedRoute: ActivatedRoute) {
  }

  pagination = new PaginationRequest();
  totalElements = 0;
  totalPages = 0;
  notifications = new Array<NotificationResponse>();

  ngOnInit(): void {
    this.pagination.page = 0;
    this.pagination.size = 10;

    // this.activatedRoute.queryParams.subscribe((params: Params) => {
    //   if (params.page !== undefined && params.page > 0) {
    //     this.pagination.page = +params.page - 1;
    //   } else {
    //     window.open(NavigationService.getUserNotificationsUrl() + '?page=1', '_self');
    //     window.open('client/user/notifications?page=1', '_self');
      // }
      // this.reloadNotifications();
    // });
  }

  navigateToNewPage(): void {
    const url = 'client/user/notifications?page='
      + (this.pagination.page + 1);
    // +

    window.open(url, '_self');
  }

  reloadNotifications(): void {
    this.notificationService.getNotificationPageForAccount(this.pagination).subscribe(r => {
      // this.notificationService.getNotificationPageForAccountByDate(this.pagination).subscribe(r => {
      this.notifications = r.data;
      this.totalElements = r.totalElements;
      this.totalPages = r.totalPages;
      this.reloadNotificationReading();
    });
  }

  changePage($event: PaginationRequest): void {
    this.pagination = $event;
    this.navigateToNewPage();
  }

  reloadNotificationReading(): void {
    this.notifications.forEach((n) => {
      if (!n.isRead) {
        this.notificationService.makeNotificationRead(n.id).subscribe();
      }
    });
  }
}
