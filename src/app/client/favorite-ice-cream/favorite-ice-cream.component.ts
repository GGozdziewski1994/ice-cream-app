import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { ClientFavouriteIceCreamService } from 'src/app/shared/services/client-favourite-ice-cream/client-favourite-ice-service.service';
import { ListOptionService } from 'src/app/shared/services/lists-option/lists-option.service';

@Component({
  selector: 'app-favorite-ice-cream',
  templateUrl: './favorite-ice-cream.component.html',
  styleUrls: ['./favorite-ice-cream.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FavoriteIceCreamComponent implements OnInit {
  public capacityList$!: Observable<string[]>;
  public favoriteIceCream$!: Observable<string[]>;

  constructor(
    private listOptionService: ListOptionService,
    private clientFavouriteIceCreamService: ClientFavouriteIceCreamService
  ) {}

  ngOnInit(): void {
    this.capacityList$ = this.listOptionService.getCapacityListValue();
    this.favoriteIceCream$ =
      this.clientFavouriteIceCreamService.getFavoriteList();
  }
}
