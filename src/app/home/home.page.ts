import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ProvinciasService} from './provincias.service';
import {ProvinciasInterface} from './provincias.interface';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  private provincias: ProvinciasInterface[];
  private filteredProvincias: ProvinciasInterface[];
  private searchInput;
  constructor(
      private provinciasService: ProvinciasService,
      private router: Router
  ) {}

  ngOnInit() {
    /**
     * TODO: Improvements => Its better perfomant if the list is loaded initially and then filtered,
     * but due to client requirements, it was done as search on demand
     */
    // this.provinciasService.findAll().subscribe((response) => {
    //   this.provincias = response.body.provincias;
    //   this.filteredProvincias = this.provincias;
    // });
  }

  navigateToProvincia(provincia) {
    this.router.navigate(['/detail'], {state: {provincia}});
  }

  filterItems(event) {
    const val = event.target.value;
    if (val && val.trim() !== '') {
      this.filteredProvincias = this.filteredProvincias.filter((item) => {
        return (item.nombre.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    }
  }

  searchProvincia(item){
    this.provinciasService.find(this.searchInput).subscribe(res => {
      this.filteredProvincias = [];
      res.body.provincias.forEach(element => {
        this.filteredProvincias.push(element)
      });
    });
  }

  clearFields(){
    this.provincias = this.filteredProvincias = null;
  }

}
