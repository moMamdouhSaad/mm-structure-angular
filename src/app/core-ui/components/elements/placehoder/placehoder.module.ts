import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { PlaceholderComponent } from './placeholder/placeholder.component';

@NgModule({
  declarations: [PlaceholderComponent],
  imports: [CommonModule, NgxSkeletonLoaderModule],
  exports: [PlaceholderComponent],
})
export class PlacehoderModule {}
