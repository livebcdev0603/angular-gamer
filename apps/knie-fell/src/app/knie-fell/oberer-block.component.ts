import { NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import {
  erlaubtBeiDreier,
  erlaubtBeiEinser,
  erlaubtBeiFuenfer,
  erlaubtBeiSechser,
  erlaubtBeiVierer,
  erlaubtBeiZweier,
} from './constants';
import { ObererBlockState } from './oberer-block';

@Component({
  selector: 'kf-oberer-block',
  templateUrl: './oberer-block.component.html',
  styleUrls: ['./styles.css'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf, ReactiveFormsModule],
})
export class ObererBlockComponent {
  readonly erlaubtBeiEinser = erlaubtBeiEinser();
  readonly erlaubtBeiZweier = erlaubtBeiZweier();
  readonly erlaubtBeiDreier = erlaubtBeiDreier();
  readonly erlaubtBeiVierer = erlaubtBeiVierer();
  readonly erlaubtBeiFuenfer = erlaubtBeiFuenfer();
  readonly erlaubtBeiSechser = erlaubtBeiSechser();

  @Input() state: ObererBlockState | null = null;
  @Input() showLabels = false;
}
