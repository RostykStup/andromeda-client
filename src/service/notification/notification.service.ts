import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';
import {GlobalConstants} from '../../common/global-constants';
import {GoodsOrderRequest} from '../../entity/order/goods-order-request';
import {PaginationRequest} from '../../entity/pagination-request';
import {GoodsOrderResponse} from '../../entity/order/goods-order-response';
import {GoodsOrderDeliveryDetailsResponse} from '../../entity/order/goods-order-delivery-details-response';
import {GoodsOrderDeliveryDetailsForShipmentRequest} from '../../entity/order/goods-order-delivery-details-for-shipment-request';
import {ConfirmGoodsOrderDeliveryRequest} from '../../entity/order/confirm/confirm-goods-order-delivery-request';
import {GoodsSellerFeedbackRequest} from '../../entity/feedback/goods-seller-feedback-request';
import {GoodsAdvertisementFeedbackRequest} from '../../entity/feedback/goods-advertisement-feedback-request';
import {PaginationResponse} from '../../entity/pagination-response';
import {GoodsAdvertisementFeedbackResponse} from '../../entity/feedback/goods-advertisement-feedback-response';
import {NotificationResponse} from '../../entity/notification/notification-response';
import {NavigationService} from '../../common/navigation.service';


@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  constructor(private httpClient: HttpClient, private navigationService: NavigationService) {
  }

  notificationURL = GlobalConstants.API_URL + 'notification';

  getNotificationPageForAccount(request: PaginationRequest): Observable<any> {
    let params = new HttpParams();
    params = params.append('page', request.page.toString());
    params = params.append('size', request.size.toString());
    return this.httpClient.get(this.notificationURL, {headers: this.navigationService.getCurrentRequestAuthorizationHeader(), params});
  }

  getNotificationPageForAccountByDate(request: PaginationRequest): Observable<any> {
    const url = this.notificationURL + '/date?date=2021-01-31';
    let params = new HttpParams();
    params = params.append('page', request.page.toString());
    params = params.append('size', request.size.toString());
    return this.httpClient.get(url, {headers: this.navigationService.getCurrentRequestAuthorizationHeader(), params});
  }

  getNotificationsCount(): Observable<number> {
    const url = this.notificationURL + '/count';
    return this.httpClient.get<number>(url, {headers: this.navigationService.getCurrentRequestAuthorizationHeader()});
  }

  getLastNotification(): Observable<NotificationResponse> {
    const url = this.notificationURL + '/last';
    return this.httpClient.get<NotificationResponse>(url, {headers: this.navigationService.getCurrentRequestAuthorizationHeader()});
  }

  makeNotificationRead(id: number): Observable<any> {
    const url = this.notificationURL + '/read?id=' + id;
    return this.httpClient.put(url, null, {headers: this.navigationService.getCurrentRequestAuthorizationHeader()});
  }
}
