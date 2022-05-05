import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-ice-cream-item',
  templateUrl: './ice-cream-item.component.html',
  styleUrls: ['./ice-cream-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IceCreamItemComponent implements OnInit {
  @Input() iceCream!: string[];
  @Input() capacity!: number[];

  constructor() {}

  ngOnInit(): void {}
}
