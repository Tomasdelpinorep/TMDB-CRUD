import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompanyDetailsResponse } from '../../models/models/company-details.interface';
import { CompanyService } from '../../services/company.service';

@Component({
  selector: 'app-company-details-banner',
  templateUrl: './company-details-banner.component.html',
  styleUrls: ['./company-details-banner.component.css']
})
export class CompanyDetailsBannerComponent implements OnInit{

  route: ActivatedRoute = inject(ActivatedRoute);
  companyDetails!: CompanyDetailsResponse;
  companyId: number = 0;

  constructor(private companyService: CompanyService){
    this.companyId = Number(this.route.snapshot.params['id']);
  }

  ngOnInit(): void {
    this.companyService.getCompanyById(this.companyId).subscribe(resp =>{
      this.companyDetails = resp;
    })
  }

  getCompanyImage(){
    if (this.companyDetails.logo_path == null)
      return "https://cdn-icons-png.flaticon.com/512/5266/5266579.png";
    
    return `https://image.tmdb.org/t/p/w500/${this.companyDetails.logo_path}`;
  }
 
}
