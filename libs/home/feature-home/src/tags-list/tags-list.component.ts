import { Component, ChangeDetectionStrategy, output, input, OnInit } from '@angular/core';

@Component({
  selector: 'cdt-tags-list',
  templateUrl: './tags-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TagsListComponent implements OnInit {
  tags = input<string[]>([]);
  setListTag = output<string>();

  ngOnInit(): void {
    console.log(this.tags());
  }
}
