import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataciService {

  private RequestHeader() {
    const headers = new HttpHeaders({ 'Content-type': 'application/json' });
    return headers;
  }
  constructor(private httpClient: HttpClient) { }

  getConsortium(consortiumId: string) {
    return this.httpClient.get('https://api.datacite.org/providers?consortium-id=' + consortiumId , { headers: this.RequestHeader() });
  }

  getConsortiumPageNo(consortiumId: string, pageNo: number) {
    return this.httpClient.get('https://api.datacite.org/providers?consortium-id=' + consortiumId + '&page[size]=25&page[number]=' + pageNo.toString() , { headers: this.RequestHeader() });
  }

  getProviderClients(providerId: string) {
    return this.httpClient.get('https://api.datacite.org/clients?provider-id=' + providerId , { headers: this.RequestHeader() });
  }

  getProviderClientsPageNo(providerId: string, pageNo: number) {
    return this.httpClient.get('https://api.datacite.org/clients?provider-id=' + providerId + '&page[size]=25&page[number]=' + pageNo.toString() , { headers: this.RequestHeader() });
  }

  getClientDois(clientId: string) {
    return this.httpClient.get('https://api.datacite.org/dois?client_id=' + clientId , { headers: this.RequestHeader() });
  }

  getProviderTotalInfo(providerId: string) {
    return this.httpClient.get('https://api.datacite.org/clients/totals?provider-id=' + providerId, { headers: this.RequestHeader() });
  }
}
