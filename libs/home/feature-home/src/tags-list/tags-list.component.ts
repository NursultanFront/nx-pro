import { NgClass } from '@angular/common';
import { Component, ChangeDetectionStrategy, output, input } from '@angular/core';

@Component({
  selector: 'cdt-tags-list',
  templateUrl: './tags-list.component.html',
  styleUrl: './tags-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgClass],
})
export class TagsListComponent {
  tags = input<string[]>([]);
  selectedTags = input<string>();
  setListTag = output<string>();
}
