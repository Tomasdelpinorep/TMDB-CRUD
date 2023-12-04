import { Component, Input } from '@angular/core';
import { ProductionCompany } from '../../models/models/movie-details.interface';



@Component({
  selector: 'app-company-item',
  templateUrl: './company-item.component.html',
  styleUrls: ['./company-item.component.css']
})
export class CompanyItemComponent{

  @Input() company!: ProductionCompany;

  getCompanyImage() {
    if(this.company.logo_path == null){
      return "https://cdn-icons-png.flaticon.com/512/5266/5266579.png";
    }
    return `https://image.tmdb.org/t/p/w500/${this.company.logo_path}`;
  }

}
