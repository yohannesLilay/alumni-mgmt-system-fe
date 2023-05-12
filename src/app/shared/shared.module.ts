import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

/** Custom Modules */
import { IconsModule } from './icons.module';
import { MaterialModule } from './material.module';

/** Custom Components */
import { CancelDialogComponent } from './cancel-dialog/cancel-dialog.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';

@NgModule({
  declarations: [
    CancelDialogComponent,
    ConfirmDialogComponent,
    DeleteDialogComponent,
  ],
  imports: [CommonModule, IconsModule, MaterialModule, ReactiveFormsModule],
  exports: [
    CancelDialogComponent,
    ConfirmDialogComponent,
    DeleteDialogComponent,
    CommonModule,
    IconsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class SharedModule {}
