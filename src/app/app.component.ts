import { UntypedFormBuilder } from '@angular/forms';
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
  consortiumPageNo: number = 1;
  providerPageNo: number = 1;
  totalProviderInfo: any = undefined;
  constructor(private datacitService: DataciService) {
  }

  searchConsortium() {
    console.log(this.consortiumId);
    this.datacitService.getConsortium(this.consortiumId).subscribe(res => {
      debugger;
      this.providers = res;
      this.clients = undefined;
      this.dois = undefined;
      console.log(res);
    });
  }

  consortiumNewPage() {
    console.log("new page");
    if (this.consortiumPageNo <= this.providers.meta.totalPages && this.consortiumPageNo > 0) {
      this.datacitService.getConsortiumPageNo(this.consortiumId,this.consortiumPageNo).subscribe(res => {
        debugger;
        this.providers = res;
        this.clients = undefined;
        this.dois = undefined;
        console.log(res);        
      });
    }
  }

  providerNewPage(providerId: string) {
    this.datacitService.getProviderClientsPageNo(this.selectedProviderId, this.providerPageNo).subscribe(res => {
      debugger;
      this.clients = res;      
      this.dois = undefined;
      console.log(res);
    });    
  }

  getClients(providerId: string) {    
    console.log(providerId);
    this.selectedProviderId = providerId;
    this.datacitService.getProviderClients(providerId).subscribe(res => {
      debugger;
      this.clients = res;      
      this.dois = undefined;
      console.log(res);
    } ,(error) => {} , () => {
      this.datacitService.getProviderTotalInfo(this.selectedProviderId).subscribe(res => {
        debugger;
        this.totalProviderInfo = res;
        console.log("Provider Info:");
        console.log(this.totalProviderInfo);
      })
    });
  }

  getDOIs(clientId: string) {
    console.log(clientId);
    this.selectedClientId = clientId;
    this.datacitService.getClientDois(clientId).subscribe(res => {
      debugger;
      this.dois = res;
      console.log(this.dois);
    });
    // This is a Test For Git. 1111 2222
  }

  getClientDOINumbers(id: string) {
    if (this.totalProviderInfo != undefined) {
      var item = (this.totalProviderInfo as any[]).find(c => c.id == id);
      if (item != undefined)
        return item.count;
      return 0;
    } 
  }
}
