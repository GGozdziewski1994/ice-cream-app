import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { ClientService } from 'src/app/shared/services/client/client.service';

@Component({
  selector: 'app-favorite-ice-cream',
  templateUrl: './favorite-ice-cream.component.html',
  styleUrls: ['./favorite-ice-cream.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FavoriteIceCreamComponent implements OnInit {
  public capacityList$!: Observable<any>;
  public favoriteIceCream$!: Observable<any>;

  constructor(private clienService: ClientService) {}

  ngOnInit(): void {
    this.capacityList$ = this.clienService.getCapacityListValue();
    this.favoriteIceCream$ = this.clienService.getFavoriteList();
  }
}
