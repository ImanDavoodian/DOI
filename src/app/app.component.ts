import { DataciService } from './dataci.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DOI';
  consortiumId: string = "";
  providers: any = undefined;
  selectedProviderId: string = "" ;
  clients: any = undefined;
  selectedClientId: string = "";
  dois: any = undefined; 

  constructor(private datacitService: DataciService) {}

  searchConsortium() {
    console.log(this.consortiumId);
    this.datacitService.getConsortium(this.consortiumId).subscribe(res => {
      this.providers = res;
      this.clients = undefined;
      this.dois = undefined;
      console.log(res);
    });
  }

  getClients(providerId: string) {
    console.log(providerId);
    this.selectedProviderId = providerId;
    this.datacitService.getProviderClients(providerId).subscribe(res => {
      this.clients = res;      
      this.dois = undefined;
      console.log(res);
    });
  }

  getDOIs(clientId: string) {
    console.log(clientId);
    this.selectedClientId = clientId;
    this.datacitService.getClientDois(clientId).subscribe(res => {
      this.dois = res;
      console.log(this.dois);
    });
  }
}
